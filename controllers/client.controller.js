import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

import { getClient } from "../models/client.model.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const data = dotenv.config({
    path: path.resolve(__dirname, `../environments/.env.${process.env.NODE_ENV}`),
});


const client_list = async function (req, res) {
    getClient.Client
        .findAll()
        .then((response) => {
            res.send(response);
            console.log(response);
        })
        .catch((err) => {
            res.status(400).send(err);
        })
};

const client_create = (req, res) => {
    getClient.Client.create(
        {
            name: req.body.name,
            lastName: req.body.lastName,
            secondSurname: req.body.secondSurname,
            catOfficeId: req.body.catOfficeId
        },
        {
            fields: ["name", "lastName", "secondSurname", "catOfficeId"]
        }
    )
        .then(() => {
            res.send("Cliente registrado");
        })
        .catch((err) => {
            res.status(400).send(err);
            console.log(err);
        });
}

const client_update = (req, res) => {
    let id = req.body.id;
    let name = req.body.name;
    let lastName = req.body.lastName;
    let secondSurname = req.body.secondSurname;
    let catOfficeId = req.body.catOfficeId;

    let newDatas = { id, name, lastName, secondSurname, catOfficeId };
    getClient.Client.findOne({ where: { id: id } })

        .then((r) => {
            r.update(newDatas);
            res.send("Cliente actualizada")
        })
        .catch((err) => {
            res.status(400).send(err);
        });
};

const client_delete = async function (req, res) {
    let id = req.body.id;
    getClient.Client
        .destroy({ where: { id: id } })
        .then((r) => {
            res.status(200).json({ message: "Cliente eliminado con éxito " });
        })
        .catch((err) => {
            res.status(400).send(err);
        })
}

export const clientController = {
    client_list,
    client_create,
    client_update,
    client_delete
};