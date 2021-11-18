import React, {Component} from "react";
import Element from "./Element";

class Play extends Component{
    render(){
        const tmpStyle={
            width:"288px",
            height:"76.5vh",
            border:"1px solid black",
            margin:"5px",
            overflowY:"auto"            
        }
        
        const PlayList=this.props.ppList
        
        var i = 0;
        const cList = PlayList.map(title =>(
            <Element e={PlayList[i++].title}></Element>   
        ))

        return(
            <div style={tmpStyle}>
                <h3>Play</h3>
                {cList}
            </div>
        );
    }
}

export default Play;