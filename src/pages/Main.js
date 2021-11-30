import { render } from '@testing-library/react';
import { Component } from 'react/cjs/react.production.min';
import CreateComponent from '../components/CreateComponent';
import Schedule from '../components/Schedule';
import ViewList from '../components/ViewList';
import SearchPlace from '../useEffect/SearchPlace';
import store from '../store';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import RButton from '../components/Button_R';
import LButton from '../components/Button_L';
import { BrowserRouter, Route } from 'react-router-dom';

class Main extends Component {
  state = {id:store.getState().id, name:store.getState().name,
    StayList:[],
    FoodList:[],
    PlayList:[],
    start:20211110,
    end:20211116,
    ScheduleList:[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]} 
  constructor(props){
    super(props);
    store.subscribe(function(){
      this.setState({id:store.getState().id, name:store.getState().name});
      if(this.state.id === 1){
        this.StaySize = this.StaySize + 1;
          var _contents = this.state.StayList.concat(
            {id:this.StaySize, title:this.state.name}
          )
          this.setState({
            StayList:_contents
          });
      }else if(this.state.id === 2){
        this.FoodSize = this.FoodSize + 1;
          var _contents = this.state.FoodList.concat(
            {id:this.FoodSize, title:this.state.name}
          )
          this.setState({
            FoodList:_contents
          });
      }else if(this.state.id === 3){
        this.PlaySize = this.PlaySize + 1;
          var _contents = this.state.PlayList.concat(
            {id:this.PlaySize, title:this.state.name}
          )
          this.setState({
            PlayList:_contents
          });
      }
    }.bind(this));
    this.StaySize = 0;
    this.FoodSize = 0;
    this.PlaySize = 0;   
  }
  render(){
    return (
      <div className="main">
        <SearchPlace></SearchPlace>
        <RButton></RButton>
        <LButton></LButton>
        <DndProvider backend={HTML5Backend}>
          <Schedule start={this.state.start} end={this.state.end} ScheduleList={this.state.ScheduleList}> </Schedule>
          <ViewList sList={this.state.StayList} fList={this.state.FoodList} pList={this.state.PlayList}> </ViewList>
        </DndProvider>  
       
      </div>
    );
  }
}

export default Main;
