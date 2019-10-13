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

	render() {
		const { username, password } = this.state;

		return (
			<form>
				<label for="s-username">
					<input type="text" name="username" value={username} onChange={this.handleChange} />
				</label>

				<label for="s-password">
					<input type="password" name="password" value={password} onChange={this.handleChange} />
				</label>

				<input type="submit" value="Add User" />
			</form>
		);
	};
};

export default Signup;