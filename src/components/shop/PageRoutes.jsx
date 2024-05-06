import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./home/Home"

const PageRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default PageRoutes;