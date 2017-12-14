import React, {Component} from 'react';

import { connect } from 'redux-zero/react';
import axios from 'axios';

class AddTodo extends Component {

    handleSubmit(e) {
        e.preventDefault();
        this.props.addTodo({text: this.refs.title.value});
    }

    render() {
        
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
  addTodo: async(state, props) => {
      const request = await axios.post("https://express-todoapi.herokuapp.com/api/v1/todo", props);
  console.log(request)
  return { 
    ...state,
    todos: state.todos.concat(request.data.data)
}}
});


export default connect(maptoprops, actions)(AddTodo)

