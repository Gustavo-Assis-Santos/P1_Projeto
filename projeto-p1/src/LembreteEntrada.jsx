const LembreteEntrada = (props) => { 

    return (
        
            <div className='d-flex justify-content-evenly m-2'>
                <input
                type="text"
                id="nome"
                className="form-control"
                />           
                <button
                type="button"
                className="btn btn-primary"
                onClick={props.funcao}>
                    {props.texto}
                </button>
            </div>
        
    )
}

export default LembreteEntrada