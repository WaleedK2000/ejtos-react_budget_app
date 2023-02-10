import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {

    const {currency } = useContext(AppContext);
    
    // {(currency === '£3') ?'selected': 'false'

    return(
    <select className="custom-select" id="inputGroupSelect02" >

        {/* {currency == '$'?} */}
        
        <option name="$ Dollar" value="$" {...(currency === '$')? {selected:'true'}: {} }> $ Dollar</option>
        <option name="£ Pound" value="£"  {...(currency === '£')? {selected:'true'}: {} }>£ Pound</option>
        <option name="€ Euro" value="€" {...(currency === '€')? {selected:'true'}: {} }>€ Euro</option>
        <option name="₹ Ruppee" value="₹" {...(currency === '₹')? {selected:'true'}: {} }>₹ Ruppee</option>
    </select>

    )
}

export default Currency;