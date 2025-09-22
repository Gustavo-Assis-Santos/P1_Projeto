const LembreteEntrada = (props) => {
  return (
    <div className="d-flex gap-2 w-100">
      <input
        type="text"
        id="nome"
        className="form-control"
        placeholder="Digite um lembrete..."
        value={props.value}
        onChange={props.onChange}
      />
      <button
        type="button"
        className="btn btn-primary"
        onClick={props.funcao}>
            {props.texto}
      </button>
    </div>
  );
};

export default LembreteEntrada;