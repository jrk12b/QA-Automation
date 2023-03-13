import React, { useCallback, useState, useContext } from 'react';
import { PieChart, Pie } from 'recharts';
import { AppContext } from '../context/AppContext';
import GraphRenderActiveShape from './GraphRenderActiveShape';

export default function Graph() {
	const [activeIndex, setActiveIndex] = useState(0);
	const onPieEnter = useCallback(
		(_, index) => {
			setActiveIndex(index);
		},
		[setActiveIndex]
	);

	// Getting the data
	const { activities, budget } = useContext(AppContext);

	// Get Remaining hours
	const totalActivities = activities.reduce((total, item) => {
		return (total = total + item.hour);
	}, 0);

	// Create data array to be populate
	const data = [
		// { name: 'Group A', value: '10' }
	];

	// Populate data array with remaining hours
	data.push({ name: 'Hours Remaining', value: budget - totalActivities });

	// Loop through activities array and populate data array
	activities.forEach(element => {
		data.push({ name: element.name, value: element.hour })
	});

	return (
		<PieChart width={400} height={400}>
			<Pie
				activeIndex={activeIndex}
				activeShape={GraphRenderActiveShape}
				data={data}
				cx={200}
				cy={200}
				innerRadius={60}
				outerRadius={80}
				fill="#8884d8"
				dataKey="value"
				onMouseEnter={onPieEnter}
			/>
		</PieChart>
	);
}
