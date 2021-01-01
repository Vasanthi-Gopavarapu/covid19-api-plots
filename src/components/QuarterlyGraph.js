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
                    label: 'Covid 19 confirmed cases in India 2020',
                    data: arrData
                }
            ]
    }

    return (
        <Line data={chartData} />
    )
}

export default QuarterlyGraph
