import React, { useState } from 'react';
import './AppProdutos.css';
import img1 from '../assets/pq.jpg';
import img2 from '../assets/biscoitodequeijo.jpg';
import img3 from '../assets/chipa.jpg';
import img4 from '../assets/embalagem.png';


const ProductSection = () => {
  // Estado para saber qual categoria está ativa
  const [categoryActive, setCategoryActive] = useState('pao-de-queijo');

  const categories = [
    { id: 'pao-de-queijo', label: 'PÃO DE QUEIJO', img: img3 },
    { id: 'biscoito-de-queijo', label: 'BISCOITO DE QUEIJO', img: img2 },
    { id: 'especialidades', label: 'ESPECIALIDADES...', img: img1 },
  ];

  const products = {
    'pao-de-queijo': [
      { id: 1, name: 'PÃO DE QUEIJO TRADICIONAL', weight: '400G', img: img4 },
      { id: 2, name: 'PÃO DE QUEIJO TRADICIONAL', weight: '800G', img: img4 },
      { id: 3, name: 'PÃO DE QUEIJO DEFUMADO', weight: '400G', img: img4 },
      { id: 4, name: 'PÃO DE QUEIJO DEFUMADO', weight: '800G', img: img4 },
    ],
    'biscoito-de-queijo': [
      { id: 5, name: 'BISCOITO DE QUEIJO', weight: '400G', img: img4 },
      { id: 6, name: 'BISCOITO DE QUEIJO', weight: '800G', img: img4 },
    ],
    'especialidades': [
      { id: 7, name: 'CHIPA', weight: '400G', img: img4 },
      { id: 8, name: 'CHIPA', weight: '800G', img: img4 },
      { id: 9, name: 'DADINHO DE TAPIOCA', weight: '400G', img: img4 },
      { id: 10, name: 'DADINHO DE TAPIOCA', weight: '800G', img: img4 },
    ],
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