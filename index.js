const express = require('express')
const app = express();
const https = require('https')
app.use('/', express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended : true }))
app.use(express.json())
app.get('/',(req,res) => {

    res.sendfile('index.html')
})
app.get('/fetch',(req,res) => {



https.get('https://api.wazirx.com/api/v2/tickers', (resp) => {
    let data = '';
  
    // A chunk of data has been received.
    resp.on('data', (chunk) => {
      data += chunk;
    });
  
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      res.send(JSON.parse(data));
    });
  
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
  

  
    
})
let port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`listening on http://localhost:${port}`)
})