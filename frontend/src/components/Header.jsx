import { useContext } from "react"
import { AppContext } from "../App"

import "../assets/css/header.css"

export default function Header() {
	const { user } = useContext(AppContext)

	console.log(user)

	return (
		<header className="header">
			<img className="background" src={user.iconURL} alt="User avatar" />
			<div className="user flex-row align-center gap-05">
				<img className="icon box-shadow" src={user.iconURL} alt="User avatar" />
				<div>
					<h2 className="text-shadow">{user.name}</h2>
					<div className="text-shadow">{user.id}</div>
				</div>
			</div>
		</header>
	)
}
