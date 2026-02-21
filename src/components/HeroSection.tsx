import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-[15%] w-72 h-72 rounded-full bg-primary/20 blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-32 right-[10%] w-96 h-96 rounded-full bg-secondary/15 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6 font-display font-medium">
            ADCET Ashta Presents
          </p>
          <h1 className="text-7xl md:text-9xl font-display font-extrabold tracking-tight leading-none mb-4">
            <span className="text-gradient-primary">SNEHA</span>
            <span className="text-foreground"> 2k26</span>
          </h1>
          <p className="text-3xl md:text-4xl font-marathi font-medium text-foreground/70 mb-8">
            स्नेह २०२६
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-lg text-muted-foreground max-w-md mx-auto mb-10 font-body">
            The ultimate college festival — Culture, Tech & Sports collide.
          </p>
          <a
            href="#events"
            className="inline-block glass glow-indigo px-8 py-3 rounded-full text-primary-foreground font-display font-semibold text-sm uppercase tracking-widest bg-gradient-primary hover:scale-105 transition-transform duration-300"
          >
            Explore Events
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-5 h-8 rounded-full border-2 border-foreground/20 flex justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-foreground/40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
