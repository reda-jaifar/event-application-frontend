import React from "react";
import button from 'react';
import { useDispatch} from 'react-redux';
import {decrement, increment} from '../../store/Event/actions'

const AddEvent = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(increment({ type: 'INCREMENT' }))}> increment </button>
            <button onClick={() => dispatch(decrement({ type: 'DECREMENT' }))}> decrement </button>
        </div>
    );
};

export default AddEvent;