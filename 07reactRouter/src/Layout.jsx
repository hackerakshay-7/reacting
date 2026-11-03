import { Outlet } from 'react-router-dom'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
