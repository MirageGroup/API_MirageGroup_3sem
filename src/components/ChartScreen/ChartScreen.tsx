import React, { useEffect } from 'react';
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useUser } from '../../contexts/UserContext';
import axios from 'axios';


export default function ChartScreen() {


  const { user } = useUser()

  const fetchProcesses = async () => {
    try {            
        if(user.role.id == 2){
            const response = await axios.get('http://localhost:8000/process/findall')
            return response.data
        }else{
            const response = await axios.get('http://localhost:8000/user/fetchprocesses')
            console.log("Data sent successfully:", response.data);
            return response.data
        }


        
    } catch (error) {
        console.error('Error fetching processes:', error);
        throw error;
    }
  };

  useEffect(() => {
    // Function to fetch and update processes
    const updateProcesses = async () => {
      try {
        let updatedProcesses = await fetchProcesses();
      } catch (error) {
        // Handle any errors
      }
    };
  
    // Poll for updates every 5 seconds (adjust the interval as needed)
    const pollInterval = setInterval(updateProcesses, 500);
  
    // Clean up the interval when the component unmounts
    return () => clearInterval(pollInterval);
  }, []); // The empty dependency array ensures this effect runs only once on component mount

  


    const series = [{
        name: 'All Tasks',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'My Tasks',
        data: [11, 32, 45, 32, 34, 52, 41]
      }]


    const options: ApexOptions = {
        chart: {
          height: 100,
          type: 'bar',
          zoom: {
            enabled: true
          }
        },
      };
    
      return(
        <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
        />
      )
}