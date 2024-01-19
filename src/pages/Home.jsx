import { useEffect, useState } from "react"
import Certificate from "../components/Certificate";
import { certificatesURLS } from "../../data/certificatesURLS";

const Home = () => {

    const [show, setShow] = useState(false);
    const [showBar, setShowBar] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, 2500)

        setTimeout(() => {
            setShowBar(true)
        }, 1000)

    }, [])

    return (
        <div className="min-h-screen w-5/6 mx-auto mt-5 md:mt-36 animate__animated animate__backInRight">
            <div className="flex flex-col gap-1  p-3">

                <div>

                    <h1 className="text-xl md:text-2xl font-mono texto">Hello, my name is Juan 👋🏻 :)</h1>

                    <br />
                    {show && (
                        <div className="animate__animated animate__fadeInRight">
                            <p className="text-xl md:text-2xl font-mono capitalize">
                                Computer engineer & software developer with experience in technologies such as PHP, Laravel, Java, SQL, JavaScript, React, Node & testing with Jest.
                            </p>
                            <div className="mt-5 bg-indigo-300 w-fit p-3 rounded font-bold">
                                <a href="./images/CV_Juan_Quijano.pdf" download={true}>Download CV</a>
                            </div>
                        </div>)}
                </div>

                {showBar && (<hr className="h-1 bg-black my-7 animate__animated animate__backInUp" />)}

                {show && (<>
                    <div className="animate__animated animate__fadeInRight" >
                        <h3 className="text-xl md:text-2xl font-bold uppercase">Certificates</h3>

                        <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-16 mt-5">
                            {certificatesURLS.map((e,) => (<Certificate key={e} src={e} />))}
                        </div>

                    </div>
                </>)}


            </div>
        </div>
    )
}

export default Home