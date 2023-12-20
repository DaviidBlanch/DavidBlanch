export interface SkillResponse {
    skills: SkillsItems[];
}

export interface SkillsItems {
    id: number;
    nombre: string;
    progreso: string;
    color: string;
    src: string;
    alt: string;
}
