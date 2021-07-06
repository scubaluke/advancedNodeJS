process.env.UV_THREADPOOL_SIZE = 1


const { Worker } = require('worker_threads')
const crypto = require('crypto');
// is the file being executed in master mode? 

// child, act like a server and nothing else
const express  = require('express')
const  app = express() 

app.get('/', (req, res) => {
   const worker = new Worker(function() {
    this.onmessage = function() {
        let counter  = 0
        while (counter < 1e9) {
            counter++
        }

        postMessage(counter)
    }

   })

   worker.on('message') = function (myCounter) {
    console.log(myCounter);
   }
   worker.postMessage()

})

app.get('/fast', (req, res) =>  {
    res.send('this was fast')
})

app.listen(3001)
