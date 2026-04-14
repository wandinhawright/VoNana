import React from 'react';
import Header from './header'; 

function App() {
  return (
    <div className="App">
      {/* 2. Chame o componente como se fosse uma tag HTML */}
      <Header />
      
      <main style={{ padding: '20px' }}>
        <h1>Bem-vindo ao site da Vó Naná</h1>
        <p>O resto do seu conteúdo vem aqui embaixo...</p>
      </main>
    </div>
  );
}

export default App;