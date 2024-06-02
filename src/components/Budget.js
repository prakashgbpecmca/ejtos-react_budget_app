

import React, {useContext, useState} from 'react';
import  {AppContext} from '../context/AppContext';

const Budget = () => {

    const {budget,remaining,currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handelBudgetChange = (event) => {
        if (event.target.value> 20000) {
            alert("value cannot exceed 20000");
            return;
        }

        if(event.target.value < remaining) {
            alert("You cannot reduce the budget value lower than the spending");
            return;
        }
        setNewBudget(event.target.value);
    }

    return (<div className='alert alert-secondary'>
        <span>Budget: {currency}</span>
        <input type='number' step="10" 
        value={newBudget} onChange={handelBudgetChange}/>
    </div>);
}

export default Budget;
