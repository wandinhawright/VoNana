import React, { useState } from 'react';
import './AppRevendedor.css';

const OndeEncontrar = () => {
  const [showModal, setShowModal] = useState(false);

  // Link do Google Maps (substitua pela sua localização real)
  const mapsUrl = "https://www.google.com/maps/search/Vó+Naná+Pão+de+Queijo";

  return (
    <section className="onde-encontrar-section">
      <div className="onde-encontrar-container">
        
        {/* Lado Esquerdo: Texto e Botão */}
        <div className="onde-info">
          <h2>ONDE ENCONTRAR</h2>
          <p>
            Encontre os produtos Vó Naná nos melhores supermercados e empórios da sua região. 
            Quer levar nossa tradição para o seu negócio?
          </p>
          <button className="btn-pedido" onClick={() => setShowModal(true)}>
            FAÇA SEU PEDIDO AQUI
          </button>
        </div>

        {/* Lado Direito: Mapa Interativo */}
        <div className="onde-mapa">
          <a href={mapsUrl} target="_blank" rel="noreferrer" className="map-link-wrapper">
            <div className="map-overlay">
              <span>Ver no Google Maps</span>
            </div>
            {/* Iframe interativo do Google Maps */}
            <iframe 
              title="Mapa Vó Naná"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61419.28302254374!2d-48.04183834256559!3d-15.81949159494744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2f0db4b4b48d%3A0x64d9af50fd1151a7!2sV%C3%B3%20Nana%20P%C3%A3o%20de%20Queijo!5e0!3m2!1spt-BR!2sbr!4v1776904850881!5m2!1spt-BR!2sbr"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </a>
        </div>
      </div>

      {/* MODAL DO FORMULÁRIO (Aparece ao clicar) */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>&times;</button>
            
            <div className="form-header">
              <h3>FAÇA SEU PEDIDO</h3>
              <p>Você será redirecionado para o whatsapp</p>
            </div>

            <a 
                 href="https://wa.me/556196561099?text=Olá,%20gostaria%20de%20me%20tornar%20um%20revendedor%20dos%20produtos%20Vó%20Naná." 
                target="_blank" 
                rel="noreferrer"
                className="btn-pedido-whatsapp"
            >
            Ir para Whatsapp
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default OndeEncontrar;