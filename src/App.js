import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import HomeTable from './Components/Table/HomeTable';
import DetailTable from './Components/Table/DetailTable';
import ProfileTable from './Components/Table/ProfileTable';
import { Switch, Redirect, Route } from 'react-router-dom';

// I created a shared functional navbar component and three class table components for each of the views
function App() {
	return (
		<div className="App">
			<Nav />
			<Switch>
				<Route exact path="/" component={HomeTable}>
					<Redirect to="/Home"/>
				</Route>
				<Route exact path="/Home" component={HomeTable}></Route>
				<Route path="/Detail" render={(props) => <DetailTable {...props} title={'feature'} />}></Route>
				<Route path="/Profile" component={ProfileTable}></Route>
			</Switch>
		</div>

	);
}

export default App;
