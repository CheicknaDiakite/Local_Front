import { Navigate, Route, Routes } from 'react-router-dom'
import { ReactNode } from 'react'
import MinimalLayout from '../../layout/MinimalLayout'
import AuthLogin from '../../pages/authentication/login'
import AuthRegister from '../../pages/authentication/register'
import Mdp from '../../pages/authentication/Mdp'
import MdpUpdate from '../../pages/authentication/MdpUpdate'
import { notClick } from '../../usePerso/fonctionPerso'

const VerifiedRoute = ({ children }: { children: ReactNode }) => {
  const isVerified = localStorage.getItem('verified') === 'true'
  return isVerified ? <>{children}</> : <Navigate to="/auth/login" replace />
}

export default function AuthRouter() {
  // notClick()
  return (
    <Routes>
      <Route element={<MinimalLayout />}>
        <Route path='login' element={<AuthLogin />} />
        <Route path='mot_de_passe_oublier' element={<Mdp />} />
        <Route path='update-password/:token/:uid' element={<MdpUpdate />} />
        <Route
          path='register'
          element={
            <VerifiedRoute>
              <AuthRegister />
            </VerifiedRoute>
          }
        />
      </Route>
    </Routes>
  )
}
