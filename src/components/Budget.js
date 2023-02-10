
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);

    const updateBudget = (val) => {

        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        if (val > 20000){
            alert("The budget cannot exceed more than 20,000");
            return;
        }

        if (val < totalExpenses){
            alert("You cannot reduce the budget value lower then spending");
            return;
        }

       dispatch({
           type: 'SET_BUDGET',
           payload: val,
       });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
            <input 
                type='number'
                id = 'budget'
                value = {budget}
                onChange = {(event)=>updateBudget(event.target.value)}
            />
            </span>
        </div>
    );
};
export default Budget;