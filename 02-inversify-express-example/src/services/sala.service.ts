import "reflect-metadata";
import { injectable } from "inversify";

import { SalaServiceInterface } from "./interfaces/sala.service.interface";

@injectable()
export class SalaService implements SalaServiceInterface {
    constructor() {

    }

    indexTest(): string {
        return "OK!"
    }
}