import React from 'react';
import HomePage from "../HomePage";
import {Outlet} from 'react-router-dom'

const Main = () => {
    return (
        <div>
            <div>
                <HomePage/>
                <Outlet/>
            </div>
        </div>
    );
};

export default Main;
