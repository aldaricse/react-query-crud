import { Link } from 'react-router-dom'
import { ProductType } from '../types/product.type'
import { QueryClient, useMutation } from '@tanstack/react-query'
import { deleteProductRequest } from '../api/services/products.services'
import { HiPencil, HiTrash } from 'react-icons/hi';

interface Props {
  product: ProductType
}

const ProductCard = ({ product }: Props): JSX.Element => {
  const queryClient = new QueryClient()
  const deleteProductMutation = useMutation({
    mutationFn: deleteProductRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] })
    }
  })

  const handleDelete = (productId: number) => {
    confirm('Delete product?') ? deleteProductMutation.mutate(productId) : null
  }

  return (
    <div className='flex flex-col justify-between gap-4 p-4 bg-white shadow-lg'>
      <div>
        <div className='flex flex-col min-[480px]:flex-row gap-4'>
          <div className="relative w-[150px] h-[150px] mx-auto">
            <img className='w-full h-full object-contain brightness-110 mix-blend-multiply hover:scale-125 ease-in-out duration-200' src={product.image} alt={product.title} />
          </div>
          <div className='flex-1 p-4 flex flex-col gap-4'>
            <h4>{product.title}</h4>
            <span>
              <span className='block'>Price:</span>
              <span className='text-lg text-red-400 font-bold'>$&nbsp;{product.price}</span>
            </span>
          </div>
        </div>
        <p className='text-[12px] my-4'>{product.description}</p>
      </div>
      <div className="flex gap-2 justify-end">
        <Link
          to={`products/${product.id}`}
          className='bg-blue-600 hover:bg-blue-500 flex items-center p-2 gap-2 text-gray-100 uppercase text-xs'>
          <HiPencil size="1rem" />
          Editar
        </Link>
        <button
          className='bg-red-600 hover:bg-red-500 flex items-center p-2 gap-2 text-gray-100 uppercase text-xs'
          onClick={() => handleDelete(product.id)}>
          <HiTrash size="1rem" />
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default ProductCard