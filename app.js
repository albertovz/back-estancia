import express from "express";
import cors from "cors";

import { api } from "./config/config.js";
import swaggerDocs from "./config/swagger.config.js";

import office from "./routes/office.routes.js"
import client from "./routes/client.routes.js"

const app = express();

app.use(cors());

app.use(express.json());

//routes
app.use("/api/office", office);
app.use("/api/client", client);

app.listen(api.port, () => {
    console.log(`Servidor corriento en el puerto => ${api.port}`);
    swaggerDocs(app, api.port);
});