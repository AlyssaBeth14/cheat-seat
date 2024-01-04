import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import './index.css'
import MasterListDisplay from './components/mastercomponents/MasterListDisplay.jsx'
import GroupChart from './components/groupcomponents/GroupChart.jsx'
import UngroupChart from './components/ungroupcomponents/UngroupChart.jsx'
import SeatingChart from './components/sccomponents/SeatingChart.jsx'


// import 'bootstrap/dist/css/bootstrap.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<SeatingChart />}/>
      <Route path='/class_list' element={<MasterListDisplay/>}/>
      <Route path='/history_group' element={<GroupChart/>}/>
      {/* <Route path='/english_group' element={}/>
      <Route path='/math_group' element={}/>
      <Route path='/science_group' element={}/> */}
      <Route path='/ungroup1' element={<UngroupChart/>}/>
      {/* <Route path='/ungroup2' element={}/>
      <Route path='/ungroup3' element={}/> */}
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
