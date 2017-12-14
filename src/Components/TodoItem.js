import React, {Component} from 'react';
import '../App.css';
import '../modal.css';
import {connect} from 'redux-zero/react';

class TodoItem extends Component {
    //
    constructor(props) {
        super(props)

        this.state = {
            modalOpened: false
        }

        this.modalToggle = this
            .modalToggle
            .bind(this, this.props.todo)
    }

    modalToggle(ploy) {
        this.setState({
            modalOpened: !this.state.modalOpened,
            value: ploy
        })
        console.log(ploy)

    }

    editTodo(e) {
        e.preventDefault();
        this
            .props
            .onEdit(this.state.value);
        this.setState({modalOpened: false})
    }

    handleChange(inpval) {
        this.setState({value: inpval});
    }

    openTodo(modal) {
        this
            .props
            .onOpen(modal);
    }

    render() {
        const coverClass = this.state.modalOpened
            ? 'modal-cover modal-cover-active'
            : 'modal-cover'
        const containerClass = this.state.modalOpened
            ? 'modal-container modal-container-active'
            : 'modal-container'
        return (
            <div className="todo-div">

                <li className="todoItem todo-list" onClick={this.modalToggle}>

                <p>    {this.props.todo}</p>
                    <a
                        className="item-remove"
                        onClick={() => this.props.deleteTodo(this.props.todo)}>
                        x
                    </a>
                </li>

                <div className={containerClass}>
                    <div className='modal-header'>
                        Edit Your Todo</div>
                    <div className='modal-body'>
                        <form onSubmit={(e) => this.editTodo(e)}>
                            <input
                                type="text"
                                value={this.state.value}
                                ref="edit"
                                onChange={() => this.handleChange(this.refs.edit.value)}/>
                            <input type="submit" value="submit"/>
                        </form>
                    </div>

                    <div className='modal-footer'></div>
                </div>

                <div className={coverClass} onClick={this.modalToggle}></div>
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

export default connect(maptoprops, actions)(TodoItem)
