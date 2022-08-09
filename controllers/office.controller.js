import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

import { getOffice } from "../models/office.model.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const data = dotenv.config({
    path: path.resolve(__dirname, `../environments/.env.${process.env.NODE_ENV}`),
});

const office_list = async function (req, res) {
    getOffice.Office
        .findAll()
        .then((response) => {
            res.send(response);
            console.log(response);
        })
        .catch((err) => {
            res.status(400).send(err);
        })
};

const office_create = (req, res) => {
    getOffice.Office.create(
        {
            name: req.body.name
        },
        {
            fields: ["name"]
        }
    )
        .then(() => {
            res.send("Oficina registrada");
        })
        .catch((err) => {
            res.status(400).send(err);
            console.log(err);
        });
}

const office_update = (req, res) => {
    let id = req.body.id;
    let name = req.body.name; 

    let newDatas = { id, name };
    getOffice.Office.findOne({ where: { id: id } })
    
    .then((r) => {
        r.update(newDatas);
        res.send("Oficina actualizada")
      })
      .catch((err) => {
        res.status(400).send(err);
      });
};

//Trabajando en el delete
const office_delete = (req, res) => {

};

export const officeController = {
    office_list,
    office_create,
    office_update
};