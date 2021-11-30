import {createStore} from 'redux';

export default createStore(function(state, action){
       
    if(action.type === 'INCREMENT'){
        return{num1:action.num1, num2:action.num2, li:action.li}
    }
    
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
