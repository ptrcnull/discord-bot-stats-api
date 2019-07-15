import fastify from 'fastify'
import { Client } from 'discord.js'

const app = fastify()
const client = new Client()

app.get('/stats', async (request, reply) => {
  return {
    users: client.users.size,
    guilds: client.guilds.size
  }
})

client.login(process.env.TOKEN)
  .then(() => {
    return app.listen(process.env.PORT ? parseInt(process.env.PORT, 10) : 80)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
