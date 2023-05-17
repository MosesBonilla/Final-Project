import { useState, useEffect } from 'react'
import Form from './Form';
import Table from './Table';

const LinkContainer = (props) => {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState('')
  const [links , setLink] = useState('')


  const postLink = async(newLink) => {
    // let testLink = {
    //   name: "Test",
    //   URL: "test.com"
    // }
    
    /*methods for crud
    method to read, write, delete, change
    edit button changes 

    add funcctionality for submit that submits information from the website to db
    button to call for a delete on specified ID on db list
    function to display everything already existing on the DB
  */

    try {
      let response = await fetch('/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newLink)
      })
      console.log(response)
      let message = response.text()
      console.log(message)
    }catch (error) {
      console.log(error)
    }

  }

 useEffect (()=>{
   // postLink()
  }, [])


  const handleRemove = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }

  const handleSubmit = () => {
    if(name == '' && links == ''){
      alert('Please Fill All Fields')
    }
    if(name != '' && links != ''){
      const obj = {name:name , links:links}
      setTasks([...tasks, obj]);
      setName('')
      setLink('')

    }
  }

  return (
    <div className="container" style={{display:'block'}}>
      <h1 style={{marginLeft:'210px'}}>My Favorite Links</h1>
      <p style={{marginLeft:'210px'}}>Add a new url with a name and link to the table.</p>
          <Table removeLink={handleRemove} linkData={tasks}/>
      <br />
      <h3 style={{marginLeft:'210px'}}>Add New</h3>    
        <Form handleSubmit={handleSubmit} setName={setName} name={name} links={links} setLink={setLink}/>
    </div>
  )
}

export default LinkContainer
