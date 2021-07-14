import React, { Component } from "react";
import { loginUser } from "../lib/auth";

interface Props {}

interface State {
  email: string;
  password: string;
}

class LoginForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    let newState: any = {};
    newState[name] = value;
    this.setState(newState);
  };

  handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const { email, password } = this.state;
    loginUser(email, password);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              name="email"
              type="email"
              placeholder="email"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              name="password"
              type="password"
              placeholder="password"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
