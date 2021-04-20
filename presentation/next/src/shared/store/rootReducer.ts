import { HYDRATE } from 'next-redux-wrapper'
import { combineReducers } from 'redux'
import Candidate from '~/next/module/Candidate/store/reducer'
import Action from '~/next/shared/lib/typesafe-actions'
import States from '~/next/shared/store/rootStates.d'

export const combinedReducer = combineReducers({
  Candidate,
})

const rootReducer = (state: States | undefined, action: Action<any>) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    }
    return nextState
  }

  return combinedReducer(state, action)
}

export default rootReducer
