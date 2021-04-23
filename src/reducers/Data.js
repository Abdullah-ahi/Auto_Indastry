import { handleActions } from 'redux-actions';
import { Map, fromJS } from 'immutable'
import { signIn, setNews } from 'actions'

const initialState = new Map({
  entries: new Map({
    profile: new Map(),
    news: new Map() 
  })
})

export const dataReducer = handleActions({
  [signIn]: (state, action) => {
    return state.mergeIn(['entries', 'profile'], fromJS(action.payload))
  },
  [setNews]: (state, action) => {
    return state.setIn(['entries', 'news'], fromJS(action.payload))
  }

}, initialState)