import React, {Component} from "react";

class Printer extends Component{
    render(){
        const tmpStyle={          
            width:"auto",
            height:"auto",
            margin:"-10px 10px",

        }
        
        return(
            <div style={tmpStyle} draggable>               
                {this.props.e}
            </div>
        );
    }
}

export default Printer;