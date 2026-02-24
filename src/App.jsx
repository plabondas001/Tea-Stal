import './App.css'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
   <div>
    {/* Navbar */}
    <section>
      <Navbar></Navbar>
    </section>

    {/* Header */}
    <section>
      <Header></Header>
    </section>
   </div>
  )
}

export default App
