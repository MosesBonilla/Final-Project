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

//request data from db  
const getLinks =(req, res) =>{
    pool.query('SELECT * FROM links ORDER BY id ASC', (error, result)=>{
        if(error){
            throw error;
        }
        res.status(200).json(result.rows)
    })
}

//update link in db

//delete link in db


module.exports ={ //this exports methods within the js
    getLinks,

}
