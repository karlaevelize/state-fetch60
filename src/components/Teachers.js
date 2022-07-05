import { useState } from "react"
import TeacherCard from "./TeacherCard"

//use later on example
const data = [
  { id: 1, name: "Karla", age: 27, country: "Brazil" },
  { id: 2, name: "Andre", age: 31, country: "Portugal" },
  { id: 3, name: "David", age: 34, country: "Israel" },
  { id: 4, name: "Matias", age: 30, country: "Uruguay" },
  { id: 5, name: "Swen", age: 29, country: "Netherlands" },
]

const Teachers = () => {

  const [ teachers, setTeachers ] = useState(data)
  const [ hide, setHide ] = useState(true)

  const toggleTeachers = () => {
    setHide(!hide)
  }

  return (
    <div>
      <h2>Teachers Component</h2>
      <button onClick={toggleTeachers}>{hide ? "Display" : "Hide"}</button>
      {teachers && !hide && teachers.map(teacher => 
        <TeacherCard key={teacher.id} name={teacher.name} age={teacher.age} country={teacher.country}
      />)}
    </div>
  )
}

export default Teachers
