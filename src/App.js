import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

export default function App() {
  const [newProducts, setNewProducts] = useState([]);

  function addProduct(product) {
    setNewProducts((current) => [{ ...product, id: `local-${Date.now()}` }, ...current]);
  }

  return (
    <div className="app">
      <header className="topbar">
        <div className="topbar-content">
          <a className="brand" href="#inicio">
            <span className="brand-mark"><i className="pi pi-shop" /></span>
            <span>vitrine<span className="brand-dot">.</span></span>
          </a>
          <nav className="main-nav">
            <a href="#inicio">Início</a>
            <a href="#catalogo">Produtos</a>
            <a href="#cadastro">Cadastrar produto</a>
          </nav>
          <a className="header-link" href="#catalogo">Explorar catálogo <i className="pi pi-arrow-up-right" /></a>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-inner">
            <div className="hero-copy">
              <span className="hero-kicker"><span /> CATÁLOGO DIGITAL</span>
              <h1>Descubra produtos<br /><em>que combinam</em> com você.</h1>
              <p>Uma seleção de produtos em um só lugar. Explore o catálogo e conheça os detalhes de cada item.</p>
              <a className="hero-button" href="#catalogo">Ver produtos <i className="pi pi-arrow-down" /></a>
              <div className="hero-note"><i className="pi pi-check-circle" /> Produtos carregados diretamente da API</div>
            </div>
            <div className="hero-art" aria-label="Composição ilustrativa de produtos">
              <div className="art-circle" />
              <div className="art-card art-card-back"><i className="pi pi-headphones" /><span>TECNOLOGIA</span></div>
              <div className="art-card art-card-front"><i className="pi pi-shopping-bag" /><strong>Boas escolhas<br />começam aqui.</strong><span>VITRINE DIGITAL</span></div>
              <div className="art-sparkle sparkle-one">✳</div>
              <div className="art-sparkle sparkle-two">✦</div>
            </div>
          </div>
        </section>

        <section className="benefit-strip">
          <div><i className="pi pi-th-large" /><span><strong>Variedade</strong><small>Diferentes categorias</small></span></div>
          <div><i className="pi pi-images" /><span><strong>Detalhes</strong><small>Imagem e descrição</small></span></div>
          <div><i className="pi pi-sync" /><span><strong>Atualização</strong><small>Dados da Fake Store API</small></span></div>
        </section>

        <div className="page-container">
          <ProductList newProducts={newProducts} />
          <section className="form-section" id="cadastro">
            <div className="form-section-intro">
              <span className="section-kicker">CONTRIBUA COM A VITRINE</span>
              <h2>Adicionar um produto</h2>
              <p>Cadastre um novo item para exibi-lo junto aos produtos do catálogo.</p>
            </div>
            <ProductForm onAddProduct={addProduct} />
          </section>
        </div>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="#inicio"><span className="brand-mark"><i className="pi pi-shop" /></span><span>vitrine<span className="brand-dot">.</span></span></a>
        <span>Projeto acadêmico · React, PrimeReact, PrimeFlex e Axios</span>
      </footer>
    </div>
  );
}
