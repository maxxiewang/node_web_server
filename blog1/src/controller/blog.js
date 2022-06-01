const getList = (author, keyword) => {
  // 先返回正确格式的假数据
  return [
    {
      id: 1,
      titel: 'titleA',
      content: '内容....',
      createTime: 131313131312,
      author: 'zhangsan',
    },
    {
      id: 2,
      titel: 'title2',
      content: '内容....',
      createTime: 131313131312,
      author: 'zhangsan',
    },
  ]
}

const getDetail = (id) => {
  return {
    id: id ? id : 1,
    titel: 'titleA',
    content: '内容....',
    createTime: 131313131312,
    author: 'zhangsan',
  }
}

const newBlog = (blogData = {}) => {
  return {
    id: blogData.id ? blogData.id : 22,
    author: blogData.author ? blogData.author : 'luoxiang',
    content: blogData.content ? blogData.content : '......ddd...',
  }
}

const deleteBlog = (id) => {
  return true
}

module.exports = {
  getDetail,
  getList,
  newBlog,
  deleteBlog,
}
