import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'
import { v4 as uuidv4 } from 'uuid'

const uri = process.env.MONGO_URL
const dbName = process.env.DB_NAME || 'hexiware'

let cachedClient = null
async function getDb() {
  if (cachedClient) return cachedClient.db(dbName)
  const client = new MongoClient(uri)
  await client.connect()
  cachedClient = client
  return client.db(dbName)
}

function ok(data, status = 200) {
  return NextResponse.json(data, { status })
}

export async function GET(req, { params }) {
  const path = (params?.path || []).join('/')
  try {
    if (path === '' || path === 'health') {
      return ok({ status: 'ok', service: 'hexiware-api', time: new Date().toISOString() })
    }
    if (path === 'contacts') {
      const db = await getDb()
      const items = await db.collection('contacts').find({}).sort({ createdAt: -1 }).limit(100).toArray()
      return ok({ items })
    }
    return ok({ error: 'Not Found' }, 404)
  } catch (e) {
    return ok({ error: e.message }, 500)
  }
}

export async function POST(req, { params }) {
  const path = (params?.path || []).join('/')
  try {
    const body = await req.json().catch(() => ({}))
    if (path === 'contact') {
      const db = await getDb()
      const doc = {
        id: uuidv4(),
        name: body.name || '',
        email: body.email || '',
        company: body.company || '',
        message: body.message || '',
        createdAt: new Date().toISOString(),
      }
      if (!doc.name || !doc.email || !doc.message) {
        return ok({ error: 'name, email and message are required' }, 400)
      }
      await db.collection('contacts').insertOne(doc)
      return ok({ success: true, id: doc.id })
    }
    return ok({ error: 'Not Found' }, 404)
  } catch (e) {
    return ok({ error: e.message }, 500)
  }
}
