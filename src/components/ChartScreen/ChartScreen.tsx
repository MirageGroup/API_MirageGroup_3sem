import React, { useEffect, useState } from 'react';
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useUser } from '../../contexts/UserContext';
import ProcessInterface from '../../Interfaces/Interfaces'
import axios from 'axios';


export default function ChartScreen() {

  const [processes,setProcesses] = useState<ProcessInterface[]>()
  const { user } = useUser()

  const fetchProcesses = async () => {
    try {            
        if(user.role.id == 2){
            const response = await axios.get('http://localhost:8000/process/findall')
            console.log("Data sent successfully:", response.data);
            
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

    var processLabels = [""]
    var totalTasks = [0]
    var completedTasksData = [0]
    var incompletedTasksData = [0]
    if (processes != undefined){
       processLabels = processes.map((process) => process.name);
       totalTasks = processes.map((process) => process.tasks.length)
       completedTasksData = processes.map((process) =>
        process.tasks.filter((task) => task.state === 'done').length
    );
    incompletedTasksData = processes.map((process) =>
    process.tasks.filter((task) => task.state !== 'done').length
  );

    }




    const series =  [
      {
        name: 'concluidas',
        data: completedTasksData
      },{
      name: 'total tasks',
      data: totalTasks
    }, {
      name: 'não concluidas',
      data: incompletedTasksData
    }]

    const options: ApexOptions = {
      chart: {
        type: 'bar',
        height: 350
      },
      theme: {
        mode: 'dark',

        backgroundColor: '#222',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
          dataLabels: {
            position: 'bottom'
          }
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 20,
        colors: ['transparent']
      },
      xaxis: {
        categories: processLabels,
      },
      yaxis: {
        title: {
          text: 'tarefas'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        theme:"dark",
        followCursor: false
      }
    }
    
      return(
        <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
        />
      )
}