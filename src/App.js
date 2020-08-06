import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Home from './components/Home'
import TableContextProvider from './components/TableContext'

function App() {
	return (
		<Router>
			<div className='App'>
				<TableContextProvider>
					<Switch>
						<Route exact path='/' component={LandingPage} />
						<Route exact path='/cuisines' component={Home} />
					</Switch>
				</TableContextProvider>
			</div>
		</Router>
	)
}

export default App
