import React from 'react';
import { Line } from 'react-chartjs-2';


function DailyReportChart(props) {
    
    let time = props.data.map(item => item.date);
    let cases = props.data.map(item => item.cases);

    const chartData = {
            labels: time,
            datasets: [
                    {
                        label: 'Daily',
                        data: cases,
                        borderColor: ['rgba(54, 162, 235, 0.2)'],
                        backgroundColor: ['rgba(54, 162, 235, 0.2)'],
                        pointBackgroundColor: ['rgba(54, 162, 235, 0.2)'],
                        pointBorderColor: ['rgba(54, 162, 235, 0.2)']
                
                    }
                ]
        }

        const options = {
            title: {
                display: true,
                text: 'Line Chart for Covid 19 confirmed cases in India 2020'
            }
        }

    return (
        <Line data={chartData} options={options}/>
    )
}

export default DailyReportChart
