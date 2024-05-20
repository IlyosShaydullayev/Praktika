import AdminNavbar from "../partials/AdminNavbar"

// eslint-disable-next-line react/prop-types
const AdminLayout = ({ children }) => {
    return (
        <>
            <AdminNavbar />
            <section className="flex bg-gray-100">
                <div className="w-full md:w-11/12 h-full">
                    {children}
                </div>
            </section>
        </>
    )
}

export default AdminLayout