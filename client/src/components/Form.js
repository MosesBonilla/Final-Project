import { useState } from 'react'

const Form = (props) => {
  const [name, setName] = useState('')
  const[URL, setURL] = useState('')


  const handleChange = (event) => {
    /*
            TODO - Logic for changing state based on form changes
        */
       if(event.target.id =="name"){
        setName(event.target.value)
       } else{
        setURL(event.target.value)
       }
       
  }

  const onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault()

   console.log(name, URL)

    props.notifyParent({name, URL})
    /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
  }

  return (
    <form>
      {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
    <input type={"text"} id={'name'} value={name} onChange={handleChange}/>

    <input type={"text"} id={"URL"} value={URL} onChange={handleChange}/>

    <button onClick={onFormSubmit}>Submit</button>

    </form>
  )
}

export default Form
