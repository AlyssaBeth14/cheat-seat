import MasterListDisplay from './components/mastercomponents/MasterListDisplay.jsx'
import Header from './components/main/Header.jsx'
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
