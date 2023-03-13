import React, { useContext } from 'react';
import ActivityItem from './ActivityItem';
import { AppContext } from '../context/AppContext';

const ActivityList = () => {
	const { activities } = useContext(AppContext);

	return (
		<ul className="list-group">
			{activities.map((activity) => (
				<ActivityItem id={activity.id} name={activity.name} cost={activity.hour} />
			))}
		</ul>
	);
};

export default ActivityList;
