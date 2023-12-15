import { useEffect, useState } from 'react';
import { ProjectResponse, ProjectItems } from '../interfaces/projects';
import ProjectItem from './ProjectItem';

const URL_PROJECTS = 'https://run.mocky.io/v3/d190249c-330a-4322-bc3c-78c7052097ce'

export default function Projects() {

    const [project, setProject] = useState<ProjectItems[]>()

    useEffect(() => {
        fetch(URL_PROJECTS)
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
                project?.map((pro: ProjectItems) => (
                    <ProjectItem key={pro.id} {...pro} />
                ))
            }
        </div>
    )
}