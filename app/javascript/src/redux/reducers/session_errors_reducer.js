import * as ActionTypes from '../actions/action_types'

const _nullErrors = {
    login: [],
    signup: [],
    logout: []
};

const SessionErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch (action.type) {
        case ActionTypes.CREATE_USER_FAILURE:
            return { ...state, signup: action.error }
        case ActionTypes.LOGIN_USER_FAILURE:
            return { ...state, login: action.error }
        case ActionTypes.LOGOUT_FAILURE:
            return { ...state, logout: action.error }
        default:
            return _nullErrors;
    }
};

export default SessionErrorsReducer