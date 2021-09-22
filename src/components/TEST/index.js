import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";


// On crée notre composant
const TEST = () => {

    // On récupère le name qui est dans le state
    const name = useSelector(state => state.name);

    const dispatch = useDispatch();
    const handleChange = (event) => {
        // console.log(event.target.value);
        dispatch({
            type: 'CHANGE_TEST',
            name: event.target.value
        })
    }

    const handleClick = () => {
        console.log('coucou');
    }

    return (
        <div>
            <p>BLabla</p>
            <button onClick={handleClick}> CLiquez moi</button>
            <input 
                value={name}
                onChange={handleChange}
            />
        </div>
    );
}

export default TEST;
