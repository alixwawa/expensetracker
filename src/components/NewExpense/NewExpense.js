import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
	const [showForm, setShowForm] = useState(false);
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			id: Math.random().toString(),
			...enteredExpenseData,
		};
		console.log(expenseData);
		props.onAddExpense(expenseData);
		setShowForm(false);
	};

	const showFormHandler = () => {
		setShowForm(true);
	};

	const cancelFormHandler = () => {
		setShowForm(false);
	};

	return (
		<div className="new-expense">
			{showForm ? (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					onCancel={cancelFormHandler}
				/>
			) : (
				<button
					type="submit"
					onClick={showFormHandler}
				>
					Add New Expense
				</button>
			)}
		</div>
	);
};

export default NewExpense;
