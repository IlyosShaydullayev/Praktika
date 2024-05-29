import { useContext, useState } from "react"
import { CategoryContext } from "./Category"
import { getAllCategory } from "./FetchApi"

const AddCategoryModal = () => {
    const { data, dispatch } = useContext(CategoryContext)

    const alert = (msg, type) => (
        <div className={`bg-${type}-200 py-2 px-4 w-full`}>{msg}</div>
    )

    const [fData, setFdata] = useState({
        cName: "",
        cDescription: "",
        cImage: "",
        cStatus: "Active",
        success: false,
        error: false
    })

    const fetchData = async () => {
        let responseData = await getAllCategory()
        if (responseData.Categories) {
            dispatch({ type: "fetchCategoryAndChangeState", payload: responseData.Categories })
        }
    }

    if (fData.error || fData.success) {
        setTimeout(() => {
            setFdata({ ...fData, success: false, error: true })
        }, 2000)
    }

    const submitForm = async (e) => {
        dispatch({ type: "loading", payload: true })
        e.preventDefault()
        e.target.reset()

        if (!fData.cImage) {
            dispatch({ type: "loading", payload: false })
            return setFdata({ ...fData, error: "Please upload a category image" })
        }

        try {
            let responseData = await createCategory(fData)
            if (responseData.success) {
                fetchData()
                setFdata({
                    ...fData,
                    cName: "",
                    cDescription: "",
                    cImage: "",
                    cStatus: "Active",
                    success: responseData.success,
                    error: false
                })
                dispatch({ type: "loading", payload: false })
                setTimeout(() => {
                    setFdata({
                        ...fData,
                        cName: "",
                        cDescription: "",
                        cImage: "",
                        cStatus: "Active",
                        success: false,
                        error: false
                    })
                }, 2000);
            } else if(responseData.error){
                
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        </>
    )
}

export default AddCategoryModal