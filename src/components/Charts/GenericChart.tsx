



import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

import ProcessInterface from '../../Interfaces/Interfaces'


type props = {
    processes:ProcessInterface[]
}


export default function GenericChart(props:props){
    var processLabels = [""]
    var totalTasks = [0]
    var completedTasksData = [0]
    var incompletedTasksData = [0]
    if (props.processes != undefined){
        processLabels = props.processes.map((process) => process.name);
        totalTasks = props.processes.map((process) => process.tasks.length)
        completedTasksData = props.processes.map((process) =>
            process.tasks.filter((task) => task.state === 'done').length
                );
                incompletedTasksData = props.processes.map((process) =>
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
          colors: {
            primary: '#000',
            secondary: '#ccc',
            accent: '#fff',
          },
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
        <ReactApexChart options={options} series={series} type="bar" height={350} />
      )
}