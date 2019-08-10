import React, { Component } from "react";
import { CategoriasConsumer } from "../context/CategoriasContext";

class Formulario extends Component {
  state = {
    nombre: "",
    categoria: ""
  };

  obtenerDatosEvento = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form>
        <fieldset className="uk-fieldset uk-margin">
          <legend className="uk-legend uk-text-center">
            Busca tu evento por Nombre o Categoría
          </legend>
        </fieldset>
        <div className="uk-column-1-3@m uk-margin">
          <div className="uk-margin" uk-margin="true">
            <input
              type="text"
              name="nombre"
              className="uk-input"
              placeholder="Nombre de Evento o Ciudad"
              onChange={this.obtenerDatosEvento}
            />
          </div>
          <div className="uk-margin" uk-margin="true">
            <select
              className="uk-select"
              name="categoria"
              onChange={this.obtenerDatosEvento}
            >
              <option value="">-- Seleccione una opción --</option>
              <CategoriasConsumer>
                {value =>
                  value.categorias.map(categoria => (
                    <option
                      key={categoria.id}
                      value={categoria.id}
                      data-uk-form-select
                    >
                      {categoria.name_localized}
                    </option>
                  ))
                }
              </CategoriasConsumer>
            </select>
          </div>
          <div>
            <input
              type="submit"
              className="uk-button uk-button-danger"
              value="Busca Eventos"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Formulario;
