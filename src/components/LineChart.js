import React, { useState, useEffect } from 'react';
import DailyReportChart from './DailyReportChart';
import MonthlyGraph from './MonthlyGraph';
import QuarterlyGraph from './QuarterlyGraph';
import apiData from '../data';
import Axios from 'axios';
import Moment from 'moment';

function LineChart (props) {
    const [responseData, setResponseData] = useState([]);
    
    
    const chart = () => {
        const fromdate = Moment(props.fromdate).format('YYYY-MM-DD');
        const todate = Moment(props.todate).format('YYYY-MM-DD');
        const timeFrequency = props.timeFrequency;
        console.log(fromdate, todate, timeFrequency);
        Axios.get("https://api.covid19api.com/country/india/status/confirmed?from="+fromdate+"T00:00:00Z&to="+todate+"T00:00:00Z")
                    .then(response => {
                        console.log(response.data);   
                        
                        setResponseData(response.data.map(item => {
                            return {
                                date: Moment(new Date(item.Date)).format('DD-MM'),
                                cases: item.Cases
                            }
                        }));

                    }).catch(error => {
                        setResponseData(apiData.map(item => {
                            return {
                                date: Moment(new Date(item.Date)).format('DD-MM'),
                                cases: item.Cases
                            }
                        }))
                        console.log(error);
                    });
    }
        useEffect(() => {
            chart();
        }, []);

        return (
            <div>
                {props.timeFrequency === 'daily' ? 
                <DailyReportChart data={responseData} 
                fromDate={props.fromdate}
                toDate={props.todate} /> : null}
                {props.timeFrequency === 'monthly' ? 
                <MonthlyGraph data={responseData} 
                fromDate={props.fromdate}
                toDate={props.todate} /> : null}
                {props.timeFrequency === 'quarterly' ? 
                <QuarterlyGraph data={responseData} 
                fromDate={props.fromdate}
                toDate={props.todate} /> : null}
            </div>

        )
     
}

export default LineChart
