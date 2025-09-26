import React from "react";
import LembreteLista from "./LembreteLista";
import Logo from "./Logo";
import LembreteEntrada from "./LembreteEntrada";

class App extends React.Component {
  state = {
    texto: "",
    lembretes: [],
    filtro: "todos", // 'todos' | 'favoritos'
  };

  handleChange = (e) => {
    this.setState({ texto: e.target.value });
  };

  adicionarLembrete = () => {
    const descricao = this.state.texto;
    if (!descricao.trim()) return;

    const novo = {
      descricao,
      favorito: false,
      icone1: "fa-regular fa-star",
      icone2: "fa-solid fa-trash",
    };

    // push sem mutar o estado (novo no topo)
    const antiga = this.state.lembretes;
    const copia = [novo];
    for (let i = 0; i < antiga.length; i++) copia.push(antiga[i]);

    this.setState({ lembretes: copia, texto: "" });
  };

  // remover com filter, pelo índice do array original
  excluirLembrete = (indexParaRemover) => {
    const novaLista = this.state.lembretes.filter((_, i) => i !== indexParaRemover);
    this.setState({ lembretes: novaLista });
  };

  // alternar favorito pelo índice do array original
  toggleFavorito = (index) => {
    const atual = this.state.lembretes;
    const copia = [];
    for (let i = 0; i < atual.length; i++) {
      if (i === index) {
        const item = atual[i];
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

  // define o filtro ativo
  setFiltro = (filtro) => {
    this.setState({ filtro });
  };

  render() {
    const { texto, lembretes, filtro } = this.state;

    // aplica o filtro para decidir o que mostrar
    const visiveis =
      filtro === "favoritos"
        ? lembretes.filter((l) => l.favorito)
        : lembretes;

    return (
      <div className="container">
        <div className="row my-2">
          <div className="col-12 text-center">
            <Logo size="fa-3x" />
          </div>
        </div>

        {/* Controles de filtro */}
        <div className="d-flex justify-content-center gap-2 m-2">
          <button
            type="button"
            className={`btn ${filtro === "todos" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => this.setFiltro("todos")}
            aria-pressed={filtro === "todos" ? "true" : "false"}
          >
            Todos
          </button>
          <button
            type="button"
            className={`btn ${filtro === "favoritos" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => this.setFiltro("favoritos")}
            aria-pressed={filtro === "favoritos" ? "true" : "false"}
          >
            Favoritos
          </button>
        </div>

        {/* Entrada de novo lembrete */}
        <div className="d-flex justify-content-evenly m-2">
          <LembreteEntrada
            value={texto}
            onChange={this.handleChange}
            texto="Adicionar Lembrete"
            funcao={this.adicionarLembrete}
          />
        </div>

        {/* Lista (já filtrada) */}
        <div className="row">
          {visiveis.map((item) => {
            
            const indexOriginal = lembretes.indexOf(item);

            return (
              <div key={indexOriginal} className="col-12 col-lg-6 col-xxl-3">
                <LembreteLista
                  descricao={item.descricao}
                  favorito={item.favorito}
                  icone1={item.icone1}
                  icone2={item.icone2}
                  onToggleFavorite={() => this.toggleFavorito(indexOriginal)}
                  onDelete={() => this.excluirLembrete(indexOriginal)}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
