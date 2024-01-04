import {Student, Group, Ungroup, StudentGroup, StudentUngroup} from './db/models.js'


const handlerFunctions = {
    getStudents: async (req, res) => {
        const students = await Student.findAll({include: [{model: Group}, {model: Ungroup}]})
        console.log(students);
        res.send(students)
    },
    addStudent: async (req, res) => {
        const {studentName} = req.body
        const newStudent = {
            studentName: studentName
        }
        let student = await Student.create(newStudent)
        const history = await Group.findByPk(1)
        const english = await Group.findByPk(2)
        const math = await Group.findByPk(3)
        const science = await Group.findByPk(4)
        const ungroupOne = await Ungroup.findByPk(1)
        const ungroupTwo = await Ungroup.findByPk(2)
        const ungroupThree = await Ungroup.findByPk(3)
    
        await student.addGroups([history, english, math, science])
        await student.addUngroups([ungroupOne, ungroupTwo, ungroupThree])
        const students = await Student.findAll({include: [{model: Group}, {model: Ungroup}]})
        res.send(students)
    },
    deleteStudent: async (req, res) => {
        const {studentId} =req.params
        const del = await Student.findByPk(studentId)
        await del.destroy()
        const students = await Student.findAll({include: [{model: Group}, {model: Ungroup}]})
        res.send(students)
    },
    editStudent: async (req, res) => {
        console.log(req.body);
        const {studentId} = req.params
        const {studentName, historyLevel, englishLevel, mathLevel, scienceLevel} = req.body
        const student = await Student.findOne({
            where: {studentId: studentId}
        })
        const historyStudent = await StudentGroup.findOne({
            where: {studentId: studentId, groupId: 1}
        })
        const englishStudent = await StudentGroup.findOne({
            where: {studentId: studentId, groupId: 2}
        })
        const mathStudent = await StudentGroup.findOne({
            where: {studentId: studentId, groupId: 3}
        })
        const scienceStudent = await StudentGroup.findOne({
            where: {studentId: studentId, groupId: 4}
        })
        student.studentId = studentId
        student.studentName = studentName
        historyStudent.level = +historyLevel
        englishStudent.level = +englishLevel
        mathStudent.level = +mathLevel
        scienceStudent.level = +scienceLevel

        await historyStudent.save()
        await englishStudent.save()
        await mathStudent.save()
        await scienceStudent.save()

        await student.save()
        const students = await Student.findAll({include: [{model: Group}, {model: Ungroup}]})
        res.send(students)
    },
    getGroups: async (req, res) => {
        const groups = await Group.findAll()
        res.send(groups)
    },
    addGroup: async (req, res) => {
        const {groupId, groupName} = req.body
        const newGroup = {
            groupId: groupId,
            groupName: groupName
        }
        await Group.create(newGroup)
        const groups = await Group.findAll()
        res.send(groups)
    }, 
    deleteGroup: async (req, res) => {
        const {groupId} = req.params
        const del = await Group.findByPk(groupId)
        await del.destroy()
        const groups = await Group.findAll()
        res.send(groups)
    }, 
    editGroup: async (req, res) => {
        const {groupId} = req.params
        const {groupName} = req.body
        const group = await Group.findOne({
            where: {groupId: groupId}
        })
        group.groupId = groupId
        group.groupName = groupName
        await group.save()
        const groups = await Group.findAll()
        res.send(groups)
    }, 
    getUngroups: async (req, res) => {
        const ungroups = await Ungroup.findAll()
        res.send(ungroups)
    }, 
    addUngroup: async (req, res) => {
        const {ungroupId, ungroupName} = req.body
        const newUngroup = {
            ungroupId: ungroupId,
            ungroupName: ungroupName
        }
        await Ungroup.create(newUngroup)
        const ungroups = await Ungroup.findAll()
        res.send(ungroups)
    },
    deleteUngroup: async (req, res) => {
        const {ungroupId} = req.params
        const del = await Ungroup.findByPk(ungroupId)
        await del.destroy()
        const ungroups = await Ungroup.findAll()
        res.send(ungroups)
    },
    editUngroup: async (req, res) => {
        const {ungroupId} = req.params
        const {ungroupName} = req.body
        const ungroup = await Ungroup.findOne({
            where: {ungroupId: ungroupId}
        })
        ungroup.ungroupId = ungroupId
        ungroup.ungroupName = ungroupName
        await ungroup.save()

        const ungroups = await Ungroup.findAll()
        res.send(ungroups)
    },
    getUngroupList: async (req, res) => {
        const ungroupStudents = await Ungroup.findAll({where: {included: 'true', ungroupName: req.body.ungroupName}})
        res.send(ungroupStudents)
    }
    // getSeatingCharts: async (req, res) => {

    // },
    // addSeatingChart: async (req, res) => {

    // },
    // deleteSeatingChart: async (req, res) => {

    // },
    // editSeatingChart: async (req, res) => {

    // }
}

export default handlerFunctions