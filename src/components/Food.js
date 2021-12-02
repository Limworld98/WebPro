import React, {Component, useState} from "react";
import Element from "./Element";
import Element2 from "./Element2";
import Printer from "./Printer";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import store3 from "../store3";
import store2 from "../store2";

class Food extends Component {
    state={
        ScheduleList:[[{id:"00",title:"", content:[]}],[{id:"100",title:"", content:[]}],[{id:"200",title:"", content:[]}],
        [{id:"300",title:"", content:[]}],[{id:"400",title:"", content:[]}],[{id:"500",title:"", content:[]}],
        [{id:"600",title:"", content:[]}],[{id:"700",title:"", content:[]}],[{id:"800",title:"", content:[]}],
        [{id:"900",title:"", content:[]}],[{id:"1000",title:"", content:[]}],[{id:"1100",title:"", content:[]}],
        [{id:"1200",title:"", content:[]}],[{id:"1300",title:"", content:[]}],[{id:"1400",title:"", content:[]}]],
        ScheduleSize:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    }
    
    render(){
        const tmpStyle={
            width:"288px",
            height:"76.5vh",
            border:"1px solid black",
            margin:"5px",
            borderRadius:"10px"   
        }

        const tmpStyle2={
            width:"400px",
            height:"80vh",
            border:"1px solid black",
            margin:"10px",
            position:"absolute",
            left:"-140%",
            top:"-1vh",
            zIndex:'2',
            backgroundColor:'white',
            overflow:"auto",
            borderRadius:"10px 0px 0px 10px"    
        }

        const tmpStyle3={
            width:"auto",
            height:"auto",
            border:"1px solid black",
            margin:"10px",
            padding:"5px",
            borderRadius:"10px" 
        }
        
        var size = ((this.props.end1).getTime() - (this.props.start1).getTime()) / (1000 * 60 * 60 * 24)
        var startd = this.props.start1
        this.state.ScheduleList = this.props.ScheduleList
        this.state.ScheduleSize = this.props.ScheduleSize
        const SList = this.state.ScheduleList
        const SSList = SList.slice(0 ,size+1)
        var i = 0;

        const DList = []
        var p = new Date();
        for(let j=0; j<=size; j++){
            p.setTime(startd.getTime() + (1000 * 60 * 60 * 24) * j)
            DList[j] = parseInt((p).getFullYear()) + "." + parseInt((p).getMonth() + 1) + "." + parseInt((p).getDate())
        }
        
        const FoodList=this.props.ffList
        
        const handleChange = (result) => {
        
            if((!result.destination)) {
                if(result.source.droppableId !== "Food"){
                    const num = result.source.droppableId - 1;
                    var items = [...this.state.ScheduleList[result.source.droppableId - 1]];
                    items.splice(result.source.index, 1);
                    const tmpList = this.state.ScheduleList;
                    tmpList[num] = items;

                    const sizeList = this.state.ScheduleSize
                    sizeList[num] = sizeList[num] - 1;  
                    this.setState({
                        ScheduleList:tmpList,
                        ScheduleSize:sizeList
                    });
                    store3.dispatch({type:'INCREMENT', li:this.state.ScheduleList, size:this.state.ScheduleSize, num:1})                 
                }
                else{
                    store2.dispatch({type:'INCREMENT', id:0, index:result.source.index})
                }
            }
            else if(result.destination.droppableId === "Food"){}
            else if(result.destination.droppableId === result.source.droppableId){
                const items = [...this.state.ScheduleList[result.destination.droppableId - 1]];
                const [reorderedItem] = items.splice(result.source.index, 1);
                items.splice(result.destination.index, 0, reorderedItem);
                const tmpList = this.state.ScheduleList;
                tmpList[result.destination.droppableId - 1] = items;

                this.setState({
                    ScheduleList:tmpList
                });
                store3.dispatch({type:'INCREMENT', li:this.state.ScheduleList, size:this.state.ScheduleSize, num:1})
                
            }else if((result.destination.droppableId !== "Food")){
                var c = []
                if(result.source.droppableId !== "Food"){
                    const tmp = this.state.ScheduleList
                    c = tmp[result.source.droppableId - 1][result.source.index].content
                }
                
                var sizeList = this.state.ScheduleSize;
                var num = result.destination.droppableId-1;
                const name = result.draggableId;
                var _contents = this.state.ScheduleList;
                _contents[num][this.state.ScheduleSize[num]] = {id:(String(num*10) + String(sizeList[num])), title:String(name + "_" + (String(num*10) + String(sizeList[num]))), content:c};                
                sizeList[num] = sizeList[num] + 1;

                if(result.source.droppableId !== "Food"){
                    num = result.source.droppableId - 1;
                    var items = [...this.state.ScheduleList[result.source.droppableId - 1]];
                    items.splice(result.source.index, 1);            
                    _contents[num] = items;
                    sizeList[num] = sizeList[num] - 1;
                }

                this.setState({
                ScheduleList:_contents,
                ScheduleSize:sizeList
                });
                store3.dispatch({type:'INCREMENT', li:this.state.ScheduleList, size:this.state.ScheduleSize, num:1})
            }
        };      
        
        return(
            <DragDropContext onDragEnd={result => handleChange(result)}>    
                <button onClick={function(){
                    store3.dispatch({type:'INCREMENT', li:this.state.ScheduleList, size:this.state.ScheduleSize, num:0})
                }.bind(this)}>숙소</button>
                <button onClick={function(){
                    store3.dispatch({type:'INCREMENT', li:this.state.ScheduleList, size:this.state.ScheduleSize, num:1}) 
                }.bind(this)}>식당</button>
                <button onClick={function(){
                    store3.dispatch({type:'INCREMENT', li:this.state.ScheduleList, size:this.state.ScheduleSize, num:2})
                }.bind(this)}>관광</button>
            <div>
                <div style={tmpStyle2}>
                    {SSList.map((tList) => {
                        return (
                            <div style={tmpStyle3}><h4><Printer e = {DList[i++]} ></Printer></h4>
                        
                            <Droppable droppableId={i}>
                                {(provided) => (
                                <div ref={provided.innerRef} >
                                    {tList.map(( item, index ) => (
                                        <Draggable key={item.id} draggableId={item.title} index={index} draggableProps={item.title}>
                                        {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.dragHandleProps}
                                            {...provided.draggableProps}
                                            >
                                            <Element e={item.title} li={item.content} num1={item.id} num2={index}></Element>
                                        </div>
                                    )}
                                    </Draggable>
                                    ))}{provided.placeholder}
                                </div>
                                )}
                            </Droppable>

                        </div>
                    );})}
                </div>
                <div style={tmpStyle}><h3><Printer e ={"식당"}></Printer></h3>                    
                        <Droppable droppableId="Food">
                            {(provided) => (
                            <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            >
                            {FoodList.map(( item, index) => (
                                <Draggable key={item.id} draggableId={item.title} index={index} draggableProps={item.title}>
                                    {(provided) => {
                                        return(
                                    
                                    <div className="snapshot" 
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    >
                                        <Element2 e={item.title}></Element2>
                                    </div>
                                );}}
                                </Draggable>
                                ))}{provided.placeholder}
                            </div>
                            )}
                        </Droppable>
                    </div>
                </div>
            </DragDropContext>                
            
        );
    }
}

export default Food;
