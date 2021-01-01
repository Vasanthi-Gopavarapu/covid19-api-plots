import React from 'react';
import Moment from 'moment';
import { Line } from 'react-chartjs-2';


function MonthlyGraph(props) {
    console.log(props.data);

    let currentMonth = new Date(props.fromDate).getMonth();
    let numCases = 0;
    let arrLabels = [];
    let arrData = [];

    for( let dataObj of props.data) {
        console.log(dataObj);
        if(new Date(dataObj["date"]).getMonth() === (currentMonth + 1) ) {
            numCases += dataObj["cases"];
        }else if((new Date(dataObj["date"]).getMonth()) > (currentMonth + 1) ) {
            console.log(currentMonth+1)
            arrLabels.push(Moment.months(currentMonth+1));
            arrData.push(numCases);
            currentMonth++;
            numCases = dataObj["cases"];
        }
    }

    arrLabels.push(Moment.months(currentMonth +1));
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

export default MonthlyGraph
