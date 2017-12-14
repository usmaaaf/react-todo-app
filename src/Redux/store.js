import createStore from 'redux-zero';

const initialState = {todos: ['live', 'sleep', 'die']};
const store = createStore(initialState);

export default store;