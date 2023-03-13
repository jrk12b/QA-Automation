import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const AddActivityForm = () => {
	const { dispatch } = useContext(AppContext);

	const [name, setName] = useState('');
	const [hour, setCost] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();

		const activity = {
			id: uuidv4(),
			name: name,
			hour: parseInt(hour),
		};

		dispatch({
			type: 'ADD_ACTIVITY',
			payload: activity,
		});
	};

	return (
		<form onSubmit={onSubmit}>
			<div className="row">
				<div className="col-sm">
					<label for="name">Name</label>
					<input
						required="required"
						type="text"
						className="form-control"
						id="name"
						value={name}
						onChange={(event) => setName(event.target.value)}
					></input>
				</div>
				<div className="col-sm">
					<label for="cost">Cost</label>
					<input
						required="required"
						type="text"
						className="form-control"
						id="cost"
						value={hour}
						onChange={(event) => setCost(event.target.value)}
					></input>
				</div>
				<div className="col-sm">
					<button type="submit" className="btn btn-primary mt-3">
						Save
					</button>
				</div>
			</div>
		</form>
	);
};

export default AddActivityForm;
