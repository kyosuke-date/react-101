import React, { useReducer } from 'react';
import Add from './Add';
import Items from './Items';
import reducer from './reducers/index'
import AppContext from './context/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, []);
  
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container">
        <Add />
        <Items />
      </div>
    </AppContext.Provider>
  )
}

export default TodoList;