export class UserLogged {
    NameUser: string;
    role: string;
    IdProfile: string;

    constructor ( NameUser: string, role: string, IdProfile: string){
        this.IdProfile = IdProfile;
        this.role = role;
        this.NameUser = NameUser
    }
}