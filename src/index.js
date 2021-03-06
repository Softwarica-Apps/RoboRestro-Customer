import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

// styles
import 'now-ui-kit-react/src/assets/css/bootstrap.min.css'
import 'now-ui-kit-react/src/assets/css/now-ui-kit.min.css'
import 'now-ui-kit-react/src/assets/demo/demo.css'
import './index.css'

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
