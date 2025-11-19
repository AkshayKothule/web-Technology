
// import React, { useState } from 'react'
// // import bootstrap from 'bootstrap/dist/css/bootstrap.css'
// export default function ProductFormComponent(props) {
   
//   const handleChange=(e)=>{
//     e.preventDefault();
//     console.log(e);
//     const product={
//       pName:pName.value,
//       pid:pid.value ,
//       price:price.value,
//       mfgdate:mfgdate.value,
//       expdate:expdate.value

//     }
//     console.log(product);

//   }
  
//   return (
//     <>
//     <form onSubmit={handleChange}>
//         <div>
//         <label htmlFor="pName">Pname</label>
//         <input type="text"  id='pName' name='pName'  /><br/>

//         <label htmlFor="pid">Pid</label>
//         <input type="text"  id='pid' name='pid' /><br/>

//         <label htmlFor="price">Price</label>
//         <input type="text"  id='price' name='price'/><br/>

//         <label htmlFor="mfgdate">MfGDate</label>
//         <input type='date'  id='mfgdate' name='mfgdate' /><br/>

//         <label htmlFor="">expDate</label>
//         <input type="date"  id='expdate' name='expdate'/><br/>
//         </div>
//         <button type='submit' id='add' name='add' >Add New Product</button>
       
//    </form>
   
      
//     </>
//   )
// }

import React, { useState } from "react";

export default function ProductFormComponent(props) {
    
    const [form, setForm] = useState({
        pid: "",
        pName: "",
        price: "",
        mfgdate: "",
        expdate: ""
    });

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    };

    //add function 
    const addproduct=()=>{
      //i want to add this object in app.js

      props.addnewProduct(form);

    }

    return (
        <div>
            <form>
                <input 
                    type="text" 
                    name="pid" 
                    value={form.pid} 
                    onChange={handleChange} 
                />

                <input 
                    type="text"
                    name="pName"
                    value={form.pName}
                    onChange={handleChange}
                />

                <input 
                    type="text"
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                />

                <input 
                    type="date"
                    name="mfgdate"
                    value={form.mfgdate}
                    onChange={handleChange}
                />

                <input 
                    type="date"
                    name="expdate"
                    value={form.expdate}
                    onChange={handleChange}
                />
                <button type="buttom" name="btn" onClick={addproduct}>Add New Product</button>
            </form>
        </div>
    );
}
