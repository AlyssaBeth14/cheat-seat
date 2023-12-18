import {DataTypes, Model} from 'sequelize'
import url from 'url'
import util from 'util'
import connectToDB from "./db.js"

const db = await connectToDB('postgresql:///students')

//Models go here
class Student extends Model {}

Student.init (
    {
        studentId: {
            type: DataTypes.INTEGER,
            autoIncrement: false,
            primaryKey: true,
            allowNull: false
        },
        studentName: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true
        }
    }, {
        sequelize: db
    }
)

class Group extends Model {} 

Group.init (
    {
        groupId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        groupName: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        }
    }, {
        sequelize: db
    }
)

class Ungroup extends Model {} 

Ungroup.init (
    {
        ungroupId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        ungroupName: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        }
    }, {
        sequelize: db
    }
)


Student.belongsToMany(Group, {foreignKey: 'groupId'})
Group.hasMany(Student, {foreignKey: 'groupId'})

Group.belongsToMany(Student, {foreignKey: 'studentId'})
Student.hasMany(Group, {foreignKey: 'studentId'})

Student.belongsToMany(Ungroup, {foreignKey: 'ungroupId'})
Ungroup.hasMany(Student, {foreignKey: 'ungroupId'})

Ungroup.belongsToMany(Student, {foreignKey: 'studentId'})
Student.hasMany(Ungroup, {foreignKey: 'studentId'})


if (process.argv[1] === url.fileURLToPath(import.meta.url)) {
    console.log('Syncing database...');
    await db.sync()
    console.log('Finished syncing database!');
}

export {Student, Group, Ungroup}