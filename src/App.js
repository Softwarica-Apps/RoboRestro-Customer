import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import LandingPage from './components/LandingPage'
import AllCuisines from './components/Cuisines/AllCuisines'

function App() {
	return (
		<Router>
			<div className='App'>
				{/* <Route exact path='/' component={LandingPage} /> */}
				<Route exact path='/' component={AllCuisines} />
			</div>
		</Router>
	)
}

export default App
