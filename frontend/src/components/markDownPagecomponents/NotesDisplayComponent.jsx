import React, { useContext } from "react"
import { AppContext } from "../../App"
import { marked } from "marked"

export default function NotesDisplayComponent() {
	const { text } = useContext(AppContext)
	return <div className="dangerous-dev" dangerouslySetInnerHTML={{ __html: marked(text) }}></div>
}
