import Lembrete from "./Lembrete";
import Logo from "./Logo";
import LembreteEntrada from "./LembreteEntrada";

const App = () => {

  const texto = "Adcionar Lembrete"
  const funcao = () => alert("Lembrete Adcionado")

  const componenteLembreteEntrada = (
    <LembreteEntrada
      texto={texto}
      funcao={funcao}
    />
  )

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Logo size='fa-3x'/>
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
        {componenteLembreteEntrada}
       </div>

    </div>
  )
}

export default App