'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductFilters from './ProductFilters';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import Icon from '@/components/ui/AppIcon';
import { products, Product } from '@/data/products';

interface FilterState {
  search: string;
  category: string;
  brand: string;
  availability: string;
}

export default function ProductCatalog() {
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState<FilterState>({
    search: '',
    category: searchParams.get('category') || '',
    brand: '',
    availability: '',
  });
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setFilters((f) => ({ ...f, category: cat }));
  }, [searchParams]);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchSearch = !filters.search || p.name.toLowerCase().includes(filters.search.toLowerCase());
      const matchCategory = !filters.category || p.category === filters.category;
      const matchBrand = !filters.brand || p.brand === filters.brand;
      const matchAvail = !filters.availability || p.availability === filters.availability;
      return matchSearch && matchCategory && matchBrand && matchAvail;
    });
  }, [filters]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Mobile filter toggle */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="btn-primary w-full justify-center"
        >
          <Icon name="SlidersHorizontal" size={16} className="text-white" />
          {showFilters ? 'Ocultar filtros' : 'Mostrar filtros'}
        </button>
        {showFilters && (
          <div className="mt-4">
            <ProductFilters filters={filters} onChange={setFilters} totalResults={filtered.length} />
          </div>
        )}
      </div>

      <div className="flex gap-8">
        {/* Sidebar filters — desktop */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <ProductFilters filters={filters} onChange={setFilters} totalResults={filtered.length} />
        </aside>

        {/* Products grid */}
        <div className="flex-1 min-w-0">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <Icon name="PackageSearch" size={48} className="text-muted-foreground mx-auto mb-4" />
              <h3 className="font-bold text-foreground text-lg mb-2">Sin resultados</h3>
              <p className="text-muted-foreground text-sm">
                No se encontraron productos con los filtros seleccionados.
              </p>
              <button
                onClick={() => setFilters({ search: '', category: '', brand: '', availability: '' })}
                className="btn-primary mt-4 inline-flex"
              >
                Limpiar filtros
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filtered.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onViewDetail={setSelectedProduct}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Product modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}