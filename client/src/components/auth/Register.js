import React, { Component } from 'react'
import axios from 'axios';
import classnames from 'classnames';


    class Register extends Component {
        constructor() {
            super();
            this.state ={
                username: '',
                password: '',
                password2: '',
                errors: {}
            };

            this.onChange = this.onChange.bind(this);
            this.onSubmit = this.onSubmit.bind(this);

        }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        const newUser ={
            username: this.state.username,
            password: this.state.password,
            password2: this.state.password2
        };
        axios
            .post('/api/users/register', newUser)
            .then(res => console.log(res.data))
            .catch(err => this.setState({errors: err.response.data}));
    }


    render() {
        const { errors } = this.state;
        return (
        <div className="register">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Sign Up</h1>
                        <p className="lead text-center">Create your realiTi account</p>
                        <form onSubmit ={this.onSubmit}>
                            <div className="form-group">
                                <input 
                                type="text"
                                className="form-control form-control-lg" 
                                placeholder="Username"
                                name="username" 
                                value={this.state.username}
                                onChange={this.onChange}
                                /> 
                            </div>
                            <div className="form-group">
                                <input 
                                type="password" 
                                className="form-control form-control-lg" 
                                placeholder="Password"
                                name="password" 
                                value={this.state.password}
                                onChange={this.onChange}
                                /> 
                            </div>
                            <div className="form-group">
                                <input 
                                type="password" 
                                className="form-control form-control-lg" 
                                placeholder="Confirm Password"
                                name="password2" 
                                value={this.state.password2}
                                onChange={this.onChange}

                                /> 
                            </div>
                            <input type="submit" className="btn btn-info btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
    }


export default Register; 