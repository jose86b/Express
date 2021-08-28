import dbConfig from "../config/dataBase";
import Sequelize from "sequelize";

const sequelize =  new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,{
    host: dbConfig.HOST,
    dialect: dbConfig.dialect
});

const db = {};
db.sequelize = sequelize;
db.user = require("../models/user")(sequelize, Sequelize);

module.exports = db;
