import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import BlogPage from '../pages/blog'

describe('useEffect rendering', () => {
  it('Should render fetch method before data is retrieved', async () => {
    render(<BlogPage />)
    expect(screen.getByText('ローディング中')).toBeInTheDocument()
  })
})
