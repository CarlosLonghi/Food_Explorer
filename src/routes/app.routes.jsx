import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Preview } from '../pages/Preview'

export function AppRoutes(){
  return(
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/preview' element={<Preview/>}/>

    </Routes>
  )
}