import React, { Component } from "react";
import ReactDom from "react-dom";

class Note extends Component() {
	constructor() {
		super();
	}

	render() {
		return <input type="text">Hello</input>;
	}
}

export default Note;

const noteContainer = document.getElementById("noteContainer");
noteContainer ? ReactDom.render(<Note />, noteContainer) : false;
console.log(noteContainer);
