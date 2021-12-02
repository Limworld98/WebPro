import React, {Component} from "react";
import Element from "./Element";


class Button extends Component{
  
    render(){
        
        const buttonStyle={
            position:"absolute",
            margin :"10px",
            right:"22px",
            bottom : "0px",
            padding:"3px 30px",
            zIndex:'3'
        }


        return(
            <div>
                <button style = {buttonStyle}>Next</button>
            </div>
        );
    }
}

export default Button;