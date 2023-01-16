const school = {
    teachers: [{
            id: 1,
            name: "Pinchas",
            subjects: ["chemistry", "biology", "physics","English"],
            students: [],
            capacityLeft: 3,
        },
        {
            id: 2,
            name: "Williams",
            subjects: ["history", "ethics","English"],
            students: [],
            capacityLeft: 2,
        },
    ],
    students: [{
            id: 10,
            name: "Jennifer",
            age: 20,
        },
        {
            id: 11,
            name: "Howard",
            age: 23,
        },
        {
            id: 12,
            name: "Old-Timmy",
            age: 86,

        },
        {
            id: 13,
            name: "Houston",
            age: 21,
        },
    ],
};

function findPerson(role, id) {
    if (role == "student")
        return school.students.filter(s => s.id == id)[0]
    else if(role == "teacher")
        return school.teachers.filter(s => s.id == id)[0]
}

function assignStudent(id,subject) {
 const student=findPerson("student",id)
const teachers=school.teachers.filter(t=>t.subjects.includes(subject)&&t.capacityLeft!=0);
if(teachers.length!=0)
 teachers[0].students.push(student)
else
console.log("Sorry, no available teachers left")
}

function assignTeachersSubject(id,subject){
 teacher=findPerson("teacher",id)
 if(!teacher.subjects.includes(subject))
 teacher.subjects.push(subject)
}


//my function
function getTeacherBySubject(subject){
    return school.teachers.filter(t=>t.subjects.includes(subject))
}
console.log(
    getTeacherBySubject("English"));