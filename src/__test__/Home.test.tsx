import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from '../pages/index'

// describeは関連するテストをブロック単位でまとめるメソット
// 第1引数にテストブロックの説明
// 第2引数にテストケースを記述するコールバック関数
// itは実際のテストを記述する
// 第1引数はテストの説明
// 第2引数はテスト内容を記述するコールバック関数
// render()は引数に指定したJSXをレンダリングする
// expectはテスト結果を評価するメソット

describe('rendering', () => {
  it('Should render Hello text', () => {
    render(<Home />)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })
})
