var express = require('express')
var app = express()

app.use(express.json())

app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.post('/login', function(req, res) {
  console.log('req.body', req.body)
  const { username, password } = req.body
  if (username === 'test' && password === '123456') {
    res.json({
      username,
      token: 'rx237482jjqqa'
    })
  } else {
    res.status(401).send('Authentication failed')
  }
})

app.post('/logout', function(req, res) {
  const { token } = req.body
  if (token === 'rx237482jjqqa') {
    res.json({
      message: 'logout success'
    })
  } else {
    res.status(401).send('Authentication failed')
  }
})

app.listen(3889, function() {
  console.log('Example app listening on port 3889!')
})
