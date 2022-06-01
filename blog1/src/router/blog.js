const {
  getList,
  getDetail,
  newBlog,
  deleteBlog,
} = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleBlogRouter = (req, res) => {
  const method = req.method

  if (method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author || ''
    const keyword = req.query.keyword || ''
    const listData = getList(author, keyword)
    return new SuccessModel(listData)
  }
  if (method === 'GET' && req.path === '/api/blog/detail') {
    const id = req.query.id
    const data = getDetail(id)
    return new SuccessModel(data)
  }

  if (method === 'POST' && req.path === '/api/blog/new') {
    const data = newBlog(req.body)
    return new SuccessModel(data)
  }
  if (method === 'POST' && req.path === '/api/blog/del') {
    const res = deleteBlog(req.body.id)
    if (res) {
      return new SuccessModel(`${req.body.id}删除成功`)
    } else {
      return new ErrorModel('删除失败')
    }
  }
}

module.exports = handleBlogRouter
