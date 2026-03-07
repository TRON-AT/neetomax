'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary/5 border-t border-border/40 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
                N
              </div>
              <span className="font-bold text-xl text-primary">NEETOMAX</span>
            </div>
            <p className="text-foreground/70 text-sm">
              Premium disinfectant and cleaning solutions for wholesale distribution.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'Products', href: '/products' },
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Products</h3>
            <ul className="space-y-2">
              {[
                { label: 'Floor Cleaning', href: '/products' },
                { label: 'Hand Wash', href: '/products' },
                { label: 'Surface Care', href: '/products' },
                { label: 'Disinfectants', href: '/products' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex gap-2 text-foreground/70 text-sm">
                <Phone size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <a href="tel:+919876543210" className="hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex gap-2 text-foreground/70 text-sm">
                <Mail size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:info@neetomax.com" className="hover:text-primary transition-colors">
                  info@neetomax.com
                </a>
              </li>
              <li className="flex gap-2 text-foreground/70 text-sm">
                <MapPin size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/40 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground/60 text-sm">
              &copy; {currentYear} NEETOMAX. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
