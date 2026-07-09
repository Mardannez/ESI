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
  risk: string;
  brand: string;
  availability: string;
}

export default function ProductCatalog() {
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState<FilterState>({
    search: searchParams.get('search') || '',
    category: searchParams.get('category') || '',
    risk: searchParams.get('risk') || '',
    brand: '',
    availability: '',
  });
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category');
    const search = searchParams.get('search');
    const risk = searchParams.get('risk');
    setFilters((f) => ({
      ...f,
      category: cat ?? f.category,
      search: search ?? f.search,
      risk: risk ?? f.risk,
    }));
  }, [searchParams]);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const searchHaystack = [
        p.name,
        p.code,
        p.originalName,
        p.brand,
        p.category,
        p.subcategory,
        p.description,
        p.shortDescription,
        p.standard,
        ...p.seoKeywords,
      ].join(' ').toLowerCase();
      const matchSearch = !filters.search || searchHaystack.includes(filters.search.toLowerCase());
      const matchCategory = !filters.category || p.category === filters.category;
      const matchRisk = !filters.risk || p.riskTypes.includes(filters.risk as Product['riskTypes'][number]);
      const matchBrand = !filters.brand || p.brand === filters.brand;
      const matchAvail = !filters.availability || p.availability === filters.availability;
      return matchSearch && matchCategory && matchRisk && matchBrand && matchAvail;
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
                onClick={() => setFilters({ search: '', category: '', risk: '', brand: '', availability: '' })}
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
