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
    if (!descricao.trim()) return;

    const novo = {
      descricao,
      favorito: false,                 // ✅ começa não-favorito
      icone1: "fa-regular fa-star",
      icone2: "fa-solid fa-trash",
    };

    // push sem mutar o estado (novo no topo)
    const antiga = this.state.lembretes;
    const copia = [novo];
    for (let i = 0; i < antiga.length; i++) {
      copia.push(antiga[i]);
    }

    this.setState({ lembretes: copia, texto: "" });
  };

  // ✅ remover com filter, pelo índice
  excluirLembrete = (indexParaRemover) => {
    const novaLista = this.state.lembretes.filter((_, i) => i !== indexParaRemover);
    this.setState({ lembretes: novaLista });
  };

  // ✅ alternar favorito pelo índice (sem spread / sem mutar)
  toggleFavorito = (index) => {
    const atual = this.state.lembretes;
    const copia = [];
    for (let i = 0; i < atual.length; i++) {
      if (i === index) {
        const item = atual[i];
        // cria um novo objeto, invertendo o favorito
        copia.push({
          descricao: item.descricao,
          icone1: item.icone1,
          icone2: item.icone2,
          favorito: !item.favorito,
        });
      } else {
        copia.push(atual[i]);
      }
    }
    this.setState({ lembretes: copia });
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
          {lembretes.map((lembrete, index) => (
            <div key={index} className="col-12 col-lg-6 col-xxl-3">
              <LembreteLista
                descricao={lembrete.descricao}
                favorito={lembrete.favorito}                     
                icone1={lembrete.icone1}
                icone2={lembrete.icone2}
                onToggleFavorite={() => this.toggleFavorito(index)}
                onDelete={() => this.excluirLembrete(index)}      
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
