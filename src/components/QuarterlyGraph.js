import React from 'react';
import Moment from 'moment';
import { Line } from 'react-chartjs-2';


function QuarterlyGraph (props) {
    let currentMonth = new Date(props.fromDate).getMonth();
    let lastMonth = new Date(props.toDate).getMonth();
    let numCases = 0;
    let arrLabels = [];
    let arrData = [];

    for( let dataObj of props.data) {
        if(new Date(dataObj["date"]).getMonth() <= (currentMonth + 3)) {
            numCases += dataObj["cases"];
        }else if((new Date(dataObj["date"]).getMonth()) > (currentMonth + 3)) {
            arrLabels.push(Moment.months(currentMonth + 3));
            arrData.push(numCases);
            currentMonth += 3;
            numCases = dataObj["cases"];
        }
    }

    arrLabels.push(Moment.months(lastMonth));
    arrData.push(numCases);

    // console.log(arrLabels);
    // console.log(arrData);

    const chartData = {
        labels: arrLabels,
        datasets: [
                {
                    label: 'Quarterly',
                    data: arrData,
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

export default QuarterlyGraph
