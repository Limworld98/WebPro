import React, {Component} from "react";
import Sheet from "./Sheet";

class Schedule extends Component{
    render(){
        const tmpStyle={
            width:"400px",
            height:"80vh",
            border:"1px solid black",
            margin:"10px",
            position:"absolute",
            left:"-140%",
            top:"-1vh",
            zIndex:'2',
            backgroundColor:'white',
            overflow:"auto"  
        }
        
        var size = this.props.end - this.props.start
        const SList = this.props.ScheduleList
        const SSList = SList.slice(0 ,size+1)
        var i = 0;
         
        const aList = SSList.map(title => (
            <Sheet e={this.props.start + i} cnt={i} li={SSList[i++]}></Sheet>            
        ))
            
        return(
            <div style={tmpStyle}>
                {aList}       
            </div>
        );
    }
}

export default Schedule;