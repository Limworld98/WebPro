import React, {Component} from "react";
import Stay from "./Stay";
import Play from "./Play";
import Food from "./Food";
import store3 from "../store3";
import store5 from "../store5";

class ViewList extends Component{
    state={
        c:0,
        ScheduleList:[[{id:"00",title:"", content:[]}],[{id:"100",title:"", content:[]}],[{id:"200",title:"", content:[]}],
        [{id:"300",title:"", content:[]}],[{id:"400",title:"", content:[]}],[{id:"500",title:"", content:[]}],
        [{id:"600",title:"", content:[]}],[{id:"700",title:"", content:[]}],[{id:"800",title:"", content:[]}],
        [{id:"900",title:"", content:[]}],[{id:"1000",title:"", content:[]}],[{id:"1100",title:"", content:[]}],
        [{id:"1200",title:"", content:[]}],[{id:"1300",title:"", content:[]}],[{id:"1400",title:"", content:[]}]],
        ScheduleSize:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    }
    
    constructor(props){
        super(props);
        store3.subscribe(function(){
            this.setState({c:store3.getState().num, ScheduleList:store3.getState().li, ScheduleSize:store3.getState().size});
        }.bind(this));

        store5.subscribe(function(){
            const _content = this.state.ScheduleList
            _content[store5.getState().num1][store5.getState().num2].content = store5.getState().li
            this.setState({ScheduleList:_content})
        }.bind(this))
    }
    render(){
        
        const tmpStyle={
            width:"300px",
            height:"80vh",
            border:"1px solid black",
            margin:"10px",
            position:"absolute",
            left:"82%",
            top:"13vh",
            zIndex:'2',
            backgroundColor:'white',
            borderRadius:"0px 10px 10px 0px",       
        }

        return(
            <div style={tmpStyle}>
                              
                {this.state.c===0 && <Stay ssList={this.props.sList} start1={this.props.start} end1={this.props.end} ScheduleList={this.state.ScheduleList} ScheduleSize={this.state.ScheduleSize}/>}
                
                {this.state.c===1 && <Food ffList={this.props.fList} start1={this.props.start} end1={this.props.end} ScheduleList={this.state.ScheduleList} ScheduleSize={this.state.ScheduleSize}/>}
                    
                {this.state.c===2 && <Play ppList={this.props.pList} start1={this.props.start} end1={this.props.end} ScheduleList={this.state.ScheduleList} ScheduleSize={this.state.ScheduleSize}/>}
                
            </div>
        );
    }
}

export default ViewList;