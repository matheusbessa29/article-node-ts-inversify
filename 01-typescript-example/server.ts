import express = require('express');
import { App } from './app';

const expressApplication: express.Application = express();
const app: App = new App();

expressApplication.get('/hello', function(req, res) {
    
    const message: string = app.helloWorldMessage();

    res.send(message);
})

expressApplication.listen(3000, function() {
    console.log("Aplicação rodando na porta 3000")
})