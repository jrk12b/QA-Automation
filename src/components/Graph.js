import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { PieChart, Pie } from 'recharts';


const Graph = () => {
	const { expenses, budget } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total = total + item.cost);
	}, 0);

	// Sample data
	const data = [
		{ name: 'Group A', value: budget },
		{ name: 'Group B', value: budget - totalExpenses },
		{ name: 'Group C', value: totalExpenses },
	];
	return (
	<PieChart width={400} height={400}>
		<Pie
			dataKey="value"
			startAngle={180}
			endAngle={0}
			data={data}
			cx="50%"
			cy="50%"
			outerRadius={80}
			fill="#8884d8"
			label
		/>
	</PieChart>
	);
};

export default Graph;
