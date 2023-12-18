
const handlerFunctions = {
    getStudents: async (req, res) => {
        const students = await BLAH.findAll()
        res.send(students)
    },
    addStudent: async (req, res) => {
        const newStudent = []
    }
}