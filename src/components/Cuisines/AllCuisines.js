import React from 'react'
import Navigation from '../partials/Navigation'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Cuisine from './Cuisine'
import CuisineMenu from './CuisineMenu'

const AllCuisines = () => {
	return (
		<Router>
			{/* Navbar */}
			<Navigation />
			<Route exact path='/' component={Cuisine} />
			<Route exact path='/cuisines/:cuisine' component={CuisineMenu}/>
		</Router>
	)
}

export default AllCuisines
