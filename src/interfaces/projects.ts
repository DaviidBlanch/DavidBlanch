export interface ProjectResponse {
    projects: ProjectItem[];
}

export interface ProjectItem {
    id: number;
    imagen: string;
    nombre: string;
    alt: string;
    titulo: string;
    description: string;
    frontend: Frameworks[];
    backend: Frameworks[];
}

export interface Frameworks {
    id: number;
    nombre: string;
    imagen: string;
    alt: string;
    titulo: string;
}
