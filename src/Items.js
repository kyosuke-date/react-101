import React, { useContext, useState } from 'react';
import AppContext from './contexts/AppContext';
import Item from './Item'

const Items = () => {
  const { state } = useContext(AppContext);
  const [filter, setFilter] = useState('');

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Event</th>
            <th><input type="text" onChange={e => setFilter(e.target.value)} placeholder="filtering..." /></th>
          </tr>
        </thead>
        <tbody>
          {
            state.map((value, index) => {
              if(filter === ''){
                return (
                  <Item key={index} value={value} />
                );
              }
              if(filter !== '' && value.event.indexOf(filter) === -1) return;
              return (
                <Item key={index} value={value} />
              );
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default Items;