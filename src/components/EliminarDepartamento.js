import React, { Component } from 'react'
import Global from './Global';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default class EliminarDepartamento extends Component {

     id = this.props.id

     state = {
        status:false
     }

    eliminarDepartamento = (id) => {
        let request = "api/departamentos/" + id;
        let url = Global.apiUrlDepartamentos + request;
    
        Swal.fire({
          title: "¿Eliminar departamento con id " + id + "?",
          text: "No será posible revertir esto",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si, eliminar!",
        }).then((result) => {
          if (result.isConfirmed) {
            axios.delete(url).then((response) => {

                this.setState({
                    status:true
                })

            });
    
            Swal.fire({
              title: "Eliminado",
              text: "Departamento " + id + " eliminado!",
              icon: "success",
            });
          }
        });
      };



  render() {

    if(this.state.status == true){
        return <Navigate to="/" />;
    }else{
        return (
            <div style={{textAlign:"center", border:"solid 3px red", borderRadius:"25px", padding:"20px"}}>
              <h1 style={{color:"red"}}>Eliminar Departamento: {this.props.id}</h1>
              <button className='btn btn-danger' onClick={()=>{
                  this.eliminarDepartamento(this.props.id)
              }}>Eliminar</button>
            </div>
          )
    }

    
  }
}
