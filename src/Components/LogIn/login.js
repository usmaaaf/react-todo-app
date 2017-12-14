import React, {Component} from 'react';
import axios from 'axios';

import { connect } from 'redux-zero/react';

class Logins extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            pass: ""
        }
    }

    handleOnChange(event, newValue) {
        this.setState({
            [event.target.name]: newValue
        })

    }
    userMatch(e) {
        e.preventDefault();
        this.props.login({
            email: this.refs.email.value,
            password: this.refs.pass.value
        })


    }

    render() {
        console.log(this.props.user)
        return (
            <div className="Login">

                <form onSubmit={(e) => this.userMatch(e)}>

                    <input
                        type="text"
                        
                        ref="email"
                        placeholder="Email"
                        onChange={(event) => this.handleOnChange(event)}/>

                    <input
                        type="text"
                        ref="pass"
                        type="password"
                        placeholder="pass"
                        onChange={(event, newValue) => this.handleOnChange(event, newValue)}/>
                        <input type="submit" value="submit"/>

                </form>
            </div>
        );
    }
}
const maptoprops = ({ user }) => ({ user });

const actions = store => ({
    login: async(state, props) => { console.log(state, props)
        const request = await axios.post("https://express-todoapi.herokuapp.com/api/v1/login", props);
        return { 
      ...state,
      user: request.data.data

  }}
  });

export let Login = connect(maptoprops, actions)(Logins)