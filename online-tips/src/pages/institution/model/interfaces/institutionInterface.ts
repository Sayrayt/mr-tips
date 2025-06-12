interface InstitutionInfo {
    name: string;
    address: string;
    slogan: string;
}

export interface InstitutionEntity {
    screensaverImg: string;
    logoImg: string;
    institutionInfo: InstitutionInfo;
}

interface fullName {
    name: string;
    surname: string;
}

export interface InstitutionEmployeeEntitie {
    avatarImg: string;
    fullName: fullName;
    jobTitle: string;
    additionalInfo: string;
    rating: number;
    balance: number;
}





