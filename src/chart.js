import React,{useEffect,useState} from 'react';
import { Doughnut} from 'react-chartjs-2';

const Chart =  () => {
      const [chart,setChart] = useState({}); 
      let activecase = []  
      let recoveredcase = [] 
      let deathscase = []    
  

      const chartData = () => {
      fetch('https://api.covid19india.org/data.json')
      .then( response => response.json())
      .then( (data) => {
          let  required_data = data.statewise[0] ;
          activecase.push(required_data.active)
          recoveredcase.push(required_data.recovered)
          deathscase.push(required_data.deaths)
      }    
        )
      .catch( error => console.log(error))
        setChart({
          labels: ['Active', 'recovered', 'deceased'],
          datasets: [
              {
              label: 'Covid Cases',
              backgroundColor: [
                  '#0000FF',
                  '#00FF00',
                  '#696969'
              ],
              hoverBackgroundColor: [
              '#0000DD',
              '#00FF11',
              '#696965',
              ],
              data: [ activecase , recoveredcase,deathscase ],
              },
          ]
          })
      }
     
      useEffect(() => {
        chartData()
      },[])
    
    
        
  return (
  <div>
       <Doughnut
        data={chart}
        options={{
          title:{
            display:true,
            text:'Total Cases',
            fontSize:30
          },
          legend:{
            
      }
    }}
  />
  </div>)
}

export default Chart