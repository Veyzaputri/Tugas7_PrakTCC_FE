import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Notes = db.define('notes',{
    creator : DataTypes.STRING,
    title : DataTypes.STRING,
    notes:DataTypes.STRING
},{
    freezeTableName:true
});

export default Notes;

(async ()=> {
    await db.sync();
})();