import { Candidate } from "./candidate.model";
import { Table } from "./table.model";

export interface Result{
    _id?: string;
    candidate?: Candidate;
    table?: Table;
    votes?:Number;
}
