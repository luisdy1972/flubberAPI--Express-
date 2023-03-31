const { Sequelize } = require('sequelize')

async function conection() {
	const host = 'localhost'
	const portdb = 3306
	const db = 'bdsoporte'
	const usuer = 'root'
	const ps = null

	const sequelize = new Sequelize(db, usuer, ps, {
		host: host,
		port: portdb,
		dialect: 'mysql',
	})

	try {
		await sequelize.authenticate()
		console.log('conection Database successfully.')
	} catch (error) {
		console.error('Unable to connect to the database:', error)
	}
}
module.exports = conection
