import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Navbar = () => (
  <motion.nav
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-5 flex items-center justify-between"
  >
    <div className="glass-dark rounded-full px-5 py-2.5">
      <span className="font-display font-bold text-sm tracking-wider text-gradient-warm">
        SNEHA 2k26
      </span>
    </div>
    <div className="hidden md:flex items-center gap-8">
      {["Events", "Venue", "Contact"].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide"
        >
          {item}
        </a>
      ))}
    </div>
    <a
      href="#events"
      className="bg-gradient-warm text-primary-foreground font-body font-medium text-sm px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity duration-300"
    >
      Register
    </a>
  </motion.nav>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-20 md:pb-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
      </div>

      {/* Floating decorative elements */}
      <div
        className="absolute top-[20%] right-[10%] w-3 h-3 rounded-full bg-primary/80"
        style={{ animation: "orbit 8s linear infinite" }}
      />
      <div
        className="absolute top-[40%] right-[25%] w-2 h-2 rounded-full bg-accent/80"
        style={{ animation: "orbit 12s linear infinite reverse" }}
      />
      <div
        className="absolute top-[30%] left-[8%] w-20 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        style={{ animation: "float-slow 6s ease-in-out infinite" }}
      />

      {/* Vertical line accent */}
      <div className="absolute left-12 top-0 bottom-0 hidden lg:block">
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="w-[1px] h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent origin-top"
        />
      </div>

      <Navbar />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Left: Main title */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px] bg-gradient-warm" />
                <span className="text-xs uppercase tracking-[0.3em] font-body text-primary font-medium">
                  ADCET Ashta
                </span>
              </div>

              <h1 className="font-display font-extrabold leading-[0.85] mb-4">
                <span className="block text-[clamp(3.5rem,12vw,10rem)] text-gradient-warm">
                  SNEHA
                </span>
                <span className="block text-[clamp(3.5rem,12vw,10rem)] text-foreground/90">
                  2k26
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-2xl md:text-3xl font-marathi font-medium text-foreground/40 mb-8"
              >
                स्नेह २०२६
              </motion.p>
            </motion.div>
          </div>

          {/* Right: Description block */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-warm rounded-2xl p-6 glow-warm"
            >
              <p className="text-sm font-body text-foreground/70 leading-relaxed mb-5">
                The ultimate college festival where Culture, Technology & Sports
                collide. Three days of unforgettable experiences.
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-display font-bold text-gradient-warm">3</p>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-body">Days</p>
                </div>
                <div className="w-[1px] h-8 bg-border" />
                <div>
                  <p className="text-2xl font-display font-bold text-gradient-warm">50+</p>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-body">Events</p>
                </div>
                <div className="w-[1px] h-8 bg-border" />
                <div>
                  <p className="text-2xl font-display font-bold text-gradient-warm">5K+</p>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-body">Students</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-12 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="w-4 h-4 text-muted-foreground" />
          </motion.div>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-body">
            Scroll to explore
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
