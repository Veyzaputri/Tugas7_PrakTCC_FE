import {Sequelize} from "sequelize";
const db = new Sequelize ('veyza-e-13','root','',{
    host: '104.198.64.135',
    dialect: 'mysql'
});

export default db;
