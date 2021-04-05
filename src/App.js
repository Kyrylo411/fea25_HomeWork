import './App.scss';
import {Switch, Route} from 'react-router-dom'
import SignUp from './components/SignUp/SignUp.jsx'
import SignIn from './components/SignIn/SignIn.jsx'
import Table from './components/Table/Table.jsx'

function App() {
  return (
    <div className="App">
		<Switch>
			<Route path='/' exact component={SignIn} />
			<Route path='/sign-up' component={SignUp} />
			<Route path='/table' component={Table} />
		</Switch>
  
    </div>
  );
}

export default App;
