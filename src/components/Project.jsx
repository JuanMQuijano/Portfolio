const Project = ({ src, href, title, techStack = [] }) => {
    return (
        <a href={href} target='_blank' className='w-40 md:w-56 hover:cursor-pointer border border-gray-400 rounded'>
            <img src={src} alt="Imagen Proyecto" />

            <h2 className="font-bold uppercase">{title}</h2>

            <div className="flex flex-wrap mt-2 gap-2">
                {techStack.map(e => (
                    <p key={e} className="bg-gray-300 p-1 rounded font-bold">{e}</p>
                ))}
            </div>
        </a>

    )
}

export default Project