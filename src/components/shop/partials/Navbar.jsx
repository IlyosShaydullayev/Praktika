import { useNavigate } from "react-router-dom"

function Navbar() {
    const navigate = useNavigate()
    return (
        <>
            sdfgh
            <nav className="fixed top-0 w-full z-20 shadow-lg lg:shadow-none bg-white">
                <div className="m-4 md:mx-12 md:my-6 grid grid-cols-4 lg:grid-cols-3">
                    <div className="hidden lg:block col-span-1 flex text-gray-600 mt-1">
                        <span
                            className="hover:bg-gray-200 px-4 py-3 rounded-lg font-light tracking-widest hover:text-gray-800 cursor-pointer"
                            onClick={() => navigate("/")}>
                            Shop
                        </span>
                        <span
                            className="hover:bg-gray-200 px-4 py-3 rounded-lg font-light tracking-widest hover:text-gray-800 cursor-pointer"
                            onClick={() => navigate("/blog")}>
                            Blog
                        </span>
                        <span
                            className="hover:bg-gray-200 px-4 py-3 rounded-lg font-light tracking-widest hover:text-gray-800 cursor-pointer"
                            onClick={() => navigate("/contact-us")}>
                            Contact Us
                        </span>
                    </div>
                    <div className="col-span-2 lg:hidden flex justify-items-stretch items-center">
                        <svg
                            className="col-span-1 lg:hidden w-8 h-8 cursor-pointer text-gray-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                        <span
                            className="flex items-left font-bold uppercase text-gray-800 text-2xl cursor-pointer px-2 text-center"
                            style={{ letterSpacing: "0.1rem" }}
                        >
                            Hayroo
                        </span>
                    </div>
                    <div
                        onClick={() => navigate("/")}
                        className=" lg:block flex items-left col-span-1 text-center text-gray-800 font-bold tracking-widest uppercase text-2xl cursor-pointer"
                    >
                        Hayroo
                    </div>
                    <div className="flex text-right col-span-2 lg:col-span-1 justify-end">
                        <div
                            onClick={() => navigate("/wish-list")}
                            className="hover:bg-gray-200 rounded-lg px-2 py-2 cursor-pointer"
                            title="Wishlist"
                        >
                            <svg
                                className={`${location.pathname === "/wish-list"
                                        ? "fill-current text-gray-800"
                                        : ""
                                    } w-8 h-8 text-gray-600 cursor-pointer`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar