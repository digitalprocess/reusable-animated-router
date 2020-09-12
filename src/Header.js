import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<header>
			<h1 className="fake-logo">Logo</h1>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/contact">Contact</Link>
			</nav>
		</header>
	)
}

export default Header
