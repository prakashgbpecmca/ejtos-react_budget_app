

import React, {useContext, useState} from 'react';
import  {AppContext} from '../context/AppContext';

const Currency = () => {

    const { dispatch  } = useContext(AppContext);
    const [currency, setCurrency] = useState("£");

    const handelChangeEvent = (event) => {
            setCurrency(event.target.value);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });

    }

    return (<div className='alert alert-secondary'>
        <select style={{width:"145px"}} className="custom-select" id="inputGroupSelect03" onChange={ handelChangeEvent}>
             
            <option value="$">$ Dollar</option>
            <option selected defaultValue value="£">£ Pound</option>
            <option value="€">€ Euro</option>
            <option value="₹">₹ Rupee</option> 
        </select>
    </div>);
}

export default Currency;
