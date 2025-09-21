const Lembrete = (props) => {
  return (
    <div className="card mb-3">
      <div className="card-body d-flex align-items-center">
        <p className="mb-0 flex-grow-1 text-center">{props.descricao}</p>

        <div className="d-flex align-items-center gap-3 ms-auto">
          <i className={`${props.icone1} fa-2x`}></i>
          <i className={`${props.icone2} fa-2x`}></i>
        </div>
      </div>
    </div>
  );
};

export default Lembrete;