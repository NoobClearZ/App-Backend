import { Sequelize } from 'sequelize'

const db = new Sequelize('ibox', 'postgres', 'nakanonin0', {
    host: "localhost",
    dialect: "postgres",
})

export default db