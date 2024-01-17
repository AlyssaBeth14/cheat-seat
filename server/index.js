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
const {getStudents, addStudent, deleteStudent, editStudent, getGroups, addGroup, deleteGroup, editGroup, getUngroups, addUngroup, deleteUngroup, editUngroup} = handlerFunctions

app.get('/students', getStudents)
app.post('/student', addStudent)
app.delete('/student/:studentId', deleteStudent)
app.put('/student/:studentId', editStudent)
app.get('/groups', getGroups)
app.post('/group', addGroup)
app.delete('/group/:groupId', deleteGroup)
app.put('/group/:groupId', editGroup)
app.get('/ungroups', getUngroups)
app.post('/ungroup', addUngroup)
app.delete('/ungroup/:ungroupId', deleteUngroup)
app.put('/ungroup/:ungroupId', editUngroup)
// app.get('/seatingcharts', getSeatingCharts)
// app.post('/seatingchart', addSeatingChart)
// app.delete('/seatingchart/:scId', deleteSeatingChart)
// app.put('/seatingchart/:scId', editSeatingChart)

//Open door to server
ViteExpress.listen(app, 2340, () => console.log(`We've got a 2340! Report to http://localhost:2340`))