import {Student, Group, Ungroup} from './models.js'

const elizabeth = await Student.create({
    studentId: 5, 
    studentName: 'Elizabeth'
})

const history = await Group.create({
    groupId: 1,
    groupName: 'History'
})

const drama = await Ungroup.create({
    ungroupId: 1,
    ungroupName: 'Drama'
})