
import { Pool, Client } from 'pg'
const connectionString = 'postgres://admin:V7fiAh3K0PlxWLBeK8kzpZuhsMkYn4Rm@dpg-ci7no5h8g3nfuca8atpg-a/attendant'
 
const pool = new Pool({
  connectionString,
})
 
await pool.query('SELECT NOW()')
await pool.end()
 
const client = new Client({
  connectionString,
})
 
await client.connect()
 
await client.query('SELECT NOW()')
 
await client.end()

