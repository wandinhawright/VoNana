import React, { useState } from 'react';
import './AppProdutos.css';

const ProductSection = () => {
  // Estado para saber qual categoria está ativa
  const [categoryActive, setCategoryActive] = useState('pao-de-queijo');

  const categories = [
    { id: 'pao-de-queijo', label: 'PÃO DE QUEIJO', img: '/assets/thumb-pao.jpg' },
    { id: 'folhados', label: 'BISCOITO DE QUEIJO', img: '/assets/thumb-folhado.jpg' },
    { id: 'especialidades', label: 'ESPECIALIDADES...', img: '/assets/thumb-especial.jpg' },
  ];

  const products = {
    'pao-de-queijo': [
      { id: 1, name: 'PÃO DE QUEIJO PIPOQUINHA', weight: '400G', img: '/assets/pao-400g.png' },
      { id: 2, name: 'PÃO DE QUEIJO TRADICIONAL', weight: '400G', img: '/assets/pao-trad-400g.png' },
      { id: 3, name: 'PÃO DE QUEIJO TRADICIONAL', weight: '820G', img: '/assets/pao-820g.png' },
      { id: 4, name: 'PÃO DE QUEIJO TRADICIONAL', weight: '1KG', img: '/assets/pao-1kg.png' },
    ],
    'folhados': [
      { id: 5, name: 'FOLHADO DE FRANGO', weight: '300G', img: '/assets/folhado-frango.png' },
      // Adicione mais aqui...
    ],
    // ... adicione as outras categorias
  };

  return (
    <section className="products-section">
      {/* Menu de Categorias (Superior) */}
      <div className="category-menu">
        {categories.map((cat) => (
          <div 
            key={cat.id} 
            className={`category-item ${categoryActive === cat.id ? 'active' : ''}`}
            onClick={() => setCategoryActive(cat.id)}
          >
            <div className="category-thumb" style={{ backgroundImage: `url(${cat.img})` }}>
              <div className="category-overlay"></div>
            </div>
            <div className="category-label">
              <span>{cat.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Grid de Produtos (Conteúdo que muda) */}
      <div className="products-grid">
        {products[categoryActive]?.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-img-container">
              <img src={product.img} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>VÓ NANÁ | {product.weight}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;