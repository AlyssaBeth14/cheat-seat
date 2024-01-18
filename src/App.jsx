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
