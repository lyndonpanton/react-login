import React from "react";
import Header from "./Header";
import Signup from "./Signup";
import Login from "./Login";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: false,
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

	handleLog = () => {
		const loggedIn = this.state.loggedIn;

		this.setState({
			loggedIn: !loggedIn
		});
	};

	handleLogin = (username, password) => {
		const users = this.state.users;

		const login = users.filter((user, index) => {
			if (user.username === username && user.password === password) {
				return true;
			} else {
				return false;
			}
		});

		if (login.indexOf(true) !== -1) {
			this.handleLog();
		} else {
			// error
		}
	};

	render() {
		const { loggedIn, name } = this.state;

		return (
			<div className="app">
				<Header name={name} />
				<Signup handleSubmit={this.addUser} />
				<Login loggedIn={loggedIn} />
			</div>
		);
	};
};

export default App;