
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export default function DashboardComponemt() {
//   const [product, setProduct] = useState([]);
//   const [form, setForm] = useState({
//     pid: "",
//     pname: "",
//     price: "",
//     mfg: "",
//     exp: "",
//   });

//   const handler = (event) => {
//     const { name, value } = event.target;
//     setForm({ ...form, [name]: value });
//   };

//   const getProduct=()=>{axios
//       .get("http://localhost:3333/product/products")
//       .then((result) => {
//         console.log(result.data);
//         setProduct(result.data.data); // FIXED
//       })
//       .catch((err) => {
//         console.log(err);
//       });


//   }

//   //inital useEffect 

//   useEffect(() => {
//     getProduct();
//   }, [])

//   const addProduct = () => {
//     axios
//       .post("http://localhost:3333/product/products", form, {
//         "content-type": "application/json",
//       })
//       .then((result) => {
//         console.log(result);
//         if (result.status === 200) {
//           alert("Product added successfully");
//           getProduct();
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const empDelete=(pid)=>{
//     axios.delete("http://localhost:3333/product/products/"+pid)
//     .then((result)=>{
//       console.log(result);

//       if(result.status==200){
//         alert("sucessfully deleted a product");
//         getProduct();
//       }

//     }).catch((err)=>{
//       console.log(err);
//     })

//   }
//   return (
//     <div>
//       <form>
//         <label>pid</label>
//         <input type="text" name="pid" value={form.pid} onChange={handler} />
//         <br />

//         <label>Pname</label>
//         <input type="text" name="pname" value={form.pname} onChange={handler} />
//         <br />

//         <label>Price</label>
//         <input type="text" name="price" value={form.price} onChange={handler} />
//         <br />

//         <label>Mfg</label>
//         <input type="date" name="mfg" value={form.mfg} onChange={handler} />
//         <br />

//         <label>Exp</label>
//         <input type="date" name="exp" value={form.exp} onChange={handler} />
//         <br />

//         <button type="button" onClick={addProduct}>
//           Add product
//         </button>
//       </form>

//       <h1>All products</h1>
//       <table  border={1}>
//         <thead>
//           <tr>
//             <th>Pid</th>
//             <th>Pname</th>
//             <th>Price</th>
//             <th>Mfg</th>
//             <th>Exp</th>
//           </tr>
//         </thead>

//         <tbody>
//           {product.map((pro) => (
//             <tr key={pro.pid}>
//               <td>{pro.pid}</td>
//               <td>{pro.pname}</td>
//               <td>{pro.price}</td>
//               <td>{pro.mfg}</td>
//               <td>{pro.exp}</td>
//               <td>
//                 <button  type="button" onClick={()=>{
//                   empDelete(pro.pid);
//                 }}>
//                   delete
//                 </button>

//               </td>
//               <td>
//                 <button type="button" onClick={()=>{
//                   empDate(pro.pid);
//                 }}>
//                   update
//                 </button>
//               </td>
//             </tr>

//           ))}

//         </tbody>
//       </table>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import axios from "axios";

export default function DashboardComponemt() {
  const [product, setProduct] = useState([]);

  // ADD Form State
  const [form, setForm] = useState({
    pid: "",
    pname: "",
    price: "",
    mfg: "",
    exp: "",
  });

  // UPDATE Form State
  const [updateForm, setUpdateForm] = useState({
    pid: "",
    pname: "",
    price: "",
    mfg: "",
    exp: "",
  });

  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const handler = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const updateHandler = (event) => {
    const { name, value } = event.target;
    setUpdateForm({ ...updateForm, [name]: value });
  };

  const getProduct = () => {
    axios
      .get("http://localhost:3333/product/products")
      .then((result) => {
        setProduct(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  // ADD PRODUCT
  const addProduct = () => {
    axios
      .post("http://localhost:3333/product/products", form, {
        "content-type": "application/json",
      })
      .then((result) => {
        if (result.status === 200) {
          alert("Product added successfully");
          getProduct();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // DELETE PRODUCT
  const empDelete = (pid) => {
    axios
      .delete(`http://localhost:3333/product/products/${pid}`)
      .then((result) => {
        if (result.status === 200) {
          alert("Successfully deleted product");
          getProduct();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // LOAD DATA INTO UPDATE FORM
  const empUpdate = (pid) => {
    const pro = product.find((p) => p.pid === pid);

    setUpdateForm({
      pid: pro.pid,
      pname: pro.pname,
      price: pro.price,
      mfg: pro.mfg,
      exp: pro.exp,
    });

    setShowUpdateForm(true);
  };

  // UPDATE PRODUCT API
  const updateProduct = () => {
    axios
      .put(
        `http://localhost:3333/product/products/${updateForm.pid}`,
        updateForm
      )
      .then((result) => {
        alert("Product updated successfully!");
        getProduct();
        setShowUpdateForm(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {/* ADD FORM */}
      <h2>Add Product</h2>
      <form>
        <label>pid</label>
        <input type="text" name="pid" value={form.pid} onChange={handler} />
        <br />

        <label>Pname</label>
        <input type="text" name="pname" value={form.pname} onChange={handler} />
        <br />

        <label>Price</label>
        <input type="text" name="price" value={form.price} onChange={handler} />
        <br />

        <label>Mfg</label>
        <input type="date" name="mfg" value={form.mfg} onChange={handler} />
        <br />

        <label>Exp</label>
        <input type="date" name="exp" value={form.exp} onChange={handler} />
        <br />

        <button type="button" onClick={addProduct}>
          Add product
        </button>
      </form>

      {/* UPDATE FORM */}
      {showUpdateForm && (
        <div style={{ marginTop: "30px", border: "1px solid black", padding: "20px" }}>
          <h2>Update Product</h2>

          <form>
            <label>pid</label>
            <input type="text" value={updateForm.pid} disabled />
            <br />

            <label>Pname</label>
            <input
              type="text"
              name="pname"
              value={updateForm.pname}
              onChange={updateHandler}
            />
            <br />

            <label>Price</label>
            <input
              type="text"
              name="price"
              value={updateForm.price}
              onChange={updateHandler}
            />
            <br />

            <label>Mfg</label>
            <input
              type="date"
              name="mfg"
              value={updateForm.mfg}
              onChange={updateHandler}
            />
            <br />

            <label>Exp</label>
            <input
              type="date"
              name="exp"
              value={updateForm.exp}
              onChange={updateHandler}
            />
            <br />

            <button type="button" onClick={updateProduct}>
              Update Product
            </button>
          </form>
        </div>
      )}

      {/* PRODUCT TABLE */}
      <h1>All products</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Pid</th>
            <th>Pname</th>
            <th>Price</th>
            <th>Mfg</th>
            <th>Exp</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>

        <tbody>
          {product.map((pro) => (
            <tr key={pro.pid}>
              <td>{pro.pid}</td>
              <td>{pro.pname}</td>
              <td>{pro.price}</td>
              <td>{pro.mfg}</td>
              <td>{pro.exp}</td>

              <td>
                <button type="button" onClick={() => empDelete(pro.pid)}>
                  delete
                </button>
              </td>

              <td>
                <button type="button" onClick={() => empUpdate(pro.pid)}>
                  update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
