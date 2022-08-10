import { clientController } from "../controllers/client.controller.js";
import { Router } from "express";
import bodyParser from "body-parser";

const router = Router();

const jsonParser = bodyParser.json();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

/**
 * @openapi
 * '/api/client/list':
 *  get:
 *     tags:
 *     - Client
 *     summary: Listar Clientes
 *     responses:
 *      200:
 *        description: Get
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */

/**
 * @openapi
 * '/api/client/create':
 *  post:
 *     tags:
 *     - Client
 *     summary: Crear cliente
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - name
 *              - lastName
 *              - secondSurname
 *              - curp
 *              - catOfficeId
 *            properties:
 *              name:
 *                type: string
 *                default: nombre
 *              lastName:
 *                type: string
 *                default: apellido_paterno
 *              secondSurname:
 *                type: string
 *                default: apellido_materno
 *              curp:
 *                type: string
 *                default: curp
 *              catOfficeId:
 *                type: integer
 *                default: 1
 *     responses:
 *      200:
 *        description: Create
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */

/**
 * @openapi
 * '/api/client/update':
 *  put:
 *     tags:
 *     - Client
 *     summary: Actualizar Cliente
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - id
 *              - name
 *              - lastName
 *              - secondSurname
 *              - curp
 *              - catOfficeId
 *            properties:
 *              id:
 *                type: integer
 *                default: 1
 *              name:
 *                type: string
 *                default: nombre
 *              lastName:
 *                type: string
 *                default: apellido_paterno
 *              secondSurname:
 *                type: string
 *                default: apellido_materno
 *              curp:
 *                type: string
 *                default: curp
 *              catOfficeId:
 *                type: integer
 *     responses:
 *      200:
 *        description: Update
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */

/**
 * @openapi
 * '/api/client/delete':
 *  delete:
 *     tags:
 *     - Client
 *     summary: Eliminar Cliente
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - id
 *            properties:
 *              id:
 *                type: integer
 *                default: 1
 *     responses:
 *      200:
 *        description: Delete
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */

 router.get("/list", (req, res) => clientController.client_list(req, res));

 router.post("/create", (req, res) => clientController.client_create(req, res));

 router.put("/update", (req, res) => clientController.client_update(req, res));

 router.delete("/delete", (req, res) => clientController.client_delete(req, res));

 export default router;