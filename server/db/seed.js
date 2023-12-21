import {Student, Group, Ungroup} from './models.js'

const jackie = await Student.create({
    studentName: 'Jackie'
})
const loki = await Student.create({
    studentName: 'Loki'
})
const billy = await Student.create({ 
    studentName: 'Billy'
})
const john = await Student.create({
    studentName: 'John'
})
const elizabeth = await Student.create({
    studentName: 'Elizabeth'
})

const history = await Group.create({
    groupName: 'History'
})
const english = await Group.create({
    groupName: 'English'
})
const math = await Group.create({
    groupName: 'Math'
})
const science = await Group.create({
    groupName: 'Science'
})

const drama = await Ungroup.create({
    ungroupName: 'Drama'
})
const chatty = await Ungroup.create({
    ungroupName: 'Chatty'
})
const aggressive = await Ungroup.create({
    ungroupName: 'Aggressive'
})