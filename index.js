const cluster = require('cluster');

// is the file being executed in master mode? 
if (cluster.isMaster) {
    // cause index.js to be executed again in child mode
    cluster.fork()
    cluster.fork()
    cluster.fork()
    cluster.fork()

} else {
    // child, act like a server and nothing else
    const express  = require('express')
    const  app = express() 
    function doWork(duration) {
        const start = Date.now()
        while (Date.now() - start < duration) {}
    }

    app.get('/', (req, res) => {
        doWork(5000)
        res.send('HI there')
    })
    app.get('/fast', (req, res) =>  {
        res.send('this was fast')
    })

    app.listen(3000)
}