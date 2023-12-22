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
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        studentName: {
            type: DataTypes.STRING(30),
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
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true
        }
    }, {
        sequelize: db
    }
)

class StudentGroup extends Model {}

StudentGroup.init (
    {
        sgId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        studentId: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false
        },
        studentName: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true
        },
        groupId: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false
        },
        level: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        notes: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    }, {
        sequelize: db
    }
)

class StudentUngroup extends Model {}

StudentUngroup.init (
    {
        suId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        studentId: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false
        },
        studentName: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true
        },
        ungroupId: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false
        },
        included: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        sequelize: db
    }
)




Student.belongsToMany(Group, {through: 'StudentGroup', foreignKey: 'groupId'})
Group.belongsToMany(Student, {through: 'StudentGroup', foreignKey: 'studentId'})
Student.belongsToMany(Ungroup, {through: 'StudentUngroup', foreignKey: 'ungroupId'})
Ungroup.belongsToMany(Student, {through: 'StudentUngroup', foreignKey: 'studentId'})


if (process.argv[1] === url.fileURLToPath(import.meta.url)) {
    console.log('Syncing database...');
    await db.sync({force: true})
    console.log('Finished syncing database!');
}

export {Student, Group, Ungroup, StudentGroup, StudentUngroup}