var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var urlRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Bitly API used in here
app.use('/url', urlRouter);




//  Used a Server sent Events from server to client on DB entry
app.get('/dbEntry',(req,res)=>{
    sendResponseToClient();
    res.send();
})

const users = [];
const sendResponseToClient = () => {
    users.forEach(user => user.res.write(`data: Data saved\n\n`))
}


app.get('/event', function(req, res) {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive'
    })

    let user = {
        id:Math.random(),
        res
    }
    users.push(user);
  })


module.exports = app;
