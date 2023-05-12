import { AppContext } from '../../main'
import { Button } from 'reactstrap';
import { useContext, useState } from "react"
import SaveDeleteNote from '../SaveDeleteNote'
import NavigationBar from "../NavigationBar/NavigationBar";
import EditorComponent from "./ChildComponents/EditorComponent"
import NotesDisplayComponent from "./ChildComponents/NotesDisplayComponent"
import "../../assets/css/DisplayPlusEditorPage.css"

export default function DisplayPlusEditorPage() {

	const { user} = useContext(AppContext)
	const [showEditor, setShowEditor] = useState(false);

	return (
		<>
			<NavigationBar user={user} />
			<Button color="warning" onClick={() => setShowEditor(!showEditor)}>Toggle Editor</Button>

			<div className="flex-row">
				<NotesDisplayComponent />
				{showEditor && <EditorComponent />}
				<SaveDeleteNote/>
			</div>
		</>
	)
}
