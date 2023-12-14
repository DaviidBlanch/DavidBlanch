export interface Project {
    id: number;
    imagen: string;
    nombre: string;
    alt: string;
    titulo: string;
}

export interface ProjectsData {
    projects: Project[];
    numberOfProjects: number;
}

export const data: ProjectsData = {
    "projects": [
        {
            "id": 1,
            "imagen": "/assets/logos/React-logo.webp",
            "nombre": "React Js",
            "alt": "Logo de React",
            "titulo": "Logo de React"
        },
        {
            "id": 2,
            "imagen": "/assets/logos/Typescript-logo.webp",
            "nombre": "TypeScript",
            "alt": "Logo de TypeScript",
            "titulo": "Logo de TypeScript"
        },
        {
            "id": 3,
            "imagen": "/assets/logos/GitHub-logo.webp",
            "nombre": "GitHub",
            "alt": "Logo de GitHub",
            "titulo": "Logo de GitHub"
        }
    ],
    "numberOfProjects": 3
};

export default data;
