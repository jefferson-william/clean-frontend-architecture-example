import { render, waitFor, queries, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import theme from '~/next/shared/styles/theme'
import { MyRenderOptions, MyRenderedOptions } from '~/next/shared/utils/test-utils/index.d'
import Providers from '~/next/shared/utils/test-utils/Providers'
import customQueries, { MyQueries } from './custom-queries'

export const myRender = async (
  Component: any,
  options?: MyRenderOptions
): Promise<[MyRenderResult, MyRenderedOptions]> => {
  const allOptions = {
    ...options,
  }

  allOptions.theme = options?.theme || theme

  const rendered = render<MyQueries, HTMLElement>(Component, {
    wrapper: Providers(allOptions),
    queries: { ...queries, ...customQueries } as MyQueries,
  })

  await waitFor(() => rendered.container.querySelector('body'))

  return [rendered, { ...allOptions }]
}

export * from '@testing-library/react'

export type MyRenderResult = RenderResult<MyQueries, HTMLElement>

export { myRender as render, userEvent }
