import { useContext, useState } from "react"
import { ProductContext } from "./Products"
import { getAllProduct } from "./FetchApi"

const AddProductDetail = ({ categories }) => {
    const { data, dispatch } = useContext(ProductContext)

    const alert = (msg, type) => (
        <div className={`bg-${type}-200 py-2 px-4 w-full`}>{msg}</div>
    )

    const [fData, setFdata] = useState({
        pName: "",
        pDescription: "",
        pStatus: "Active",
        pImage: null,
        pCategory: "",
        pPrice: "",
        pOffer: 0,
        pQuantity: "",
        success: false,
        error: false
    })

    const fetchData = async () => {
        let responseData = await getAllProduct()
        setTimeout(() => {
            if (responseData && responseData.Products) {
                dispatch({ type: "fetchProductsAndChangeState", payload: responseData.Products })
            }
        }, 1000)
    }

    const submitForm = async (e) => {
        e.preventDefault()
        e.target.reset()

        if (!fData.pImage) {
            setFdata({ ...fData, error: "Please upload at least 2 image" })
            setTimeout(() => {
                setFdata({ ...fData, error: false })
            }, 2000)
        }

        try {
            let responseData = await createProduct(fData)
            if (responseData.success) {
                fetchData();
                setFdata({
                    ...fData,
                    pName: "",
                    pDescription: "",
                    pStatus: "Active",
                    pImage: null,
                    pCategory: "",
                    pPrice: "",
                    pOffer: 0,
                    pQuantity: "",
                    success: responseData.success,
                    error: false

                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (

    )
}

