import React, { Component } from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";

const Author = ({ label, text, type, id, value, handleChange }) => (

		<input
			type={type}
			className="note-author"
			id={id}
			value={value}
			onChange={handleChange}
			required
		/>

);
Author.propTypes = {
	type: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired
};

export default Author;