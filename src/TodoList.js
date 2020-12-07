import React, { useReducer } from 'react';
import Add from './Add';
import Items from './Items';
import reducer from './reducers/index'
import AppContext from './contexts/AppContext';

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, []);
  
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div>
        <Add />
        <Items />
      </div>
    </AppContext.Provider>
  )
}

export default TodoList;