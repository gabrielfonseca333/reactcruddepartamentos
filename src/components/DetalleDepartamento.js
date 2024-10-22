import React, { Component } from "react";
import Global from "./Global";
import axios from "axios";

export default class DetalleDepartamento extends Component {
  state = {
    departamento: null,
  };

  loadDepartamento = () => {
    let id = this.props.id;
    let request = "api/departamentos/" + id;
    let url = Global.apiUrlDepartamentos + request;
    axios.get(url).then((response) => {
      this.setState({
        departamento: response.data,
      });
    });
  };

  componentDidMount=()=>{
    this.loadDepartamento()
  }

  render() {
    return (
      <div>
        {this.state.departamento && (
          <div style={{padding:"20px", border:"1px solid gray", borderRadius:"25px"}} className="container">
            <h1 style={{paddingTop:"20px", textAlign:"center"}} >{this.state.departamento.nombre}</h1>
            <br />
            <table className="table">
              <thead>
                <tr>
                  <th>Numero</th>
                  <th>Localidad</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.state.departamento.numero}</td>
                  <td>{this.state.departamento.localidad}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}
