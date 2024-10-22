import React, { Component } from "react";
import loadingImage from "./../assets/images/loading.jpg";
import Global from "./Global";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

export default class HomeDepartamentos extends Component {
  state = {
    status: false,
    departamentos: [],
  };

  laodDepartamentos = () => {
    let request = "api/departamentos";
    let url = Global.apiUrlDepartamentos + request;
    axios.get(url).then((response) => {
      this.setState({
        departamentos: response.data,
        status: true,
      });
    });
  };

  /* ____________ LO COMENTO PORQUE VARIAMOS LA FORMA DE HACERLO ____________ */
  
//   eliminarDepartamento = (iddepartamento) => {
//     let request = "api/departamentos/" + iddepartamento;
//     let url = Global.apiUrlDepartamentos + request;

//     Swal.fire({
//       title: "¿Eliminar departamento con id " + iddepartamento + "?",
//       text: "No será posible revertir esto",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Si, eliminar!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         axios.delete(url).then((response) => {
//           this.laodDepartamentos();
//         });

//         Swal.fire({
//           title: "Eliminado",
//           text: "Departamento " + iddepartamento + " eliminado!",
//           icon: "success",
//         });
//       }
//     });
//   };

  componentDidMount = () => {
    this.laodDepartamentos();
  };

  render() {
    //en el render pero fuera del return para la imagen de loading
    if (this.state.status == false) {
      return <img src={loadingImage} />;
    } else {
      return (
        <div>
          <div class="px-4 py-5 my-5 text-center">
            <img
              class="d-block mx-auto mb-4"
              src="https://e7.pngegg.com/pngimages/326/371/png-clipart-brown-and-white-goat-goat-milking-animal-sales-goat-animals-pet-thumbnail.png"
              alt=""
              width="72"
              height="57"
            />
            <h1 class="display-5 fw-bold">Crud Departamentos</h1>
            <div class="col-lg-6 mx-auto">
              <p class="lead mb-4">
                Esta es la app de CRUD del servicio API de Departamentos. Vamos
                a realizar create, read, update y delete y a dejarlo bonito
                usando Bootstrap 5.
              </p>
            </div>
          </div>

          <hr />
          <div style={{ padding: "20px" }}>
            <table className="table table-hover">
              <thead>
                <tr className="table-dark">
                  <th>Numero</th>
                  <th>Nombre</th>
                  <th>Localidad</th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.state.departamentos.map((departamento, index) => {
                  return (
                    <tr key={index}>
                      <td>{departamento.numero}</td>
                      <td>{departamento.nombre}</td>
                      <td>{departamento.localidad}</td>
                      <td>
                        {
                          <NavLink to={"/detalles/" + departamento.numero}>
                            detalles
                          </NavLink>
                        }
                      </td>
                      <td>
                        {
                          <NavLink
                            to={
                              "/update/" +
                              departamento.numero +
                              "/" +
                              departamento.nombre +
                              "/" +
                              departamento.localidad
                            }
                          >
                            update
                          </NavLink>
                        }
                      </td>
                      <NavLink to={"/delete/" + departamento.numero}>
                        Eliminar
                      </NavLink>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }
}
