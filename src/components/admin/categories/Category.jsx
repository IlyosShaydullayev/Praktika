import { useReducer } from "react";
import { createContext } from "react";
import AdminLayout from "../layout/AdminLayout";
import { categoryReducer, categoryState } from "./CategoryContext";
import CategoryMenu from "./CategoryMenu";

export const CategoryContext = createContext()

const CategoryComponent = () => {
    return (
        <div className="grid grid-cols-1 space-y-4 p-4">
            <CategoryMenu/>
        </div>
    )
}

const Category = () => {
    const [data, dispatch] = useReducer(categoryReducer, categoryState)
    return (
        <CategoryContext.Provider value={{ data, dispatch }}>
            <AdminLayout children={<CategoryComponent />} />
        </CategoryContext.Provider>
    )
}

export default Category