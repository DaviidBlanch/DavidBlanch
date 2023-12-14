import '../styles/projects.css'

const images = [
    "https://images.unsplash.com/photo-1702069176442-6f9b26138cf2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1682686580950-960d1d513532?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1702016049560-3d3f27b0071e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",
    "https://plus.unsplash.com/premium_photo-1700567964045-cd9d98d7bd2e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1701930873285-74a87bdefa87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8"
]

export default function Projects() {

    return (
        <div className="p-3 grid gap-5 grid-cols-2 pb-16">
            {images.length > 0 && (
                images.map((image, index) => (
                    <div key={index}>
                        <div
                            className="image-container"
                        >
                            <div
                                className="overlay"
                            >
                                <span className="text-sm font-medium">scsc</span>
                            </div>
                            <img
                                src={image}
                                alt={`Project ${index}`}
                                className="image z-10"
                            />
                        </div>
                        <span className="text-sm ml-[10px]">Titulo {index} - Descripcion</span>
                    </div>
                ))
            )}

            {images.length === 0 && <span className='font-bold text-base'>En construcción: ¡próximamente nuevos proyectos!</span>}
        </div>
    )
}