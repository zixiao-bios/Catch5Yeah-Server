const http = require('http');

const port = 7977;

const server = http.createServer((req, res) => {
    console.log("request method: " + req.method);
    console.log("url: " + req.url);
    const myURL = new URL(req.url, 'https://example.org/');
    const param = myURL.searchParams.get("opt");

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    res.write("your opt: " + param + "\n");
    res.end('Hello World\n');
});

server.listen(port, () => {
    console.log('Server is running at port: ' + port);
})