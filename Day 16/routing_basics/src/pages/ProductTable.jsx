import React from 'react'
import { Link,Outlet } from 'react-router-dom'

export default function ProductTable() {
  return (
    <div>
        <ul>
            <li><Link to="/table/details/1">Product 1</Link> </li>
            <li><Link to="/table/details/2">Product 2</Link></li>
            <li><Link to="/table/details/3">Product 3</Link></li>
            <li><Link to="/table/details/4">Product 4</Link></li>

        </ul>
        {/* Child component will be display here */}
        <div>
           <Outlet></Outlet> 
        </div>
    </div>
  )
}
