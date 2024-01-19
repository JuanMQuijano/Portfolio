import { useRef } from "react";
import { Link, useLocation } from "react-router-dom"

const Aside = () => {

    const location = useLocation();
    const divMenu = useRef()

    const handleClick = () => {
        divMenu.current.classList.toggle("hidden");
        divMenu.current.classList.toggle("flex");
    }

    return (
        <aside className=" bg-white md:min-h-screen flex flex-col ">
            <div className="my-5 md:my-10 mx-auto flex justify-center items-center gap-5">
                <Link to="/"
                    className="text-3xl md:text-4xl handjet font-bold text-center md:px-5 uppercase"
                >
                    Portfolio Juan Quijano
                </Link>

                <div className="md:hidden hover:cursor-pointer" onClick={handleClick}>
                    <div className="space-y-2">
                        <div className="w-8 h-0.5 bg-gray-600"></div>
                        <div className="w-8 h-0.5 bg-gray-600"></div>
                        <div className="w-8 h-0.5 bg-gray-600"></div>
                    </div>
                </div>
            </div>

            <div ref={divMenu} className="hidden md:flex flex-col">
                <nav
                    className="flex flex-col items-center justify-center md:mt-20 gap-5 md:gap-7"
                >
                    <Link
                        to="/"
                        className={`${location.pathname === "/" ? 'enlace-activo' : 'bg-indigo-300'} 
                    text-xl uppercase  w-[70%] text-center py-1 md:py-2 rounded-lg`}
                    >Home</Link>

                    <Link
                        to="projects"
                        className={`${location.pathname === "/projects" ? 'enlace-activo' : 'bg-indigo-300'} 
                    text-xl uppercase  w-[70%] text-center py-1 md:py-2 rounded-lg`}
                    >Projects</Link>
                </nav>

                <div className="text-center capitalize mt-10">
                    <p>You can reach me via <a className="underline" href="mailto:juanchoquijano20@hotmail.com">email</a></p>

                    <div className="flex justify-center items-center gap-2 mt-5">
                        <a href="https://github.com/JuanMQuijano" target="_blank" className="w-10">
                            <img src="./images/github-mark.png" alt="GitHub Logo" />
                        </a>

                        <a href="https://www.linkedin.com/in/juan-quijano/" target="_blank" className="w-10">
                            <img src="./images/LI-In-Bug.png" alt="LinkedIn Logo" />
                        </a>
                    </div>

                    <p className="mt-16">made by juan quijano with ♥️</p>
                </div>
            </div>
        </aside>
    )
}

export default Aside