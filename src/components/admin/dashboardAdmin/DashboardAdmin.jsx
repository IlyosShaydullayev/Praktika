/* eslint-disable react/no-children-prop */
import { createContext, useReducer } from "react"
import { dashboardReducer, dashboardState } from "./DashboardCongtext"
import AdminLayout from "../layout/AdminLayout"

export const DashboardContext = createContext()

const DashboardComponent = () => {
    return (
        <></>
    )
}


const DashboardAdmin = () => {
    const [data, dispatch] = useReducer(dashboardReducer, dashboardState)
    return (
        <>
            <DashboardContext.Provider value={{ data, dispatch }}>
                <AdminLayout children={<DashboardComponent />} />
            </DashboardContext.Provider>
        </>
    )
}

export default DashboardAdmin