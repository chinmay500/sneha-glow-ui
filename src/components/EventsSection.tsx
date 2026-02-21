import { motion } from "framer-motion";
import { Music, Code, Trophy, ArrowUpRight } from "lucide-react";
import culturalArt from "@/assets/cultural-art.jpg";
import techArt from "@/assets/tech-art.jpg";
import sportsArt from "@/assets/sports-art.jpg";

const events = [
  {
    category: "Cultural",
    icon: Music,
    image: culturalArt,
    description: "Dance, drama, singing & art competitions that celebrate creativity.",
    items: ["Solo Dance", "Group Singing", "Street Play", "Art Exhibition"],
    borderClass: "border-glow-warm",
    accentColor: "text-primary",
    glowClass: "glow-warm",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    category: "Technical",
    icon: Code,
    image: techArt,
    description: "Hackathons, coding battles & tech showcases for the innovators.",
    items: ["Hackathon", "Code Sprint", "Robo Wars", "Tech Quiz"],
    borderClass: "border-glow-accent",
    accentColor: "text-accent",
    glowClass: "glow-accent",
    span: "md:col-span-2",
  },
  {
    category: "Sports",
    icon: Trophy,
    image: sportsArt,
    description: "Cricket, football, athletics & e-sports for the competitive spirit.",
    items: ["Cricket", "Football", "Athletics", "E-Sports"],
    borderClass: "border-glow-secondary",
    accentColor: "text-secondary",
    glowClass: "",
    span: "md:col-span-2",
  },
];

const EventsSection = () => {
  return (
    <section id="events" className="relative py-28 px-6 md:px-12">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary/5 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-gradient-warm" />
              <span className="text-xs uppercase tracking-[0.3em] font-body text-primary font-medium">
                What's On
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-extrabold text-foreground leading-none">
              Events
            </h2>
          </div>
          <p className="hidden md:block text-sm text-muted-foreground font-body max-w-xs text-right leading-relaxed">
            Three categories. Fifty+ events. One unforgettable festival.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 auto-rows-[280px]">
          {events.map((event, i) => (
            <motion.div
              key={event.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`${event.span} group relative rounded-2xl overflow-hidden ${event.borderClass} hover:scale-[1.01] transition-all duration-500`}
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <img
                  src={event.image}
                  alt={event.category}
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-7">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center`}>
                    <event.icon className={`w-5 h-5 ${event.accentColor}`} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground">
                    {event.category}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
                  {event.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {event.items.map((name) => (
                    <span
                      key={name}
                      className="text-xs font-body px-3 py-1.5 rounded-full bg-muted/60 text-foreground/70 border border-border/50"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
