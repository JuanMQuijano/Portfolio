import { Outlet } from "react-router-dom"
import Aside from "../components/Aside"

const HomeLayout = () => {

    return (
        <div className="flex">
            <Aside />

            <main className="flex-1">
                <Outlet />
            </main>
        </div >
    )
}

export default HomeLayout