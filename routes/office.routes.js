import { officeController } from "../controllers/office.controller.js";
import { Router } from "express";
import bodyParser from "body-parser";

const router = Router();

const jsonParser = bodyParser.json();

const urlencodedParser = bodyParser.urlencoded({ extended: false });
/**
 * @openapi
 * '/api/office/list':
 *  post:
 *     tags:
 *     - Office
 *     summary: Listar oficinas
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
 *              name:
 *                type: string
 *                default: Officina
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
 * '/api/office/create':
 *  post:
 *     tags:
 *     - Office
 *     summary: Crea una oficina
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
 *     summary: actualizar nombre de oficina
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
 *              name:
 *                type: string
 *                default: Oficina
 *     responses:
 *      200:
 *        description: update
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */

 router.get("/list", (req, res) => officeController.office_list(req, res));

 router.post("/create", (req, res) => officeController.office_create(req, res));

 router.put("/update", (req, res) => officeController.office_update(req, res));

 export default router;