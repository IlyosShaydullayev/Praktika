import { createContext, useReducer } from "react";
import Layout from "../layout/Layout";
import { homeReducer, homeState } from "./HomeContext";
import Slider from "./Slider";

export const HomeContext = createContext();

const HomeComponent = () => {
    return(
        <>
            <Slider/>
        </>
    )
}

const Home = () => {
    const [data, dispatch] = useReducer(homeReducer, homeState)
    return (
        <HomeContext.Provider value={{data, dispatch}}>
            <Layout children={<HomeComponent/>}/>
        </HomeContext.Provider>
    )
}

export default Home;