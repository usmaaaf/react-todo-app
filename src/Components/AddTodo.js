import React, {Component} from 'react';

class AddTodo extends Component {
    constructor() {
        super();
        this.state = {
            newTodo: []
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({
            newTodo: this.refs.title.value
        }, function () {
            //console.log(this.state);
            this
                .props
                .addTodo(this.state.newTodo);
        });
        this.refs.title.value = " ";
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

export default AddTodo;
