const express = require('express')

const app = express()

const db = require('./queries') //a relative path
const path = require('path')

const PORT = 9001

//middleware

//host react app as static files
app.use(express.static(path.resolve(__dirname, '../client/build')))

//routes=METHODS
app.get('/', (req, res) =>{
    //more coming soon
    res.sendFile(path.resolve(__dirname, '../client/build','index.html'))
})

app.get('/test', (req,res)=>{
    
})



//C.R.U.D
//C.REATE
//R.READ
app.get('/links', db.getLinks)
//U.PDATE
//D.ELETE
//Four routes/methods you want to create for a client
//in order to interact with the database




//starting express on PORT
app.listen(PORT, () => {
    console.log(`Hey, I'm running on port ${PORT}`)
})