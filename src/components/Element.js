import React, {Component} from "react";
import store5 from "../store5";

class Element extends Component{
    state = {
        contentlist:[]
    }
    
    render(){
        const tmpStyle={
            width:"auto",
            height:"auto",
            margin:"10px",
            padding:"10px"
        }
        this.state.contentlist = this.props.li
        var i = 0
        var l = this.state.contentlist
        const result = l.map(title => (
            <p>{" - "+l[i++]}</p>
        ))

        return(
            <div style={tmpStyle} draggable>               
                <li> {this.props.e} <button onClick={function(){

                    var t = prompt("Memo")                  
                    if(t !== null){
                        this.state.contentlist[this.state.contentlist.length] = t
                        store5.dispatch({type:'INCREMENT', num1:(parseInt(parseInt(this.props.num1)/100)),
                        num2:this.props.num2, li:this.state.contentlist})
                    }
                }.bind(this)}>+memo</button></li>
                {result}
            </div>
        );
    }
}

export default Element;