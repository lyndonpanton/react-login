import React from "react";

class Signup extends React.Component {
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

		if (username.indexOf(" ") !== -1 || password.indexOf(" ") !== -1) {
			this.props.handleSubmit(username, password);

			this.setState({
				username: "",
				password: ""
			});
		} else {
			console.log("username must not contain spaces");
		}
	};

	render() {
		const { username, password } = this.state;

		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="s-username">
					<input type="text" name="username" value={username} onChange={this.handleChange} />
				</label>

				<label htmlFor="s-password">
					<input type="password" name="password" value={password} onChange={this.handleChange} />
				</label>

				<input type="submit" value="Add User" />
			</form>
		);
	};
};

export default Signup;