import React from 'react';
import { Line } from 'react-chartjs-2';


function DailyReportChart(props) {
    
    let time = props.data.map(item => item.date);
    let cases = props.data.map(item => item.cases);

    const chartData = {
            labels: time,
            datasets: [
                    {
                        label: 'Covid 19 confirmed cases in India 2020',
                        data: cases
                    }
                ]
        }

    return (
        <Line data={chartData} />
    )
}

export default DailyReportChart
