import React from 'react'
import {Routes,Route} from "react-router-dom"
import Layout from './Layout'
import Daily from './Daily'
import Weekly from './Weekly'
import Tasks from './Tasks'

const App = () => {
  return (
    <> 
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route exec path='/daily' element={<Daily />} />
                <Route exec path='/weekly' element={<Weekly />} />
                <Route exec path='/tasks' element={<Tasks />} />
            </Route>
        </Routes>
    </>
  )
}

export default App