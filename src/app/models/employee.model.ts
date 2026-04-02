export interface Employee{
    id: number;
    name: string;
    email: string;
    department: string;
    isActive: boolean;
    skills: string[];
    experiences: EmployeeExperience[]; 
}

export interface EmployeeExperience{
    company: string;
    role: string;
    years: number;
}