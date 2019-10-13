import React from "react";

class Login extends React.Component {
	constructor(props) {
		this.state = {
			username: "",
			password: ""
		};
	};

	render() {
		return (
			<form>
				<label for="l-username">
					<input type="text" name="l-username" />
				</label>

				<label for="l-password">
					<input type="password" name="l-password" />
				</label>

				<input type="submit" value="Login" />
			</form>
		);
	};
};

export default Login;