import { render, MyRenderResult } from '~/next/shared/utils/test-utils'
import Login from './index'
import '~/next/__mocks__/nextRouter'

describe('pages/login', () => {
  let wrapper: MyRenderResult

  beforeEach(async () => {
    ;[wrapper] = await render(<Login />)
  })

  it('should to match snapshot', () => {
    expect(wrapper.asFragment()).toMatchSnapshot()
  })
})
