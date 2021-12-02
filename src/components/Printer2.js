import React, {Component} from "react";

class Printer2 extends Component{
    render(){
        const tmpStyle={          
            width:"auto",
            height:"auto",
            margin:"10px 10px",

        }
        
        return(
            <div style={tmpStyle} draggable>               
                <h5>{this.props.e}</h5>
            </div>
        );
    }
}

export default Printer2;