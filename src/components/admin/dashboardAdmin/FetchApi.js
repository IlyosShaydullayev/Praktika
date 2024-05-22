import axios from "axios";

const apiURL = import.meta.env.VITE_APP_API_URL

export const getSliderImages = async () => {
    try {
        let res = await axios.get(`${apiURL}/api/customize/get-slide-image`)
        return res.data
    } catch (error) {
        console.log(error);
    }
}

export const postUploadImage = async (formData) => {
    try {
        let res = await axios.post(`${apiURL}/api/customize/upload-slide-image`, formData)
        return res.data
    } catch (error) {
        console.log(error);
    }
}