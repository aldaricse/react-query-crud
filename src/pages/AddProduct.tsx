import ProductForm from '../components/ProductForm';
import { ProductType } from '../types/product.type';
import { addProductsRequest } from '../api/services/products.services';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

const AddProduct = (): JSX.Element => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const addProductMutation = useMutation({
    mutationFn: addProductsRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] })
    }
  })

  const handleAddProduct = (data: ProductType) => {
    addProductMutation.mutate(data);
    navigate('/')
  }

  return (
    <>
      <div className='max-w-xl mx-auto px-4 text-center'>
        <Link to={'/'}>
          <div className="flex items-center gap-2 mb-4">
            <BiArrowBack />
            <span>Back</span>
          </div>
        </Link>
        <h2 className='text-center'>New Product</h2>
        <ProductForm onSubmitProduct={handleAddProduct} />
      </div>
    </>
  )
}

export default AddProduct