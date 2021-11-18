import React, {Component} from "react";
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


        return(
            <div>
                <button style = {buttonStyle}>Previous</button>
            </div>
        );
    }
}

export default Button;