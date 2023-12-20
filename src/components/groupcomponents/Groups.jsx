import React from 'react'

const Groups = (props) => {

  const [currentData, setCurrentData] = useState([])

  useEffect(() => {
    axios.get('/groups')
    .then((res) => {
      console.log(res.data);
      setCurrentData(res.data)
    })
    .catch((err) => {
      console.log(err);
    })
  })

  const deleteGroup = (groupId) => {
    axios.delete(`/group/${groupId}`)
    .then((res) => {
      console.log(res.data);
      setCurrentData(res.data)
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <body>
    <div>{groupName}</div>
    <button>Edit</button>
    <button deleteGroup={deleteGroup}>Delete</button>
    </body>
  )
}

export default Groups