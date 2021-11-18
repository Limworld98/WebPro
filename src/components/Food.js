import React, {Component} from "react";
import Element from "./Element";

class Food extends Component{
  
    render(){
        const tmpStyle={
            width:"288px",
            height:"76.5vh",
            border:"1px solid black",
            margin:"5px",
            
        }
        
        const FoodList=this.props.ffList
        
        var i = 0;
        const bList = FoodList.map(title =>(
            <Element e={FoodList[i++].title}></Element>   
        ))

        return(
            <div style={tmpStyle}>
                <h3>Food</h3>
                {bList}
            </div>
        );
    }
}

export default Food;