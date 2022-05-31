// app.js主要负责业务，解析url，query等
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')
const serverHandle = (req, res) => {
  res.setHeader('Content-type', 'application/json')
  // 处理blog路由
  const blogData = handleBlogRouter(req, res)
  if (blogData) {
    res.end(JSON.stringify(blogData))
    return
  }

  const userData = handleUserRouter(req, res)
  if (userData) {
    res.end(JSON.stringify(userData))
    return
  }
  // 未命中路由，404
  res.writeHead(404, { 'Content-type': 'text/plain' })
  res.write('Ooops, 404')
  res.end()
}

module.exports = serverHandle

// process.env.NODE_ENV
