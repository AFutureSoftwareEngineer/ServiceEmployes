import React from "react";
import {Link} from 'react-router-dom';
function Employees(props){
  let employees=props.services.map(e=>e.employees);
  return(
    <div className="badge">
            <div className="card-header head">
    <h2>Employees</h2>
          <Link to="/add_employee/-1" className="btn btn-outline-secondary">Ajouter Employee</Link>
  </div>
<table className="table" >
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
        </div>

    );
}
export default Employees;
