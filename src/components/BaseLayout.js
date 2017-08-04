import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/App.css';



function BaseLayout ({children}){
    return (
        <div>
            <div>
                <NavLink activeStyle={{ color: 'pink' }} to="/">Home</NavLink>
                <NavLink activeStyle={{ color: 'pink' }} to="/users">Users</NavLink>
                <NavLink activeStyle={{ color: 'pink' }} to="/users">Nav</NavLink>
            </div>
            {children}
        </div>
    );
  }


export default BaseLayout;