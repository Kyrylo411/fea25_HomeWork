import {Switch, Route} from 'react-router-dom'
import './App.css';
import './components/Circle/Circle.scss'
import Circle from './components/Circle/Circle'
import Loginform from './components/LoginForm/LoginForm'
import NavButton from './components/NavButton/NavButton'



function App() {
  return (
	<Switch>
		<Route path='/' exact component={NavButton} />
		<Route path='/circle' component={Circle} />
		<Route path='/login' component={Loginform} />
	</Switch>
  );
}

export default App;
