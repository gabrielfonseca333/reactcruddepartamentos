import React, { Component } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import HomeDepartamentos from "./HomeDepartamentos";
import MenuDepartamentos from "./MenuDepartamentos";
import CreateDepartamentos from "./CreateDepartamentos";
import DetalleDepartamento from "./DetalleDepartamento";
import UpdateDepartamento from "./UpdateDepartamento";
import EliminarDepartamento from "./EliminarDepartamento";

export default class Router extends Component {
  render() {
    function DetalleDepartamentoElement() {
      let { iddepartamencillo } = useParams();

      return <DetalleDepartamento id={iddepartamencillo} />;
    }

    function UpdateDepartamentoElement() {
      let { iddepartamencillo, idnombrecillo, idlocalidadcilla } = useParams();

      return (
        <UpdateDepartamento
          id={iddepartamencillo}
          nombre={idnombrecillo}
          localidad={idlocalidadcilla}
        />
      );
    }

    function DeleteDepartamentoElement() {
      let { iddepa } = useParams();

      return <EliminarDepartamento id={iddepa} />;
    }

    return (
      <div>
        <BrowserRouter>
          <MenuDepartamentos />
          <Routes>
            <Route path="/" element={<HomeDepartamentos />}></Route>
            <Route path="/create" element={<CreateDepartamentos />}></Route>
            <Route
              path="/detalles/:iddepartamencillo"
              element={<DetalleDepartamentoElement />}
            ></Route>
            <Route
              path="/update/:iddepartamencillo/:idnombrecillo/:idlocalidadcilla"
              element={<UpdateDepartamentoElement />}
            ></Route>
            <Route
              path="/delete/:iddepa"
              element={<DeleteDepartamentoElement />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
