import Layout from "./components/Layout"
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import AddProduct from "./pages/AddProduct"
import EditProduct from "./pages/EditProduct"

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="products" element={<Home />} />
        <Route path="products/add" element={<AddProduct />} />
        <Route path="products/:id" element={<EditProduct />} />
      </Route>
    </Routes>
  )
}

export default App