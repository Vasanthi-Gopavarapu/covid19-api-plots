import React, { useState } from 'react'
import DatePick from './DatePick';

function DropDown() {

    const [timeFrequency, setTimeFrequency] = useState('daily');

    return (
        <div>
            <label>Select one: 
                <select value={timeFrequency} onChange={(e) => setTimeFrequency(e.target.value)} >
                    <option value="daily">Daily</option>
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                </select>
            </label>
            <DatePick timeFrequency={timeFrequency}/>
        </div>
    )
}

export default DropDown
