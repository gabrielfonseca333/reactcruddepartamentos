import { globalEval } from "jquery";
import React, { Component } from "react";
import Global from "./Global";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default class UpdateDepartamento extends Component {
  state = {
    status: false,
  };

  cajaId = React.createRef();
  cajaNombre = React.createRef();
  cajaLocalidad = React.createRef();

  loaddDepartamento = (e) => {
    e.preventDefault();
    let id = parseInt(this.cajaId.current.value);
    let nombre = this.cajaNombre.current.value;
    let localidad = this.cajaLocalidad.current.value;

    let request = "api/Departamentos";
    let url = Global.apiUrlDepartamentos + request;

    let departamento = {
      numero: id,
      nombre: nombre,
      localidad: localidad,
    };

    axios.put(url, departamento).then((response) => {
      this.setState({
        status: true,
      });
    });
  };

  // componentDidMount=()=>{
  //     this.loadDepartamento()
  // }

  render() {
    return (
      <div>
        {
          //pregunta del status
          // si el estatus es true, nos lo llevamos a HOME
          this.state.status == true && <Navigate to="/" />
        }
        <h1 style={{ textAlign: "center", color: "gold", paddingTop: "20px" }}>
          Update Departamento
        </h1>

        <div style={{ padding: "20px" }}>
          <form>
            <input
              type="text"
              className="form-control"
              ref={this.cajaId}
              defaultValue={this.props.id}
              disabled
            ></input>
            <br />
            <input
              type="text"
              className="form-control"
              ref={this.cajaNombre}
              defaultValue={this.props.nombre}
            ></input>
            <br />
            <input
              type="text"
              className="form-control"
              ref={this.cajaLocalidad}
              defaultValue={this.props.localidad}
            ></input>
            <br />
            <button
              className="btn btn-warning"
              onClick={this.loaddDepartamento}
            >
              Modificar
            </button>
          </form>
        </div>
      </div>
    );
  }
}
