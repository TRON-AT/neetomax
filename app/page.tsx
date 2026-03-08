'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { products } from '@/lib/products';
import { ChevronRight, Shield, Leaf, Zap, Award } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 pt-20">
          <div className="absolute inset-0 bg-grid-small-black/[0.08] pointer-events-none" />
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-primary/20 text-primary font-semibold text-sm">
                  Trusted by businesses across India
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-balance leading-tight">
                <span className="text-primary">Premium Disinfectant</span> Solutions for Your Business
              </h1>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto text-balance">
                NEETOMAX delivers professional-grade cleaning and disinfection products for wholesale distribution. Trusted quality, competitive pricing, reliable service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Shop Products <ChevronRight size={20} className="ml-2" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Preview Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">About NEETOMAX</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                With years of industry expertise, we provide the highest quality disinfectant and cleaning solutions designed for modern businesses.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-in fade-in slide-in-from-left-4 duration-1000" style={{ animationDelay: '0.3s' }}>
                <Image
                  src="/hero-img.png"
                  alt="NEETOMAX Products"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-2xl object-cover"
                />
              </div>
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-1000" style={{ animationDelay: '0.4s' }}>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-primary">Why NEETOMAX?</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    We understand that cleanliness and disinfection are no longer optional—they're essential. NEETOMAX products are formulated with the highest standards in mind.
                  </p>
                </div>
                <ul className="space-y-4">
                  {[
                    { icon: Shield, label: 'Hospital-Grade Formula', desc: 'Effective against 99.9% of pathogens' },
                    { icon: Leaf, label: 'Eco-Friendly', desc: 'Biodegradable and safe for the environment' },
                    { icon: Zap, label: 'Cost-Effective', desc: 'Wholesale pricing for bulk orders' },
                    { icon: Award, label: 'Quality Assured', desc: 'Certified and tested for safety' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{item.label}</h4>
                        <p className="text-sm text-foreground/70">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Products Preview Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">Our Products</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Explore our range of professional disinfectant and cleaning solutions designed for every need.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {products.map((product, i) => (
                <div
                  key={product.id}
                  className="group bg-background rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4 duration-1000"
                  style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                >
                  <div className="relative h-48 overflow-hidden bg-muted p-2">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-foreground text-balance line-clamp-2">{product.name}</h3>
                    <p className="text-sm text-foreground/60 my-2">{product.category}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 animate-in fade-in slide-in-from-bottom-4 duration-1000"
                style={{ animationDelay: '0.9s' }}
              >
                View All Products <ChevronRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">Why Choose NEETOMAX?</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                We're committed to delivering excellence in every bottle
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Quality First',
                  description: 'Every product undergoes rigorous testing to ensure maximum efficacy and safety standards.',
                  icon: '✓',
                },
                {
                  title: 'Wholesale Pricing',
                  description: 'Get competitive wholesale rates with bulk order discounts and flexible payment terms.',
                  icon: '₹',
                },
                {
                  title: 'Fast Delivery',
                  description: 'Swift and reliable delivery across India with professional logistics support.',
                  icon: '🚚',
                },
                {
                  title: 'Expert Support',
                  description: 'Our dedicated team is ready to assist you with product selection and bulk orders.',
                  icon: '👥',
                },
                {
                  title: 'Certified Safe',
                  description: 'All products are certified and comply with international safety and quality standards.',
                  icon: '🛡',
                },
                {
                  title: 'Sustainable',
                  description: 'Eco-friendly formulations that are safe for your family and the environment.',
                  icon: '🌱',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-8 rounded-lg bg-primary/5 border border-primary/10 hover:border-primary/30 hover:bg-primary/10 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-1000"
                  style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full blur-3xl" />
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">Ready to Order?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto text-balance">
              Start your wholesale partnership with NEETOMAX today. Select your products, choose your quantities, and we'll help you get the best deal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Start Shopping <ChevronRight size={20} className="ml-2" />
              </Link>
              <a
                href="https://wa.me/917082425766?text=Hello%20NEETOMAX%2C%20I%20would%20like%20to%20know%20more%20about%20wholesale%20orders"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Contact via WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
