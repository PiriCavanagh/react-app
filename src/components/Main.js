import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from '../index';
import Room from '../room';

const Main = () => {
    return (
      <Routes> {/* The Switch decides which component to show based on the current URL.*/}
        <Route exact path='/' component={Index}></Route>
        <Route exact path='/room' component={Room}></Route>
      </Routes>
    );
  }
  
  export default Main