import { BrowserRouter } from 'react-router-dom'
import { useAuth } from '../hooks/auth'

import { AuthRoutes } from './auth.routes'

export function Routes(){
  const { user } = useAuth()

  return(
    <BrowserRouter>
      <AuthRoutes/>
    </BrowserRouter>
  )
}