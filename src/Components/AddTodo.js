import React, {Component} from 'react';

import { connect } from 'redux-zero/react';

class AddTodo extends Component {

    handleSubmit(e) {
        e.preventDefault();
        this.props.addTodo(this.refs.title.value);
    }

    render() {
        console.log(this.props.todos);
        return (
            <div >
                <h3>Add Todo</h3>
                <form className="formy" onSubmit={(e) => this.handleSubmit(e)}>
                    <div>
                        <input className="inputy" type="text" ref="title"/>
                    </div>
                    <input className="inputy" type="submit" value="Add Todo"/>
                </form>
            </div>
        );
    }

}
const maptoprops = ({ todos }) => ({ todos });

const actions = store => ({
  addTodo: (state, props) => { return { 
    ...state,
    todos: state.todos.concat(props)
}}
});


export default connect(maptoprops, actions)(AddTodo)

