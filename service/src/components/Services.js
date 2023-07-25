import React from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';

function getEmployeesDesServices(services){
    return services.map(e=>e.employees);
}

function getTotaleDesSalaireParService(getEmployeesDesServices){
  let salaires=[];   
  getEmployeesDesServices.map(e=>{
      e.map(em=>{
        salaires.push(em.salaire)
      });
     })
    return salaires;
}
function sommeDesSalaireTousEmployes(arraySalaire){
  return arraySalaire.reduce((acc,cur)=>{
    return acc+cur;
  },0)
}

function Services(props){
  const total=sommeDesSalaireTousEmployes(getTotaleDesSalaireParService(getEmployeesDesServices(props.services)));
    return(
        <div className="badge">
            <div className="card-header head">
    <h2>Services</h2>
    <Link to="/add_service" className="btn btn-outline-secondary ">Ajouter Service</Link>
  </div>
  <table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Ville</th>
      <th scope="col">Totale Employees</th>
      <th scope="col">Totale Salaires</th>
      <th scope="col">Details</th>
    </tr>
  </thead>
  <tbody>
    {
        props.services.map(e=>{
            return(
                <tr>
                    <th scope="row">{e.id}</th>
                    <td>{e.ville}</td>
                    <td>{e.employees.length}</td>
                    <td>{e.employees.map(em=>em.salaire).reduce((acc,cur)=>{
                        return acc+cur;
                    },0)} MAD</td>
                    <td><Link to={`service/${e.id}`}><i class="link">details</i></Link></td>
                </tr>
            )
        })
    }
    
  </tbody>
</table>
<div className="container">
  <div className="badge-outline-secondary">Totale Salaire : {total} MAD</div>
</div>
<div className="w-100 d-flex justify-content-end  ">

</div>
 </div>

    );
}
export default Services;