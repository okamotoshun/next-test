import React, { useState } from 'react'

export const SearchForm = () => {
  // 入力フォームの値を管理するステート
  const [value, setValue] = useState<string>('')
  // 入力フォームの値を変更する関数
  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  } // 検索ボタンをクリックした際に発火する関数
  const onClick = () => {
    // 検索の処理
  }
  return (
    <div>
      <input type="text" onChange={onchange} value={value} />
      <button onClick={onClick}>検索</button>
    </div>
  )
}
