import {createStore} from 'redux';

export default createStore(function(state, action){
    if(state === undefined){
        return{name:0}
    }    
    else if(action.type === 'INCREMENT'){
        return{id:action.id, name:action.name}
    }
    
    
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)