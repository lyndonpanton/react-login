import React from "react";
import Navigation from "./Navigation";

const Header = (props) => {
	const tabs = ["Signup", "Login", "Database"];

	return (
		<header>
			<h1>{props.name}</h1>
			<Navigation tabs={tabs}/>
		</header>
	);
};

export default Header;