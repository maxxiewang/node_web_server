const http = require('http')
const querystring = require('querystring')

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let postData = ''
    //! 是一种数据流stream的方式，每次来data都会触发这个data事件（监听）
    req.on('data', (chunk) => {
      postData += chunk.toString()
    })
    req.on('end', () => {
      console.log('--postData--', postData)
      res.end('hello world', postData)
    })
  } else {
    const url = req.url
    req.query = querystring.parse(url.split('?')[1])
    res.writeHead(200, { 'content-type': 'text/html' })
    res.end(JSON.stringify(req.query))
  }
})
server.listen(3000, () => {
  console.log('listening on 3000 port')
})
