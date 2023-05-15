import { SearchForm } from '../components/SearchForm'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  // SearchFormコンポーネントに渡す関数
  const onSubmit = (value: string) => {
    console.log(value)
  }
  return (
    <>
      <div>Hello World</div>
      <SearchForm onSubmit={onSubmit} />
    </>
  )
}
export default Home
