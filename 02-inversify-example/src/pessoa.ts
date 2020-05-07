import "reflect-metadata";
import { inject, injectable } from "inversify";

import TYPES from "./types";

import { SalaInterface }   from "./sala.interface";
import { PessoaInterface } from "./pessoa.interface";

@injectable()
export class Pessoa implements PessoaInterface {

    nome: string;

    private _sala: SalaInterface;

    constructor(
        @inject(TYPES.SalaInterface) sala: SalaInterface
    ) {
        this._sala = sala;

        this.nome = "Antonio Nunes";
    }

    public reservarSala(): string {
        const salaReservada = this._sala.reserva(this.nome);

        return salaReservada;
    }
          
}