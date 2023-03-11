import React, { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AppReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return {
				...state,
				expenses: [...state.expenses, action.payload],
			};
		case 'DELETE_EXPENSE':
			return {
				...state,
				expenses: state.expenses.filter((expense) => expense.id !== action.payload),
			};
		default:
			return state;
	}
};

const initialState = {
	budget: 24,
	expenses: [
		{ id: uuidv4(), name: 'Reading', cost: 1 },
		{ id: uuidv4(), name: 'Work', cost: 8 },
		{ id: uuidv4(), name: 'Running', cost: 2 },
		{ id: uuidv4(), name: 'Sleep', cost: 9 },
	],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	return (
		<AppContext.Provider
			value={{
				budget: state.budget,
				expenses: state.expenses,
				dispatch,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};
