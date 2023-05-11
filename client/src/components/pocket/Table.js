import React from 'react'

const TableHeader = () => {
  // boilerplate table header functional component
  return (
    <thead>
      <tr>
      <td>Name</td>
      <td>URL</td>
      <td >Remove</td>
      </tr>
    </thead>
  )
}

const TableBody = ({linkData,removeLink}) => {
  // boilerplate table body functional component
  // we use Array.map to create table rows from LinkData passed via linkData
  const rows = linkData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>
          <a href={row.links} target='_blank'>{row.links}</a>
        </td>
        <td>
        <button
              type="submit"
              
              onClick={() => removeLink(index)}
            >
              Delete
            </button>
        </td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}
//do i just need to make a call to "load" the page?
const Table = ({linkData,removeLink}) => {
  {
    /*TODO - return <table> component, TableHeader and TableBody  and pass props!*/
    return<div>
    <table>
      <TableHeader/>
      <TableBody linkData={linkData} removeLink={removeLink}/>
    </table>
    </div> 
  }
}

export default Table
