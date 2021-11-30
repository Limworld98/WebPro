import {createStore} from 'redux';

export default createStore(function(state, action){
       
    if(action.type === 'INCREMENT'){
        return{li:action.li, size:action.size, num:action.num}
    }
    
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
