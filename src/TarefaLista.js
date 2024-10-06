import React from 'react';

function TarefaLista() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="border p-3 mt-3 rounded">
            <div className="card text-center mb-3">
              <div className="card-body">
                <p className="card-text">Preparar aula de programação</p>
              </div>
            </div>
            <div className="card text-center mb-3">
              <div className="card-body">
                <p className="card-text">Fazer feira</p>
              </div>
            </div>
            <div className="card text-center mb-3">
              <div className="card-body">
                <p className="card-text">Preparar marmitas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TarefaLista;