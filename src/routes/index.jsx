import { BrowserRouter } from 'react-router-dom'
import { useEffect } from 'react';
import { useAuth } from '../hooks/auth'
import { api } from '../services/api';
import { USER_ROLES } from "../utils/roles";

import { AuthRoutes } from './auth.routes';
import { AdminRoutes } from './admin.routes';
import { CustomerRoutes } from './customer.routes';

export function Routes(){
  const { user, signOut } = useAuth()

  useEffect(() => {
    api
      .get("/users/validated")
      .catch((error) => {
        if (error.response?.status === 401) {
          signOut();
        }
      })
  }, []);

  function AccessRoute() {
    switch(user.role) {
      case USER_ROLES.ADMIN:
        return <AdminRoutes/>;
      
      case USER_ROLES.CUSTOMER:
        return <CustomerRoutes/>;

      default:
        return <CustomerRoutes/>;
    }
  }

  return(
    <BrowserRouter>
      { user ? <AccessRoute/> : <AuthRoutes/>}
    </BrowserRouter>
  )
}