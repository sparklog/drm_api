# drm_api
DRM'S API


## host

```
admin = https://drmtest.sparklog.com/admin
```

```
app = https://drmtest.sparklog.com/app
```

## 目录

### APP

* [登录](#登录)
* [获取用户信息](#获取用户信息)
* [更新用户信息](#更新用户信息)
* [修改用户密码](#修改用户密码)
* [获取消息列表](#获取所有消息)
* [GET单个消息](#GET单个消息)
* [获取bugs](#获取bugs)
* [获取bug](#获取bug)
* [获取热门搜索词](#获取热门搜索词)
* [创建工单](#创建工单)
* [获取最新所在地](#获取最新所在地)
* [获取devices](#获取devices)
* [搜索设备](#搜索设备)
* [设备热门搜索词](#设备热门搜索词)
* [获取device](#获取device)
* [更新备注](#更新备注)
* [增加时间线](#增加时间线)
* [增加设备图片](#增加设备图片)
* [获取通知](#获取通知)
* [获取单个通知](#获取单个通知)
* [设置所有已读](#设置所有已读)
* [设置单个已读](#设置单个已读)
* [设置已解决工单](#设置已解决工单)
* [删除单个通知](#删除单个通知)
* [获取单个设备监控数据](#获取单个设备监控数据)
* [搜索配件](#搜索配件)
* [配件热门搜索词](#配件热门搜索词)
* [配件一级分类](#配件一级分类)
* [配件二级分类](#配件二级分类)
* [获取单个配件](#获取单个配件)
* [获取设备监控列表](#获取设备监控列表)
* [设备监控搜索](#设备监控搜索)
* [获取排量分类](#获取排量分类)
* [获取压力分类](#获取压力分类)
* [获取燃料分类](#获取燃料分类)
* [上传工单图片](#上传工单图片)
* [删除图片](#删除图片)
* [找回密码](#找回密码)
* [检查邮箱验证码](#检查邮箱验证码)
* [重置密码](#重置密码)
* [获取单个设备单项监控数据](#获取单个设备单项监控数据)

### admin

* [登录](#登录)
* [新增用户](#新增用户)
* [获取所有用户](#获取所有用户)
* [获取单个用户](#获取单个用户)
* [更新单个用户](#更新单个用户)
* [删除单个用户](#删除单个用户)
* [上传消息推送图片](#上传消息推送图片)
* [创建消息](#创建消息)
* [获取所有消息](#获取所有消息)
* [获取单个信息](#获取单个信息)
* [删除单个消息](#删除单个消息)
* [更新单个消息](#更新单个消息)
* [创建故障诊断](#创建故障诊断)
* [修改故障诊断](#修改故障诊断)
* [获取所有故障诊断](#获取所有故障诊断)
* [获取单个故障诊断](#获取单个故障诊断)
* [删除故障诊断](#删除故障诊断)
  - [故障分类-新增](#故障分类-新增)
  - [故障分类-删除](#故障分类-删除)
  - [故障分类-置顶](#故障分类-置顶)
  - [故障分类-获取所有](#故障分类-获取所有)
* [获取所有工单](#获取所有工单)
* [获取单个工单](#获取单个工单)
* [处理工单](#处理工单)
* [删除工单](#删除工单)
* [创建设备](#创建设备)
* [删除设备](#删除设备)
* [获取设备](#获取设备)
* [获取单个设备](#获取单个设备)
* [更新单个设备](#更新单个设备)
* [更新设备所在地](#更新设备所在地)
* [删除时间线](#删除时间线)
* [更新时间线](#更新时间线)
* [导出文件](#导出文件)
* [新增权限](#新增权限)
* [获取权限](#获取权限)
* [更新权限](#更新权限)
* [删除权限](#删除权限)
* [创建配件](#创建配件)
* [获取配件](#获取配件)
* [更新配件备注](#更新配件备注)
* [上传故障诊断图片](#上传故障诊断图片)
* [创建时间线分类](#创建时间线分类)
* [获取所有时间线分类](#获取所有时间线分类)
* [获取单个时间线分类](#获取单个时间线分类)
* [更新单个时间线分类](#更新单个时间线分类)
* [删除时间线分类](#删除时间线分类)
* [创建排量分类](#创建排量分类)
* [获取所有排量分类](#获取所有排量分类)
* [获取单个排量分类](#获取单个排量分类)
* [更新单个排量分类](#更新单个排量分类)
* [删除单个排量分类](#删除多个排量分类)
* [创建压力分类](#创建压力分类)
* [获取所有压力分类](#获取所有压力分类)
* [获取单个压力分类](#获取单个压力分类)
* [更新单个压力分类](#更新单个压力分类)
* [删除单个压力分类](#删除单个压力分类)
* [创建燃料分类](#创建燃料分类)
* [获取所有燃料分类](#获取所有燃料分类)
* [获取单个燃料分类](#获取单个燃料分类)
* [更新单个燃料分类](#更新单个燃料分类)
* [删除单个燃料分类](#删除单个燃料分类)
* [获取单个设备监控数据](#获取单个设备监控数据)
* [获取单个设备全部监控数据文件链接](#获取单个设备全部监控数据文件链接)
* [上传配件文件](#上传配件文件)



## App

### 登录

```
POST https://drmtest.sparklog.com/app/session
```
```
{
  email: '',
  password: ''
}
```

### 获取用户信息
```
GET https://drmtest.sparklog.com/app/user?token=${token}
```

### 更新用户信息
```
POST https://drmtest.sparklog.com/app/user/update?token=${token}
```

```
{
  name: '',
  email: '',
  phone: '',
  company_name: '',
  address: ''
}
```

### 修改用户密码
```
POST https://drmtest.sparklog.com/app/user/update/password?token=${token}
```
```
{
  password: '',
  newPass: '',
  confirmPass: ''
}
```

### 获取消息列表
```
GET https://drmtest.sparklog.com/app/news?token=${token} 
```

### GET单个消息
```
GET https://drmtest.sparklog.com/app/news/one?id=${id}&token=${token} 
```

### 获取bugs
```
GET https://drmtest.sparklog.com/app/bugs?token=${token}  
```
```
{
  type: '',   // onchange, submit, null, null 代表返回全部
  search: '' //search 为搜索内容
}
```

### 获取bug
```
GET https://drmtest.sparklog.com/app/bugs/one?id=${id}&token=${token}  
```

### 获取故障种类
```
GET https://drmtest.sparklog.com/app/bugs/cate?token=${token}  
```

### 获取热门搜索词
```
GET https://drmtest.sparklog.com/app/bugs/hots?token=${token}  
```

### 创建工单
```
POST https://drmtest.sparklog.com/app/order/new?token=${token}
```

```
{
  title: '',
  category: '',
  content: '',
  images: []
}
```

### 获取最新所在地
```
GET https://drmtest.sparklog.com/app/devices/address?token=${token}
```

### 获取devices

```
GET https://drmtest.sparklog.com/app/devices?token=${token}  
```
```
0. 分类:
  type: enum: ['cc', 'pressure', 'combustible']
  value: ''
  示例: type=pressure&value=25Mpa

1. 排序:
  createTime: ['asc', 'desc'] //升序，降序
  
2. 筛选:
  cc=''&pressure=''&combustible=''&address=''
```

### 搜索设备
```
GET https://drmtest.sparklog.com/app/devices/search?token=${token}  
```
```
{
  type: '',   // onchange, submit, null。 null代表返回全部
  search: ''  // search 为搜索内容
}
```

### 设备热门搜索词
```
GET https://drmtest.sparklog.com/app/devices/hots?token=${token}
```

### 获取device
```
GET https://drmtest.sparklog.com/app/devices/one?deviceId=${deviceId}&start=${start}&end=${end}&token=${token}  
```

### 更新备注
```
POST https://drmtest.sparklog.com/app/devices/one/remark?token=${token} 
```
```
{
  deviceId: '',
  remark: ''
}
```

### 增加时间线
```
POST https://drmtest.sparklog.com/app/devices/one/timelines?token=${token} 
```
```
{
  deviceId: '',
  line_type: '',
  line_time: '',
  line_des: ''
}
```

### 增加设备图片
```
POST https://drmtest.sparklog.com/app/devices/one/images?deviceId=${deviceId}&token=${token} 
```
```
{
  key: devices
}
```

### 获取通知
```
GET https://drmtest.sparklog.com/app/notices?&token=${token} 
```

### 获取单个通知
```
GET https://drmtest.sparklog.com/app/notices/one?id=${id}&token=${token} 
```

### 设置所有已读
```
POST https://drmtest.sparklog.com/app/notices/all/read?&token=${token} 
```

### 设置单个已读
```
POST https://drmtest.sparklog.com/app/notices/one/read?token=${token}  
```
```
{
  id: ''
}
```

### 设置已解决工单
```
POST https://drmtest.sparklog.com/app/order/solved?token=${token}
```
```
{
  id: '' //此id为orderid
}
```

### 删除单个通知
```
DELETE https://drmtest.sparklog.com/notices/:id?token=${token}
```

### 获取单个设备监控数据

number指的是设备编号

```
GET https://drmtest.sparklog.com/app/moniterdevs/number?number=${number}&token=${token}
```

### 搜索配件

type有两种： onchange, submit
search 代表搜索内容

__若没有type或search字段，则默认返回全部数据__

```
GET https://drmtest.sparklog.com/app/parts/search?type=${type}&search=${search}&token=${token}
```

### 配件热门搜索词
```
GET https://drmtest.sparklog.com/app/parts/hots?token=${token}
```

### 配件一级分类
```
GET https://drmtest.sparklog.com/app/parts/first?token=${token}
```

### 配件二级分类

name 为一级分类的内容

```
GET https://drmtest.sparklog.com/app/parts/second?name=${name}&token=${token}
```

### 获取单个配件
```
GET https://drmtest.sparklog.com/app/parts/one?id=${id}token=${token}
```

### 获取设备监控列表
```
get https://drmtest.sparklog.com/app/moniterdevs?token=${token}
```

### 设备监控搜索
```
get https://drmtest.sparklog.com/app/moniterdevs/search?search=${search}&token=${token}
```

### 获取排量分类
```
get https://drmtest.sparklog.com/app/devices/ccsort?&token=${token}
```

### 获取压力分类
```
get https://drmtest.sparklog.com/app/devices/presort?&token=${token}
```

### 获取燃料分类
```
get https://drmtest.sparklog.com/app/devices/fuelsort?&token=${token}
```

### 上传工单图片
```
post https://drmtest.sparklog.com/app/order/upload?&token=${token}
```
```
{
  key: 'order'
}
```

### 删除图片

```
POST https://drmtest.sparklog.com/app/order/delimg?&token=${token}
```
```
{
  url: String,
}
```

### 找回密码

调用该接口，会给用户邮箱发送验证码

```
POST https://drmtest.sparklog.com/app/findpass?
```
```
{
  salt: '',
  email: '',
}
```

### 检查邮箱验证码
```
POST https://drmtest.sparklog.com/app/checkcode
```
```
{
  slat: '',
  email: '',
  code: ''
}
```

成功返回
```
{
  code: 201,
  message: 'ok',
  data: true
}
```
失败返回
```
{
  code: 422,
  message: '验证码无效',
  data: false
}
```


### 重置密码

```
POST https://drmtest.sparklog.com/app/resetpass?
```
```
{
  email: '',
  pass: ''   // 密码
}
```

### 获取单个设备单项监控数据

number指的是设备编号
field指的是指标名

```
GET https://drmtest.sparklog.com/app/moniterdevs/number/field?number=${number}&field={field}&token=${token}
```



# admin

### 登录

```json
POST https://drmtest.sparklog.com/admin/session
```

```js
{
  admin: '',
  password: ''
}
```

### 新增用户

```
POST https://drmtest.sparklog.com/admin/users/new?token=${token}
```

```
{
  name: '',
  password: '',
  email: '',
  phone: '',
  company_name: '',
  address: ''
}
```

### 获取所有用户
```
GET https://drmtest.sparklog.com/admin/users?type=name&token=${token}
```

### 获取单个用户
```
GET https://drmtest.sparklog.com/admin/users/:id?token=${token}
```

### 更新单个用户
```
PUT https://drmtest.sparklog.com/admin/users/:id?token=${token}
```

### 删除单个用户
```
DELETE https://drmtest.sparklog.com/admin/users/:id?token=${token}
```

### 上传消息推送图片

```
POST https://drmtest.sparklog.com/admin/news/uploadimg?token=${token} 
```

```
{
  key: 'news'
}
```

### 创建消息

```
POST https://drmtest.sparklog.com/admin/news/new?token=${token}
```

```
{
  title: '',
  abstract: '',
  content: '',
  published: Boolean, //代表已发送还是未发送
  images: [] //通过上一条API得到
}
```

### 获取所有消息

```
GET https://drmtest.sparklog.com/admin/news/all?token=${token} 
```

### 删除单个消息

```
POST https://drmtest.sparklog.com/admin/news/delete?id=${id}&token=${token} 
```

### 更新单个消息

```
POST https://drmtest.sparklog.com/admin/news/update?id=${id}&token=${token}  
```

```
{
  title: '',
  abstract: '',
  content: '',
  published: Boolean,
  images: [] 
}
```

### 获取单个信息

```
GET https://drmtest.sparklog.com/admin/news/one?id=${id}&token=${token}
```

### 创建故障诊断

```
POST https://drmtest.sparklog.com/admin/bugs?token=${token}
```
```
{
  title: '',
  category: 'categoryId',
  content: ''
}
```

### 修改故障诊断

```
PUT https://drmtest.sparklog.com/admin/bugs/:bugId?token=${token}
```
### 获取所有故障诊断

```
GET https://drmtest.sparklog.com/admin/bugs?token=${token}
```

### 获取单个故障诊断
```
GET https://drmtest.sparklog.com/admin/bugs/:bugId?token=${token}
```

### 删除故障诊断
```
DELETE https://drmtest.sparklog.com/admin/bugs/:bugId?token=${token}
```

### 故障分类-新增
```
POST https://drmtest.sparklog.com/admin/bugs/categorys/new?token=${token}
```
```
{
  text: ''
}
```

### 故障分类-删除
```
DELETE https://drmtest.sparklog.com/admin/bugs/categorys/:categoryId?token=${token}
```

### 故障分类-置顶
```
POST https://drmtest.sparklog.com/admin/bugs/categorys/top?token=${token}
```
```
{
  categoryId: ''
}
```

### 故障分类-获取所有
```
GET https://drmtest.sparklog.com/admin/bugs/categorys?token=${token}
```





### 获取所有工单
```
GET https://drmtest.sparklog.com/admin/orders?token=${token}
```

### 获取单个工单
```
GET https://drmtest.sparklog.com/admin/orders/:orderId?token=${token}
```
### 处理工单
```
PUT https://drmtest.sparklog.com/admin/orders/:orderId?token=${token} 
```

```
{
  advice: '' //处理意见
}
```

### 删除工单
```
DELETE https://drmtest.sparklog.com/admin/orders/:orderId?token=${token} 
```

### 创建设备
```
POST https://drmtest.sparklog.com/admin/devices/new?token=${token}
```
```
  name: ''   // 设备名称
  number: '' // 设备编号
  images: [] // 设备图片
  cc: [单发生器，双发生器，三发生器，四发生器] //排量
  pressure: [25Mpa, 30Mpa, 35Mpa, 50Mpa] //压力
  combustible: [柴油，天然气，原油型]   //燃料
  description: '' //描述
  address：'' //所在地
  classify: '' //分类
  timelines: [{
    time: '',
    type: '',
    description: ''
  }],
  remark: '' //备注
```

### 上传设备图片

```
POST https://drmtest.sparklog.com/admin/devices/uploadimg?token=${token}
```

```
{
  key: device
}
```

### 获取设备
```
GET https://drmtest.sparklog.com/admin/devices?type=name&token=${token}
```

### 导出文件
```
GET https://drmtest.sparklog.com/admin/devices/excel?startTime=${startTime}&endTime=${endTime}&token=${token}
```

### 获取单个设备
```
GET https://drmtest.sparklog.com/admin/devices/deviceId?token=${token}
```

### 更新单个设备
```
PUT https://drmtest.sparklog.com/admin/devices/deviceId?token=${token}
```

### 删除设备
```
DELETE https://drmtest.sparklog.com/admin/devices/deviceId?token=${token}
```


### 更新设备所在地
```
PUT https://drmtest.sparklog.com/admin/devices/deviceId/location?token=${token}
```
```
{
  address:
}
```

### 删除时间线
```
POST https://drmtest.sparklog.com/admin/devices/deviceId/timeline/del?lineId=${lineId}&token=${token} 
```

### 更新时间线
```
PUT https://drmtest.sparklog.com/admin/devices/deviceId/timeline/update?token=${token} 
```
```
{
  lineId: '',
  line_type: '',
  line_des: '',
  line_time: '',
}
```

### 新增权限

```
POST https://drmtest.sparklog.com/admin/auths/new?token=${token}
```
```
{
  userId: '',
  deviceId: '',
  canView: Boolean,
  canMonitor: Boolean
}
```

### 获取权限
```
GET https://drmtest.sparklog.com/admin/auths?token=${token}
```

### 获取单个权限
```
GET https://drmtest.sparklog.com/admin/auths/one?authId=${authId}token=${token}
```

### 更新权限
```
POST https://drmtest.sparklog.com/admin/auth/change?authId=${authId}&token=${token}
```

### 删除权限
```
POST https://drmtest.sparklog.com/admin/auth/del?authId=${authId}&token=${token}
```

```
{
  user: '',
  device: '',
  canView: Boolean,
  canMonitor: Boolean 
}
```

### 获取配件
```
GET https://drmtest.sparklog.com/admin/parts?token=${token}
```

### 更新配件备注

```
POST https://drmtest.sparklog.com/admin/parts/remark?partId=${partId}&token=${token}
```

```
{
  deviceId:'',
  remark: ''
}
```

### 上传故障诊断图片

```
POST https://drmtest.sparklog.com/admin/bugs/uploadimg?token=${token}
```

```
{
  key: 'bugs'
}
```

### 创建时间线分类

```
POST https://drmtest.sparklog.com/admin/timelines?token=${token}
```
```
{
  text: ''
}
```

### 获取所有时间线分类
```
GET https://drmtest.sparklog.com/admin/timelines?token=${token}
```

### 获取单个时间线分类
```
GET https://drmtest.sparklog.com/admin/timelines/:id?token=${token}
```

### 更新单个时间线分类
```
PUT https://drmtest.sparklog.com/admin/timelines/:id?token=${token}
```

### 删除时间线分类
```
DELETE https://drmtest.sparklog.com/admin/timelines/:id?token=${token}
````

### 创建排量分类
```
POST https://drmtest.sparklog.com/admin/ccsorts?token=${token}
```

### 获取所有排量分类
```
GET https://drmtest.sparklog.com/admin/ccsorts?token=${token}
```

### 获取单个排量分类
```
GET https://drmtest.sparklog.com/admin/ccsorts/:id?token=${token}
```

### 更新单个排量分类
```
PUT https://drmtest.sparklog.com/admin/ccsorts/:id?token=${token}
```

### 删除单个排量分类
```
DELETE https://drmtest.sparklog.com/admin/ccsorts/:id?token=${token}
```

### 创建压力分类
```
POST https://drmtest.sparklog.com/admin/presorts?token=${token}
```

### 获取所有压力分类
```
GET https://drmtest.sparklog.com/admin/presorts?token=${token}
```

### 获取单个压力分类
```
GET https://drmtest.sparklog.com/admin/presorts/:id?token=${token}
```

### 更新单个压力分类
```
PUT https://drmtest.sparklog.com/admin/presorts/:id?token=${token}
```

### 删除单个压力分类
```
DELETE https://drmtest.sparklog.com/admin/presorts/:id?token=${token}
```

### 创建燃料分类
```
POST https://drmtest.sparklog.com/admin/fuelsorts?token=${token}
```

### 获取所有燃料分类
```
GET https://drmtest.sparklog.com/admin/fuelsorts?token=${token}
```

### 获取单个燃料分类
```
GET https://drmtest.sparklog.com/admin/fuelsorts/:id?token=${token}
```

### 更新单个燃料分类
```
PUT https://drmtest.sparklog.com/admin/fuelsorts/:id?token=${token}
```

### 删除单个燃料分类
```
DELETE https://drmtest.sparklog.com/admin/fuelsorts/:id?token=${token}
```

### 获取单个设备监控数据

该number指的是设备编号

```
GET https://drmtest.sparklog.com/admin/moniterdevs?number=${number}&token=${token}
```

### 获取单个设备全部监控数据文件链接    

该number指的是设备编号    

```
GET https://drmtest.sparklog.com/admin/moniterdevs/excel?number=${number}&token=${token}
```

### 上传配件文件

```
POST https://drmtest.sparklog.com/admin/parts/uploadfile?token=${token}
```

















