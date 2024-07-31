import { FastifyInstance, FastifyPluginOptions } from 'fastify'

const routes = async (fastify: FastifyInstance, options: FastifyPluginOptions) => {
  fastify.get('/', async (request, reply) => {
    return { message: 'Welcome to the API' }
  })

  fastify.get('/health', async (request, reply) => {
    return { status: 'OK' }
  })
}

export default routes
