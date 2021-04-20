import { Theme } from '@material-ui/core'
import { Router } from 'next/router'

export interface MyRenderOptions {
  router?: Partial<Router>
  theme?: Theme
  initialState?: States
}

export interface MyRenderedOptions {
  router?: Partial<Router>
  theme?: Theme
  initialState?: States
}
