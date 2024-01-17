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
const brittany = await Student.create({
    studentName: 'Brittany'
})
const jane = await Student.create({
    studentName: 'Jane'
})
const carrie = await Student.create({
    studentName: 'Carrie'
})
const lorelai = await Student.create({
    studentName: 'Lorelai'
})
const daniel = await Student.create({
    studentName: 'Daniel'
})
const douglas = await Student.create({
    studentName: 'Douglas'
})
const donald = await Student.create({
    studentName: 'Donald'
})
const harry = await Student.create({
    studentName: 'Harry'
})
const harriet = await Student.create({
    studentName: 'Harriet'
})
const jericho = await Student.create({
    studentName: 'Jericho'
})
const tinsley = await Student.create({
    studentName: 'Tinsley'
})
const talmage = await Student.create({
    studentName: 'Talmage'
})
const kyle = await Student.create({
    studentName: 'Kyle'
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
await brittany.addGroups([history, english, math, science])
await jane.addGroups([history, english, math, science])
await carrie.addGroups([history, english, math, science])
await lorelai.addGroups([history, english, math, science])
await daniel.addGroups([history, english, math, science])
await douglas.addGroups([history, english, math, science])
await donald.addGroups([history, english, math, science])
await harry.addGroups([history, english, math, science])
await harriet.addGroups([history, english, math, science])
await jericho.addGroups([history, english, math, science])
await tinsley.addGroups([history, english, math, science])
await talmage.addGroups([history, english, math, science])
await kyle.addGroups([history, english, math, science])

await jackie.addUngroups([ungroupOne, ungroupTwo, ungroupThree])
await loki.addUngroups([ungroupOne, ungroupTwo, ungroupThree])
await billy.addUngroups([ungroupOne, ungroupTwo, ungroupThree])
await john.addUngroups([ungroupOne, ungroupTwo, ungroupThree])
await elizabeth.addUngroups([ungroupOne, ungroupTwo, ungroupThree])
await brittany.addUngroups([ungroupOne, ungroupTwo, ungroupThree])
await jane.addUngroups([ungroupOne, ungroupTwo, ungroupThree])
await carrie.addUngroups([ungroupOne, ungroupTwo, ungroupThree])
await lorelai.addUngroups([ungroupOne, ungroupTwo, ungroupThree])
await daniel.addUngroups([ungroupOne, ungroupTwo, ungroupThree])
await douglas.addUngroups([ungroupOne, ungroupTwo, ungroupThree])
await donald.addUngroups([ungroupOne, ungroupTwo, ungroupThree])
await harry.addUngroups([ungroupOne, ungroupTwo, ungroupThree])
await harriet.addUngroups([ungroupOne, ungroupTwo, ungroupThree])
await jericho.addUngroups([ungroupOne, ungroupTwo, ungroupThree])
await tinsley.addUngroups([ungroupOne, ungroupTwo, ungroupThree])
await talmage.addUngroups([ungroupOne, ungroupTwo, ungroupThree])
await kyle.addUngroups([ungroupOne, ungroupTwo, ungroupThree])