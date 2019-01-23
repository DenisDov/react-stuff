import * as actions from '../Homepage/HomepageActions';

const initialState = {
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.RECEIVE_API_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

// export default (state = {}, { type, data }) => {
//   switch (type) {
//     case actions.RECEIVE_API_DATA:
//       return data;
//     default:
//       return state;
//   }
// };
