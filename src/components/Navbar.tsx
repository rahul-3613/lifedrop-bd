import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Droplet } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "হোম" },
  { href: "/find-blood", label: "রক্ত খুঁজুন" },
  { href: "/emergency-request", label: "জরুরি অনুরোধ" },
  { href: "/become-donor", label: "রক্তদাতা হোন" },
  { href: "/blood-info", label: "রক্তদান তথ্য" },
  { href: "/about", label: "আমাদের লক্ষ্য" },
  { href: "/contact", label: "যোগাযোগ" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Droplet className="w-10 h-10 text-primary fill-primary animate-pulse-glow" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">LifeDrop</span>
              <span className="text-xs text-muted-foreground">এক ফোঁটা রক্ত, একটি জীবন</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="emergency" size="sm" asChild>
              <Link to="/emergency-request">জরুরি রক্ত দরকার</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-6 animate-fade-in-up">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    location.pathname === link.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="emergency" className="mt-4" asChild>
                <Link to="/emergency-request" onClick={() => setIsOpen(false)}>
                  জরুরি রক্ত দরকার
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
