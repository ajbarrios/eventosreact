import React, { Component } from "react";
import axios from "axios";

// crear el context
const CategoriasContext = React.createContext();
export const CategoriasConsumer = CategoriasContext.Consumer;

class CategoriasProvider extends Component {
  state = {
    categorias: []
  };

  token = "WUX7G2J27ZKS44AOO2BH";

  componentDidMount() {
    this.obtenerCategorias();
  }

  obtenerCategorias = async () => {
    const url = `https://www.eventbriteapi.com/v3/categories/?token=${
      this.token
    }&locale=es_ES`;
    const categorias = await axios.get(url);
    this.setState({
      categorias: categorias.data.categories
    });
  };

  render() {
    const { categorias } = this.state;
    return (
      <CategoriasContext.Provider value={{ categorias }}>
        {this.props.children}
      </CategoriasContext.Provider>
    );
  }
}

export default CategoriasProvider;
