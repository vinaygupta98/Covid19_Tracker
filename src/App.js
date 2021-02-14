import './App.css';
import {React,useEffect, useState} from 'react'




const App = () => {
  const [data,setData] = useState([]); 
  
  useEffect( () => {
    getData()
  }
  ,[])

  const getData =  async () => {
    const response = await fetch('https://api.covid19india.org/data.json')
    const data = await response.json()   
     setData(data.statewise)

  }
 
  
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
          <th>STATE/UT</th>
          <th>CONFIRMED</th>
          <th>ACTIVE</th>      
          <th>RECOVERED</th>
          <th>DECEASED</th>
          </tr>
          </thead>
          <tbody>
          {data.map(( state,i) => {
            if (i>0) {
          return (
            
          <tr>
            <td>{state.state}</td>
            <td>{state.confirmed}</td>
            <td>{state.active}</td>
            <td>{state.recovered}</td>
            <td>{state.deaths}</td>
            </tr>
            )}
          })} 
          

          </tbody>
       
          </table>
    </div>
  );
}

export default App;
