import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

function LineChart () {
    const [chartData, setChartData] = useState({});
    
    const chart = () => {
        setChartData({
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [
                {
                    label: 'sales something',
                    data: [3, 2, 2, 1, 5]
                }
            ]
        });

    }
        useEffect(() => {
            chart();
        }, []);

        return (
            <Line data={chartData} />
        )
     
}

export default LineChart
