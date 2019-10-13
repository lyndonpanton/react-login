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

	handleSubmit = (event) => {
		event.preventDefault();

		const { username, password } = this.state;

		if (this.props.handleSubmit(username, password)) {
			this.setState({
				username: "",
				password: ""
			});
		} else {
			// only reset password
			this.setState({
				password: ""
			});
		}
	};

	render() {
		const { username, password } = this.state;

		return (
			<form onSubmit={this.handleSubmit}>
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