const TeacherCard = ({ name, age, country }) => {

  return (
    <div>
    <h3 style={{color: "red", fontSize: 25}}>{name}</h3>
    <p>{age}, {country}</p>
  </div>
  )
}

export default TeacherCard