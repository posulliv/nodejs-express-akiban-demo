
var path = require('path')
  , rootPath = path.normalize(__dirname + '/..')

module.exports = {
  development: {
    akiban: 'https://9f7205d9_9702_47ac_ac3e_dd780c7233ee:f6cb815a727d280798ef@db1.akiban.com:8091/v1',
    akibandb: {
      host: 'db1.akiban.com',
      port: 15432,
      username: '9f7205d9_9702_47ac_ac3e_dd780c7233ee',
      password: 'f6cb815a727d280798ef',
      database: '9f7205d9_9702_47ac_ac3e_dd780c7233ee'
    },
    root: rootPath,
    app: {
      name: 'Nodejs Express Akiban Demo'
    },
  },
  test: {
  },
  production: {}
}
