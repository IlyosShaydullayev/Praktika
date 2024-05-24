import { createContext } from "react"
import { useReducer } from "react"
import AdminLayout from "../layout/AdminLayout"
import { productReducer, productState } from "./ProductContext"
import ProductMenu from "./ProductMenu"
import AllProduct from "./ProductTable"

export const ProductContext = createContext()

const ProductComponent = () => {
    return (
        <div className="grid grid-cols-1 space-y-4 p-4">
            <ProductMenu />
            <AllProduct/>
        </div>
    )
}


const Products = () => {
    const [data, dispatch] = useReducer(productReducer, productState)
    return (
        <>
            <ProductContext.Provider value={{ data, dispatch }}>
                <AdminLayout children={<ProductComponent />} />
            </ProductContext.Provider>
        </>
    )
}

export default Products