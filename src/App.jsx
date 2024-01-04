import GroupDisplay from './components/groupcomponents/GroupDisplay.jsx'
import MasterListDisplay from './components/mastercomponents/MasterListDisplay.jsx'
import GroupChart from './components/groupcomponents/GroupChart.jsx'
import Header from './components/main/Header.jsx'
import UngroupChart from './components/ungroupcomponents/UngroupChart.jsx'
import {Outlet} from 'react-router-dom'
import NavigationBar from './components/main/Navbar.jsx'
import './App.css'

function App() {

  return  (
  <>
  <NavigationBar />
  <Outlet />
  </>
  )
}

export default App
