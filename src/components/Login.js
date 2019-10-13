import React from "react";

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};
	};

	handleChange = (event) => {
		const { name, value } = event.target;

		this.setState({
			[name]: value
		});
	};

	render() {
		const { username, password } = this.state;

		return (
			<form>
				<label htmlFor="l-username">
					<input type="text" name="username" value={username} onChange={this.handleChange} />
				</label>

				<label htmlFor="l-password">
					<input type="password" name="password" value={password} onChange={this.handleChange} />
				</label>

				<input type="submit" value="Login" />
			</form>
		);
	};
};

export default Login;