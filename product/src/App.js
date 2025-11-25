import './App.css';
import { useEffect, useState } from 'react';
import ProjectObjectcomponenet from './component/ProjectObjectcomponenet';
import ProductFormComponent from './component/ProductFormComponent'
import 'bootstrap/dist/css/bootstrap.css'
function App() {

  const [product, setProduct] = useState([
    { id:"1", pname:"chair", price:"5000", mfgdate:"2025-12-03", expdate:"2026-05-13" },
    { id:"2", pname:"table", price:"10000", mfgdate:"2025-03-03", expdate:"2025-05-04" },
    { id:"3", pname:"desk", price:"8000", mfgdate:"2025-01-03", expdate:"2025-05-13" }
  ]);

  const [searchProduct, setSearchProduct] = useState({});

  // Correct useEffect
  useEffect(() => {
    setSearchProduct(product);
  }, [product]);

  //add product 
  const addProduct=()=>{
    // setProduct([...product ,form]);
   setProduct([...product, form]);

  }
  return (
    <>
      <h2>Welcome to React</h2>
      <ProjectObjectcomponenet arr={searchProduct} />
      <ProductFormComponent addnewProduct={addProduct}/>
      
    </>
  );
}

export default App;
