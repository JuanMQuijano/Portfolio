import { Link, useLocation } from "react-router-dom"

const Aside = () => {

    const location = useLocation();

    return (
        <aside className=" bg-white min-h-screen flex flex-col ">
            <div className="my-10">
                <Link to="/"
                    className="text-4xl handjet font-bold text-center px-5 uppercase"
                >
                    Portfolio Juan Quijano
                </Link>
            </div>

            <nav className="flex flex-col items-center justify-center mt-20 gap-7">
                <Link
                    to="/"
                    className={`${location.pathname === "/" ? 'enlace-activo' : 'bg-indigo-300'} text-xl uppercase  w-[70%] text-center py-2 rounded-lg`}
                >Home</Link>

                <Link
                    to="projects"
                    className={`${location.pathname === "/projects" ? 'enlace-activo' : 'bg-indigo-300'} text-xl uppercase  w-[70%] text-center py-2 rounded-lg`}
                >Projects</Link>
            </nav>

            <div className="text-center capitalize mt-10">
                <p>You can reach via <a className="underline" href="mailto:juanchoquijano20@hotmail.com">email</a></p>

                <div className="flex justify-center items-center gap-2 mt-5">
                    <a href="https://github.com/JuanMQuijano" target="_blank" className="w-10">
                        <img src="./src/assets/github-mark.png" alt="GitHub Logo" />
                    </a>

                    <a href="https://www.linkedin.com/in/juan-quijano/" target="_blank" className="w-10">
                        <img src="./src/assets/LI-In-Bug.png" alt="LinkedIn Logo" />
                    </a>
                </div>

                <p className="mt-16">made by juan quijano with ♥️</p>
            </div>
        </aside>
    )
}

export default Aside