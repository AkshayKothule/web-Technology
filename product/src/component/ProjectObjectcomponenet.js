export default function ProjectObjectcomponenet(props) {
  return (
    <>
      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>

   
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>MFG Date</th>
            <th>EXP Date</th>
          </tr>
        </thead>

        <tbody>
            
          {props.arr.map((val, index) => (
            <tr key={index}>
              <td>{val.id}</td>
              <td>{val.pname}</td>
              <td>₹{val.price}</td>
              <td>{val.mfgdate}</td>
              <td>{val.expdate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
