import fastify from 'fastify'
import { Client } from 'discord.js'

const app = fastify()
const client = new Client()
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 80

app.get('/stats', async (request, reply) => {
  return {
    users: client.users.size,
    guilds: client.guilds.size
  }
})

client.login(process.env.TOKEN)
  .then(() => {
    console.log('Discord bot logged in as', client.user.username)
    return app.listen(port)
  })
  .then(() => {
    console.log('Listening on port', port)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
