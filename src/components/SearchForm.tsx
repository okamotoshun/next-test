import React, { useState } from 'react'

type SearchFormProps = {
  onSubmit: (value: string) => void
}

export const SearchForm = ({ onSubmit }: SearchFormProps) => {
  // 入力フォームの値を管理するステート
  const [value, setValue] = useState<string>('')
  // 入力フォームの値を変更する関数
  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  } // 検索ボタンをクリックした際に発火する関数
  // 入力フォームに値がある場合はonSbmitを発火し、そうでない場合はconsoleを表示
  const onClick = () => {
    if (value) {
      onSubmit(value)
    } else {
      console.log('入力フォームが空です')
    }
  }
  return (
    <div>
      <input
        data-testid="search-input"
        type="text"
        onChange={onchange}
        value={value}
        // value={'変わりません'} 固定値にした場合test失敗
      />
      <button data-testid="search-button" onClick={onClick}>
        検索
      </button>
    </div>
  )
}
