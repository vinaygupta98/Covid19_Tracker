import React,{useEffect,useState} from 'react';
import { Doughnut} from 'react-chartjs-2';

const Chart = () => {
    
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
    const state = {
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
            data: [10000,10000,20000],
            },
        ]
        }
        
  return (
       <Doughnut
    data={state}
    options={{
      title:{
        display:true,
        text:'Total Cases',
        fontSize:20
      },
      legend:{
        display:true,
        position:'right'
      }
    }}
  />)
}

export default Chart