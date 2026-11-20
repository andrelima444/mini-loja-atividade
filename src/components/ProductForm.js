import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';

const initialForm = {
  title: '',
  description: '',
  category: '',
  price: null,
  image: ''
};

export default function ProductForm({ onAddProduct }) {
  const [form, setForm] = useState(initialForm);
  const [message, setMessage] = useState('');

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.title.trim() || !form.category.trim() || !form.price || form.price <= 0) {
      setMessage('Preencha título, categoria e preço com valores válidos.');
      return;
    }

    onAddProduct({
      ...form,
      title: form.title.trim(),
      description: form.description.trim(),
      category: form.category.trim(),
      image: form.image.trim() || 'https://placehold.co/500x400?text=Novo+produto'
    });

    setForm(initialForm);
    setMessage('Produto adicionado ao catálogo com sucesso!');
  }

  return (
    <Card className="form-card">
      <div className="form-heading">
        <div className="form-icon"><i className="pi pi-plus" /></div>
        <div>
          <h2>Adicionar produto</h2>
          <p>Preencha os campos para incluir um produto na lista.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="form-grid">
        <div className="field">
          <label htmlFor="title">Nome do produto *</label>
          <InputText id="title" value={form.title} onChange={(e) => updateField('title', e.target.value)} placeholder="Ex.: Fone de ouvido" />
        </div>

        <div className="field">
          <label htmlFor="category">Categoria *</label>
          <InputText id="category" value={form.category} onChange={(e) => updateField('category', e.target.value)} placeholder="Ex.: Eletrônicos" />
        </div>

        <div className="field">
          <label htmlFor="price">Preço (R$) *</label>
          <InputNumber inputId="price" value={form.price} onValueChange={(e) => updateField('price', e.value)} mode="currency" currency="BRL" locale="pt-BR" min={0} className="w-full" inputClassName="w-full" />
        </div>

        <div className="field">
          <label htmlFor="image">Link da imagem</label>
          <InputText id="image" value={form.image} onChange={(e) => updateField('image', e.target.value)} placeholder="https://..." />
        </div>

        <div className="field field-full">
          <label htmlFor="description">Descrição</label>
          <InputTextarea id="description" value={form.description} onChange={(e) => updateField('description', e.target.value)} rows={3} autoResize placeholder="Descreva o produto..." />
        </div>

        <div className="form-actions field-full">
          <Button type="submit" label="Adicionar produto" icon="pi pi-plus" />
          {message && <span className="form-message">{message}</span>}
        </div>
      </form>
    </Card>
  );
}
