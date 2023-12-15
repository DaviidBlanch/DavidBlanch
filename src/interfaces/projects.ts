export interface ProjectResponse {
    numOfProjets:number,
    projects: ProjectItems[];
}

export interface ProjectItems {
    id: number;
    imagen: string;
    nombre: string;
    alt: string;
    titulo: string;
    description: string;
    descriptionAbrev: string;
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
