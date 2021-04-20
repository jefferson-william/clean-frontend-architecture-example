import { RouterContext } from 'next-server/dist/lib/router-context'
import { ThemeProvider } from 'styled-components'
import { MyRenderOptions } from '~/next/shared/utils/test-utils/index.d'

const Providers = (allOptions: MyRenderOptions) => ({ children }: any) => (
  <RouterContext.Provider value={allOptions.router as any}>
    <ThemeProvider theme={allOptions.theme}>{children}</ThemeProvider>
  </RouterContext.Provider>
)

export default Providers
