import React from 'react'
import countries from "../assets/data/countries.json"
const JsxParatice = () => {
   
  return (
   <>


<h2> Slect Country</h2>

<select defaultValue={"AX"} >
    <option disabled > Select a counuty</option>
      {
          countries.map((item,index) => <option value={item.code}>{item.name}</option>)
      }
</select>



<h1>Contry and codes</h1>
        <table >
            
            <thead>
            <tr>
                <th>countries</th>
                <th>code</th>
            </tr>
            </thead>
            <tbody>
            {
             countries.map((country,index)=> {
                return(
                    <tr key={index}>
                        <td>{country.name}</td>
                        <td>{country.code}</td>
                    </tr>
                )
             })
            }
            </tbody>
        </table>


        <h1>List All countires</h1>
        <ul>
            {
                countries.map((country,index)=> <li key={index}>{country.name} {country.code}</li>)
            }
        </ul>

        
        
   </>
  )
}

export default JsxParatice