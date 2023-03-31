const { json } = require('express')
const express = require('express')
const morgan = require('morgan')
const path = require('path')

const app = express()

const conection = require('./db/conection')

// ORM

// datos
let data = {
	equipos: [
		{
			id_equipo: '1',
			tipo_equipo: 'escritorio',
			nombre_equipo: 'sistema2',
			marca: 'lenovo',
			modelo: 'prueba123',
			caracteristicas: {
				pocesador: 'i5',
				meormeoria: '8gb',
				almacenamiento: '1tb',
				id_ubicacion: 1,
				id_responsable: 1,
			},
		},
	],
}
// middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('public'))

// rutas
app.get('/', (req, res) => {
	res.status(200).sendFile(path.join(__filename, 'index.html'))
})
app.get('/data', (req, res) => {
	conection()
	res.status(200).contentType('json').send(data).json()
})
// iniciar servidor
const port = process.env.PORT || 3000

app.listen(port, () => {
	console.log(`http://localhost:${port}`)
})
