import React, { useContext, useState } from "react"
import { AppContext } from "../../App"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism"
// import { solarizeddark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function EditorComponent() {
	const { text, setText, user, setUser, selectedNote, notes, setNotes, setSelectedNote } = useContext(AppContext)

	return (
		<div className="container">
			<form className="note-write-form">
				<input className="user" on onInput={(e)=> {
					setSelectedNote(prevState => ({
						...prevState,
						title: e.target.value
					  }));
					console.log(e.target.value)
					console.log(selectedNote)
				}}/>
				<textarea
					className="note-input"
					value={text}
					onChange={e => {
						setText(e.target.value)
						setNotes(e.target.value)
					}}
				/>
			</form>
			<SyntaxHighlighter language="javascript" style={atomDark}>
				{text}
			</SyntaxHighlighter>
		</div>
	)
}
