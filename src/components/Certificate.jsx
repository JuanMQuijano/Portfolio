const Certificate = ({ src }) => {
    return (
        <a href={src} target='_blank' className='w-40 md:w-56 h-56 hover:cursor-pointer'>
            <img src={src} alt="Imagen Certificado" />
        </a>
    )
}

export default Certificate