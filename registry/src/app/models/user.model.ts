import { Role } from "./role.model";

export class User {
    _id?: string;
    pseudonym?: string;
    email?: string;
    password?: string;
    token?: string;
    role?: Role;
}
