import { getData } from "../config/connection.config.js";
import { DataTypes } from "sequelize";

const Client = getData.sequelizeClient.define(
    "cat_clients",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Ingrese un nombre",
                },
            },
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Ingrese el primer apellido",
                },
            },
        },
        secondSurname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Ingrese el segundo apellido",
                },
            },
        }
    },
    {
        tableName: "cat_users",
        freezeTableName: true,
    }
);

export const getClient = { Client };