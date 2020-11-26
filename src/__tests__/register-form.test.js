import renderer from 'react-test-renderer'
import FormRegister from '../../organisms/register-form'

describe('RegisterForm spec', () => {
  test('it renders the register form', () => {
    const tree = renderer.create(<FormRegister />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
