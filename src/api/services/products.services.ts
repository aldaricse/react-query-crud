import { ProductType } from '../../types/product.type';
import axios from '../axios';

export const getProductsRequest = async (): Promise<ProductType[]> => {
  const { data } = await axios.get<ProductType[]>('/')
  return data
}

export const addProductsRequest = async (product: ProductType): Promise<ProductType> => {
  const { data } = await axios.post<ProductType>('/', product)
  return data
}

export const updateProductsRequest = async (product: ProductType): Promise<ProductType> => {
  const { data } = await axios.put<ProductType>('/' + product.id, product)
  return data
}

export const getProductRequest = async (id: number): Promise<ProductType> => {
  const { data } = await axios.get('/' + id)
  return data
}

export const deleteProductRequest = async (id: number): Promise<ProductType> => {
  const { data } = await axios.delete('/' + id)
  return data
}