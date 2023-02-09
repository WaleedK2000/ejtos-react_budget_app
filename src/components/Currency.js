import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {

    const {currency } = useContext(AppContext);
    

    return(
    <select className="custom-select" id="inputGroupSelect02" >
        
        <option name="$ Dollar" value="$"> $ Dollar</option>
        <option name="£ Pound" value="£"  { ...currency === '£' ?'selected': null } >£ Pound</option>
        <option name="€ Euro" value="€">€ Euro</option>
        <option name="₹ Ruppee" value="₹">₹ Ruppee</option>
    </select>

    )
}

export default Currency;