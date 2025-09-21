import Lembrete from "./Lembrete";

const App = () => {


  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          "Hello, Lembretes"
        </div>
      </div>
      <div className='d-flex justify-content-evenly m-2'>
        <button
          type="button"
          className="btn btn-primary"
          onClick= {() => alert("Apenas Favoritos!")}>
              Favoritos
        </button>
      </div>
      <div className="row">
        <div className="col-12 col-lg-6 col-xxl-3">
          <Lembrete
            icone1="fa-regular fa-star"
            icone2="fa-solid fa-trash"
            descricao="Preparar aula de programação" />
        </div>
        <div className="col-12 col-lg-6 col-xxl-3">
          <Lembrete
            icone1="fa-regular fa-star"
            icone2="fa-solid fa-trash"
            descricao="Fazer feira" />
        </div>
        <div className="col-12 col-lg-6 col-xxl-3">
          <Lembrete
            icone1="fa-regular fa-star"
            icone2="fa-solid fa-trash"
            descricao="Prepara Marmitas" />
        </div>
      </div>
      <div className='d-flex justify-content-evenly m-2'>
          <input
          type="text"
          id="nome"
          className="form-control"
          />
      </div>
      <div className='d-flex justify-content-evenly m-2'>
        <button
          type="button"
          className="btn btn-primary"
          onClick= {() => alert("Lembrete Adcionado!")}>
              Adcionar Lembrete
        </button>
      </div>
    </div>
  )
}

export default App