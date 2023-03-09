// https://www.freecodecamp.org/news/react-budget-tracker-app/
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import Remaining from './components/Remaining';
import { PieChart, Pie } from 'recharts';


function Graph() {
  // Sample data
  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
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
}

function App() {
return (
  <AppProvider>
  <div className='container'>
    <h1 className='mt-3'>My Budget Planner</h1>
    <div className='row mt-3'>
      <div className='col-sm'>
        <Budget />
      </div>
      <div className='col-sm'>
        <Remaining />
      </div>
      <div className='col-sm'>
        <ExpenseTotal />
      </div>
    </div>
    <h3 className='mt-3'>Expenses</h3>
    <div className='row mt-3'>
      <div className='col-sm'>
        <ExpenseList />
      </div>
    </div>
    <h3 className='mt-3'>Add Expense</h3>
    <div className='row mt-3'>
      <div className='col-sm'>
        <AddExpenseForm />
      </div>
    </div>
    <Graph />
  </div>
</AppProvider>
);
}
  
export default App;
