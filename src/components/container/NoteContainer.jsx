import React, { Component } from "react";
import ReactDom from "react-dom";
import Note from "../note/Note.jsx";
import Author from "../author/Author.jsx";

class NoteContainer extends Component {
	constructor() {
		super();
		this.state = {
			title: ""
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ [event.target.id]: event.target.value });
	}

	render() {
		const { title } = this.state;
		return (
			<form id="article-form">
								<Author
					type="text"
					id="author"
					value={title}
					handleChange={this.handleChange}
				/>
				<Note
					label="title"
					type="text"
					id="title"
					value={title}
					handleChange={this.handleChange}
				/>
			</form>
		);
	}
}

export default NoteContainer;

const wrapper = document.getElementById("root");
wrapper ? ReactDom.render(<NoteContainer />, wrapper) : false;
