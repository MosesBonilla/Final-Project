import { useState, useEffect } from 'react'
import Table from './Table'
import Form from './Form';

const LinkContainer = (props) => {

  const [links, setLinks]= useState(null)
  
  

  const fetchLinks= async()=>{
    // fetches data from db for tbale
    try{
      let response = await fetch('/links')
      console.log(response)
      let data = await response.json()
      setLinks(data)
      console.log(data)
    }catch (error){
      console.log(error)
    }
  }
  
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

      let message = await response.text()
      console.log(message)
    }catch (error){
      console.log(error)
    }
  }

  useEffect(()=>{
    //do something
    if(links == null){
      fetchLinks()
    }
    //setLinks(data)

  }, ["when these values change"])



  const handleRemove = (index) => {
    /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
  }

  const handleSubmit = (favLink) => {
    /*
            TODO - Create logic to set state and add new favLink to favLinks array in state
        */
 //     setLinks([...links, favLink]) //updates local list
      // save data to Postgres
      postLink(favLink) //updates/saves to db

      //pulling latest data from postgres
      fetchLinks()
  }

  

  return (
    <div className="container">
      <h1>My Favorite Links</h1>
      <p>Add a new url with a name and link to the table.</p>
      {/*TODO - Add Table Component */}
        <Table linkData={links} removeLink={handleRemove}/>
       
       
        {/* while (let x=0; x != getLinks.index+1; x++){
    
    console.log(x)
    //handlechange(getLinks.URL, getLinks.name)
    
    } */}
      <br />

      <h3>Add New</h3>
      {/*TODO - Add Form Component */}
      <Form notifyParent={handleSubmit}/>
    </div>
  )
}

export default LinkContainer

/*getlinks loop while id [some truth value about id], repeat making table until end of array.length
  while x< getlinks.length{
  
  loop handleChange targeting prop.name, prop.url
conflict: can't just use getlinks.length, as getlinks isn't an array.
i could focus the index getLinks.index?
can use .index
getlinks.index
while x<=getlinks.index{
  handlechange(getlinks.URL, getlinks.name)}

  have to change destination, can't be just url/name,
  has to follow... prop?
  link new information to notifyParent?
  no use setlinks, because that command set takes in information(?)

  
}
while x<=getlinks.index{
  setLinks(getlinks.name, getlinks.url)
}

something like that...

*/ 

