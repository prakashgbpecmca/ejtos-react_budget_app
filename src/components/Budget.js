

import React, {useContext, useState} from 'react';
import  {AppContext} from '../context/AppContext';

const Budget = () => {

    const {budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handelBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }

    return (<div className='alert alert-secondary'>
        <span>Bedget: ${budget}</span>
        <input type='number' step="10" 
        value={newBudget} onChange={handelBudgetChange}/>
    </div>);
}

export default Budget;
