import ProcessInterface from '../../Interfaces/Interfaces'
import ReactApexChart from "react-apexcharts";

interface type_props{
    process:ProcessInterface
}

export default function EachProcessChart(props:type_props){
    const state = {
          
        series: [44, 55, 41, 17, 15],
        options: {
          chart: {
            type: 'donut',
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
      };
    return(
        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="donut" />
        </div>
  )
}