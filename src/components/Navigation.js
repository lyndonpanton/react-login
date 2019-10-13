import React from "react";

const Navigation = (props) => {
	const navigationItems = props.map((tab, index) => {
		return (
			<li key={index} className={tab.toLowercase()}>{tab}</li>
		);
	});

	return (
		<ul>
			{ navigationItems }
		</ul>
	);
};

export default Navigation;