import Elysia from 'elysia'

export const app = new Elysia()
  .get('', () => {
    return 'Hello World'
  })
  .get('/list', () => {
    return []
  })

app.listen({
  hostname: process.env.HOSTNAME ?? '0.0.0.0',
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
})

console.log(`Server listens at ${app.server?.hostname}:${app.server?.port}`)
