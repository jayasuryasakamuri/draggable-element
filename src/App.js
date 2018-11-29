import React, { Component } from 'react';
import './App.css';
import Draggable from './Draggable';

  const App=()=> {
      return (
        <Draggable>
          <div className="draggable-div" draggable="false">JS
          </div>
        </Draggable>
      );
    }

export default App;
