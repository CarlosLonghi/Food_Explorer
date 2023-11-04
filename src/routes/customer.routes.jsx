import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Preview } from '../pages/Preview';
import { NotFound } from '../pages/NotFound';

export function CustomerRoutes(){
  return(
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/preview/:id' element={<Preview/>}/>
      <Route path="*" exact={true} element={<NotFound/>}/>
    </Routes>
  )
}