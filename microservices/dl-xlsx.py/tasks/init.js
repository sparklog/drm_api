const fs = require('fs')
const { arr } = require('../../../utils/dic')
const captions = arr.map(_ => _.quotaName)
const dataKeys = arr.map(_ => Object.keys(_)[0])

fs.writeFileSync(`${__dirname}/../data.json`, JSON.stringify({
  captions: ['设备编号', '时间戳'].concat(captions),
  data_keys: dataKeys
}))
