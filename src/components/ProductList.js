import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Message } from 'primereact/message';
import { Button } from 'primereact/button';

const API_URL = 'https://fakestoreapi.com/products';

export default function ProductList({ newProducts }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  async function loadProducts() {
    try {
      setLoading(true);
      setError('');
      const response = await axios.get(API_URL);
      setProducts(response.data);
    } catch (err) {
      setError('Não foi possível carregar os produtos. Verifique sua conexão e tente novamente.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { loadProducts(); }, []);
  const allProducts = [...newProducts, ...products];

  return (
    <section className="catalog-section" id="catalogo">
      <div className="catalog-heading">
        <div>
          <span className="section-kicker">ESCOLHA O QUE PROCURA</span>
          <h2>Explore nossa vitrine<span>.</span></h2>
          <p>Confira os produtos disponíveis no catálogo.</p>
        </div>
        {!loading && !error && <div className="catalog-total">{allProducts.length}<small> produtos</small></div>}
      </div>

      {loading && <div className="loading-area"><ProgressSpinner style={{ width: '42px', height: '42px' }} /><span>Carregando produtos...</span></div>}
      {error && <div className="error-area"><Message severity="error" text={error} /><Button label="Tentar novamente" icon="pi pi-refresh" onClick={loadProducts} /></div>}
      {!loading && !error && allProducts.length === 0 && <Message severity="info" text="Nenhum produto encontrado." />}
      {!loading && !error && (
        <div className="grid product-grid">
          {allProducts.map((product) => (
            <div className="col-12 sm:col-6 lg:col-4 xl:col-3" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
