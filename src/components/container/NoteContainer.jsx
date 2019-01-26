import React, { Component } from "react";
import ReactDom from "react-dom";
import Note from "../note/Note.jsx";
import Author from "../author/Author.jsx";
import './NoteContainer.scss';

class NoteContainer extends Component {
	constructor() {
		super();
		this.state = {
			title: ""
		};
		this.handleAuthorChange = this.handleAuthorChange.bind(this);
		this.handleNoteChange = this.handleNoteChange.bind(this);
	}

	handleAuthorChange(event) {
		this.setState({ [event.target.id]: event.target.value });
	}
	handleNoteChange(event) {
		this.setState({ [event.target.id]: event.target.value });
	}

	render() {
		const { title } = this.state;
		const { author } = this.state;
		return (
			<form id="note-form">
				<Author
					type="text"
					id="author"
					value={author}
					handleAuthorChange={this.handleAuthorChange}
				/>
				<Note
					label="title"
					type="text"
					id="title"
					value={title}
					handleNoteChange={this.handleNoteChange}
				/>
			</form>
		);
	}
}

export default NoteContainer;

const wrapper = document.getElementById("root");
wrapper ? ReactDom.render(<NoteContainer />, wrapper) : false;
