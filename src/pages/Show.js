import {useParams, useNavigate} from 'react-router-dom'
import {useState} from 'react'

function Show(props) {
    console.log(props)

    const {id} = useParams();
    const person = props.people.find((person)=> person._id===id)
    // const person = props.people.find((person)=>
    // returnperson._id===id

let navigate = useNavigate()

  // state for form
  const [editForm, setEditForm] = useState({
    name:"",
    image:"",
    title:""
  })

const handleChange = (event) =>{
setEditForm((prevState)=>({
    ...prevState,
    [event.target.name]:event.target.value,
}))
}

const handleSubmit = (event) =>{
    event.preventDefault()
    props.updatePeople(editForm,person._id)
    navigate("/")
}

const removePerson = () => {
    props.deletePeople(person._id)
    navigate("/")
}


return (
    <div className="person">
      <h1>{person.name}</h1>
      <h2>{person.title}</h2>
      <img src={person.image} alt={person.name} />
      <button id="delete" onClick={removePerson}>
        DELETE
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input type="submit" value="Update Person" />
      </form>
    </div>
  )
}

export default Show