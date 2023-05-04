import { GoogleLogin } from "@react-oauth/google"
import jwt_decode from "jwt-decode"
import { useContext } from "react"
import { AppContext } from "../App"

import "../assets/css/login-page.css"

export default function LoginPage() {
	const { setUser } = useContext(AppContext)

	return (
		<div className="login-page flex-column justify-center align-center height-100 gap-3">
			<h2>Welcome to Crusty Notes</h2>
			<p>
				Imagine a flashy welcome page.
				<br />
				Images, animations, you name it ...
			</p>
			<p>Anyway, click the button below to sign in</p>
			<GoogleLogin
				onSuccess={response => {
					const userData = jwt_decode(response.credential)
					const { name, picture, email } = userData
					setUser({
						id: email,
						name: name,
						iconURL: picture
					})
				}}
				text="continue_with"
				locale="en-En"
				useOneTap
			/>
		</div>
	)
}
