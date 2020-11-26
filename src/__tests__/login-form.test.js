import LoginForm from '../../organisms/login-form'
import renderer from 'react-test-renderer'

describe('LoginForm spec', () => {
  test('it renders the login form', () => {
    const tree = renderer.create(<LoginForm />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
