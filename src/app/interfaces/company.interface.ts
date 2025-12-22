export interface CompanyList {
    data: Company[];
}

export interface Company {
    companyID:      number;
    nit:            string;
    businessName:   string;
    commercialName: string;
    phone:          string;
    email:          string;
    country:        string;
    department:     string;
    municipality:   string;
    createdAt:      Date;
    updatedAt:      Date;
}

export interface CompanyDetail {
    data: Company;
}