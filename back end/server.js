const express = require('express')

const app = express()

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Origin-Method', '*')
    res.header('Access-Control-Allow-Headers', '*')
    if(req.method != 'POST') return next()
    let body = ''
    req.on('data', (chunk) => {
        body+=chunk
    })
    req.on('end', () => {
      req.body=JSON.parse(body)
      next()
    })
    
})

app.post('/joke', (req, res)=>{

    console.log(req.body)
    res.sendStatus(200)
})


app.listen(3002, ()=>console.log('Listening on 3002'))