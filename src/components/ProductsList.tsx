import { getProductsRequest } from '../api/services/products.services'
import { ProductType } from '../types/product.type';
import { useQuery } from '@tanstack/react-query';
import ProductCard from './ProductCard';
import { AxiosError } from 'axios';

const ProductsList = () => {
  const { data: dataProducts, isLoading, isError, error } = useQuery({
    queryKey: ['products'],
    queryFn: getProductsRequest,
    select: (data) => data.sort((a, b) => b.id - a.id)
  })

  if (isLoading) return (<span>Loading...</span>)
  if (isError) return (<span>{(error as AxiosError).message}</span>)

  return (
    <>
      {
        dataProducts.length === 0 ?
          <span>Results not found...</span>
          :
          <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-6'>
            {
              dataProducts?.map((item: ProductType) => <ProductCard key={item.id} product={item} />)
            }
          </div>
      }
    </>
  )
}

export default ProductsList