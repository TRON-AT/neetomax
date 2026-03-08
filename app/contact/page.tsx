'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Phone, Clock } from 'lucide-react';

export default function ContactPage() {
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/917082425766?text=${encodeURIComponent("Hello NEETOMAX, I would like to know more")}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="max-w-7xl mx-auto text-center relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-5xl md:text-6xl font-bold text-balance mb-6">Get in Touch</h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Have questions about our products or wholesale ordering? We're here to help!
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-3xl mx-auto">
            {/* Contact Info */}
            <div className="w-full bg-card/50 p-6 sm:p-10 rounded-3xl border border-border/40 shadow-sm backdrop-blur-sm">
              <h2 className="text-3xl font-bold mb-10 text-primary text-center">Contact Information</h2>

              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  {
                    icon: Phone,
                    label: 'Phone',
                    value: '+91 70824 25766',
                    href: 'tel:+917082425766',
                  },
                  {
                    icon: Clock,
                    label: 'Business Hours',
                    value: 'Mon - Sat, 9:00 AM - 6:00 PM',
                    href: null,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center sm:items-start space-y-4 p-6 sm:p-8 bg-background rounded-2xl border border-border/40 animate-in fade-in slide-in-from-left-4 duration-1000 shadow-sm hover:shadow-md transition-shadow"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="p-4 bg-primary/10 rounded-full">
                      <item.icon className="w-7 h-7 text-primary flex-shrink-0" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="font-semibold text-foreground text-xl mb-2">{item.label}</h3>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground/70 hover:text-primary transition-colors block text-base"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground/70 text-base">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="pt-10 mt-10 border-t border-border/40 text-center">
                <p className="text-lg text-foreground/80 mb-8 max-w-lg mx-auto">
                  For the fastest response, reach out to us directly via WhatsApp. Our team is ready to assist you!
                </p>
                <button
                  onClick={handleWhatsAppClick}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#1ebe57] transition-all duration-300 shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:-translate-y-1 w-full sm:w-auto text-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-6 h-6">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-primary">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: 'What is the minimum order quantity?',
                  a: 'We offer flexible minimum order quantities. Contact us for details on bulk pricing and discounts.',
                },
                {
                  q: 'Do you offer delivery services?',
                  a: 'Yes! We provide fast and reliable delivery across India. Shipping costs depend on location and order size.',
                },
                {
                  q: 'Are your products certified?',
                  a: 'All our products are certified and comply with international safety and quality standards.',
                },
                {
                  q: 'How can I place a bulk order?',
                  a: 'Simply select your products, choose quantities, and order via WhatsApp. Our team will provide you with the best quote.',
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="p-6 bg-background rounded-lg border border-border/40 animate-in fade-in slide-in-from-bottom-4 duration-1000"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <h3 className="font-bold text-foreground mb-3 text-lg">{faq.q}</h3>
                  <p className="text-foreground/70">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
