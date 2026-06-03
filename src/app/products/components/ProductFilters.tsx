'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';
import { categories, brands } from '@/data/products';

interface FilterState {
  search: string;
  category: string;
  brand: string;
  availability: string;
}

interface ProductFiltersProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  totalResults: number;
}

export default function ProductFilters({ filters, onChange, totalResults }: ProductFiltersProps) {
  const handleChange = (key: keyof FilterState, value: string) => {
    onChange({ ...filters, [key]: value });
  };

  const clearAll = () => {
    onChange({ search: '', category: '', brand: '', availability: '' });
  };

  const hasFilters = filters.search || filters.category || filters.brand || filters.availability;

  return (
    <div className="bg-card border border-border rounded-2xl p-5 sticky top-24">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-bold text-foreground text-sm flex items-center gap-2">
          <Icon name="SlidersHorizontal" size={16} className="text-primary" />
          Filtros
        </h2>
        {hasFilters && (
          <button
            onClick={clearAll}
            className="text-xs text-muted-foreground hover:text-primary font-semibold transition-colors flex items-center gap-1"
          >
            <Icon name="X" size={12} className="text-muted-foreground" />
            Limpiar
          </button>
        )}
      </div>

      <p className="text-xs text-muted-foreground mb-5 font-medium">
        {totalResults} producto{totalResults !== 1 ? 's' : ''} encontrado{totalResults !== 1 ? 's' : ''}
      </p>

      {/* Search */}
      <div className="mb-5">
        <label className="block text-xs font-bold text-foreground uppercase tracking-wide mb-2">
          Buscar
        </label>
        <div className="relative">
          <Icon name="Search" size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Nombre del producto..."
            value={filters.search}
            onChange={(e) => handleChange('search', e.target.value)}
            className="w-full pl-9 pr-3 py-2.5 text-sm border border-border rounded-xl bg-background focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
      </div>

      {/* Category */}
      <div className="mb-5">
        <label className="block text-xs font-bold text-foreground uppercase tracking-wide mb-2">
          Categoría
        </label>
        <select
          value={filters.category}
          onChange={(e) => handleChange('category', e.target.value)}
          className="w-full px-3 py-2.5 text-sm border border-border rounded-xl bg-background focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer"
        >
          <option value="">Todas las categorías</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.name}>{cat.name}</option>
          ))}
        </select>
      </div>

      {/* Brand */}
      <div className="mb-5">
        <label className="block text-xs font-bold text-foreground uppercase tracking-wide mb-2">
          Marca
        </label>
        <select
          value={filters.brand}
          onChange={(e) => handleChange('brand', e.target.value)}
          className="w-full px-3 py-2.5 text-sm border border-border rounded-xl bg-background focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer"
        >
          <option value="">Todas las marcas</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>{brand}</option>
          ))}
        </select>
      </div>

      {/* Availability */}
      <div className="mb-2">
        <label className="block text-xs font-bold text-foreground uppercase tracking-wide mb-2">
          Disponibilidad
        </label>
        <div className="flex flex-col gap-2">
          {['', 'Disponible', 'Bajo pedido'].map((opt) => (
            <label key={opt} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="radio"
                name="availability"
                value={opt}
                checked={filters.availability === opt}
                onChange={() => handleChange('availability', opt)}
                className="accent-primary w-4 h-4"
              />
              <span className="text-sm text-foreground group-hover:text-primary transition-colors font-medium">
                {opt === '' ? 'Todos' : opt}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}