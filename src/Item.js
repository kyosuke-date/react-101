import React, { useContext } from 'react';
import AppContext from './contexts/AppContext';

const Item = ({ value }) => {
  const { dispatch } = useContext(AppContext);
  const id = value.id;
  const doDelete = () => {
    dispatch({
      type: 'DELETE_EVENT',
      id: id
    });
  }
  return (
    <tr>
      <td>{value.id}</td>
      <td>{value.event}</td>
      <td><button className="btn btn-danger" type="button" onClick={doDelete}>delete</button></td>
    </tr>
  )
}

export default Item;