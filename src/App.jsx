import { Outlet } from 'react-router-dom'
import './App.css'
import './index.css'
import Footer from './shared/Footer'
import Header from './shared/Header'

function App() {
  

  return (
    <>
      <Header/>

    <Outlet/>

      <Footer/>
    </>
  )
}

export default App
