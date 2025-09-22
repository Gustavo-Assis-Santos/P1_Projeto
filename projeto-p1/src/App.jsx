import React from "react";
import LembreteLista from "./LembreteLista";
import Logo from "./Logo";
import LembreteEntrada from "./LembreteEntrada";

class App extends React.Component {

  state = {
    texto: "",        
    lembretes: []     
  };

  handleChange = (e) => {
    this.setState({ texto: e.target.value });
  };

  adicionarLembrete = () => {
    const descricao = this.state.texto;

    const novo = {
      descricao,
      icone1: "fa-regular fa-star",
      icone2: "fa-solid fa-trash",
    };

    this.setState({
      lembretes: [novo].concat(this.state.lembretes),
      texto: ""
    });
  };

  render() {
    const { texto, lembretes } = this.state;

    return (
      <div className="container">
        <div className="row my-2">
          <div className="col-12 text-center">
            <Logo size="fa-3x" />
          </div>
        </div>

        <div className="d-flex justify-content-evenly m-2">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => alert("Apenas Favoritos!")}
          >
            Favoritos
          </button>
        </div>

        <div className="d-flex justify-content-evenly m-2">
          <LembreteEntrada
            value={texto}
            onChange={this.handleChange}
            texto="Adicionar Lembrete"
            funcao={this.adicionarLembrete}
          />
        </div>

        
        <div className="row">
          {lembretes.map(lembrete => (
            <div className="col-12 col-lg-6 col-xxl-3">
                <LembreteLista 
                  descricao={lembrete.descricao}
                  icone1={lembrete.icone1}
                  icone2={lembrete.icone2}
                />
            </div>
          ))}
        </div>
        
      </div>
    );
  }
}

export default App;