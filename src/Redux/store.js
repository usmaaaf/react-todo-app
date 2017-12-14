import createStore from 'redux-zero';


const initialState = {todos: [], user:[], error: ""};
const store = createStore(initialState);

export default store;