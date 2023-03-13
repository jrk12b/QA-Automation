import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './context/AppContext';
import TimeBudget from './components/TimeBudget';
import Graph from './components/Graph';
import ActivityTotal from './components/ActivityTotal';
import ActivityList from './components/ActivityList';
import AddActivityForm from './components/AddActivityForm';
import RemainingHours from './components/RemainingHours';

function App() {
	return (
		<AppProvider>
			<div className="container">
				<h1 className="mt-3">TimeOfDay</h1>
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
				<Graph />
			</div>
		</AppProvider>
	);
}

export default App;
