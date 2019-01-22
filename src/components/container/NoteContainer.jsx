import React, { Component } from "react";
import ReactDom from "react-dom";
// import Note from "../note/Note.jsx";

class NoteContainer extends Component {
	constructor() {
		super();
		this.state = {
			title: ""
		};
	}
	render() {
		return <form id="noteContainer">Hi there</form>;
	}
}

export default NoteContainer;

const wrapper = document.getElementById("root");
wrapper ? ReactDom.render(<NoteContainer />, wrapper) : false;
