const express = require("express");
const cors = require("cors");

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usariosPath = "/api/usuarios";

        //middlewares (funcion que se ejecuta cuando prendo mi app)
        this.middlewares();

        //rutas de mi aplicacion
        this.routes();
    }

    middlewares() {
        //cors
        this.app.use(cors());

        //parseo y lectura del body
        this.app.use(express.json());

        //directorio publico
        this.app.use(express.static("public"));
    }

    routes() {
        this.app.use(this.usariosPath, require("../routes/usuarios"));
    }

    listen() {
        this.app.listen(this.port);
    }
}

module.exports = Server;
