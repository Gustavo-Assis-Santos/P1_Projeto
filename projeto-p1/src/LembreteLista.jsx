const LembreteLista = (props) => {
  // escolhe o ícone da estrela conforme favorito
  const estrela = props.favorito ? "fa-solid fa-star" : "fa-regular fa-star";

  return (
    <div className="card mb-3">
      <div className="card-body d-flex align-items-center">
        <p className="mb-0 flex-grow-1 text-center">{props.descricao}</p>

        <div className="d-flex align-items-center gap-3 ms-auto">
          {/* ⭐ botão para favoritar/desfavoritar */}
          <button
            type="button"
            className="btn btn-link p-0"
            aria-pressed={props.favorito ? "true" : "false"}
            onClick={props.onToggleFavorite}
          >   <i className={`${estrela} fa-2x`}></i>
          </button>

          {/* 🗑️ botão para excluir (como já estava) */}
          <button
            type="button"
            className="btn btn-link text-danger p-0"
            onClick={props.onDelete}
          >  <i className={`${props.icone2} fa-2x`}></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LembreteLista;