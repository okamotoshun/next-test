import type { NextPage } from 'next'
import { SearchForm } from '../components/SearchForm'
import { Cards } from '../components/Cards'

const userInfos = [
  { id: 1, name: 'Tom' },
  {
    id: 2,
    name: 'Mary',
  },
  {
    id: 3,
    name: 'Bob',
  },
]

const Home: NextPage = () => {
  // SearchFormコンポーネントに渡す関数
  const onSubmit = (value: string) => {
    console.log(value)
  }
  return (
    <>
      <div>Hello World</div>
      <SearchForm onSubmit={onSubmit} />
      <Cards userInfos={userInfos} />
    </>
  )
}
export default Home
