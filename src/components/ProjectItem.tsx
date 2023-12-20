import { Frameworks, ProjectItems } from '../interfaces/projects'
import '../styles/projects.css'

export default function ProjectItem(pro: ProjectItems) {

    return (
        <div key={pro.id}>
            <div
                className="image-container rounded-lg shadow-lg shadow-zinc-600"
            >
                <picture>
                    <img
                        src={pro.imagen}
                        alt={pro.alt}
                        className="image z-10 rounded-lg"
                    />
                </picture>
                <div className="overlay p-2">
                    {
                        pro.frontend.map((front: Frameworks) =>
                            <button
                                key={front.id}
                                className="border font-sans rounded-full text-sm px-4 py-1.5 cursor-default m-1"
                                style={{ color: "white", backgroundColor: front.color, borderColor: front.color }}
                            >
                                {front.nombre}
                            </button>
                        )
                    }
                    {
                        pro.backend.map((back: Frameworks) =>
                            <button
                                key={back.id}
                                className="border font-sans rounded-full text-sm px-4 py-1.5 cursor-default m-1"
                                style={{ color: "white", backgroundColor: back.color, borderColor: back.color }}
                            >
                                {back.nombre}
                            </button>
                        )
                    }
                </div>
            </div>
            <span className="text-base font-medium font-sans ml-[10px]">{pro.titulo} - {pro.descriptionAbrev}</span>
        </div>
    )
}