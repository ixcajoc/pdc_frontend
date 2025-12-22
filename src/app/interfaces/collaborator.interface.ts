export interface CollaboratorList {
    data: Collaborator[];
}

export interface Collaborator {
    collaboratorID: number;
    fullName:       string;
    age:            number;
    phone:          string;
    email:          string;
    createdAt:      Date;
    updatedAt:      Date;
}

export interface CollaboratorDetail {
    data: Collaborator;
}