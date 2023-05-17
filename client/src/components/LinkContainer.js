import { useState } from 'react'
import Table from './Table'
import Form from './Form';

const LinkContainer = (props) => {

  const [links, setLinks]= useState([])

  const postLink = async(newLink)=>{
    // let testLink = {
    //   name: 'Test 9/9/9999',
    //   URL: 'test.com',
    // }

    try{
      let response = await fetch('/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newLink),
      })
      console.log(response)

      let message = response.text()
      console.log(message)
    }catch (error){
      console.log(error)
    }
  }

  const handleRemove = (index) => {
    /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
  }

  const handleSubmit = (favLink) => {
    /*
            TODO - Create logic to set state and add new favLink to favLinks array in state
        */
      setLinks([...links, favLink]) 
      // save data to Postgres
      postLink(favLink)
  }

  return (
    <div className="container">
      <h1>My Favorite Links</h1>
      <p>Add a new url with a name and link to the table.</p>
      {/*TODO - Add Table Component */}
        <Table linkData={links} removeLink={handleRemove}/>
      <br />

      <h3>Add New</h3>
      {/*TODO - Add Form Component */}
      <Form notifyParent={handleSubmit}/>
    </div>
  )
}

export default LinkContainer

//getlinks loop while id [some truth value about id], repeat making table until end of array.length
//while x< getlinks.length{
//  
//  loop handleChange targeting prop.name, prop.url
// }