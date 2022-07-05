var express = require('express')
var BodyParser = require('body-parser')


const bodyParser = require('body-parser')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

var messages = [{
    name: "Mah",
    message: "Business"
}]
app.get('/messages',(req,res)=>{
    res.send(messages)
})
app.post('/messages', (req,res)=>{
    io.emit('message',req.body)
    messages.push(req.body)
    console.log(messages)
    res.sendStatus(200)
})
io.on('connection',()=>{
    console.log('connected')
})
server= http.listen(3000,()=>{
    console.log("port is ", server.address().port )
})