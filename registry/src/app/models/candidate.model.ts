import { Party } from "./party.model";

export interface Candidate{
    _id?: string;
    idCard?: string;
    resolutionNumber?: string;
    name?: string;
    lastname?: string;
    party?: Party;
}
