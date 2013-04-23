# Nodejs Express Akiban Demo

This is a demo node.js blog application where users can create an
article, delete an article, and add comments on the article.

## Install

```sh
  $ git clone git://github.com/posulliv/nodejs-express-akiban-demo.git
  $ cd nodejs-express-akiban-demo
  $ npm install
  $ cp config/config.example.js config/config.js
  $ npm start
```

**NOTE:** Do not forget to update your facebook, twitter, and github
`APP_ID` and `APP_SECRET` in `config/config.js`. Also, update the akiban
section in `config/config.js` to point to your deployment.

Then visit [http://localhost:3000/](http://localhost:3000/)

## Directory structure
```
-app/
  |__controllers/
  |__models/
  |__mailer/
  |__views/
-config/
  |__routes.js
  |__config.js
  |__passport.js (auth config)
  |__express.js (express.js configs)
  |__middlewares/ (custom middlewares)
-public/
```

## License

(The MIT License)

Copyright (c) 2012 Madhusudhan Srinivasa < [madhums8@gmail.com](mailto:madhums8@gmail.com) >

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
