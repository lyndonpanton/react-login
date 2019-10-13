import React from "react";

const Database = (props) => {
	const users = props.users.map((user, index) => {
		return (
			<tr key={index}>
				<td>{user.username}</td>
				<td>{user.password}</td>
				<td><button>Delete</button></td>
			</tr>
		);
	});

	return (
		<table>
			<thead>
				<tr>
					<td>Username</td>
					<td>Password</td>
					<td>Delete</td>
				</tr>
			</thead>
			<tbody>
				{ users }
			</tbody>
			<tfoot>
				<tr>
					<td colSpan="3">This table is rendered using ReactJS</td>
				</tr>
			</tfoot>
		</table>
	);
};

export default Database;