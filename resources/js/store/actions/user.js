import { axios } from "../service";

export const setLoading = status => {
  return {
    type: "SET_LOADING",
    payload: status
  }
}

export const setUserList = data => {
  return {
    type: "SET_LIST",
    payload: data
  }
}

export const fetchUsers = (page=1, keyword='') => {
  return (dispatch) => {
    dispatch(setLoading(true));
    dispatch(setUserList([]));
    axios.get(`/api/users/?page=${page}&keyword=${keyword}`)
    .then(res => {
      dispatch(setUserList(res.data));
      dispatch(setLoading(false));
    })
    .catch(err => {
      alert(err.response.data.message);
    })
  }
}
