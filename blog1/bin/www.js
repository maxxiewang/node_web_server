//! 全是和server技术有关系的
const http = require('http')

const PORT = 8000

const serverHandle = require('../app')

const server = http.createServer(serverHandle)

server.listen(PORT)
