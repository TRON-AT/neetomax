'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Product, ProductVariant } from '@/lib/products';
import { Minus, Plus, MessageCircle } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(product.variants?.[0] || null);

  const displayImage = selectedVariant?.image || product.image;
  const displayName = selectedVariant ? `${product.name} - ${selectedVariant.name}` : product.name;

  const handleQuantityChange = (value: number) => {
    if (value >= 1) {
      setQuantity(value);
    }
  };

  const handleWhatsAppOrder = () => {
    setIsLoading(true);
    const message = `Hi NEETOMAX, I would like to order:\n\nProduct: ${displayName}\nQuantity: ${quantity} ${product.unit}`;
    const whatsappUrl = `https://wa.me/917078120273?text=${encodeURIComponent(message)}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsLoading(false);
    }, 300);
  };

  return (
    <div className="group bg-background rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-border/40 hover:border-primary/50 flex flex-col sm:flex-row">
      {/* Product Image */}
      <div className="relative h-64 sm:h-auto sm:w-[300px] md:w-[350px] shrink-0 overflow-hidden bg-muted p-4">
        <Image
          src={displayImage}
          alt={displayName}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Product Info */}
      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        <div className="mb-4">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
            {product.category}
          </div>
          <h3 className="text-xl font-bold text-foreground text-balance mb-2 line-clamp-2 min-h-[56px]">
            {displayName}
          </h3>
          <p className="text-sm text-foreground/70 mb-4 line-clamp-2">{product.description}</p>
        </div>

        {/* Variants Selector */}
        {product.variants && product.variants.length > 0 && (
          <div className="mb-4">
            <label className="text-sm font-semibold text-foreground mb-2 block">Options</label>
            <div className="flex flex-wrap gap-2">
              {product.variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant)}
                  className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                    selectedVariant?.id === variant.id
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-background text-foreground border-border hover:border-primary/50'
                  }`}
                >
                  {variant.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product Details */}
        <div className="mb-4 space-y-2">
          <h4 className="font-semibold text-foreground text-sm">Key Features:</h4>
          <ul className="space-y-1">
            {product.details.slice(0, 3).map((detail, i) => (
              <li key={i} className="text-sm text-foreground/70 flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1" />

        {/* Quantity Selector */}
        <div className="mb-4 mt-auto">
          <label className="text-sm font-semibold text-foreground mb-3 block">Quantity</label>
          <div className="flex items-center gap-2 bg-muted rounded-lg p-2">
            <button
              onClick={() => handleQuantityChange(quantity - 1)}
              className="p-2 hover:bg-background rounded transition-colors disabled:opacity-50"
              disabled={quantity <= 1}
              aria-label="Decrease quantity"
            >
              <Minus size={18} />
            </button>
            <input
              type="number"
              value={quantity}
              onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
              className="flex-1 bg-transparent text-center font-semibold outline-none w-full min-w-[40px]"
              min="1"
            />
            <button
              onClick={() => handleQuantityChange(quantity + 1)}
              className="p-2 hover:bg-background rounded transition-colors"
              aria-label="Increase quantity"
            >
              <Plus size={18} />
            </button>
          </div>
        </div>

        {/* WhatsApp Order Button */}
        <button
          onClick={handleWhatsAppOrder}
          disabled={isLoading}
          className="w-full px-4 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-75 flex items-center justify-center gap-2 group/btn shrink-0"
        >
          <MessageCircle size={20} className="group-hover/btn:scale-110 transition-transform" />
          <span>{isLoading ? 'Opening...' : 'Order via WhatsApp'}</span>
        </button>
      </div>
    </div>
  );
}
