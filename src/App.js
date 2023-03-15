import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { AppProvider } from './context/AppContext';
import TimeBudget from './components/TimeBudget';
import Graph from './components/Graph';
import ActivityTotal from './components/ActivityTotal';
import ActivityList from './components/ActivityList';
import AddActivityForm from './components/AddActivityForm';
import RemainingHours from './components/RemainingHours';
import Header from './components/Header';

function App() {
	return (
		<AppProvider>
			<div className="container">
				<Header />
				<div className="row mt-3">
					<div className="col-sm">
						<TimeBudget />
					</div>
					<div className="col-sm">
						<RemainingHours />
					</div>
					<div className="col-sm">
						<ActivityTotal />
					</div>
				</div>
				<div className="Center">
					<Graph />
				</div>
				<h3 className="mt-3">Activities</h3>
				<div className="row mt-3">
					<div className="col-sm">
						<ActivityList />
					</div>
				</div>
				<h3 className="mt-3">Add Activity</h3>
				<div className="row mt-3">
					<div className="col-sm">
						<AddActivityForm />
					</div>
				</div>
			</div>
		</AppProvider>
	);
}

export default App;
