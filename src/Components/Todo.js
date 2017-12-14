import React, {Component} from 'react';
import TodoItems from './TodoItem';
import {connect} from 'redux-zero/react';
import axios from 'axios';

class Todo extends Component {

  openTodo(modal) {
    this
      .props
      .onOpen(modal);
  }
  componentDidMount(){
    this.props.getTodos();
  }



  render() {
    return (
      <div className="todos">
        {this.props.todos
          ? this
            .props
            .todos
            .map((todo, index) => {
              return (<TodoItems
                id={todo._id}
                key={todo._id}
                todo={todo.text}/>);
            })
          : null
}
      </div>
    );
  }

}
const maptoprops = ({todos}) => ({todos});

const actions = store => ({
getTodos: async(state) => {
              const request =  await axios.get("https://express-todoapi.herokuapp.com/api/v1/todo/")
              console.log(request.data)
              if(request.data.length > 1){
                return{
                  ...state,
                  todos: state.todos.concat(request.data.data)
                }
              }
              
            }
});

export default connect(maptoprops, actions)(Todo)
