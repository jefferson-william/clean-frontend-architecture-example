import { Store } from 'redux'
import { store } from '~/next/shared/store'
import rootStates from '~/next/shared/store/rootStates'
import { MyRenderOptions } from '~/next/shared/utils/test-utils/index.d'

const getStore = (options: MyRenderOptions): Store<any, any> => {
  const state = options.initialState || rootStates

  return (options?.store && options!.store(state)) || store(state)
}

export default getStore
