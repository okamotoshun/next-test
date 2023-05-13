import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'

import { SearchForm } from '../components/SearchForm'

describe('rendering', () => {
  it('Should render SearchForm', () => {
    render(<SearchForm />)
    expect(screen.getByRole('textbox')).toBeTruthy()
    expect(screen.getByRole('button')).toBeTruthy()
    expect(screen.getByTestId('search-input')).toBeTruthy()
    expect(screen.getByTestId('search-button')).toBeTruthy()
  })
})

describe('input form onChange event', () => {
  it('input test', async () => {
    render(<SearchForm />)
    // HTMLElementに型推論されているのでasで型アサーション
    const inputValue = screen.getByRole('textbox') as HTMLInputElement
    // ユーザーが入力フォームに"test"と入力する動作をテスト
    userEvent.type(inputValue, 'test')
    // await を追加して入力フォームの値が更新されるのを待機
    await screen.findByDisplayValue('test')
    // 入力フォームの値が"test"になっているかをチェック
    expect(inputValue.value).toBe('test')
  })
})
