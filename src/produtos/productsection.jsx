import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './AppProdutos.css';
import img1 from '../assets/pq.jpg';
import img2 from '../assets/biscoitodequeijo.jpg';
import img3 from '../assets/chipa.jpg';
import img4 from '../assets/paodequeijotradicional800g.png';
import img5 from '../assets/paodequeijotradicional400g.png';
import img6 from '../assets/biscoitodequeijo800g.png';
import img7 from '../assets/biscoitodequeijo400g.png';
import img8 from '../assets/paodequeijodefumado800g.png';
import img9 from '../assets/paodequeijodefumado400g.png';
import img10 from '../assets/chipa400g.png';
import img11 from '../assets/chipa800g.png';
import img12 from '../assets/dadinhodetapioca400g.png';
import img13 from '../assets/dadinhodetapioca800g.png';

const ProductSection = () => {
  const { t } = useTranslation();
  // Estado para saber qual categoria está ativa
  const [categoryActive, setCategoryActive] = useState('pao-de-queijo');

  const categories = [
    { id: 'pao-de-queijo', labelKey: 'products.categories.cheeseBread', img: img3 },
    { id: 'biscoito-de-queijo', labelKey: 'products.categories.cheeseBiscuit', img: img2 },
    { id: 'especialidades', labelKey: 'products.categories.specialties', img: img1 },
  ];

  const products = {
    'pao-de-queijo': [
      { id: 1, nameKey: 'products.names.traditionalCheeseBread', weight: '400G', img: img5 },
      { id: 2, nameKey: 'products.names.traditionalCheeseBread', weight: '800G', img: img4 },
      { id: 3, nameKey: 'products.names.smokedCheeseBread', weight: '400G', img: img9 },
      { id: 4, nameKey: 'products.names.smokedCheeseBread', weight: '800G', img: img8 },
    ],
    'biscoito-de-queijo': [
      { id: 5, nameKey: 'products.names.cheeseBiscuit', weight: '400G', img: img7 },
      { id: 6, nameKey: 'products.names.cheeseBiscuit', weight: '800G', img: img6 },
    ],
    'especialidades': [
      { id: 7, nameKey: 'products.names.chipa', weight: '400G', img: img10 },
      { id: 8, nameKey: 'products.names.chipa', weight: '800G', img: img11 },
      { id: 9, nameKey: 'products.names.tapiocaDice', weight: '400G', img: img12 },
      { id: 10, nameKey: 'products.names.tapiocaDice', weight: '800G', img: img13 },
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
              <span>{t(cat.labelKey)}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Grid de Produtos (Conteúdo que muda) */}
      <div className="products-grid">
        {products[categoryActive]?.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-img-container">
              <img src={product.img} alt={t(product.nameKey)} />
            </div>
            <div className="product-info">
              <h3>{t(product.nameKey)}</h3>
              <p>{t('products.brandWeight', { weight: product.weight })}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;