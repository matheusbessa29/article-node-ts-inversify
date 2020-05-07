import { Container } from "inversify";

import TYPES from "./types";

import { SalaInterface } from "./sala.interface";
import { PessoaInterface } from "./pessoa.interface";

import { Sala } from "./sala";
import { Pessoa } from "./pessoa";

const container = new Container();

export class App {

    constructor() {
        this.configDependencies();
        this.reservarSalaTeste();

    }

    configDependencies(): void {
        container.bind<SalaInterface>(TYPES.SalaInterface).to(Sala);
        container.bind<PessoaInterface>(TYPES.PessoaInterface).to(Pessoa);
    }

    reservarSalaTeste(): void {
        const pessoa = container.get<PessoaInterface>(TYPES.PessoaInterface);

        const salaReservada = pessoa.reservarSala();

        console.log(salaReservada);
        
    }

}

export default new App();
