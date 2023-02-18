import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
import './graph.css'


// react 렌더링시 필요
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  // chart 옵션
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  // chart 데이터
const data =  {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset 1',
        borderColor: 'rgb(54, 162, 235)',
        data: [1, 2, 3, 4, 5, 10],
      },
      {
        label: 'Dataset 2',
        backgroundColor: 'rgb(255, 99, 132)',
        data: [1, 2, 3, 4, 5, 6],
        borderColor: 'red',
      },
      {
        label: 'Dataset 3',
        backgroundColor: 'rgb(75, 192, 192)',
        data: [1, 2, 3, 4, 5, 6],
      },
    ],
};
const Graph = () => {
  return (
    <div className='graphBox'>
        <div className="box">
                <Bar options={options} data={data}/>
        </div>
        <div className="box"></div>
    </div>
  )
}

export default Graph

