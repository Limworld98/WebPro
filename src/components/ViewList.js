import React, {Component} from "react";
import Stay from "./Stay";
import Play from "./Play";
import Food from "./Food";

class ViewList extends Component{
    constructor(props){
        super(props);
        this.state = {
            c : 0
        }
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
            backgroundColor:'white'     
        }
        
        return(
            <div style={tmpStyle}>
                <button onClick={function(){
                    this.setState({c : 0});
                }.bind(this)}>Stay</button>
                <button onClick={function(){
                    this.setState({c : 1});
                }.bind(this)}>Food</button>
                <button onClick={function(){
                    this.setState({c : 2});
                }.bind(this)}>Play</button>
                {this.state.c===0
                ? <Stay ssList={this.props.sList}></Stay> 
                : null
                }
                {this.state.c===1              
                ? <Food ffList={this.props.fList}></Food>
                : null
                }    
                {this.state.c===2
                ? <Play ppList={this.props.pList}></Play>
                : null
                }
                
            </div>
        );
    }
}

export default ViewList;