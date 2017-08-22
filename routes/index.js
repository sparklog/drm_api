
const Router = require('koa-router')
const { Admin, App } = require('../controllers')

const home = require('./home')
const verifyToken = require('../utils/verifyToken')

const adminLogin = require('./adminLogin')
const userLogin = require('./userLogin')

const adminUser = require('./admin/adminUser')

const router = new Router()

router.get('/', home)
router.post('/admin/session', adminLogin)
router.post('/app/session', userLogin)

router.use('*', verifyToken)

router.use('/admin/users', adminUser.routes(), adminUser.allowedMethods())

router.post('/admin/news/uploadimg', Admin.uploadImgWithNews)
router.post('/admin/news/new', Admin.createNew)
router.get('/admin/news/all', Admin.getNews)
router.get('/admin/news/one', Admin.getNewsById)
router.post('/admin/news/delete', Admin.deleteNew)
router.post('/admin/news/update', Admin.updateNew)

//bugs-category
router.post('/admin/bugs/categorys/new', Admin.createBugCate)
router.get('/admin/bugs/categorys', Admin.getBugCates)
router.post('/admin/bugs/categorys/top', Admin.topBugCates)
router.param('categoryId', function(id, ctx, next) {
  ctx.categoryId = id;
  if(!ctx.categoryId) return ctx.status = 404;
  return next()
})
.delete('/admin/bugs/categorys/:categoryId', Admin.deleteBugCate)

//bugs
router.get('/admin/bugs', Admin.getBugs)
router.post('/admin/bugs', Admin.createBug)
router.post('/admin/bugs/uploadimg', Admin.uploadImgWithBug)
router.param('bugId', function(id, ctx, next) {
  ctx.bugId = id
  if(!ctx.bugId) return ctx.status = 404;
  return next()
})
.get('/admin/bugs/:bugId', Admin.getBug)
.put('/admin/bugs/:bugId', Admin.updateBug)
.delete('/admin/bugs/:bugId', Admin.deleteBug)


//orders
router.get('/admin/orders', Admin.getOrders)
router.param('orderId', function(id, ctx, next) {
  ctx.orderId = id
  if(!ctx.orderId) return ctx.status = 404
  return next()
})
.get('/admin/orders/:orderId', Admin.getOrder)
.put('/admin/orders/:orderId', Admin.handleOrder)
.delete('/admin/orders/:orderId', Admin.deleteOrder)


//device
router.post('/admin/devices/uploadimg', Admin.uploadImgWithDevice)
router.post('/admin/devices/new', Admin.createDevice)
router.get('/admin/devices/excel', Admin.getExcel)
router.get('/admin/devices', Admin.getDevices)
router.param('deviceId', function(id, ctx, next) {
  ctx.deviceId = id
  if(!ctx.deviceId) return ctx.status = 404
  return next()
})
.get('/admin/devices/:deviceId', Admin.getDevice)
.put('/admin/devices/:deviceId', Admin.updateDevice)
.delete('/admin/devices/:deviceId', Admin.deleteDevice)
.put('/admin/devices/:deviceId/location', Admin.updateDeviceLoaction)
.post('/admin/devices/:deviceId/timeline/del', Admin.deleteTimeLine)
.put('/admin/devices/:deviceId/timeline/update', Admin.updateTimeLine)


//auth
router.post('/admin/auths/new', Admin.addAuth)
router.get('/admin/auths', Admin.getAuths)
router.get('/admin/auths/one', Admin.getAuth)
router.post('/admin/auth/change', Admin.updateAuth)
router.post('/admin/auth/del', Admin.deleteAuth)

//part
router.get('/admin/parts', Admin.getParts)
router.post('/admin/parts/remark', Admin.setPartRemark)

router.get('/app', App.Index)
router.get('/app/user', App.getUserInfo)
router.post('/app/user/update', App.UpdateUser)
router.post('/app/user/update/password', App.UpdateUserPassword)

//news
router.get('/app/news', App.getNews)
router.get('/app/news/one', App.getNewsById)


//bugs
router.get('/app/bugs', App.getBugs)
router.get('/app/bugs/one', App.getBug)
router.get('/app/bugs/hots', App.getHots)
router.get('/app/bugs/cate', App.getBugsCate)


//orders
router.post('/app/order/new', App.createOrder)
router.get('/app/order/all', App.getOrders)

//devices
router.get('/app/devices/address' , App.getLastLocation)
router.get('/app/devices', App.getDevices)
router.get('/app/devices/search', App.searchDevice)
router.get('/app/devices/one', App.getDevice)
router.get('/app/devices/hots', App.getDeviceHots)

router.post('/app/devices/one/remark', App.updateDeviceRemark)
router.post('/app/devices/one/timelines', App.addDeviceTimeline)
router.post('/app/devices/one/images', App.addDeviceImages)

//notices
router.get('/app/notices', App.getNotices)
router.get('/app/notices/one', App.getOneNotice)
router.post('/app/notices/all/read', App.setAllRead)
router.post('/app/notices/one/read', App.setOneRead)

router.post('/app/order/solved', App.setOrderSolved)

module.exports = router





