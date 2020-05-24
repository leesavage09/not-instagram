import * as ActionTypes from '../../actions/action_types'


const _nullUsers = {

}

const UserReducer = (state = _nullUsers, action) => {
  switch (action.type) {
    case ActionTypes.FOUND_USERS_SUCCESS:
      if (action.payload.users) {
        return Object.assign({}, state, action.payload.users);
      } else {
        return state
      }
    case ActionTypes.GET_USER_SUCCESS:
      if (action.payload.users) {
        return Object.assign({}, state, action.payload.users);
      } else {
        return state
      }
    default:
      return state;
  }
};

export default UserReducer