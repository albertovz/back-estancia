import { getData } from "../config/connection.config.js";
import { DataTypes } from "sequelize";

import { getClient } from "./client.model.js";

const Office = getData.sequelizeClient.define(
    "cat_offices",
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
                    msg: "Ingrese el nombre de la oficina",
                },
            }
        }
    },
    {
        tableName: "cat_offices",
        freezeTableName: true,
    }
);

Office.hasMany(getClient.Client, { foreignKey: "catOfficeId", type:DataTypes.INTEGER } );
getClient.Client.belongsTo(Office);

export const getOffice = { Office };