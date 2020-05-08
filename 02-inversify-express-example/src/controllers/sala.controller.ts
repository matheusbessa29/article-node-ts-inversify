import * as express from "express";
import { inject } from "inversify";
import { httpGet, BaseHttpController, interfaces, controller } from "inversify-express-utils";

import TYPES from "../types";

import { SalaServiceInterface } from "../services/interfaces/sala.service.interface";


@controller('/sala')
export class SalaController extends BaseHttpController implements interfaces.Controller {

    private _salaService: SalaServiceInterface;

    constructor(
        @inject(TYPES.SalaServiceInterface) salaService: SalaServiceInterface 
    ) {
        super();

        this._salaService = salaService;
    }

    @httpGet("/")
    public index(): interfaces.IHttpActionResult {
        const resultado: string = this._salaService.indexTest();

        return this.ok(resultado);
    }
}