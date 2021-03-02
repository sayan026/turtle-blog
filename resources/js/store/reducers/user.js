const initialState = {
  loading: false,
  cols: [
    '#',
    'Name',
    'Email',
    'Joined On'
  ],
  rows: [
    '#',
    'name',
    'email',
    'joined_on'
  ],
  list: []
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload
      }

    case "SET_LIST":
      return {
        ...state,
        list: action.payload
      }

    default: return state
  }
}

export default user;
