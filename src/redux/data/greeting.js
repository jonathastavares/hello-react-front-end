import axios from 'axios';

const GET_DATA_SUCCESS = 'greetings/data/GET_DATA_SUCCESS';
const initialState = [];

export const getData = () => (dispatch) => axios.get('http://localhost:8000/api/greeting').then(
  (response) => {
    const payload = [];
    payload.push(response.data.name);
    dispatch({ type: GET_DATA_SUCCESS, payload });
  },
);

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_SUCCESS:
      return [
        ...action.payload,
      ];
    default:
      return state;
  }
};

export default greetingReducer;
