import "reflect-metadata";
import { injectable } from "inversify";

import { SalaInterface } from "./sala.interface";

@injectable()
export class Sala implements SalaInterface {

    reserva(responsavel: string): string {
        return `Sala reservada por ${ responsavel }`;
    }

}