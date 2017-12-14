import React, {Component} from 'react';
import TodoItems from './TodoItem';
import {connect} from 'redux-zero/react';

class Todo extends Component {

  openTodo(modal) {
    this
      .props
      .onOpen(modal);
  }

  editTodo(edit, indent) {
    this
      .props
      .editTodo(edit, indent);
  }

  render() {
    console.log(this.props.todos);
    return (
      <div className="todos">
        {this.props.todos
          ? this
            .props
            .todos
            .map((todo, index) => {
              return (<TodoItems
                onEdit={(edit) => this.editTodo(edit, index)}
                id={index}
                key={todo}
                todo={todo}/>);
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
  },
  editTodo: (state, props, indexing) => {
    return {
      ...state,
      todos: state
        .todos
        .map((todo, index) => {
          if (index === indexing) {
            return props;
          }
          return todo
        })
    }
  }
});

export default connect(maptoprops, actions)(Todo)
