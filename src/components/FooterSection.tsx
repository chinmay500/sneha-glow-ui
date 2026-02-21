import { Mail, Phone, Instagram } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="relative py-16 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-display font-bold mb-2">
          <span className="text-gradient-primary">SNEHA</span>
          <span className="text-foreground"> 2k26</span>
        </h3>
        <p className="text-sm text-muted-foreground mb-8">ADCET Ashta • College Festival</p>

        <div className="flex flex-wrap items-center justify-center gap-8 mb-10">
          <a href="mailto:sneha@adcet.in" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-4 h-4" /> sneha@adcet.in
          </a>
          <a href="tel:+919876543210" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4" /> +91 98765 43210
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary transition-colors">
            <Instagram className="w-4 h-4" /> @sneha2k26
          </a>
        </div>

        <p className="text-xs text-muted-foreground/50">
          © 2026 SNEHA — ADCET Ashta. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
