import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import './index.css'
import MasterListDisplay from './components/mastercomponents/MasterListDisplay.jsx'
import UngroupChart from './components/ungroupcomponents/UngroupChart.jsx'
import SeatingChart from './components/sccomponents/SeatingChart.jsx'
import HistoryGroupChart from './components/groupcomponents/HistoryGroupChart.jsx'
import EnglishGroupChart from './components/groupcomponents/EnglishGroupChart.jsx'
import ScienceGroupChart from './components/groupcomponents/ScienceGroupChart.jsx'
import MathGroupChart from './components/groupcomponents/MathGroupChart.jsx'

import 'bootstrap/dist/css/bootstrap.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<SeatingChart />}/>
      <Route path='/class_list' element={<MasterListDisplay/>}/>
      <Route path='/history_group' element={<HistoryGroupChart/>}/>
      <Route path='/english_group' element={<EnglishGroupChart />}/>
      <Route path='/math_group' element={<MathGroupChart />}/>
      <Route path='/science_group' element={<ScienceGroupChart />}/>
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
