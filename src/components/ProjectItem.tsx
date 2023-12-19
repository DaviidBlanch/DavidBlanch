import '../styles/projects.css'

export default function ProjectItem({ id, imagen, alt, titulo, descriptionAbrev }
    :
    { id: number, imagen: string, alt: string, titulo: string, descriptionAbrev: string }
) {
    return (
        <div key={id}>
            <div
                className="image-container"
            >
                <picture>
                    <img
                        src={imagen}
                        alt={alt}
                        className="image z-10 rounded-lg"
                    />
                </picture>
                <div className="overlay p-2">
                    {/* Aqui va algo */}
                </div>
            </div>
            <span className="text-base font-medium font-sans ml-[10px]">{titulo} - {descriptionAbrev}</span>
        </div>
    )
}