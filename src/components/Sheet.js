import React, {Component} from "react";


class Sheet extends Component{
    render(){
        const tmpStyle={
            width:"auto",
            height:"auto",
            border:"1px solid black",
            margin:"10px",
            padding:"5px"
        }
        
        return(
            <div style={tmpStyle}>
                <h4>{this.props.e}</h4>
            </div>
        );
    }
}

export default Sheet;