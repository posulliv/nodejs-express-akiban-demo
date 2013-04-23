
var path = require('path')
  , rootPath = path.normalize(__dirname + '/..')
  , templatePath = path.normalize(__dirname + '/../app/mailer/templates')
  , notifier = {
      APN: false,
      email: false, // true
      actions: ['comment'],
      tplPath: templatePath,
      postmarkKey: 'POSTMARK_KEY',
      parseAppId: 'PARSE_APP_ID',
      parseApiKey: 'PARSE_MASTER_KEY'
    }

module.exports = {
  development: {
    db: 'mongodb://localhost/noobjs_dev',
    akiban: 'https://d8cfb154_6263_489f_9f34_e5b96b42ecdf:95731f320b789fbaf5e6@db1.akiban.com:8091/v1',
    akibandb: 'postgres://d8cfb154_6263_489f_9f34_e5b96b42ecdf:95731f320b789fbaf5e6@db1.akiban.com:15432/d8cfb154_6263_489f_9f34_e5b96b42ecdf',
    root: rootPath,
    notifier: notifier,
    app: {
      name: 'Nodejs Express Akiban Demo'
    },
  },
  test: {
    db: 'mongodb://localhost/noobjs_test',
    root: rootPath,
    notifier: notifier,
    app: {
      name: 'Nodejs Express Akiban Demo'
    },
  },
  production: {}
}
