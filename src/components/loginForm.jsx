import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" }
  };

  // the createRef attaches field to state
  username = React.createRef();
  password = React.createRef();

  componentDidMount() {
    // Once the form loads, make username the focused field
    // this.username.current.focus();
  }

  handleChange = ({ currentTarget: input }) => {
    // Clone the account state, get the value typed in, set account to new state
    const account = { ...this.state.account };
    // account.[e.currentTarget.name] = e.currentTarget.value;
    account[input.name] = input.value;
    this.setState({ account });
  };

  // Takes an event object
  handleSubmit = e => {
    e.preventDefault();
    // call server, save changes, redirect user

      console.log("submitted");
  };

  render() {
    const { account } = this.state;

    return (
      <div>
        <h1>Login form</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">User name</label>
            <input
              value={account.username}
              name="username"
              onChange={this.handleChange}
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={account.password}
              name="password"
              onChange={this.handleChange}
              id="password"
              type="text"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
