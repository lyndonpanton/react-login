import React from "react";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
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

	render() {
		return (
			<div className="app">
				<h1>React Login</h1>
			</div>
		);
	};
};

export default App;