import { motion } from "framer-motion";
import { MapPin, Navigation, Calendar, Clock } from "lucide-react";

const VenueSection = () => {
  return (
    <section id="venue" className="relative py-28 px-6 md:px-12">
      <div className="absolute top-0 right-[20%] w-[300px] h-[300px] bg-secondary/5 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-gradient-cool" />
            <span className="text-xs uppercase tracking-[0.3em] font-body text-accent font-medium">
              Where It Happens
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-extrabold text-foreground leading-none">
            Venue
          </h2>
        </motion.div>

        {/* Bento grid layout for venue */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Map - large card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-2 rounded-2xl overflow-hidden border-glow-accent relative min-h-[380px]"
          >
            <iframe
              title="ADCET Ashta Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.0!2d74.41!3d16.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDU3JzAwLjAiTiA3NMKwMjQnMzYuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
              className="w-full h-full border-0 grayscale brightness-[0.3] contrast-125 absolute inset-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent" />

            {/* Location overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center border border-accent/20">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground text-xl">
                    ADCET Campus
                  </h3>
                  <p className="text-sm text-muted-foreground font-body">
                    Ashta, Sangli, Maharashtra
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Info cards */}
          <div className="flex flex-col gap-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="glass-warm rounded-2xl p-6 flex-1 flex flex-col justify-between border-glow-warm"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-body mb-1">
                  Date
                </p>
                <p className="text-lg font-display font-bold text-foreground">
                  March 2026
                </p>
                <p className="text-sm text-muted-foreground font-body">3-day festival</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-warm rounded-2xl p-6 flex-1 flex flex-col justify-between border-glow-secondary"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-body mb-1">
                  Timing
                </p>
                <p className="text-lg font-display font-bold text-foreground">
                  9 AM – 9 PM
                </p>
                <p className="text-sm text-muted-foreground font-body">All day events</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Get Directions button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex justify-center"
        >
          <a
            href="https://maps.google.com/?q=ADCET+Ashta+Sangli"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-dark glow-accent px-8 py-4 rounded-full font-body font-medium text-sm uppercase tracking-widest text-foreground hover:scale-105 transition-transform duration-300 flex items-center gap-3 border border-accent/20"
          >
            <Navigation className="w-4 h-4 text-accent" />
            Get Directions
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default VenueSection;
