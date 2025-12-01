import { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import AddEmployee from "./pages/AddEmployee.jsx";
import EmployeeList from './pages/EmployeeList.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddEmployee />} />
        <Route path="/employees" element={<EmployeeList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
