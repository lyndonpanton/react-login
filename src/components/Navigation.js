import React from "react";

const Navigation = (props) => {
	const navigationItems = props.tabs.map((tab, index) => {
		return (
			<li key={index} className={tab.toLowerCase()}>{tab}</li>
		);
	});

	return (
		<ul>
			{ navigationItems }
		</ul>
	);
};

export default Navigation;