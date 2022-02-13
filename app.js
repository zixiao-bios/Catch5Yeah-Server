const http = require('http');
const moment = require('moment')
const verify = require('./verify');

const port = 7977;

const server = http.createServer((req, res) => {
    console.log(req.url);
    const params = new URL(req.url, 'https://example.org/').searchParams;
    if (params.get("id") === verify.id && params.get('password') === verify.password) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');

        switch (params.get("opt")) {
            case "timestamp":
                const timestamp = moment().format("X");
                res.write(timestamp);
                break;
            case "num":
                res.write(5);
                break;
            case "message":
                res.write("Surprise mother f**ker!!!");
                break;
            default:
                res.write("undefined option");
        }
        res.end();
    } else {
        res.statusCode = 401;
        res.end();
    }
});

server.listen(port, () => {
    console.log('Server is running at port: ' + port);
})