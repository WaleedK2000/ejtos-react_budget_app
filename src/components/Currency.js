import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {

    const { currency, dispatch } = useContext(AppContext);

    const updateCurrency = (cur) => {
        console.log(cur)
        dispatch({
            type: 'CHG_CURRENCY',
            payload: cur,
        })
    }

    

    return (
        // <select className="form-select bg-success text-white w-25 p-3" onchange={(event)=> updateCurrency(event.target.value)} id="inputGroupSelect03"  >
        //     <option name="$ Dollar" value="$" {...(currency === '$') ? { selected: 'true' } : {}}> $ Dollar</option>
        //     <option name="£ Pound" value="£"  {...(currency === '£') ? { selected: 'true' } : {}}>£ Pound</option>
        //     <option name="€ Euro" value="€" {...(currency === '€') ? { selected: 'true' } : {}}>€ Euro</option>
        //     <option name="₹ Ruppee" value="₹" {...(currency === '₹') ? { selected: 'true' } : {}}>₹ Ruppee</option>
        // </select>

        <select className="form-select bg-success text-white w-25 p-3" onChange={(event)=> updateCurrency(event.target.value)} id="inputGroupSelect03" value="default" >
            <option hidden={true} name="default" value="default" disabled={true} >{"Currency (" + currency + ")" }</option>
            <option name="$ Dollar" value="$" > $ Dollar</option>
            <option name="£ Pound" value="£"  >£ Pound</option>
            <option name="€ Euro" value="€" >€ Euro</option>
            <option name="₹ Ruppee" value="₹" >₹ Rupee</option>
        </select>

    )
}

export default Currency;