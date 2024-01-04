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

const ungroupOne = await Ungroup.create({
    ungroupName: 'Ungroup 1'
})
const ungroupTwo = await Ungroup.create({
    ungroupName: 'Ungroup 2'
})
const ungroupThree = await Ungroup.create({
    ungroupName: 'Ungroup 3'
})

await jackie.addGroups([history, english, math, science])
await loki.addGroups([history, english, math, science])
await billy.addGroups([history, english, math, science])
await john.addGroups([history, english, math, science])
await elizabeth.addGroups([history, english, math, science])

await jackie.addUngroups([ungroupOne, ungroupTwo, ungroupThree])
await loki.addUngroups([ungroupOne, ungroupTwo, ungroupThree])
await billy.addUngroups([ungroupOne, ungroupTwo, ungroupThree])
await john.addUngroups([ungroupOne, ungroupTwo, ungroupThree])
await elizabeth.addUngroups([ungroupOne, ungroupTwo, ungroupThree])