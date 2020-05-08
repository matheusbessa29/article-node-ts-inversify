import "reflect-metadata";
import { injectable } from "inversify";

import { SalaServiceInterface } from "./infraestructure/sala.service.interface";

@injectable()
export class SalaService implements SalaServiceInterface {
    constructor() {

    }

    indexTest(): string {
        return "OK!"
    }
}