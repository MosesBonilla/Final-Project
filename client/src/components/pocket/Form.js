import { useState } from 'react'

const Form = () => {
  const handleChange = (event) => {
    /*
            TODO - Logic for changing state based on form changes
        */
       const handleURLCh = (event) => {
       
        setURLcord(event.target.value)
       }
       const handleURLname = (event) => {
        setURLname(event.target.value)
       }
  }
const [urlName, setURLname] = useState(``)
const [urlCord, setURLcord] = useState(``)
  const onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault()

    
    /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
    const handleURLcord = (event) => {
      console.log(event)
      setURLcord(event.target.value)
    }
    const handleURLname = (event) => {
      setURLname(event.target.value)
    }
  }

  return (
    <form onSubmit={onFormSubmit}>
      <label>
         Name: 
        <input
        type='text'
        id='urlName'
        name='urlName'
        onChange={handleChange}/>
      </label>
      
      <label>
         URL: 
        <input
        type='text'
        id='urlCord'
        name='urlCord'
        onChange={handleChange}/>
      </label>
      <input type="submit" value="Submit"/>
       
    </form>//TODO - Logic for returning a form element with labels and inputs for link name and URL
  )
}

export default Form
