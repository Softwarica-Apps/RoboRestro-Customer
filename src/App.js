import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import LandingPage from './components/LandingPage'
import Home from './components/Home'

function App() {
	return (
		<Router>
			<div className='App'>
				{/* <Route exact path='/' component={LandingPage} /> */}
				<Route exact path='/' component={Home} />
			</div>
		</Router>
	)
}

export default App
