import React, {Component} from "react";

class Element2 extends Component{
    render(){
        const tmpStyle={
            width:"auto",
            height:"auto",
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

export default Element2;