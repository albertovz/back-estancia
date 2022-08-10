import { officeController } from "../controllers/office.controller.js";
import { Router } from "express";
import bodyParser from "body-parser";

const router = Router();

const jsonParser = bodyParser.json();

const urlencodedParser = bodyParser.urlencoded({ extended: false });
/**
 * @openapi
 * '/api/office/list':
 *  get:
 *     tags:
 *     - Office
 *     summary: Listar Oficinas
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
 * '/api/office/create':
 *  post:
 *     tags:
 *     - Office
 *     summary: Crear Oficina
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - name
 *            properties:
 *              name:
 *                type: string
 *                default: Oficina
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
 * '/api/office/update':
 *  put:
 *     tags:
 *     - Office
 *     summary: Actualizar Oficina
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - id
 *              - name
 *            properties:
 *              id:
 *                type: integer
 *                default: 1
 *              name:
 *                type: string
 *                default: Oficina
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
 * '/api/office/delete':
 *  delete:
 *     tags:
 *     - Office
 *     summary: Eliminar Oficina
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

 router.get("/list", (req, res) => officeController.office_list(req, res));

 router.post("/create", (req, res) => officeController.office_create(req, res));

 router.put("/update", (req, res) => officeController.office_update(req, res));

 router.delete("/delete", (req, res) => officeController.office_delete(req, res));

 export default router;