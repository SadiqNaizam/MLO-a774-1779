import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Zap } from 'lucide-react'; // Example logo icon

interface NavLink {
  href: string;
  label: string;
}

interface NavigationMenuProps {
  logoText?: string;
  navLinks?: NavLink[];
  ctaButtonText?: string;
  onCtaClick?: () => void;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({
  logoText = "SaaSProduct",
  navLinks = [
    { href: "/#features", label: "Features" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/#testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
  ],
  ctaButtonText = "Get Started",
  onCtaClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  console.log("Rendering NavigationMenu, mobileMenuOpen:", mobileMenuOpen);

  const handleDefaultCtaClick = () => {
    console.log("Default CTA clicked");
    // Implement navigation or action, e.g., navigate to /signup
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center text-2xl font-bold text-indigo-600">
            <Zap className="h-8 w-8 mr-2" />
            {logoText}
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button onClick={onCtaClick || handleDefaultCtaClick} size="sm">
              {ctaButtonText}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-16 inset-x-0 z-40">
          <div className="pt-2 pb-3 space-y-1 px-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="block text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-2 pb-3 px-4">
            <Button onClick={onCtaClick || handleDefaultCtaClick} className="w-full" size="sm">
              {ctaButtonText}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationMenu;