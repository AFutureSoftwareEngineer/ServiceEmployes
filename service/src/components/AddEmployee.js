import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function AddEmployee(props) {
        // const [code,setCode]=useState();
        const {code}= useParams()
        const [codeService,setCodeService]=useState(code)
        const [id,setId]=useState();
        const [nom,setNom]=useState();
        const [salaire,setSalaire]=useState([]);
        const navigate = useNavigate()
        const handleSubmit = async (e) => {
            e.preventDefault();
            setCodeService([props.services])
            const employee = { 
                code_service:codeService,
                id_emplyee:id,
                nom:nom ,
                salaire:salaire 
            };
            
            let empsl = props.services.filter((elm)=>{
                return elm.id == codeService
            })
            let emps = empsl[0].employees?empsl:[]
            
            emps.push({
                id:employee.code_service,
                id_employee:employee.id_emplyee,
                nom:employee.nom,
                salaire:Number(employee.salaire)
            })
            let array1 =emps[0].employees
            array1.push(emps[1])
            await axios.patch("http://localhost:3006/services/"+code, {
                
                employees: array1
            },{
                "Content-Type": "application/json"
            });
            
            
            navigate('/')
            
        }
        return(
            <div className="badge">
                <form onSubmit={handleSubmit}>
                <div className="card-header">
    <h2>Nouveau employe</h2>
  </div>
            <div class=" center">
    <div class=" center">
    <label className="label-control">Code Service</label>
    <select class="form-control" onChange={e => { setCodeService(e.target.value) }}>
  {props.services.map(service => (
      <option value={service.id}>{service.id}</option>
      ))}
      </select>
    </div>
    <div class="col-md-3">
    <label className="label-control">Id Employee</label>
        <input type="text" class="form-control" value={id} onChange={e=>{setId(e.target.value)}} placeholder="Id Employee" aria-label="Last name" />
    </div>
    </div>
            <div class="row g-3">
    <div class="col-md-3">
    <label className="label-control">Nom</label>
        <input type="text" class="form-control" value={nom} onChange={e=>{setNom(e.target.value)}} placeholder="Nom" aria-label="First name" />
    </div>
    <div class="col-md-3">
        <label className="label-control">Salaire</label>
        <input type="text" class="form-control" value={salaire} onChange={e=>{setSalaire(e.target.value)}}placeholder="Salaire" aria-label="Last name" />
    </div>
    </div>
    <div class="row mt-3 w-50 d-flex justify-content-center ">
        <div className="col-md-3">
        <a href="/" className="form-control btn btn-outline-secondary">Cancel</a>
        </div>
        <div className="col-md-3">
        <input type="submit"  className="form-control btn btn-outline-secondary" value="Add"/>
        </div>
    </div>
        </form>
            </div>
        );
    }
export default AddEmployee;

