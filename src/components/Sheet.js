import React, {Component} from "react";
import Element from "./Element";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import store2 from "../store2"

class Sheet extends Component{
    render(){
        const tmpStyle={
            width:"auto",
            height:"auto",
            border:"1px solid black",
            margin:"10px",
            padding:"5px"
        }
        
        const handleChange = (result) => {
            
            if (!result.destination) return;
            const items = [...ScheduleList];
            const [reorderedItem] = items.splice(result.source.index, 1);
            items.splice(result.destination.index, 0, reorderedItem);
            store2.dispatch({type:'INCREMENT',li:items, num:this.props.cnt});
        };  

        const ScheduleList = this.props.li;

        return(
            <div style={tmpStyle}><h3>{this.props.e}</h3>
                <DragDropContext onDragEnd={handleChange}>
                    <Droppable droppableId="Schedule1" index={0}>
                        {(provided, snapshot) => (
                        <ul
                        className={'list', snapshot.isDraggingOver && 'draggingOver'}
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        >
                        {ScheduleList.map(({ id, title }, index) => (
                            <Draggable key={id} draggableId={id} index={index}>
                            {(provided, snapshot) => (
                             <div
                             style={provided.dragHandleProps.style}   
                             ref={provided.innerRef}
                                {...provided.dragHandleProps}
                                {...provided.draggableProps}
                                >
                                <Element e={title}></Element>
                                </div>
                            )}
                            </Draggable>
                            ))}{provided.placeholder}
                        </ul>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>
        );
    }
}

export default Sheet;