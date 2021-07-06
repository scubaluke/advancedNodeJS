process.env.UV_THREADPOOL_SIZE = 1

const cluster = require('cluster');
const crypto = require('crypto');
// is the file being executed in master mode? 

// child, act like a server and nothing else
const express  = require('express')
const  app = express() 

app.get('/', (req, res) => {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () =>  {
        res.send('HI there')

        })
})
app.get('/fast', (req, res) =>  {
    res.send('this was fast')
})

app.listen(3000)
