import * as types from '../actions/actionTypes';

export default function hotelReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_HOTEL:
      return [...state,
        Object.assign({}, action.hotel)
      ];
    default:
      return state;
  }
}
