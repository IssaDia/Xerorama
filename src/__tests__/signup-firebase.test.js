import { render } from '@testing-library/react'
import SignupFirebase from '../../organisms/signup-firebase'

describe('SignUp Form', () => {
  test('it should validate password length', async () => {
    const { findByLabelText, findByText, findByRole } = render(<SignupFirebase />)
    const input = await findByLabelText('Password')
  })
})
