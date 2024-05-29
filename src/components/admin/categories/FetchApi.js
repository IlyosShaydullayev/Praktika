import axios from "axios";

const apiURL = import.meta.env.VITE_APP_API_URL;

const BearerToken = () =>
    localStorage.getItem("jwt") ? JSON.parse(localStorage.getItem("jwt")).token : false;

const Headers = () => {
    return {
        headers: {
            token: `Bearer ${BearerToken()}`,
        }
    }
}


export const getAllCategory = async() => {
    try {
        let res = await axios.get(`${apiURL}/api/category/all-category`, Headers())
        console.log(res.data);
        return res.data
    } catch (error) {
        console.log(error);
    }
}