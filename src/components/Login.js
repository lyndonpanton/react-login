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
		const loggedIn = (this.props.loggedIn);

		if (!loggedIn) {
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
		} else {
			const { password, username } = this.props.currentUser;

			return (
				<div>
					<h2>Welcome Back</h2>
					<div>
						<p>Your username is: { username }</p>
						<p>Your password is: { password }</p>
					</div>
				</div>
			);
		}
	};
};

export default Login;