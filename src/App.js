import {Switch, Route} from 'react-router-dom'
import InputRange from './components/InputRange/InputRange.jsx'
import MainPage from './components/MainPage/MainPage.jsx'
import SignUp from './components/SignUp/SignUp.jsx'
import SignIn from './components/SignIn/SignIn.jsx'
import LoggedInPage from './components/LoggedInPage/LoggedInPage.jsx'
import {PrivateRoute} from './components/PrivateRoute/PrivateRoute.jsx'
function App() {

	return (
		<Switch>
			<Route exact path='/' component={MainPage} />
			<Route path='/input-range' component={InputRange} />
			<Route path='/sign-in' component={SignIn} />
			<Route path='/sign-up' component={SignUp} />
			<PrivateRoute exact isAuthenticated={true} path='/logged-in-page' 
			component={LoggedInPage} />
		</Switch>
	)
}

export default App;
