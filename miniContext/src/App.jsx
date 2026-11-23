import Login from './components/login'
import Profile from './components/profile'
import Usercontextprovider from './Context/contextprovider'
import './App.css'
function App() {

  return (
    <>
     <Usercontextprovider> <h1>Reacting </h1>
      <Login/>
      <Profile/>
      </Usercontextprovider> 
    </>
  )
}

export default App
