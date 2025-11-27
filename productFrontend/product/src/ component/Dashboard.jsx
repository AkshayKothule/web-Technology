import React from 'react'

export default function Dashboard() 
{ 
    const[product , setProduct]=useState([]);
 const [form , setForm]=useState({pid :" ",
  pname:"", price:" ",mfg:"" , exp:""
 });
const handler=(event)=>{
    const {name , value}=event.target;
// console.log(name+" "+value);
    setForm({...form ,[name] :value});
}


useEffect(()=>{
  
  axios.get("http://localhost:3333/product/products")
  .then((result)=>{
    console.log(result);
    setProduct({result});
  }).catch((err)=>{
    console.log(err);
  })

  
},[])
const addProduct=()=>{
 axios.post("http://localhost:3333/product/products" ,form,{
  "content-type" :"application/json"
 }).then((result)=>{
  console.log(form);
  console.log(result);
     if(result.status==200){
      alert("added sucessfuly ")
     }
 }).catch((err)=>{
  alert(err);
 })
}

  return (
    <div>
      <form action="">
      <label htmlFor="pid">pid</label>
      <input type='text'  id='pid' name='pid' value={form.pid} onChange={handler} /> <br/>

      <label htmlFor="pname">Pname</label>
      <input type='text'  id='pname' name='pname'value={form.pname} onChange={handler}  /><br/>

      <label htmlFor="price">Price</label>
      <input type='text'  id='price' name='price' value={form.price} onChange={handler} /><br/>
      <label htmlFor="pname">mfg</label>
      <input type='date'  id='mfg' name='mfg' value={form.mfg} onChange={handler}  /><br/>
      <label htmlFor="exp">exp</label>
      <input type='date'  id='exp' name='exp' value={form.exp} onChange={handler}  /><br/>
      <button type='button' id='add' name='add' onClick={addProduct} >Add product</button>
    </form >
     <h1>All products</h1>
     <table>
        <thead>
            <th>Pid</th>
            <th>pname</th>
            <th>price</th>
            <th>mfg</th>
            <th>exp</th>
        </thead>
        <tbody>
            {product.map((pro , index)=>{
                <tr key={pro.pid}>
                  <td>{pro.pname}</td>
                  <td>{pro.price}</td>
                 <td>{pro.mfg}</td>

                   <td>{pro.exp}</td>
                </tr>

            })}
        </tbody>
     </table>
    </div>
  )
}
