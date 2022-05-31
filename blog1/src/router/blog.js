const handleBlogRouter = (req, res) => {
  const method = req.method
  const url = req.url
  const path = url.split('?')[0]

  if (method === 'GET' && path === '/api/blog/list') {
    return {
      msg: 'this is blogList',
    }
  }
  if (method === 'GET' && path === '/api/blog/detail') {
    return {
      msg: 'this is detail',
    }
  }
  if (method === 'POST' && path === '/api/blog/new') {
    return {
      msg: 'this is new a blog',
    }
  }
  if (method === 'POST' && path === '/api/blog/del') {
    return {
      msg: 'this is delete a blog',
    }
  }
}

module.exports = handleBlogRouter
