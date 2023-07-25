import React from "react";
import {BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom';
import Services from './Services';
import Employees from './Employees';
import AddService from './AddService';
import AddEmployee from './AddEmployee';
import ServiceDetails from './ServiceDetails';
import { useState,useEffect } from "react";
import axios from "axios";

function SideBare(){
    let [services,setServices] = useState([]);
    useEffect(()=>{
     axios.get("http://localhost:3006/services")
    .then(json=>{
      setServices(json.data);
      console.log(services.id)
    });
  },[]);
    return(
    <Router>
    <div className="container " >
<nav className="nav">
  
    <ul >
    
      <li ><Link  aria-current="page" to="/">Services</Link></li>
      <li ><Link  to="/employees">Employees</Link></li>
      
      </ul>

</nav>


    <Routes>
            <Route path="/" element={<Services services={services} />}/>
            <Route path="/employees" element={<Employees services={services}/>}/>
            <Route path="/service/:id" element={<ServiceDetails services={services}/>}/>
            <Route path="/add_service" element={<AddService  setServices={setServices}/>}/>
            <Route path="/add_employee/:code" element={<AddEmployee services={services}/>}/>
    </Routes>

</div>
</Router>
    )

}


export default SideBare;