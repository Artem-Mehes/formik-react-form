import Form from '../Form';
import Welcome from '../Welcome';
import { Main } from './style';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
	return (
		<Main>
			<Router>
				<Switch>
					<Route exact path="/">
						<Form />
					</Route>

					<Route path="/welcome">
						<Welcome />
					</Route>
				</Switch>
			</Router>
		</Main>
	);
}

export default App;
