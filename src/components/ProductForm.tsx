import { useForm } from 'react-hook-form';
import { AiOutlineLink } from 'react-icons/ai';
import { BsCurrencyDollar } from 'react-icons/bs';
import { ProductType } from '../types/product.type';

interface Props {
  onSubmitProduct: (data: ProductType) => void
  initialValues?: ProductType
}

const ProductForm = ({ onSubmitProduct, initialValues }: Props): JSX.Element => {
  const { register, handleSubmit, formState: { errors } } = useForm<ProductType>({
    // defaultValues: initialValues,
    values: initialValues,
  })

  const onSubmitForm = handleSubmit((data) => onSubmitProduct(data))

  return (
    <form onSubmit={onSubmitForm}>
      <div className='py-2'>
        <input
          {...register('title', { required: true })}
          className='w-full p-2'
          placeholder='Enter Name...' />
        {errors.title && errors.title.type === "required" && (
          <span role="alert">This is required</span>
        )}
      </div>
      <div className='py-2'>
        <div className='flex items-center'>
          <div className='bg-slate-700 p-2 text-white border-[2px] border-gray-700'>
            <div className="p-0.5">
              <BsCurrencyDollar size="1.25rem" />
            </div>
          </div>
          <input
            type='number'
            {...register('price', { required: true })}
            className='w-full p-2 border-l-0'
            placeholder='Enter Price...' />
        </div>
        {errors.price && errors.price.type === "required" && (
          <span role="alert">This is required</span>
        )}
      </div>
      <div className='py-2'>
        <textarea
          {...register('description', { required: true })}
          rows={3}
          className='w-full p-2'
          placeholder='Enter Description...'></textarea>
        {errors.description && errors.description.type === "required" && (
          <span role="alert">This is required</span>
        )}
      </div>
      <div className='py-2'>
        <div className="flex items-center">
          <div className='bg-slate-700 p-2 text-white border-[2px] border-gray-700'>
            <div className="p-0.5">
              <AiOutlineLink size="1.25rem" />
            </div>
          </div>
          <input
            type="url"
            {...register('image', { required: true })}
            className='w-full p-2 border-l-0'
            placeholder='Enter Image link...' />
        </div>
        {errors.image && errors.image.type === "required" && (
          <span role="alert">This is required</span>
        )}
      </div>

      <div className="py-4">
        <div className="flex justify-center">
          <button
            type="submit"
            className='bg-green-600 hover:bg-green-500 flex items-center px-6 py-2 gap-2 text-gray-100 uppercase text-sm'>Save</button>
        </div>
      </div>
    </form>
  )
}

export default ProductForm