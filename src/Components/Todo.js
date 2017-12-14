import React, {Component} from 'react';
import TodoItems from './TodoItem';
import {connect} from 'redux-zero/react';

class Todo extends Component {

  openTodo(modal) {
    this
      .props
      .onOpen(modal);
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
  deleteTodo: (state, props) => {
    return {
      ...state,
      todos: state
        .todos
        .filter((todo) => todo !== props)
    }
  }
});

export default connect(maptoprops, actions)(Todo)
