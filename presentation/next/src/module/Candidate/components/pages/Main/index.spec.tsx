import { populateWhereDidYouWorkForm } from '~/next/module/Candidate/components/molecules/AddInformationFields/actions'
import {
  findByWhereDidYouWorkInput,
  getAllWhereDidYouWorkInput,
} from '~/next/module/Candidate/components/molecules/AddInformationFields/selectors'
import Main from '~/next/module/Candidate/components/pages/Main'
import {
  clickNextButton,
  clickSendButton,
  populateBasicDataForm,
  populateKnowledgeForm,
} from '~/next/module/Candidate/components/pages/Main/actions'
import { findByKnowledgeInput } from '~/next/module/Candidate/components/pages/Main/selectors'
import { render, act, MyRenderResult, waitForElementToBeRemoved } from '~/next/shared/utils/test-utils'
import { MyRenderedOptions } from '~/next/shared/utils/test-utils/index.d'
import '~/next/__mocks__/nextRouter'

describe('pages/main', () => {
  let wrapper: MyRenderResult
  let options: MyRenderedOptions

  beforeEach(async () => {
    ;[wrapper, options] = await render(<Main />)
  })

  it('should to match snapshot', () => {
    expect(wrapper.asFragment()).toMatchSnapshot()
  })

  it('should be able to perform the entire flow of filling out the form', async () => {
    await act(async () => {
      populateBasicDataForm()

      clickNextButton()

      await findByWhereDidYouWorkInput()

      await populateWhereDidYouWorkForm(wrapper)

      clickNextButton()

      await waitForElementToBeRemoved(() => getAllWhereDidYouWorkInput()[0])

      await findByKnowledgeInput()

      await populateKnowledgeForm(wrapper)

      clickSendButton()
    })

    expect(options.store.getState().Candidate.formData).toEqual({
      fullName: 'Steve Jobs',
      email: 'steve.jobs@email.com',
      whereDidYouWork: ['Amazon', 'Yahoo'],
      knowledge: ['NodeJS', 'React'],
      panelIndex: 2,
      picture: '',
    })
  })
})
