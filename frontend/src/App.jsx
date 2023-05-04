import { createContext, useState } from "react"
import MarkdownPage from "./components/MarkdownPage"
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google"
import jwt_decode from "jwt-decode"
import LoginPage from "./components/LoginPage"

const clientId = "161332176689-u4kmfe25ddfu9na2ick4f9b5d2990cir.apps.googleusercontent.com"

export const AppContext = createContext({})

export default function App() {
	// const [user, setUser] = useState(null)
	const [user, setUser] = useState({
		name: null,
		password: null,
		iconURL: null
	})
	const [text, setText] = useState(
		"# A demo of `react-markdown`\n\n`react-markdown` is a markdown component for React.\n\n👉 Changes are re-rendered as you type.\n\n👈 Try writing some markdown on the left.\n\n## Overview\n\nA component by [Espen Hovlandsdal](https://espen.codes/)"
	)

	return (
		<AppContext.Provider value={{ user, setUser, text, setText }}>
			<GoogleOAuthProvider clientId={clientId}>{!user ? <LoginPage /> : <MarkdownPage />}</GoogleOAuthProvider>
		</AppContext.Provider>
	)
}
