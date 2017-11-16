import React, {Component} from 'react';
import './App.css';
import Todo from './Components/Todo';
import AddTodo from './Components/AddTodo';
// import OpenModal from './Components/OpenModal';
class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  componentWillMount() {
    this.setState({
      todos: ['live', 'sleep', 'die']
    })
  }

  handleAddTodo(todo) {
    let todos = this.state.todos;
    todos.push(todo);
    this.setState({todos: todos});
  }

  handleDeleteTodo(todo) {
    let newtodos = this.state.todos;
    newtodos = newtodos.filter(todosy => todosy !== todo);
    this.setState({todos: newtodos});
  }

  openModal(item) {
    this.setState({
      modalOpened: !this.state.modalOpened
    });

    console.log(this.state);
  }

  editHandleTodo(item, indent) {
    // console.log(item, indent);
    let newtodos = this.state.todos;
    var editiedarray = newtodos.map((editing, index) => {
      if (index === indent) {
        console.log(editing);
        return item;
      }
      return editing
    })

    console.log(editiedarray);
    this.setState({todos: editiedarray});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Arrange your todos!</h1>
        </header>
        <AddTodo addTodo={this
          .handleAddTodo
          .bind(this)}
        />
        <Todo
          todos={this.state.todos}
          onDelete={(del) => this.handleDeleteTodo(del)}
          onEdit={(edit, indent) => this.editHandleTodo(edit, indent)}
        /> 

      </div>
    );
  }

}

export default App;
