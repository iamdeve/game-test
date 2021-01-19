const http = require('http');
const app = require('./app');
const port = process.env.PORT || 8001;
const server = http.createServer(app);

server.listen(port, '0.0.0.0', () => {
    console.log(`server started at port : ${port} {Tier-list Backend}`)
})