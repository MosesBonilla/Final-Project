const express = require('express')
const db = require('./queries') //a relative path
const path = require('path')
const app = express()

const PORT = 9001

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true} ))

//host react app as static files
app.use(express.static(path.resolve(__dirname, '../client/build')))

//routes=METHODS
app.get('/', (req, res) =>{
    //more coming soon
    res.sendFile(path.resolve(__dirname, '../client/build','index.html'))
})

// app.get('/test', (req,res)=>{
    
// })



//C.R.U.D
//C.REATE
//R.EAD
//U.PDATE
//D.ELETE

app.get('/links', db.getLinks)
app.post('/new', db.createLink)


//Four routes/methods you want to create for a client
//in order to interact with the database




//starting express on PORT
app.listen(PORT, () => {
    console.log(`Hey, I'm running on port ${PORT}`)
})