



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
        name: 'tasks totais',
        data: totalTasks
      }, {
        name: 'não concluidas',
        data: incompletedTasksData
      }]
  

      const options: ApexOptions = {
        chart: {
          type: 'bar',
          height: 500,
          background:'tranparent'
        },
        theme: {
          mode: 'dark',
          monochrome: {
            enabled: true,
            color: '#53C4CD',
            shadeTo: 'light',
            shadeIntensity: 0.65
          }
        },
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 6,
            columnWidth: '55%',
            dataLabels: {
              position: 'bottom'
            }
          
          },
        },
        dataLabels: {
          enabled: true,
          style: {
            fontSize: "18px",
            colors: ["#304758"]
          }
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
        <div className="generic_chat_wrapper">

          <ReactApexChart options={options} series={series} type="bar" height={'100%'} />
        </div>
      )
}