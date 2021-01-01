import React from 'react';
import Moment from 'moment';
import { Line } from 'react-chartjs-2';


function QuarterlyGraph (props) {
    console.log(props.data);

    let currentMonth = new Date(props.fromDate).getMonth();
    let numCases = 0;
    let arrLabels = [];
    let arrData = [];

    for( let dataObj of props.data) {
        console.log(dataObj);
        if(new Date(dataObj["date"]).getMonth() <= (currentMonth + 4)) {
            numCases += dataObj["cases"];
        }else if((new Date(dataObj["date"]).getMonth()) > (currentMonth + 4)) {
            console.log(currentMonth+4)
            arrLabels.push(Moment.months(currentMonth+4));
            arrData.push(numCases);
            currentMonth+=3;
            numCases = dataObj["cases"];
        }
    }

    arrLabels.push(Moment.months(currentMonth));
    arrData.push(numCases);

    console.log(arrLabels);
    console.log(arrData);

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
