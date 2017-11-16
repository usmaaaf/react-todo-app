import React, {Component} from 'react';
import TodoItems from './TodoItem';

class Todo extends Component {

  deleteTodo(del) {
    // console.log(del);
    this
      .props
      .onDelete(del);
  }

  openTodo(modal) {
    this
      .props
      .onOpen(modal);
  }

  editTodo(edit, indent) {
    console.log(edit);
    this
      .props
      .onEdit(edit, indent);
  }

  render() {
    let todoItems;
    if (this.props.todos) {
      todoItems = this
        .props
        .todos
        .map((todo, index) => {
          return (<TodoItems
            onEdit={(edit) => this.editTodo(edit, index)}
            onDelete={(del) => this.deleteTodo(del)}
            id={index}
            key={todo}
            todo={todo}/>);
        });
    }
    return (
      <div className="todos">
        {todoItems}
      </div>
    );
  }

}

export default Todo;
