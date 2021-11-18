import React, {Component} from "react";
import { DndProvider, useDrag } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Sheet from "./Sheet";

class Schedule extends Component{
    render(){
        const tmpStyle={
            width:"400px",
            height:"80vh",
            border:"1px solid black",
            margin:"10px",
            position:"absolute",
            left:"60%",
            top:"13vh",
            zIndex:'2',
            backgroundColor:'white',
            overflow:"auto"  
        }
        
        var size = this.props.end - this.props.start
        const SList = this.props.ScheduleList
        const SSList = SList.slice(0 ,size+1)
        var i = 0;
         
        const aList = SSList.map(title => (
            <Sheet e={this.props.start + i} li={SSList[i++]}></Sheet>              
        ))
            
        

        return(
            <div style={tmpStyle}>
                {aList}       
            </div>
        );
    }
}

export default Schedule;