import { Outlet } from "react-router-dom"
import Aside from "../components/Aside"

const HomeLayout = () => {

    return (
        <div className="flex flex-col md:flex-row">
            <Aside />

            <main className="flex-1">
                <Outlet />
            </main>
        </div >
    )
}

export default HomeLayout