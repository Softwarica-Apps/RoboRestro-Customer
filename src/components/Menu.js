import React from 'react'
import Navigation from './partials/Navigation'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Cuisine from './Cuisine'

const Menu = () => {
	return (
		<Router>
			{/* Navbar */}
			<Navigation />
			<Route path='/menus/' component={Cuisine} />
		</Router>
	)
}

export default Menu
