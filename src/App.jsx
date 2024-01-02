import GroupDisplay from './components/groupcomponents/GroupDisplay.jsx'
import MasterListDisplay from './components/mastercomponents/MasterListDisplay.jsx'
import GroupChart from './components/groupcomponents/GroupChart.jsx'
import Header from './components/main/Header.jsx'

import './App.css'

function App() {

  return  (
  <>
  <header>
    <Header />
  </header>
  <body>
  <MasterListDisplay />
  {/* <GroupChart /> */}
  {/* <GroupDisplay /> */}
  </body>
  </>
  )
}

export default App
