import React from "react";

class Signup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};
	};

	render() {
		return (
			<form>
				<label for="s-username">
					<input type="text" />
				</label>

				<label for="s-password">
					<input type="password" />
				</label>

				<input type="submit" value="Add User" />
			</form>
		);
	};
};

export default Signup;