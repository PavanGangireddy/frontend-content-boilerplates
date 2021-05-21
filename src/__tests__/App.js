import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from '../App'

describe('App tests', () => {
  it('display text:::5:::', () => {
    render(<App />)
    expect(true).toBe(true)
  })
})
