import { createContext } from "react";
import {Navbar, Footer} from "../partials";

export const LayoutContext = createContext()

// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
    return (
        <>
            <div className="">
                <Navbar/>   


                {"All children pass here"}
                {children}
            </div>
            <Footer/>
        </>
    )
}

export default Layout;