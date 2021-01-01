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
            if(date > toDate) {
                return;
            }
            //const daysDiff = toDate.getDate() - date.getDate();
            let daysDiff = (Math.abs(toDate - date)) / (1000 * 60 * 60 * 24);
            if(this.props.timeFrequency === 'daily'){
                if(daysDiff < 1){
                    return;
                }
            }else if(this.props.timeFrequency === 'monthly'){
                if(daysDiff < 30) {
                    return;
                }
            }else {
                if(daysDiff < 90) {
                    return;
                }
            }
        }
        this.setState({fromDate: date});
        
    }

    onChangeToDate = (date) => {
        const fromDate = this.state.fromDate;
        console.log(date.getMonth());
        if(fromDate !== null) {
            if(fromDate > date) {
                return;
            }
            //const daysDiff = date.getDate() - fromDate.getDate();
            let daysDiff = (Math.abs(date - fromDate)) / (1000 * 60 * 60 * 24);
            console.log(daysDiff);
            if(this.props.timeFrequency === 'daily'){
                if(daysDiff < 1){
                   return;
                }
            }else if(this.props.timeFrequency === 'monthly'){
                if(daysDiff < 30) {
                   return;
                }
            }else {
                if(daysDiff < 90) {
                    return;
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
                
                <label className="dropdownLabel">From Date: </label>
                <DatePicker 
                    className="datepick"
                    selected={this.state.fromDate} 
                    onChange={date => this.onChangeFromDate(date)}
                    maxDate= {fromMax}
                    minDate={new Date("2020/03/01")}
                    dateFormat="dd/MM/yyyy"/>
                
                
                <label className="dropdownLabel">To Date: </label>
                <DatePicker 
                    className="datepick"
                    selected={this.state.toDate} 
                    onChange={date => this.onChangeToDate(date)} 
                    maxDate={toMax}
                    minDate={new Date("2020/03/02")}
                    dateFormat="dd/MM/yyyy" />
                 
                <div className="Chart">
                    {(this.state.fromDate !== null && this.state.toDate !== null) ?
                    <LineChart 
                    fromdate={this.state.fromDate} 
                    todate={this.state.toDate}
                    timeFrequency={timeFrequency}/>: null
                }
                </div>
                 
            </div>
        );
    }
   
}

export default DatePick
