import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigation from './components/partials/Navigation'
import TableContextProvider from './components/TableContext'
import LandingPage from './components/LandingPage'
import Cuisines from './components/Cuisines/Cuisines'
import CuisineMenu from './components/Cuisines/CuisineMenu'
import Food from './components/Food'
import MyBasket from './components/MyBasket'

function App() {
	return (
		<Router>
			<div className='App'>
				<Navigation />
				<TableContextProvider>
					<Switch>
						<Route exact path='/' component={LandingPage} />
						<Route exact path='/cuisines' component={Cuisines} />
						<Route exact path='/cuisines/:cuisine' component={CuisineMenu} />
						<Route exact path='/foods/:foodId' component={Food} />
						<Route exact path='/my-basket' component={MyBasket} />
					</Switch>
				</TableContextProvider>
			</div>
		</Router>
	)
}

export default App
