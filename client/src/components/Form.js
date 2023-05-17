import { useState } from 'react'

const Form = (props) => {
  const [name, setName] = useState('')
  const[url, setURL] = useState('')


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

   console.log(name, url)

    props.notifyParent({name, url})
    /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
  }

  return (
    <form>
      {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
    <input type={"text"} name={'name'} id={'name'} value={name} onChange={handleChange}/>

    <label for="url">
      URL
    <input 
    type={"text"}
    name={'url'}
    id={'url'}
    value={url}
    onChange={handleChange}
    />

    </label>

    <button onClick={onFormSubmit}>Submit</button>

    </form>
  )
}

export default Form


/* hold this

while (x<=getLinks.index){
  handlechange(getLinks.URL, getLinks.name)
}

*/