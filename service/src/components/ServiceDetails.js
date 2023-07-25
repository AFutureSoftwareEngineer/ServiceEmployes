import React from "react";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
function ServiceDetails(props) {
    const {id}=useParams();
    const filteredService=props.services.filter(e=>e.id==id);
    console.log(filteredService);
    const employees=filteredService.map(e=>e.employees);
    return (

<div className="card container mt-5 w-100 badge">
  <div className="card-header">
    <h2>Service Details</h2>
  </div>
  <div className="card-body">
    <h5 className="card-title">Code : {filteredService[0].id} </h5>
    <h5 className="card-title">Charges : <span className="badge bg-danger">{filteredService[0].employees.map(em=>em.salaire).reduce((acc,cur)=>{
                        return acc+cur;
                    },0)} MAD</span> </h5>
    <h5 className="card-title">Ville : {filteredService[0].ville}</h5>
    <h5>Employees :</h5>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Nom</th>
      <th scope="col">Salaire</th>
      <th scope="col">Code Service</th>
    </tr>
  </thead>
  <tbody>
    {
        employees.map(e=>{
            return e.map(em=>{
                return(
                    <tr>
                        <th scope="row">{em.id_employee}</th>
                        <td>{em.nom}</td>
                        <td>{em.salaire}</td>
                        <td>{em.id}</td>
                    </tr>
                )
            })
        })
    }
    
  </tbody>
</table>
    <a href="/" className="btn btn-outline-secondary">All Services</a>
    <div className="w-100 d-flex justify-content-end">

<Link to={"/add_employee/"+id} className="btn btn-outline-secondary">Ajouter Employee</Link>
</div>
  </div>
  
</div>



    )
}
export default ServiceDetails;