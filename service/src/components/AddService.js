import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddService(props) {
        const [code,setCode]=useState();
        const [ville,setVille]=useState();
        const [employees,setEmployees]=useState([]);
        const navigate = useNavigate()
        const handleSubmit = async (e) => {
            e.preventDefault();
            const service = { id:code, ville:ville, employees:employees };
            
            await axios.post("http://localhost:3006/services", {
                id:Number(service.id),
                ville:service.ville,
                employees:service.employees,
            },{
                "Content-Type": "application/json"
              })
              setCode('')
              setVille('')
              navigate('/')
        }
        return (
            <form onSubmit={handleSubmit} method="post" className="badge">
                  <div className="card-header">
    <h2>Nouveau service</h2>
  </div>
                <div className="row g-3">
        <div className="col-md-3">
            <input type="text" className="form-control" value={code} onChange={e=>{setCode(e.target.value)}} placeholder="Code Service" aria-label="First name" />
        </div>
        <div className="col-md-3">
            <input type="text" className="form-control" value={ville} onChange={e=>{setVille(e.target.value)}} placeholder="Ville" aria-label="Last name" />
        </div>
        </div>
    <div className="row mt-3 w-50 d-flex justify-content-center ">
        <div className="col-md-3">
        <a href="/" className="form-control btn btn-outline-secondary ">Cancel</a>
        </div>
    <div className="col-md-3">
        <input type="submit"  className="form-control btn btn-outline-secondary" value="Add Service" />
    </div>
      
    </div>
            </form>
        );
    }

export default AddService;

