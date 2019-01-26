import React, { Component } from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";

const Note = ({ label, text, type, id, value, handleNoteChange }) => (
	<div className="note-group">
		<label htmlFor={label}>{text}</label>
		<textarea
			type={type}
			className="note-body"
			id={id}
			value={value}
			onChange={handleNoteChange}
			required
		/>
	</div>
);
Note.propTypes = {
	label: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	handleNoteChange: PropTypes.func.isRequired
};

export default Note;

// const noteContainer = document.getElementById("noteContainer");
// noteContainer ? ReactDom.render(<Note />, noteContainer) : false;
// console.log(noteContainer);
