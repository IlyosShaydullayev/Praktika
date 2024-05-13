import { useContext } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { LayoutContext } from "../layout/Layout"
import { isAdmin } from "../auth/FetchApi"
import { logout } from "./Action"
import "./style.css";

function Navbar() {
    const navigate = useNavigate()
    const location = useLocation()

    const { data, dispatch } = useContext(LayoutContext)

    const navbarToggleOpen = () => {
        data.navbarHamburger
            ? dispatch({ type: "hamburgerToggle", payload: false })
            : dispatch({ type: "hamburgerToggle", payload: true })
    }

    const loginModalOpen = () => {
        data.loginSignupModal
            ? dispatch({ type: "loginSignupModalToggle", payload: false })
            : dispatch({ type: "loginSignupModalToggle", payload: true })
    }

    const cartModalOpen = () => {
        data.cartModal
            ? dispatch({ type: "cartModalToggle", payload: false })
            : dispatch({ type: "cartModalToggle", payload: true })
    }


    return (
        <>
            <nav className="fixed top-0 w-full z-20 shadow-lg lg:shadow-none bg-white">
                <div className="m-4 md:mx-12 md:my-6 grid grid-cols-4 lg:grid-cols-3">
                    <div className="lg:block col-span-1 flex text-gray-600 mt-1">
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
                            onClick={() => navbarToggleOpen()}
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

                        {localStorage.getItem("jwt") ? (
                            <>
                                <div title="Logout" className="userDropdownBtn hover:bg-gray-200 px-2 py-2 rounded-lg relative">
                                    <svg
                                        className="cursor-pointer w-8 h-8 text-gray-600 hover:text-gray-800"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <div className="userDropdown absolute right-0 mt-1 bg-gray-200 rounded">
                                        {!isAdmin() ? (
                                            <>
                                                <li className="flex flex-col text-gray-700 w-48 shadow-lg">
                                                    <span
                                                        onClick={() => navigate("/user/orders")}
                                                        className="flex space-x-2 py-2 px-8 hover:bg-gray-400 cursor-pointer"
                                                    >
                                                        <span>
                                                            <svg
                                                                className="w-6 h-6"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={2}
                                                                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span>My Orders</span>
                                                    </span>
                                                    <span
                                                        onClick={() => navigate("/user/profile")}
                                                        className="flex space-x-2 py-2 px-8 hover:bg-gray-400 cursor-pointer"
                                                    >
                                                        <span>
                                                            <svg
                                                                className="w-6 h-6"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={2}
                                                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span>My Account</span>
                                                    </span>
                                                    <span
                                                        onClick={() => navigate("/wish-list")}
                                                        className="flex space-x-2 py-2 px-8 hover:bg-gray-400 cursor-pointer"
                                                    >
                                                        <span>
                                                            <svg
                                                                className="w-6 h-6"
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
                                                        </span>
                                                        <span>My Wishlist</span>
                                                    </span>
                                                    <span
                                                        onClick={() => navigate("/user/setting")}
                                                        className="flex space-x-2 py-2 px-8 hover:bg-gray-400 cursor-pointer"
                                                    >
                                                        <span>
                                                            <svg
                                                                className="w-6 h-6"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={2}
                                                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                                                />
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={2}
                                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span>Setting</span>
                                                    </span>
                                                    <span
                                                        onClick={() => logout()}
                                                        className="flex space-x-2 py-2 px-8 hover:bg-gray-400 cursor-pointer"
                                                    >
                                                        <span>
                                                            <svg
                                                                className="w-6 h-6"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={2}
                                                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span>Logout</span>
                                                    </span>
                                                </li>
                                            </>
                                        ) : (
                                            <>
                                                <li className="flex flex-col text-gray-700 w-48 shadow-lg">
                                                    <span
                                                        onClick={() => navigate("/admin/dashboard")}
                                                        className="flex space-x-2 py-2 px-8 hover:bg-gray-400 cursor-pointer"
                                                    >
                                                        <span>
                                                            <svg
                                                                className="w-6 h-6"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={2}
                                                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                                                />
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={2}
                                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span>Admin Panel</span>
                                                    </span>
                                                    <span
                                                        onClick={() => logout()}
                                                        className="flex space-x-2 py-2 px-8 hover:bg-gray-400 cursor-pointer"
                                                    >
                                                        <span>
                                                            <svg
                                                                className="w-6 h-6"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={2}
                                                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span>Logout</span>
                                                    </span>

                                                </li>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div
                                onClick={(e) => loginModalOpen()}
                                className="cursor-pointer hover:bg-gray-200 px-2 py-2 rounded-lg"
                                title="Login"
                            >
                                <svg
                                    className="w-8 h-8 text-gray-600 hover:text-gray-800"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                    />
                                </svg>
                            </div>
                        )}


                        <div
                            onClick={(e) => cartModalOpen()}
                            className="hover:bg-gray-200 px-2 py-2 rounded-lg relative cursor-pointer"
                            title="Cart"
                        >
                            <svg
                                className="w-8 h-8 text-gray-600 hover:text-gray-800"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                />
                            </svg>
                            <span className="absolute top-0 ml-6 mt-1 bg-yellow-700 rounded px-1 text-white text-xs hover:text-gray-200 font-semibold">
                                {data.cartProduct !== null ? data.cartProduct.length : 0}
                            </span>
                        </div>

                    </div>
                </div >
            </nav >
        </>
    )
}

export default Navbar