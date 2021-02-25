const express = require('express');
const bodyParser = require('body-parser');
const Nexmo = require('nexmo');
const socketio = require('socket.io');

const nexmo = new Nexmo({
    apiKey: '13091098',
    apiSecret: 'c3JDVJwYNEQLdnpG'
}, {debug: true});

const app = express();

app.use(express.static(__dirname + '/public/welch_development'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + 'public/welch_development/index.html');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req, res) => {
    const number = req.body.number;
    const text = req.body.text;
    
    const numbers = [];
    numbers.push(number);
        numbers.forEach(element => {
            nexmo.message.sendSms(
            '18772016887', '1' + element, text, { type: 'unicode' }, 
            (err, responseData) => {
                if (err) {
                    console.log(err);
                } else {
                    io.emit('smsStatus', {
                        to: responseData.messages[0]['to'],
                        status: responseData.messages[0]['status']
                    });
                }
            }
        );
    })
});

// const port = 8080;
const port = 3000;

const server = app.listen(port, () => console.log('Server started on port ' + port));

const io = socketio(server);
io.on('connection', (socket) => {
    console.log('Connected');
    io.on('disconnect', () => {
        console.log('Disconnected');
    })
})


