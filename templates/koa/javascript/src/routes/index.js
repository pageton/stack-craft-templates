const Router = require('@koa/router')

const router = new Router()

router.get('/', (ctx) => {
  ctx.body = { message: 'Welcome to the API' }
})

router.get('/health', (ctx) => {
  ctx.body = { status: 'OK' }
})

module.exports = router
