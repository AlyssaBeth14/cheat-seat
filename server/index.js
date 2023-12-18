//Import all packages
import express from 'express'
import morgan from 'morgan'
import ViteExpress from 'vite-express'

//Setup Express instance
const app = express()

//Setup Middleware
//Helps data move between frontend and backend
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))

//Routes go here
import handlerFunctions from './controller.js'
const {} = handlerFunctions

app.get()
app.post()
app.delete()
app.put()

//Open door to server
ViteExpress.listen(app, 2319, () => console.log(`We've got a 2319! Report to http://localhost:2319`))