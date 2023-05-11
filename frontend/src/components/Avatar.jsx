import { useContext } from "react"
import { AppContext } from "../main"

import "../assets/css/avatar.css"

export default function Avatar() {
	const { user } = useContext(AppContext)

	console.log(user)

	return (
		<div className="avatar flex-column justify-center gap-05">
			<img src={user.iconURL} alt="User avatar" />
			<h2>{user.name}</h2>
			<div>{user.id}</div>
		</div>
	)
}
