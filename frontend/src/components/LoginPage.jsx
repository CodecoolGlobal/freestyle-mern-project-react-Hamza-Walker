import { useContext } from "react"
import { AppContext } from "../App"
import { GoogleLogin } from "@react-oauth/google"
import jwt_decode from "jwt-decode"

export default function LoginPage() {
	const { user, setUser } = useContext(AppContext)

	return (
		<div className="login-page">
			LoginPage
			<GoogleLogin
				onSuccess={response => {
					const user = jwt_decode(response.credential)
					setUser(user)
				}}
				onError={response => console.error("Error", response)}
				text="continue_with"
				cancel_on_tap_outside={true}
			/>
		</div>
	)
}
