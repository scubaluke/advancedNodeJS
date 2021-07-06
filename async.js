const https = require('https')

const start = Date.now()

function doRequest() {
    try {
        https.request('https://www.google.com', (res) =>  {
        res.on('data', () => {})
        res.on('end', () => {
            console.log(Date.now() - start);
        })
    }).end()
    } catch (error) {
    
        console.error(error);
    }
}
doRequest()
doRequest()
doRequest()
doRequest()
doRequest()
doRequest()
doRequest()
doRequest()
doRequest()
doRequest()