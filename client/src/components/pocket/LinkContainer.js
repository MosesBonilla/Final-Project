import { useState } from 'react'
import Table from './Table';
import Form from './Form'; 


const LinkContainer = (props) => {
  
  const[drop, setDrop] = useState([])
  const[name, setURLname]= useState('')
  const[url, setURLcord]= useState('')

  const handleRemove = (index) => {
    const sendDrop = (drop)
    sendDrop.splice(index, 1)
    setDrop(sendDrop)
            //drop at index command for array, have each array keep index counter
  }

  const handleSubmit = () => {
  
       if(name === '' && url === ''){
        alert('Hey, I think you missed something')
       }if(name !== '' && url !== ''){
        const target = {name:name, url:url}
        setDrop([drop, target])
        setURLname('')
        setURLcord('')
       }

  }

  return (
    <div >
      <h1>My Favorite Links</h1>
      <p>Add a new url with a name and link to the table.</p>
      <>
      {<Table handleDrop={handleRemove} linkData={drop}/> /*TODO - Add Table Component */}
      </>
      <br />

      <h3>Add New</h3><>
      {<Form
        handleSubmit={handleSubmit}
        setURLname={setURLname}
        name={name}
        setCord={setURLcord}
        url={url}  /> /*TODO - Add Form Component */}
        </>
    </div>
  )
}
export default LinkContainer
