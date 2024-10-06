function TarefaEntrada() {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Digite a descrição de uma tarefa"
              />
            </div>
            <button
              className="btn btn-primary w-100"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default TarefaEntrada;