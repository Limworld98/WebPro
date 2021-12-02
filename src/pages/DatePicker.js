import "react-datepicker/dist/react-datepicker.css"; // css import 
import React, { Component } from "react";
import Calendar from "../components/Calendar";
import LButton from "../components/Button_L";
import RButton from "../components/Button_R";
import store4 from "../store4";
import store6 from "../store6";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class DatePicker extends Component {

    state = {
        startDate: new Date(),
        endDate: new Date()
    }

    myimage = {
        backgroundImage: 'url(https://source.unsplash.com/collection/4696961/1920x1080)',
        backgroundSize: 'cover',
    }

    DatePicker = () => {
        this.props.Main(this.state);
    }

    constructor(props) {
        super(props);
        store4.subscribe(function () {
            if (store4.getState().id === 0) {
                this.setState({ startDate: store4.getState().date });
            }
            else if (store4.getState().id === 1) {
                this.setState({ endDate: store4.getState().date });
            }
        }.bind(this));
    }
    render() {

        const tstyle1 = {
            position: "absolute",
            left: "42%",
            top: "40%",
            fontWeight:"bold"
        }

        const tstyle2 = {
            padding: "3px 20px"
        }

        const tstyle3 = {
            position: "absolute",
            left: "42%",
            top: "45%",
            fontWeight:"bold"
        }

        const tstyle4 = {
            position: "absolute",
            left: "56%",
            top: "50%"
        }

        const tstyle5 = {
            position: "absolute",
            left: "42%",
            top: "50%",
            fontWeight:"bold"
        }

        const tstyle6 = {
            position: "absolute",
            left: "46%",
            top: "50%"
        }

        const tstyle7 = {
            position: "absolute",
            left: "44%",
            top: "20%"
        }

        const barStyle = {
            display: "inline-block",
            width: "100%",
            height: "40px",
            background: "skyblue",
            padding: "10px",
            fontSize: "40px",
            fontWeight: "bold",
            fontFamily: "Arial",
            color: "white",
            margin_top: "auto",
            margin_bottom: "auto",
            zindex: "4"
        }

        return (
            
            <div className="Date">               
                <center><div style={barStyle}>Travel Planner</div></center>
                <Container></Container>
                <div style={tstyle1}>가는날 :</div>
                <div><Calendar /></div>
                <div style={tstyle3}>오는날 : </div>
                <div style={tstyle5}>여행지 : </div>
                <div style={tstyle6}><input type={Text} id='a'></input></div>
                <div style={tstyle4}><button style={tstyle2} onClick={function () {
                    store6.dispatch({ type: 'INCREMENT', location: document.getElementById('a').value });
                    alert("저장되었습니다!");
                }.bind(this)}>저장</button></div>
                <div style={tstyle7}><h1>여행을 시작하세요</h1></div>

                <Link to="/Main"><RButton onClick></RButton></Link>
            </div>
        );
    }
}

const Container = styled.div`
  position: absolute;
  bottom:0;
  left: 0;
  width: 100%;
  height: 94%;
  background: url(https://source.unsplash.com/collection/4696961/1920x1080);
  background-size: cover;
  opacity: 0.5;
`;

export default DatePicker;