import moment from 'moment'
import http from 'http'
import config from './config.json'

const server = http.createServer((req, res) => {
    console.log(req.url)
    console.log("client IP: " + req.socket.remoteAddress)
    const params = new URL(req.url as string, 'https://example.org/').searchParams
    if (params.get("id") === config.api_verify.id && params.get('password') === config.api_verify.password) {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')

        switch (params.get("opt")) {
            case "timestamp":
                const timestamp = moment().format("X")
                res.write(timestamp)
                break
            case "num":
                res.write("20")
                break
            case "message":
                res.write("Surprise mother f**ker!!!")
                break
            default:
                res.write("undefined option")
        }
        res.end()
    } else {
        res.statusCode = 401
        res.end()
    }
})

server.listen(config.server.port, () => {
    console.log('Server is running at port: ' + config.server.port)
})
