import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import LineChart from './LineChart';
import '../App.css';

class DatePick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fromDate: null,
            toDate: null
        }
    }

    

    onChangeFromDate = (date) => {
        const toDate = this.state.toDate;
        if(toDate !== null){
            //const daysDiff = toDate.getDate() - date.getDate();
            let daysDiff = (Math.abs(toDate - date)) / (1000 * 60 * 60 * 24);
            if(this.props.timeFrequency === 'daily'){
                if(daysDiff < 1){
                    date = null;
                }
            }else if(this.props.timeFrequency === 'monthly'){
                if(daysDiff < 30) {
                    date = null
                }
            }else {
                if(daysDiff < 90) {
                    date = null
                }
            }
        }
        this.setState({fromDate: date});
        
    }

    onChangeToDate = (date) => {
        const fromDate = this.state.fromDate;
        if(fromDate !== null) {
            //const daysDiff = date.getDate() - fromDate.getDate();
            let daysDiff = (Math.abs(date - fromDate)) / (1000 * 60 * 60 * 24);
            console.log(daysDiff);
            if(this.props.timeFrequency === 'daily'){
                if(daysDiff < 1){
                    date = null;
                }
            }else if(this.props.timeFrequency === 'monthly'){
                if(daysDiff < 30) {
                    date = null;
                }
            }else {
                if(daysDiff < 90) {
                    date = null
                }
            }
        }
        
        this.setState({toDate: date});
        
    }

    render() {
        const timeFrequency = this.props.timeFrequency;

        let toMax = new Date();
        let fromMax = null;

        if(timeFrequency === 'daily'){ 
            fromMax = new Date(new Date().setDate(toMax.getDate()-1));
        }else if(timeFrequency === 'monthly'){
            fromMax = new Date(new Date().setDate(toMax.getDate()-30));
        }else {
            fromMax = new Date(new Date().setDate(toMax.getDate()-90)); 
        }

        return (
            <div>
                <div>
                <label>From Date: </label>
                <DatePicker selected={this.state.fromDate} 
                    onChange={date => this.onChangeFromDate(date)}
                    maxDate= {fromMax}
                    dateFormat="dd/MM/yyyy"/>
                </div>
                <div>
                <label>To Date: </label>
                <DatePicker selected={this.state.toDate} 
                    onChange={date => this.onChangeToDate(date)} 
                    maxDate={toMax}
                    dateFormat="dd/MM/yyyy" />
                </div> 
                <div className="chart">
                    <LineChart />
                </div>
                 
            </div>
        );
    }
   
}

export default DatePick
