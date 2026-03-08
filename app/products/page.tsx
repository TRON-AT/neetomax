'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ProductCard } from '@/components/product-card';
import { products } from '@/lib/products';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(products.map((p) => p.category)));

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="absolute inset-0 bg-grid-small-black/[0.08] pointer-events-none" />
          <div className="max-w-7xl mx-auto text-center relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-5xl md:text-6xl font-bold text-balance mb-6">
              Our <span className="text-primary">Premium Products</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto text-balance">
              Professional-grade disinfectant and cleaning solutions designed for wholesale distribution. Select your quantities and order directly via WhatsApp.
            </p>
          </div>
        </section>

        {/* Filters Section */}
        <section className="bg-background/95 backdrop-blur-sm border-b border-border/40 py-4 px-4 sm:px-6 lg:px-8 mb-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <span className="font-semibold text-foreground shrink-0">Filter by Category:</span>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base ${
                    selectedCategory === null
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'bg-muted text-foreground hover:bg-muted/80'
                  }`}
                >
                  All Products
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base ${
                      selectedCategory === category
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'bg-muted text-foreground hover:bg-muted/80'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <p className="text-foreground/70">
                Showing <span className="font-semibold text-primary">{filteredProducts.length}</span> product{filteredProducts.length !== 1 ? 's' : ''}
                {selectedCategory && (
                  <>
                    {' '}in <span className="font-semibold text-primary">{selectedCategory}</span>
                  </>
                )}
              </p>
            </div>

            <div className="flex flex-col gap-6 max-w-5xl mx-auto">
              {filteredProducts.map((product, i) => (
                <div
                  key={product.id}
                  className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-foreground/70 text-lg">No products found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Info Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5 border-t border-border/40">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Wholesale Pricing',
                  description: 'Get the best rates for bulk orders with flexible payment options and volume discounts.',
                },
                {
                  title: 'Easy Ordering',
                  description: 'Simply select your product, choose quantity, and place your order directly via WhatsApp.',
                },
                {
                  title: 'Fast Delivery',
                  description: 'Quick and reliable shipping across India with real-time tracking for your orders.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="text-center p-8 rounded-lg bg-background border border-border/40 hover:border-primary/40 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-1000"
                  style={{ animationDelay: `${0.2 + i * 0.1}s` }}
                >
                  <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Bulk Quantities?</h2>
            <p className="text-lg opacity-90 mb-8">
              Contact us for custom quotes on large wholesale orders. We offer competitive pricing and flexible payment terms.
            </p>
            <a
              href="https://wa.me/917082425766?text=Hello%20NEETOMAX%2C%20I%20need%20a%20quote%20for%20bulk%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Get a Custom Quote
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
