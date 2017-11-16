import React, {Component} from 'react';
import TodoItems from './TodoItem';
import '../modal.css';


  class openModal extends Component {
    constructor (props) {
      super(props)
      
      this.state = {
        modalOpened: false
      }
      
      this.modalToggle = this.modalToggle.bind(this)
    }
    
    modalToggle () {
      this.setState({ modalOpened: !this.state.modalOpened })
    }
  
    render () {
      console.log(this.state);
      const coverClass = this.state.modalOpened ? 'modal-cover modal-cover-active' : 'modal-cover'
      const containerClass = this.state.modalOpened ? 'modal-container modal-container-active' : 'modal-container'
      return (
        <div className="todo-div">
          
          <li className="todoItem todo-list" onClick={this.modalToggle}>
                    {this.props.todo}  <a className="item-remove" onClick={() => this.deleteTodo(this.props.todo)}>  x  </a>
                </li>
          
          <div className={containerClass}>
            <div className='modal-header'></div>
            <div className='modal-body'></div>
            <div className='modal-footer'></div>
          </div>
          
          <div className={coverClass} onClick={this.modalToggle}></div>
        </div>
      )
    }
  }
export default openModal;
