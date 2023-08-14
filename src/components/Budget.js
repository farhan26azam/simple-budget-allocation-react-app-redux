import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, currency } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
                required="required"
                type="number"
                id="cost"
                value={budget}
                style={{ size: 10 }}
              ></input>
        </div>
    );
};
export default Budget;
