import { useEffect, useState } from 'react';
import { ProjectResponse, Frameworks, ProjectItem } from '../interfaces/projects';
import '../styles/projects.css';

export default function Projects() {

    const [project, setProject] = useState<ProjectItem[]>()

    useEffect(() => {
        fetch('https://run.mocky.io/v3/7fcb425f-a96d-4ac9-9fb8-113f758be1d1')
            .then(response => response.json())
            .then((data: ProjectResponse) => {
                if (!data) return
                setProject(data.projects)
            })
            .catch(error => console.error(error))
    }, [])

    return (
        <div className="p-3 grid gap-5 grid-cols-2 pb-16">
            {
                project?.map((pro: ProjectItem) => (
                    <div key={pro.id}>
                        <div
                            className="image-container"
                        >
                            <img
                                src="../assets/project-logos/devQ.webp"
                                alt={pro.alt}
                                loading="eager"
                                className="image z-10 rounded-lg"
                            />
                            <div className="overlay grid grid-rows-2 p-2">
                                <div className="p-3">
                                    <p className="text-base font-medium mb-2">Front-end</p>
                                    <div className='flex items-center [&>img]:m-0 gap-3'>
                                        {
                                            pro.frontend.map((front: Frameworks) => (
                                                <img key={front.id} src={front.imagen} alt={front.alt} loading="lazy" className="w-12 h-12 mx-2" />
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="p-3 pt-0">
                                    <p className="text-base font-medium mb-2">Back-end</p>
                                    <div className='flex items-center [&>img]:m-0 gap-3'>
                                        {
                                            pro.backend.map((back: Frameworks) => (
                                                <img key={back.id} src={back.imagen} alt={back.alt} loading="lazy" className="w-12 h-12 mx-2" />
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className="text-sm ml-[10px]">{pro.titulo} - {pro.description}</span>
                    </div>
                ))
            }
        </div>
    )
}