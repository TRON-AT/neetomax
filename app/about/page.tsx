'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Award, Target, Heart, Globe } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="max-w-7xl mx-auto text-center relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-5xl md:text-6xl font-bold text-balance mb-6">
              About <span className="text-primary">NEETOMAX</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Leading provider of premium disinfectant and cleaning solutions for wholesale distribution across India.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="animate-in fade-in slide-in-from-left-4 duration-1000">
                <Image
                  src="/hero-img.png"
                  alt="NEETOMAX Story"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-2xl object-cover"
                />
              </div>
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-1000" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-4xl font-bold text-primary">Our Story</h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  NEETOMAX was founded with a simple yet powerful mission: to provide the highest quality disinfectant and cleaning solutions to businesses across India.
                </p>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  With years of industry expertise, we have developed a comprehensive range of products that meet the highest standards of safety, efficacy, and environmental responsibility.
                </p>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Today, NEETOMAX is trusted by countless businesses for our reliable products, competitive pricing, and exceptional customer service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-primary">Our Mission & Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Target,
                  title: 'Our Mission',
                  description: 'To deliver premium quality disinfectant and cleaning solutions that protect health, maintain cleanliness, and support sustainable business practices.',
                },
                {
                  icon: Heart,
                  title: 'Our Values',
                  description: 'Quality, integrity, reliability, and customer satisfaction are at the core of everything we do. We believe in honest practices and sustainable growth.',
                },
                {
                  icon: Globe,
                  title: 'Environmental Responsibility',
                  description: 'We are committed to developing eco-friendly formulations that are safe for families and the environment without compromising on efficacy.',
                },
                {
                  icon: Award,
                  title: 'Quality Assurance',
                  description: 'Every product undergoes rigorous testing and quality control. We maintain the highest standards to ensure customer satisfaction and safety.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-8 rounded-lg bg-background border border-border/40 animate-in fade-in slide-in-from-bottom-4 duration-1000"
                  style={{ animationDelay: `${0.2 + i * 0.1}s` }}
                >
                  <item.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose NEETOMAX */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-primary">Why Choose NEETOMAX?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  number: '500+',
                  label: 'Satisfied Customers',
                },
                {
                  number: '5',
                  label: 'Premium Products',
                },
                {
                  number: '99.9%',
                  label: 'Pathogen Kill Rate',
                },
                {
                  number: '24/7',
                  label: 'Customer Support',
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-8 rounded-lg bg-primary/10 border border-primary/20 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000"
                  style={{ animationDelay: `${0.2 + i * 0.1}s` }}
                >
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <p className="text-foreground/70 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-4xl font-bold mb-6">Ready to Partner with NEETOMAX?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied businesses that trust NEETOMAX for their disinfectant and cleaning needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="inline-block px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Explore Products
              </Link>
              <a
                href="https://wa.me/917078120273?text=Hello%20NEETOMAX%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
