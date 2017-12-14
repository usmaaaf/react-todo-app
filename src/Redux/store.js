import createStore from 'redux-zero';
import axios from 'axios';

const request =  axios.get("https://express-todoapi.herokuapp.com/api/v1/todo/");
console.log(request)

const initialState = {todos: [], user:[]};
const store = createStore(initialState);

export default store;