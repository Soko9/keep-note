import React, { useContext } from 'react';
import { GlobalContext } from '../global/GlobalStore';

function Counter() {
    const { notes } = useContext(GlobalContext);

    const renderSwitch = param => {
        switch(param) {
            case 0:
                return ("Empty");
            case 1:
                return ("There is 1 Note");
            default:
                return (`There is ${param} Notes`);
        }
    }

    return (
        <p className="counter-component">
            {renderSwitch(notes.length)}
        </p>
    );
}

export default Counter;