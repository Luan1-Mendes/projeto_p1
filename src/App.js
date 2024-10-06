import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TarefaEntrada from './TarefaEntrada';
import TarefaLista from './TarefaLista';

function App() {
  return (
    <div className="container">
      <TarefaEntrada />
      <TarefaLista />
    </div>
  );
}

export default App;
