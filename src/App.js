import { render } from '@testing-library/react';
import { Component } from 'react/cjs/react.production.min';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components'

import Login from './pages/Login';
import DatePicker from './pages/DatePicker';
import Main from './pages/Main';
import Final from './pages/Final'

import store from './store';
import store2 from './store2';
import store3 from './store3';
import store4 from './store4';
import store6 from './store6';

class App extends Component {
  state = {
    location:" ",
    StayList:[],
    FoodList:[],
    PlayList:[],
    start:new Date(),
    end:new Date(),
    ScheduleList:[[{id:"00",title:"", content:[]}],[{id:"100",title:"", content:[]}],[{id:"200",title:"", content:[]}],
        [{id:"300",title:"", content:[]}],[{id:"400",title:"", content:[]}],[{id:"500",title:"", content:[]}],
        [{id:"600",title:"", content:[]}],[{id:"700",title:"", content:[]}],[{id:"800",title:"", content:[]}],
        [{id:"900",title:"", content:[]}],[{id:"1000",title:"", content:[]}],[{id:"1100",title:"", content:[]}],
        [{id:"1200",title:"", content:[]}],[{id:"1300",title:"", content:[]}],[{id:"1400",title:"", content:[]}]],
    ScheduleSize:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  }
  constructor(props){
    super(props);
    store.subscribe(function(){
      this.setState({id:store.getState().id, name:store.getState().name});
      if(this.state.id === 1){
        this.StaySize = this.StaySize + 1;
          var _contents = this.state.StayList.concat(
            {id:("10"+String(this.StaySize)), title:this.state.name}
          )
          this.setState({
            StayList:_contents
          });
      }else if(this.state.id === 2){        
        this.FoodSize = this.FoodSize + 1;
          var _contents = this.state.FoodList.concat(
            {id:("20"+String(this.FoodSize)), title:this.state.name}
            )
          this.setState({
            FoodList:_contents
          });
      }else if(this.state.id === 3){
        this.PlaySize = this.PlaySize + 1;
          var _contents = this.state.PlayList.concat(
            {id:("30"+String(this.PlaySize)), title:this.state.name}
          )
          this.setState({
            PlayList:_contents
          });
      }
    }.bind(this));

    store2.subscribe(function(){
      var id = store2.getState().id; 
      var index = store2.getState().index;    
      if(id === 0){
        var _contents = this.state.StayList;
        _contents.splice(index, 1);
        this.setState({
          StayList:_contents
        });
      }
      else if(id === 1){
        var _contents = this.state.FoodList;
        _contents.splice(index, 1);
        this.setState({
          FoodList:_contents
        });
      }
      else if(id === 2){
        var _contents = this.state.PlayList;
        _contents.splice(index, 1);
        this.setState({
          PlayList:_contents
        });
      }
    }.bind(this));

    store3.subscribe(function(){
      this.setState({c:store3.getState().num, ScheduleList:store3.getState().li, ScheduleSize:store3.getState().size});
    }.bind(this));

    store4.subscribe(function(){
      if(store4.getState().id === 0){
          this.setState({start:store4.getState().date});
      }
      else if(store4.getState().id === 1){
          this.setState({end:store4.getState().date});
      }
    }.bind(this));

    store6.subscribe(function(){
      this.setState({location:store6.getState().location})
    }.bind(this))

    this.StaySize = 0;
    this.FoodSize = 0;
    this.PlaySize = 0;   
  }

  render(){
    

    return (
      <div className='App'>
        <BrowserRouter>
          <Routes>
           <Route path="/" element={<Login/>} />
           {/* <Route path="/Register" element={<Register/>} /> */}
           <Route path="/DatePicker" element={<DatePicker/>} />
           <Route path="/Main" element={<Main start={this.state.start} end={this.state.end} location={this.state.location}/>}/>
           <Route path="/Final" element={<Final start1={this.state.start} end1={this.state.end} li={this.state.ScheduleList} location={this.state.location} />} />
          </Routes>
        </BrowserRouter>       
      </div>
    );
  }
}

export default App;
