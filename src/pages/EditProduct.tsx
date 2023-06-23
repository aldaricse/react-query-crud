import ProductForm from '../components/ProductForm';
import { ProductType } from '../types/product.type';
import { getProductRequest, updateProductsRequest } from '../api/services/products.services';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AxiosError } from 'axios';
import { BiArrowBack } from 'react-icons/bi';

const EditProduct = (): JSX.Element => {
  const { id } = useParams()
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const { data: dataProduct, isLoading, isError, error } = useQuery({
    queryKey: ['product'],
    queryFn: () => getProductRequest(Number(id))
  })
  const updateProductMutation = useMutation({
    mutationFn: updateProductsRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] })
    }
  })

  const handleEditProduct = (data: ProductType) => {
    if (confirm('Edit Product?')) {
      updateProductMutation.mutate(data)
      navigate('/')
    }
  }

  if (isLoading) return (<span>Loading...</span>)
  if (isError) return (<span>{(error as AxiosError).message}</span>)

  return (
    <>
      <div className='max-w-xl mx-auto px-4 text-center'>
        <Link to={'/'}>
          <div className="flex items-center gap-2 mb-4">
            <BiArrowBack />
            <span>Back</span>
          </div>
        </Link>
        <h2 className='text-center'>Edit Product</h2>
        <ProductForm
          onSubmitProduct={handleEditProduct}
          initialValues={dataProduct}
        />
      </div>
    </>
  )
}

export default EditProduct