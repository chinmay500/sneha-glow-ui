import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

const VenueSection = () => {
  return (
    <section className="relative py-28 px-6">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/10 blur-[140px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-secondary font-display font-semibold mb-3">
            Where It Happens
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Venue
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card glow-border-indigo rounded-2xl overflow-hidden"
        >
          {/* Map embed */}
          <div className="w-full h-[350px] relative">
            <iframe
              title="ADCET Ashta Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.0!2d74.41!3d16.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDU3JzAwLjAiTiA3NMKwMjQnMzYuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
              className="w-full h-full border-0 grayscale invert opacity-70"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent pointer-events-none" />
          </div>

          <div className="p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground text-lg">ADCET Campus</h3>
                <p className="text-sm text-muted-foreground">Ashta, Sangli, Maharashtra</p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=ADCET+Ashta+Sangli"
              target="_blank"
              rel="noopener noreferrer"
              className="glass glow-indigo px-6 py-3 rounded-full font-display font-semibold text-sm uppercase tracking-wider text-foreground hover:scale-105 transition-transform duration-300 flex items-center gap-2"
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VenueSection;
