import React, { useContext, useState } from 'react'; 
import AppContext from './contexts/AppContext';

const Add = () => {
  const { state, dispatch } = useContext(AppContext);
  const [ event, setEvent ] = useState('');

  const addEvent = e => {
    dispatch({
      type: 'ADD_EVENT',
      event: event
    });
    setEvent('');
  }

  const allDeleteEvent = () => {
    dispatch({ type: 'DELETE_ALL_EVENT' })
  }

  return (
    <div className="form-group">
      <input type="text" className="form-control" onChange={e => setEvent(e.target.value)} value={event} />
      <button className="btn btn-primary" onClick={addEvent} disabled={!event ? true : false}>submit</button>
      <button className="btn btn-danger" onClick={allDeleteEvent} disabled={state.length === 0 ? true : false}>AllDelete</button>
    </div>
  )
}

export default Add;