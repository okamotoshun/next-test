import { getByText, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { Cards } from '../components/Cards'

describe('cards component props pass test', () => {
  it('Testing for missing array elements', () => {
    // propsの配列データの中身が存在しないとき
    render(<Cards userInfos={[]} />)
    expect(screen.getByText('ユーザー情報は0です')).toBeInTheDocument()
  })
})

describe('cards component props pass test', () => {
  it('Testing for the presence of array elements', () => {
    // Cardsコンポーネントに渡すダミーデータ
    const dummyUserInfos = [
      { id: 1, name: 'tom' },
      {
        id: 2,
        name: 'mary',
      },
      {
        id: 3,
        name: 'bob',
      },
    ]
    render(<Cards userInfos={dummyUserInfos} />)
    // li要素を全件取得し配列に格納
    const userInfos = screen
      .getAllByRole('listitem')
      .map((item) => item.textContent) // ダミーデータをliで表示される文言と形式を合わせる
    const dummyItems = dummyUserInfos.map(
      (item) => `id:${item.id} name:${item.name}`
    ) // 上記の2つを比較し一致しているかをテスト
    expect(userInfos).toEqual(dummyItems)
  })
})
