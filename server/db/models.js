import {DataTypes, Model} from 'sequelize'
import url from 'url'
import util from 'util'
import connectToDB from "./db.js"

const db = await connectToDB('postgresql:///students')