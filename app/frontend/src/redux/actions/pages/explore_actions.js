import * as ApiUtil from '../../../util/api'
import * as UiActions from '../ui_actions'
import * as ActionTypes from '../action_types'

export const searchForUsers = (searchQuery) => {
    return (dispatch) => {
        dispatch(UiActions.asyncRequest())

        ApiUtil.findUser(searchQuery)
            .then(r => {
                dispatch(foundUsersSuccess(r.data))
            })
            .catch(e => {
                dispatch(foundUsersFailure(e))
            })
    }
}

export const foundUsersSuccess = (user) => {
    return {
        type: ActionTypes.FOUND_USERS_SUCCESS,
        payload: user
    }
}

export const foundUsersFailure = (error) => {
    return {
        type: ActionTypes.FOUND_USERS_FAILURE,
        payload: error
    }
}