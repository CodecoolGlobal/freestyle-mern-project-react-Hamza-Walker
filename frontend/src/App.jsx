import { createContext, useState } from "react"
import MarkdownPage from "./components/MarkdownPage"
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google"
import jwt_decode from "jwt-decode"

const clientId = "161332176689-u4kmfe25ddfu9na2ick4f9b5d2990cir.apps.googleusercontent.com"

export const AppContext = createContext({})

export default function App() {
	// const [user, setUser] = useState(null)
  const [user, setUser] = useState({
    name: null,
    password: null,
    iconURL: null,
  });
	const [text, setText] = useState(
		"# A demo of `react-markdown`\n\n`react-markdown` is a markdown component for React.\n\n👉 Changes are re-rendered as you type.\n\n👈 Try writing some markdown on the left.\n\n## Overview\n\nA component by [Espen Hovlandsdal](https://espen.codes/)"
	)

	let toRender = ""

	if (!user) {
		toRender = (
			<GoogleLogin
    onSuccess={response => {
    const { name, picture } = response.profileObj;
    setUser({
      name: name,
      password: null,
      iconURL: picture,
    });
  }}
  text="continue_with"
  cancel_on_tap_outside={true}
/>
		)
	} else {
		toRender = <MarkdownPage />
	}

	return (
		<AppContext.Provider value={{ user, text, setText }}>
			<GoogleOAuthProvider clientId={clientId}>{toRender}</GoogleOAuthProvider>
		</AppContext.Provider>
	)
}
