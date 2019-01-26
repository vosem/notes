import React, { Component } from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";

const Author = ({ label, text, type, id, value, handleAuthorChange }) => (

		<input
			type={type}
			className="note-author"
			id={id}
			value={value}
			onChange={handleAuthorChange}
			required
		/>

);
Author.propTypes = {
	type: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	handleAuthorChange: PropTypes.func.isRequired
};

export default Author;