import { Party } from "./party.model";
import { Table } from "./table.model";

export interface Result{
    _id?: string;
    party?: Party;
    table?: Table;
    votes?:Number;
}
