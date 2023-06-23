import { Link } from 'react-router-dom'
import ProductsList from '../components/ProductsList'

const Home = () => {
  return (
    <div className='container px-4 mx-auto'>
      <div className='flex flex-wrap justify-between mb-4'>
        <h1>Product&nbsp;List</h1>
        <Link
          className='bg-slate-700 hover:bg-slate-600 flex items-center px-4 py-2 gap-2 text-gray-100 uppercase text-xs'
          to='/products/add'>
          New&nbsp;Product
        </Link>
      </div>

      <ProductsList />
    </div>
  )
}

export default Home