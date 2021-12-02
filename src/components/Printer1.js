import React, {Component} from "react";

class Printer1 extends Component{
    render(){
        const tmpStyle={          
            width:"auto",
            height:"auto",
            margin:"10px 10px",

        }
        
        return(
            <div style={tmpStyle} draggable>               
                <h3>{this.props.e}</h3>
            </div>
        );
    }
}

export default Printer1;