import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Preview } from '../pages/Preview'
import { New } from '../pages/New'
import { Edit } from '../pages/Edit'

export function AppRoutes(){
  return(
    <Routes>
      <Route path='/' element={<Home isAdmin={true}/>}/>
      <Route path='/new' element={<New/>}/>
      <Route path='/preview/:id' element={<Preview/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>

    </Routes>
  )
}