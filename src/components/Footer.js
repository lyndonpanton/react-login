import React from "react";

const Footer = (props) => {
	const { author, rights, year } = props.creation;
	
	return (
		<footer>
			<p>&copy; {year} {author} | {rights}</p>
		</footer>
	);
};

export default Footer;