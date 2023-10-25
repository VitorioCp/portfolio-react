import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'
import { Home } from '../../pages/Home'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Home/>
      
      <Outlet />
    </LayoutContainer>
  )
}
