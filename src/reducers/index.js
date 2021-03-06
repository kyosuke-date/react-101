const events = (state = [], action) => {
  switch(action.type){
    case 'ADD_EVENT':
      const event = { event: action.event };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id: id, ...event }];
    case 'DELETE_EVENT':
      return state.filter(event => event.id !== action.id);
    case 'DELETE_ALL_EVENT':
      return [];
    default:
      return state;
  }
}

export default events;