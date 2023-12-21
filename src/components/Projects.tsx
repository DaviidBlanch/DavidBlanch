import { useEffect, useState } from 'react';
import { ProjectResponse, ProjectItems } from '../interfaces/projects';
import ProjectItem from './ProjectItem';

const URL_PROJECTS = 'https://run.mocky.io/v3/bf1169b9-c85b-43c8-ab76-dd12fc607f00'

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
        <div className="p-3 grid gap-5 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 pb-16 mb-20">
            {
                project?.map((pro: ProjectItems) => (
                    <ProjectItem key={pro.id} {...pro} />
                ))
            }
        </div>
    )
}