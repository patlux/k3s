import Elysia, { t } from 'elysia'
import { sql } from 'bun'

console.log({ DATABASE_URL: process.env.DATABASE_URL })

await sql`
CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT  CURRENT_TIMESTAMP
);
`

export const app = new Elysia()
  .get('', () => {
    return 'Hello World 6'
  })
  .get('/health', async () => {
    console.log(`>> /health`)
    await sql`SELECT * FROM users;`
    return { ok: true }
  })
  .get('/users', async () => {
    const result = await sql`SELECT * FROM users;`
    console.log(result)
    return new Response(JSON.stringify(result), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  })
  .post(
    '/users',
    async ({ body }) => {
      const result =
        await sql`INSERT INTO users (first_name, last_name) VALUES (${body.firstName}, ${body.lastName});`
      console.log(`insert result`, result)
      return { ok: true }
    },
    {
      body: t.Object({
        firstName: t.String(),
        lastName: t.String(),
      }),
    },
  )
  .get('/users/:userId', async ({ params }) => {
    const result =
      await sql`SELECT * FROM users WHERE id = ${params.userId} LIMIT 1;`
    console.log(`get user result`, result)
    return new Response(JSON.stringify(result), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  })
  .delete('/users/:userId', async ({ params }) => {
    const result = await sql`DELETE FROM users WHERE id = ${params.userId};`
    console.log(`delete result`, result)
    return { ok: true }
  })

app.listen({
  hostname: process.env.HOSTNAME ?? '0.0.0.0',
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
})

console.log(`Server listens at ${app.server?.hostname}:${app.server?.port}`)
