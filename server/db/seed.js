import {Student, Group, Ungroup} from './models.js'

const jackie = await Student.create({
    studentId: 1, 
    studentName: 'Jackie'
})
const loki = await Student.create({
    studentId: 2, 
    studentName: 'Loki'
})
const billy = await Student.create({
    studentId: 3, 
    studentName: 'Billy'
})
const john = await Student.create({
    studentId: 4, 
    studentName: 'John'
})
const elizabeth = await Student.create({
    studentId: 5, 
    studentName: 'Elizabeth'
})

const history = await Group.create({
    groupId: 1,
    groupName: 'History'
})
const english = await Group.create({
    groupId: 2,
    groupName: 'English'
})
const math = await Group.create({
    groupId: 3,
    groupName: 'Math'
})
const science = await Group.create({
    groupId: 4,
    groupName: 'Science'
})

const drama = await Ungroup.create({
    ungroupId: 1,
    ungroupName: 'Drama'
})
const chatty = await Ungroup.create({
    ungroupId: 2,
    ungroupName: 'Chatty'
})
const aggressive = await Ungroup.create({
    ungroupId: 3,
    ungroupName: 'Aggressive'
})