import "react-datepicker/dist/react-datepicker.css"; // css import 
import React, { Component } from "react";
import Calendar from "../components/Calendar";
import LButton from "../components/Button_L";
import RButton from "../components/Button_R";
import store4 from "../store4";

class DatePicker extends Component{
    state={
        startDate:new Date(),
        endDate:new Date()
    }

    constructor(props){
        super(props);
        store4.subscribe(function(){
            if(store4.getState().id === 0){
                this.setState({startDate:store4.getState().date});
            }
            else if(store4.getState().id === 1){
                this.setState({endDate:store4.getState().date});
            }
        }.bind(this));
    }
    render(){

    const tstyle1 = {
        position:"absolute",
        left:"37.5%",
        top:"40vh"
    }

    const tstyle2 = {
        position:"absolute",
        left:"41%",
        top:"40vh"
    }

    const tstyle3 = {
        position:"absolute",
        left:"51.5%",
        top:"40vh"
    }

    const tstyle4 = {
        position:"absolute",
        left:"55%",
        top:"40vh"
    }
    
    const tstyle5 = {
        position:"absolute",
        left:"37.5%",
        top:"43vh"
    }

    const tstyle6 = {
        position:"absolute",
        left:"41%",
        top:"43vh"
    }

    const tstyle7 = {
        position:"absolute",
        left:"44%",
        top:"20vh"
    }

    return (
        <div className="Date">
            <div style={tstyle1}>가는날 : </div>
            <div><Calendar  /></div>
            <div style={tstyle3}>오는날 : </div>
            <div style={tstyle5}>여행지 : </div>
            <div style={tstyle6}><input type={Text}></input></div>
            <div style={tstyle7}><h1>여행을 시작하세요</h1></div>
            <RButton></RButton>
            <LButton></LButton>
            <button onClick={function(){
                alert(this.state.startDate)
                alert(this.state.endDate)
            }.bind(this)}>dd</button>
        </div>
      );
    }  
}

export default DatePicker;