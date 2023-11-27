import React, { useEffect, useState } from 'react';
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useUser } from '../../contexts/UserContext';
import ProcessInterface from '../../Interfaces/Interfaces'
import axios from 'axios';
import GenericChart from '../Charts/GenericChart';
import EachProcessChart from '../Charts/EachProcessChart';
import "./ChartScreenStyle.scss"
import Sidebar from '../sidebar/sidebar';


export default function ChartScreen() {

  const [processes,setProcesses] = useState<ProcessInterface[]>()
  const [selectedProcess,setSelectedProcess] = useState<ProcessInterface>()
  const { user } = useUser()

  const fetchProcesses = async () => {
    try {            
        if(user.role.id == 2){
            const response = await axios.get('http://localhost:8000/process/findall')
            console.log("user_2",response.data)

            
            return response.data
        }else{
            const response = await axios.get('http://localhost:8000/user/fetchprocesses')
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
        setProcesses(updatedProcesses)
      } catch (error) {
        // Handle any errors
      }
    };
  
    // Poll for updates every 5 seconds (adjust the interval as needed)
    const pollInterval = setInterval(updateProcesses, 3000);
  
    // Clean up the interval when the component unmounts
    return () => clearInterval(pollInterval);
  }, []); // The empty dependency array ensures this effect runs only once on component mount

   

  return(
    <>
      <Sidebar />
      <div className='chart_screen_wrapper'>
        
        <h1>Dados Gerais</h1>
        <div className='main_chart'>
          
          <GenericChart processes={processes}></GenericChart>

        </div>

        
        {processes !== undefined && processes.length > 0 && (
          <>
            {/* <h1>Dados por processo</h1> */}




            {/* <EachProcessChart process={selectedProcess}></EachProcessChart> */}
          </>
        )}


      </div>
    </>
  
  
  )


   
    
    
      
}