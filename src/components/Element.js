import React, {Component} from "react";


class Element extends Component{
    render(){
        const tmpStyle={
            width:"auto",
            height:"auto",
            border:"1px solid black",
            margin:"10px",
            padding:"10px"
        }
        
        return(
            <div style={tmpStyle} draggable>
                {this.props.e}
            </div>
        );
    }
}

export default Element;