import React from 'react';
import { useDispatch } from 'react-redux';
import { LOGGIN_USER } from '../../states/reducers/userReducer';

function index() {
    const handleClick = () => {
        console.log(`elogin button`);
        dispatch(LOGGIN_USER({ userId: 'cliekd' }));
    };

    const dispatch = useDispatch();

    return (
        <div>
            <div onClick={handleClick}>log in button</div>
        </div>
    );
}

export default index;
