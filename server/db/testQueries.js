import {Student, Group, Ungroup, StudentUngroup} from './models.js'

// const students = await Student.findAll({
//     include: {model: Group}
// })

// console.log(students[0].Groups[0].StudentGroup.dataValues)

const groups = await Group.findAll({
    include: {model: Student}
}
)
console.log(groups[0].Students[0].dataValues.StudentGroup.dataValues)