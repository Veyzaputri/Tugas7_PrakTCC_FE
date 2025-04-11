import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const User = db.define('users',{
    creator : DataTypes.STRING,
    title : DataTypes.STRING,
    notes:DataTypes.STRING
},{
    freezeTableName:true
});

export default User;

(async ()=> {
    await db.sync();
})();