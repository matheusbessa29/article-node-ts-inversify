import "reflect-metadata";
import * as bodyParser from 'body-parser';
import { Container } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";

import TYPES from "./types";

import "./controllers/sala.controller"

import { SalaService } from "./services/sala.service";

import { SalaServiceInterface } from "./services/interfaces/sala.service.interface";

const container = new Container();

export class App {

    constructor() {
        this.configDependencies();
        this.createServer();
    }

    configDependencies(): void {
        container.bind<SalaServiceInterface>(TYPES.SalaServiceInterface).to(SalaService);
    }

    createServer(): void {
        const server: InversifyExpressServer = new InversifyExpressServer(container);
        server.setConfig((app) => {
        // add body parser
        app.use(bodyParser.urlencoded({
            extended: true
        }));
        app.use(bodyParser.json());
        });

        const app = server.build();
        app.listen(3000);
        console.log("Servidor iniciado na porta 3000")
    }

}

export default new App();