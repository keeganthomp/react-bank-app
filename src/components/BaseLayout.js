import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/App.css';



function BaseLayout ({children}){
    return (
        <div>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="">Nav</NavLink>
            </div>
            {children}
        </div>
    );
  }


export default BaseLayout;