import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Zap } from 'lucide-react'; // Example icons

interface FooterLink {
  href: string;
  label: string;
}

interface FooterProps {
  companyName?: string;
  mainLinks?: FooterLink[];
  legalLinks?: FooterLink[];
  socialLinks?: { platform: string; href: string; icon: React.ElementType }[];
}

const Footer: React.FC<FooterProps> = ({
  companyName = "SaaSProduct Inc.",
  mainLinks = [
    { href: "/#features", label: "Features" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact Us" },
  ],
  legalLinks = [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of Service" },
  ],
  socialLinks = [
    { platform: "Twitter", href: "#", icon: Twitter },
    { platform: "LinkedIn", href: "#", icon: Linkedin },
    { platform: "GitHub", href: "#", icon: Github },
  ],
}) => {
  const currentYear = new Date().getFullYear();
  console.log("Rendering Footer");

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Top section: Links and Logo */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Logo & Company Info (Optional) */}
          <div className="col-span-2 md:col-span-1 mb-6 md:mb-0">
             <Link to="/" className="flex items-center text-xl font-bold text-indigo-600 mb-2">
                <Zap className="h-7 w-7 mr-2" />
                {companyName.split(' ')[0]} {/* Show only first word if long */}
             </Link>
             <p className="text-sm text-gray-500">
                Making awesome happen.
             </p>
          </div>

          {/* Link Columns */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Product</h3>
            <ul role="list" className="mt-4 space-y-2">
              {mainLinks.slice(0, Math.ceil(mainLinks.length / 2)).map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-gray-500 hover:text-gray-900">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
            <ul role="list" className="mt-4 space-y-2">
              {mainLinks.slice(Math.ceil(mainLinks.length / 2)).map((link) => (
                 <li key={link.label}>
                  <Link to={link.href} className="text-sm text-gray-500 hover:text-gray-900">
                    {link.label}
                  </Link>
                </li>
              ))}
               <li> {/* About Us if not in mainLinks */}
                  <Link to="/about" className="text-sm text-gray-500 hover:text-gray-900">
                    About Us
                  </Link>
                </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
            <ul role="list" className="mt-4 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-gray-500 hover:text-gray-900">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section: Copyright and Social Icons */}
        <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {socialLinks.map((item) => (
              <a key={item.platform} href={item.href} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{item.platform}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-sm text-gray-400 md:mt-0 md:order-1">
            &copy; {currentYear} {companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;