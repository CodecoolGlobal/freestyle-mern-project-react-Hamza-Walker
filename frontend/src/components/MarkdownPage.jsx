import { useContext } from "react"
import "../css/MarkdownPage.css"
import EditorComponent from "./markDownPagecomponents/EditorComponent"
import NotesDisplayComponent from "./markDownPagecomponents/NotesDisplayComponent"
import axios from "axios"
import { AppContext } from "../App"

export default function MarkdownPage() {
	const { text,user } = useContext(AppContext)
	//TODO: Import the users information after the login from the context API
	//TODO: use axios to POST, DELETE, PATCH
	//TODO: pass the updated user information in the body
	const formData = {
		name: text,
		password: "String",
		iconURL: "String",
		createdAt: "Date",
		updatedAt: "Date"
	}
	const handlePost = event => {
		axios
			.post("http://localhost:3000/api/user", formData)
			.then(response => {
				console.log(response.data)
			})
			.catch(error => console.error(error))
	}
	const handlePatch = event => {
		console.log(user)
	}
	const handleDelete = event => {
		console.log(event)
	}

	return (
		<>
			<div className="button-container">
				<button type="submit" className="submit-post-button" onClick={e => handlePost(e)}>
					Post
				</button>
				<button type="submit" className="submit-edit-button" onClick={e => handlePatch(e)}>
					Edit
				</button>
				<button type="submit" className="submit-delete-button" onClick={e => handleDelete(e)}>
					Delete
				</button>
			</div>
			<h1 className="page-header">MarkdownPage</h1>
			<div className="flex-row">
				<NotesDisplayComponent />
				<EditorComponent />
			</div>
		</>
	)
}
