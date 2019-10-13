import React from "react";
import Header from "./Header";
import Signup from "./Signup";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "React Login",
			users: [
				{
					username: "alicealison",
					password: "01234"
				},
				{
					username: "bobbobson",
					password: "56789"
				}
			]
		};
	};

	addUser = (username, password) => {
		const users = this.state.users.concat([{
			username: username,
			password: password
		}]);

		this.setState({
			users: users
		});
	};

	render() {
		const { name } = this.state;

		return (
			<div className="app">
				<Header name={name} />
				<Signup handleSubmit={this.addUser} />
			</div>
		);
	};
};

export default App;