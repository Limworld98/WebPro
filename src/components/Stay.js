import React, {Component} from "react";
import Element from "./Element";

class Stay extends Component{
    render(){
        const tmpStyle={
            width:"288px",
            height:"76.5vh",
            border:"1px solid black",
            margin:"5px",
            overflow:"auto"
        }
        
        const StayList=this.props.ssList
        
        var i = 0;
        const aList = StayList.map(title =>(
            <Element e={StayList[i++].title}></Element>   
        ))

        return(
            <div style={tmpStyle}>
                <h3>Stay</h3>
                {aList}
            </div>
        );
    }
}

export default Stay;