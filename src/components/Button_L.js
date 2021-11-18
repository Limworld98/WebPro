import React, {Component} from "react";
import { Router } from "react-router";
import Element from "./Element";

class Button extends Component{
  
    render(){
        
        const buttonStyle={
            position:"absolute",
            margin :"10px",
            left:"0px",
            bottom : "0px",
            zIndex:'2'
        }

        const Clickme = () => {
            Router.push("/")
        }

        return(
            <div>
                <button style = {buttonStyle} onClick = {Clickme}>Previous</button>
            </div>
        );
    }
}

export default Button;