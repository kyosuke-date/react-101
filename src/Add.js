import React, { useContext, useState } from 'react'; 
import AppContext from './contexts/AppContext';

const Add = () => {
  const { dispatch } = useContext(AppContext);
  const [ event, setEvent ] = useState('');

  const addEvent = e => {
    dispatch({
      type: 'ADD_EVENT',
      event: event
    });
    setEvent('');
  }
  return (
    <div>
      <input type="text" onChange={e => setEvent(e.target.value)} value={event} />
      <button onClick={addEvent} disabled={!event ? true : false}>submit</button>
    </div>
  )
}

export default Add;