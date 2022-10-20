import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import Navbar from './Componets/Navbar'
import './App.css'
// import ProductList from './Componets/ProductList'
// import Counter from './Componets/Counter'
import RouterPage from './Routes/RouterPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Navbar/>
    <RouterPage/>
      {/* <Navbar/>
      <ProductList/> */}
      
      {/* <Counter/> */}
    </div>
  )
}

export default App
