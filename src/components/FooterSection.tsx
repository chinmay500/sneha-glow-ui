import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Heart } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contact" className="relative py-20 px-6 md:px-12">
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16"
        >
          {/* Branding */}
          <div>
            <h3 className="text-3xl font-display font-extrabold mb-3">
              <span className="text-gradient-warm">SNEHA</span>
              <span className="text-foreground/80"> 2k26</span>
            </h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-xs">
              The ultimate college festival at ADCET Ashta. Culture, technology, and sports converge for an unforgettable experience.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-body mb-5">
              Quick Links
            </p>
            <div className="flex flex-col gap-3">
              {[
                { label: "Events", href: "#events" },
                { label: "Venue", href: "#venue" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-foreground/60 hover:text-primary transition-colors duration-300 font-body"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-body mb-5">
              Get In Touch
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:sneha@adcet.in"
                className="flex items-center gap-3 text-sm text-foreground/60 hover:text-primary transition-colors duration-300 font-body"
              >
                <Mail className="w-4 h-4" />
                sneha@adcet.in
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-sm text-foreground/60 hover:text-primary transition-colors duration-300 font-body"
              >
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-foreground/60 hover:text-secondary transition-colors duration-300 font-body"
              >
                <Instagram className="w-4 h-4" />
                @sneha2k26
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/50 font-body">
            © 2026 SNEHA — ADCET Ashta. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/50 font-body flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-secondary/60" /> by ADCET Students
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
