import React, {Component} from 'react';
import axios from 'axios';

import { connect } from 'redux-zero/react';
import {Link} from 'react-router-dom';

class Register extends Component {

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
        this.props.register({
            email: this.refs.email.value,
            password: this.refs.pass.value
        }, this.props.history)
    }

    render() {
        return (
            <div className="Login">
            <p>{this.props.error}</p>
                <form onSubmit={(e) => this.userMatch(e)}>

                    <input
                        type="text"
                        
                        ref="email"
                        placeholder="Email"
                        onChange={(event) => this.handleOnChange(event)}/>

                    <input
                        ref="pass"
                        type="password"
                        placeholder="pass"
                        onChange={(event, newValue) => this.handleOnChange(event, newValue)}/>
                        <input type="submit" value="submit"/>

                </form>
                <Link to="/login">Already have an account?</Link>
            </div>
        );
    }
}
const maptoprops = ({ error, user }) => ({ error,user });

const actions = store => ({
    register: async(state, props, history) => { 
        const request = await axios.post("https://express-todoapi.herokuapp.com/api/v1/register", props);
        console.log(request.data)
        if(request.data.success){
            history.push("/App");
            return { 
                ...state,
                user: request.data.data
            }
        } else if(request.data.error)
        {return {...state, error:"Email already exists" }
}        }
  });

export let Registers = connect(maptoprops, actions)(Register)