import React from 'react'
import Groups from './Groups.jsx'

const GroupDisplay = (props) => {
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

  const addGroup = () => {
    axios.post('/group')
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
    <div><Groups /></div>
    <button addGroup={addGroup}>Add Group</button>
    </body>
  )
}

export default GroupDisplay