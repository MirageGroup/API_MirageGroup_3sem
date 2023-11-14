import React, { useEffect, useState } from 'react';
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useUser } from '../../contexts/UserContext';
import ProcessInterface from '../../Interfaces/Interfaces'
import axios from 'axios';
import GenericChart from '../Charts/GenericChart';
import EachProcessChart from '../Charts/EachProcessChart';


export default function ChartScreen() {

  const [processes,setProcesses] = useState<ProcessInterface[]>()
  const [selectedProcess,setSelectedProcess] = useState<ProcessInterface>()
  const { user } = useUser()

  const fetchProcesses = async () => {
    try {            
        if(user.role.id == 2){
            const response = await axios.get('http://localhost:8000/process/findall')

            
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
    const pollInterval = setInterval(updateProcesses, 1000);
  
    // Clean up the interval when the component unmounts
    return () => clearInterval(pollInterval);
  }, []); // The empty dependency array ensures this effect runs only once on component mount

   

  return(
    <div>
      <h1>Dados Gerais</h1>
      <GenericChart processes={processes}></GenericChart>

      
      {processes !== undefined && processes.length > 0 && (
        <>
          <label htmlFor="processSelector">Selecione um processo:</label>
          <select id="processSelector" onChange={(e)=> setSelectedProcess(e.value)} value={selectedProcess}>
            <option value="" disabled>
              Escolha um processo
            </option>
            {processes.map((process) => (
              <option key={process.name} value={process.name}>
                {process.name}
              </option>
            ))}
          </select>


          <EachProcessChart></EachProcessChart>
        </>
      )}


    </div>
  
  
  )


   
    
    
      
}