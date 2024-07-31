async function routes(fastify, options) {
  fastify.get('/', async (request, reply) => {
    return { message: 'Welcome to the API' }
  })

  fastify.get('/health', async (request, reply) => {
    return { status: 'OK' }
  })
}

module.exports = routes
