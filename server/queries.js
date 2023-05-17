//connect to postgreSQL using the node-postgres package

const { KeyCard } = require('./password')
const POOL = require('pg').Pool

const pool = new POOL({
    user: 'me',
    host: 'localhost',
    database: 'favlinks',
    password: KeyCard,
    port: 5432

    //environment variable, something limited to just your local area
})


//create data to db
const createLink = (req, res) =>{
    const name =req.body.name
    const URL =req.body.URL

    pool.query('INSERT INTO links (name, URL) VALUES ($1, $2)',
        [name, URL],
        (error, results) =>{
            if (error){
                throw error
            }
            res.status(201).send(`Link added with ID: ${results.insertID}`)
        }
    )

}
//request data from db  
const getLinks =(req, res) =>{ //next step
    pool.query('SELECT * FROM links ORDER BY id ASC', (error, result)=>{
        if(error){
            throw error;
        }
        res.status(200).json(result.rows)
    })
} //double, no this is suppsoed- this gets information, this is for making the list. just needs to be inserted, probably in LC


//update link in db


//delete link in db


module.exports ={ //this exports methods within the js
    getLinks,
    createLink
}
