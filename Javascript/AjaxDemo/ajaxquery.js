
const displayData=(data)=>{
   
//    var str="";

//     for(let v of data){
//         str += `<div>
//         ${v.userId} ,
//         ${v.id},
//         ${v.title},
//         ${v.body}
//         </div>
//         `
       
//     }
 var str="<table border='2'>  <tr> <th>UserId</th> <th>Id</th> <th>Title</th> <th>Body</th></tr> "

 for(let v of data){
    str +=`<tr>
    <td>${v.userId}</td>
    <td>${v.id}</td>
    <td>${v.title}</td>
    <td>${v.body}</td>
    
    </tr>`
 }
  str +="</table>" ;
   
     document.getElementById('mydiv').innerHTML=str;




}

async function getDetails(){

    var result= await fetch("https://jsonplaceholder.typicode.com/posts");
  //fetech data i
// console.log(result);
    // if(result==200 && result.ok){
    //       var data= await result.json(); // json 
    //     //   console.log(data);
    //     // document.getElementById('mydiv').innerHTML=data;
    //     // displayData(data);


    // }

    if (result.ok && result.status === 200) {
    const data = await result.json();
    // console.log(data);  
    displayData(data);

}

}

// async function getDetails() {
//   const result = await fetch("https://jsonplaceholder.typicode.com/posts");

//   // Check the response
//   if (result.ok && result.status === 200) {
//     const data = await result.json();

//     // Display nicely formatted JSON
//     document.getElementById('mydiv').innerHTML = 
//       `<pre>${JSON.stringify(data, null,2)}</pre>`;
//   } else {
//     document.getElementById('mydiv').innerHTML = "Error fetching data!";
//   }
// }
