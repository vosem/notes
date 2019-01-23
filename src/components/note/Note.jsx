import React, { Component } from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";

const Note = ({ label, text, type, id, value, handleChange }) => (
	<div className="form-group">
		<label htmlFor={label}>{text}</label>
		<textarea
			type={type}
			className="form-control"
			id={id}
			value={value}
			onChange={handleChange}
			required
		/>
	</div>
);
Note.propTypes = {
	label: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired
};

export default Note;

// const noteContainer = document.getElementById("noteContainer");
// noteContainer ? ReactDom.render(<Note />, noteContainer) : false;
// console.log(noteContainer);
