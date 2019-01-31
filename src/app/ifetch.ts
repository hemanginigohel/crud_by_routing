import { Ifetchdata } from "./ifetchdata";

export interface Ifetch extends Ifetchdata{
data:Ifetchdata[],
page:number,
per_page: number,
total: number,
total_pages:number
}
