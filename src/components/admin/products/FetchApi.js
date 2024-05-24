import axios from "axios";

const apiURL = import.meta.env.VITE_APP_API_URL;

export const getAllProduct = async () => {
    try {
        let res = await axios.get(`${apiURL}/api/product/all-product`);
        return res.data
    } catch (error) {
        console.log(error);
    }
}

export const productByPrice = async (price) => {
    try {
        let res = await axios.post(`${apiURL}/api/product/product-by-price`, { price })
        return res.data
    } catch (error) {
        console.log(error);
    }
}

export const productByCategory = async (catId) => {
    try {
        let res = await axios.post(`${apiURL}/api/product/product-by-category`, { catId })
        return res.data
    } catch (error) {
        console.log(error);
    }
}

export const deleteProduct = async (pId) => {
    try {
        let res = await axios.post(`${apiURL}/api/product/delete-product`, { pId })
        return res.data
    } catch (error) {
        console.log(error);
    }
}