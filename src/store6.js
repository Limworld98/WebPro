import {createStore} from 'redux';

export default createStore(function(state, action){
       
    if(action.type === 'INCREMENT'){
        return{location:action.location}
    }
    
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
