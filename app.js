const http = require('http');
const verify = require('./verify');

const port = 7977;

const server = http.createServer((req, res) => {
    console.log("request method: " + req.method);
    console.log("url: " + req.url);
    const params = new URL(req.url, 'https://example.org/').searchParams;
    if (params.get("id") === verify.id && params.get('password') === verify.password) {
        const opt = params.get("opt");
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.write("your opt: " + opt + "\n");
        res.end('Hello World\n');
    } else {
        res.statusCode = 401;
        res.end();
    }
});

server.listen(port, () => {
    console.log('Server is running at port: ' + port);
})