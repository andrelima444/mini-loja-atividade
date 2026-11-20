import React from 'react';
import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';

export default function ProductCard({ product }) {
  const image = product.image || 'https://placehold.co/500x400?text=Produto';

  return (
    <Card className="product-card">
      <div className="product-image-wrap">
        <img src={image} alt={product.title} className="product-image"
          onError={(event) => { event.currentTarget.src = 'https://placehold.co/500x400?text=Sem+imagem'; }} />
      </div>
      <div className="product-info">
        <div className="product-meta"><Tag value={product.category || 'Produto'} /></div>
        <h3 title={product.title}>{product.title}</h3>
        <p className="product-description">{product.description || 'Sem descrição disponível.'}</p>
        <div className="product-bottom">
          <strong className="product-price">{Number(product.price || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
          {product.rating && <span className="rating"><i className="pi pi-star-fill" /> {product.rating.rate}</span>}
        </div>
      </div>
    </Card>
  );
}
