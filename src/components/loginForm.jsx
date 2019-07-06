import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: { }
  };

  // the createRef attaches field to state
  username = React.createRef();
  password = React.createRef();

  handleChange = ({ currentTarget: input }) => {
    // Clone the account state, get the value typed in, set account to new state
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  
  // Takes an event object
  handleSubmit = e => {
    e.preventDefault();
    // call server, save changes, redirect user
    const errors = this.validate();
     console.log(errors);
    this.setState({errors});
    if (errors) return;

    console.log("submitted");
  };

  validate = () => {
    const errors = {};
    const { account } = this.state
    if (account.username.trim() === '')
      errors.username = 'Username is required.';
    if (account.password.trim() === '')
      errors.password = 'Password is required.';

    return Object.keys(errors) === 0 ? null: errors;
   }
  render() {
    const { account } = this.state;

    return (
      <div>
        <h1>Login form</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            autoFocus
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
