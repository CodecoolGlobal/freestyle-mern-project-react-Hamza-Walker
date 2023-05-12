import { AppContext } from '../main'
import { Button } from 'reactstrap';
import { useContext, useState } from "react"
import FetchUserNotes from './FetchUserNotes'
import NavigationBar from "./NavigationBar/NavigationBar";
import EditorComponent from "./markDownPagecomponents/EditorComponent"
import NotesDisplayComponent from "./markDownPagecomponents/NotesDisplayComponent"
import "../assets/css/MarkdownPage.css"

export default function MarkdownPage() {
	
	const { user} = useContext(AppContext)
	const [showEditor, setShowEditor] = useState(false);

	return (
		<>
			<NavigationBar user={user} />
			<Button color="warning" onClick={() => setShowEditor(!showEditor)}>Toggle Editor</Button>

			<div className="flex-row">
				<NotesDisplayComponent />
				{showEditor && <EditorComponent />}
				<FetchUserNotes/>
			</div>
		</>
	)
}
