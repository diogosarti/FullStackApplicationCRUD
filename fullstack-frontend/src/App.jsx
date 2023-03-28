import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap'
import './App.css'
import Navbar from './layout/navbar'
import Home from './pages/Home'


function App() {

  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  )
}

export default App
