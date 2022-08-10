import { clientController } from "../controllers/client.controller.js";
import { Router } from "express";
import bodyParser from "body-parser";

const router = Router();

const jsonParser = bodyParser.json();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

/**
 * @openapi
 * '/api/client/list':
 *  post:
 *     tags:
 *     - Client
 *     summary: Listar clientes
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
 *              - catOfficeId 
 *            properties:
 *              id:
 *                type: integer
 *              name:
 *                type: string
 *                default: nombre
 *              lastName:
 *                type: string
 *                default: apellido paterno
 *              secondSurname:
 *                type: string
 *                default: apellido materno
 *              catOfficeId:
 *                type: integer
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
 * '/api/client/create':
 *  post:
 *     tags:
 *     - Client
 *     summary: Crea un cliente
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
 *              - catOfficeId
 *            properties:
 *              name:
 *                type: string
 *                default: nombre
 *              lastName:
 *                type: string
 *                default: apellido paterno
 *              secondSurname:
 *                type: string
 *                default: apellido materno
 *              catOfficeId:
 *                type: integer
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
 *     - Cliente
 *     summary: Actualizar datos del cliente
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
 *              - catOfficeId
 *            properties:
 *              id:
 *                type: integer
 *              name:
 *                type: string
 *                default: nombre
 *              lastName:
 *                type: string
 *                default: apellido paterno
 *              secondSurname:
 *                type: string
 *                default: apellido materno
 *              catOfficeId:
 *                type: integer
 *     responses:
 *      200:
 *        description: update
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
 *     - Cliente
 *     summary: Eliminar cliente
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
 *     responses:
 *      200:
 *        description: update
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