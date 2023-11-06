import { Outlet } from 'react-router-dom'
export default function Layout() {
  return (
    <>
      <div>header</div>
      <div>left</div>
      <div>
        <Outlet />
      </div>
    </>
  )
}
