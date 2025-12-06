import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

function Dashboard() {
    //state
    const[medicene , setMedicene]=useState([]);
    const[form , setForm]=useState({
      mediceneName:"",
      mediceneType:"",
      Qty:0,
      Price :0
    })

    //update from 
    const[updatfrom , setUpdateFrom]=useState({mediceneName:"",
      mediceneType:"",
      Qty:0,
      Price :0})
      //form togle
      const[show , setShow]=useState(false);

    //get methood
    const getmedicene=()=>{

        axios.get("http://localhost:3333/getmedicene")
        .then((result)=>{
            console.log(result);
            setMedicene(result.data.data);
           
        })

    }

    const AddMedicene=()=>{

      axios.post("http://localhost:3333/addmedicene" ,form)
      .then((result)=>{
        console.log(result);
        getmedicene();
        setForm({
      mediceneName:"",
      mediceneType:"",
      Qty:0,
      Price :0
    });

      }).catch((err)=>{
        console.log(err);
        
      })
    }

    //
    const delteteHander=(name)=>{

      axios.delete(`http://localhost:3333/delete/${name}`)
      .then((result)=>{
        console.log(result);
        getmedicene();

      }).catch((error)=>{
        console.log(error);
      })


    }

    useEffect(()=>{
      getmedicene();
    },[])
    const handler=(event)=>{

      const {name , value}=event.target;
      setForm({...form , [name]:value})

    
    }
    const handlerupdate=(event)=>{

      const { name , value}=event.target;
      setUpdateFrom({...updatfrom , [name]:value});

    }
    //load updatefrom 
   const updateM=(name)=>{

    const mde=medicene.find((p)=>p.mediceneName===name)
  setUpdateFrom({ 
     mediceneName:mde.mediceneName,
      mediceneType:mde.mediceneType,
      Qty:mde.Qty,
      Price :mde.Price


  })
  //toggle 
  setShow(true);
   }
   
   const updateMedicene=()=>{
    axios.put(`http://localhost:3333/update/${updatfrom.mediceneName}` , updatfrom)
    .then((result)=>{
      console.log(result);
      getmedicene();
      setShow(false);

    }).catch((error)=>{
      console.log(error);
    })
   }
  return (
    <>

    {/* form  add */}
    <form action="">
      mediceneName : <input type='text'  name='mediceneName' value={form.mediceneName} onChange={handler}/> <br/>
      
      mediceneType :
      <select name="mediceneType" id="mediceneType" value={form.mediceneType} onChange={handler}>
        <option value="">----select type-----</option>
        <option value="Tablet">Tablet</option>
        <option value="Syrup">Syrup</option>
        <option value="PanKiller">PanKiller</option>
      </select> <br/>
      Qty : <input type='text'  name='Qty' value={form.Qty} onChange={handler}/> <br/>
      price : <input type='text'  name='Price' value={form.Price} onChange={handler}/> <br/>
      <button type='button' onClick={AddMedicene}>Add Medicene</button>
      
    </form>
      
      {/* from update */}
      {show  && (<div>
        <form action="">
      mediceneName : <input type='text'  name='mediceneName' value={updatfrom.mediceneName} onChange={handlerupdate}/> <br/>
      
      mediceneType :
      <select name="mediceneType" id="mediceneType" value={updatfrom.mediceneType} onChange={handlerupdate}>
        <option value="">----select type-----</option>
        <option value="Tablet">Tablet</option>
        <option value="Syrup">Syrup</option>
        <option value="PanKiller">PanKiller</option>
      </select> <br/>
      Qty : <input type='text'  name='Qty' value={updatfrom.Qty} onChange={handlerupdate}/> <br/>
      price : <input type='text'  name='Price' value={updatfrom.Price} onChange={handlerupdate}/> <br/>
      <button type='button' onClick={updateMedicene}>updateMedicene</button>
      
    </form>
      
      </div>)



      }
      {/* table */}
      <table border={1}>
        <thead>
          <tr>
            <th>mediceneName</th>
            <th>mediceneType</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {
            medicene.map((mid)=>(
                <tr key={mid.mediceneName}>
                    <td>{mid.mediceneName}</td>
                    <td>{mid.mediceneType}</td>
                    <td>{mid.Qty}</td>
                    <td>{mid.Price}</td>
                    <td>
                      <button type='button' onClick={()=>{delteteHander(mid.mediceneName)}}>Delete</button>
                    </td>
                    <td type='button' onClick={()=>{updateM(mid.mediceneName)}}>
                      update
                    </td>
                </tr>

            ))

        }
        </tbody>
      </table>
    </>
  )
}

export default Dashboard;
