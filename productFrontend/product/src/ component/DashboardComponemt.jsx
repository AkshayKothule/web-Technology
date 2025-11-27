
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function DashboardComponemt() {
  const [product, setProduct] = useState([]);
  const [form, setForm] = useState({
    pid: "",
    pname: "",
    price: "",
    mfg: "",
    exp: "",
  });

  const handler = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const getProduct=()=>{axios
      .get("http://localhost:3333/product/products")
      .then((result) => {
        console.log(result.data);
        setProduct(result.data.data); // FIXED
      })
      .catch((err) => {
        console.log(err);
      });


  }
  useEffect(() => {
    getProduct();
  }, [])

  const addProduct = () => {
    axios
      .post("http://localhost:3333/product/products", form, {
        "content-type": "application/json",
      })
      .then((result) => {
        console.log(result);
        if (result.status === 200) {
          alert("Product added successfully");
          getProduct();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
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

      <h1>All products</h1>
      <table>
        <thead>
          <tr>
            <th>Pid</th>
            <th>Pname</th>
            <th>Price</th>
            <th>Mfg</th>
            <th>Exp</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
