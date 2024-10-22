import React, { Component } from "react";
import axios from "axios";
import Global from "./Global";
import { Navigate } from "react-router-dom";

export default class CreateDepartamentos extends Component {
  cajaId = React.createRef();
  cajaNombre = React.createRef();
  cajaLocalidad = React.createRef();

  state = {
    status: false,
  };

  crearDepartamento = (e) => {
    e.preventDefault();

    let id = parseInt(this.cajaId.current.value);
    let nombre = this.cajaNombre.current.value;
    let localidad = this.cajaLocalidad.current.value;

    let request = "api/departamentos";
    let url = Global.apiUrlDepartamentos + request;

    let departamento = {
      numero: id,
      nombre: nombre,
      localidad: localidad,
    };

    axios.post(url, departamento).then((response) => {
      this.setState({
        status: true,
      });
    });
  };

  render() {
    if (this.state.status == true) {
      return <Navigate to="/" />;
    } else {
      return (
        <div>
          <h1 style={{ textAlign: "center", paddingTop: "20px" }}>
            Crear Departamentos
          </h1>
          <div style={{padding:"20px"}}>
            <form>
              <input
                type="text"
                ref={this.cajaId}
                className="form-control"
                placeholder="Numero de departamento"
              ></input><br/>
              <input
                type="text"
                ref={this.cajaNombre}
                className="form-control"
                placeholder="Nombre de departamento"
              ></input><br/>
              <input
                type="text"
                ref={this.cajaLocalidad}
                className="form-control"
                placeholder="Localidad"
              ></input><br/>
              <button className="btn btn-primary"  onClick={this.crearDepartamento}>
                Crear Departamento
              </button>
            </form>
          </div>
        </div>
      );
    }
  }
}
