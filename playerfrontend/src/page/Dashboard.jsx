import React, { useEffect, useState } from 'react'
import axios from 'axios';
function Dashboard() {
    const [player , setplayer]=useState([]);
    // name ,matchesplayed , totalruns ,fiftes , hundreds ,teamName 
    const[form , setForm]=useState({name :" ",
 matchesplayed:"" ,totalruns:" " ,fiftes:"" , hundreds:" " ,teamName :"" 
    })

    //update 
    const[updatefrom , setUpdatefrom]=useState({name :"",
 matchesplayed:"" ,totalruns:"" ,fiftes:"" , hundreds:"" ,teamName :"" })

 const [showupdatefrom , setShowupdatefrom]=useState(false);
    //get 
  const getplayer=()=>{
    axios.get("http://localhost:3333/player")
    .then((result)=>{
        setplayer(result.data.data);

    }).catch((error)=>{
        console.log(error);
    })
  }

  const addStudent=()=>{
    axios.post("http://localhost:3333/player" ,form )
    .then((result)=>{
     console.log("successfully adddedddd. ");
     setForm({name :" ",
 matchesplayed:"" ,totalruns:" " ,fiftes:"" , hundreds:" " ,teamName :"" 
    })
    getplayer();
    }).error(()=>{
        console.log(error);
    })
  }

  const deletehandle=(name)=>{
    axios.delete("http://localhost:3333/player/"+name)
    .then(()=>{
        getplayer();
        console.log("Sucessfully deleted");

    }).catch(()=>{
        console.log(error);
    })
  }
useEffect(()=>{
    getplayer();

} ,[])
const handler=(event)=>{
    const {name , value}=event.target;
    setForm({...form ,[name]:value});

}
//handle update 

const handlerUpdate=(event)=>{
    const {name , value}=event.target;
    setUpdatefrom({...updatefrom ,[name]:value});

    
}

//load into from
const updateM=(name)=>{
    //get palyerderails 
    const p1=player.find((p)=>p.name===name);
    console.log(p1);

    setUpdatefrom({name :p1.name,
 matchesplayed:p1.matchesplayed,
 totalruns:p1.totalruns,
 fiftes:p1.fiftes,
  hundreds:p1.hundreds ,
  teamName :p1.teamName

    })
    //set from true
    setShowupdatefrom(true);
}

const UpdatePlayer=(name)=>{

    axios.put(`http://localhost:3333/player/${name}` , updatefrom)
    .then((result)=>{
    console.log(result);
    getplayer();
    //emmty
     setUpdatefrom({name :" ",
 matchesplayed:"" ,totalruns:" " ,fiftes:"" , hundreds:" " ,teamName :"" 
    })

    }).catch((error)=>{
        console.log(error);

    })

}
  return (
    <>
    {/* normal from */}
    <div>
         Name : <input type="text" name='name' value={form.name} onChange={handler}/> <br/> 
       matchesplayed : <input type="text" name='matchesplayed' value={form.matchesplayed} onChange={handler}/><br/>

       totalruns : <input type="text" name='totalruns' value={form.totalruns} onChange={handler}/> <br/>


       fiftes: <input type="text" name='fiftes' value={form.fiftes} onChange={handler}/><br/>
       
       hundreds : <input type="text" name='hundreds' value={form.hundreds} onChange={handler}/><br/>

        teamName  : <input type="text" name='teamName' value={form.teamName} onChange={handler}/><br/>

        <button type='button' onClick={addStudent}>Add Player</button>
    </div>
    <div>
   <h2>Update From </h2>
      {
        showupdatefrom && (
            <form>
             Name : <input type="text" name='name' disabled/> <br/> 
       matchesplayed : <input type="text" name='matchesplayed' value={updatefrom.matchesplayed} onChange={handlerUpdate}/><br/>

       totalruns : <input type="text" name='totalruns' value={updatefrom.totalruns} onChange={handlerUpdate}/> <br/>


       fiftes: <input type="text" name='fiftes' value={updatefrom.fiftes} onChange={handlerUpdate}/><br/>
       
       hundreds : <input type="text" name='hundreds' value={updatefrom.hundreds} onChange={handlerUpdate}/><br/>

        teamName  : <input type="text" name='teamName' value={updatefrom.teamName} onChange={handlerUpdate}/><br/>

        <button type='button' onClick={UpdatePlayer}>Update player</button>
        </form>
        )

      };



    </div> 
  
    <table border={1}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Matches played</th>
                <th>total runs</th>
                <th>fiftes</th>
                <th>hundreds</th>
                <th>team name</th>
                <th>Action</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
         {player.map((players)=>(
            <tr key={players.name}>
                <td>{players.name}</td>
                <td>{players.matchesplayed}</td>
                <td>{players.totalruns}</td>
                <td>{players.fiftes}</td>
                <td>{players.hundreds}</td>
                <td>{players.teamName}</td>
                <td>
                    <button type='button' onClick={()=>{
                        deletehandle(players.name)
                    }}>
                        delete
                    </button>
                </td>
                <td>
                    <button type='button' onClick={()=>{
                        updateM(players.name);
                    }}>
                      update
                    </button>
                </td>
            </tr>

         ))}
        </tbody>
    </table>
      
    </>
    
  )
}

export default Dashboard
