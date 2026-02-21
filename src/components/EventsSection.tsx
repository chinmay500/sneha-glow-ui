import { motion } from "framer-motion";
import { Music, Code, Trophy } from "lucide-react";

const events = [
  {
    category: "Cultural",
    icon: Music,
    description: "Dance, drama, singing & art competitions that celebrate creativity.",
    items: ["Solo Dance", "Group Singing", "Street Play", "Art Exhibition"],
  },
  {
    category: "Technical",
    icon: Code,
    description: "Hackathons, coding battles & tech showcases for the innovators.",
    items: ["Hackathon", "Code Sprint", "Robo Wars", "Tech Quiz"],
  },
  {
    category: "Sports",
    icon: Trophy,
    description: "Cricket, football, athletics & e-sports for the competitive spirit.",
    items: ["Cricket", "Football", "Athletics", "E-Sports"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const EventsSection = () => {
  return (
    <section id="events" className="relative py-28 px-6">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[150px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-display font-semibold mb-3">
            What's On
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Events
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {events.map((event) => (
            <motion.div
              key={event.category}
              variants={item}
              className="glass-card glow-border-indigo rounded-2xl p-8 hover:scale-[1.02] transition-transform duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:glow-indigo transition-shadow duration-300">
                <event.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-2">
                {event.category}
              </h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {event.description}
              </p>
              <ul className="space-y-2">
                {event.items.map((name) => (
                  <li
                    key={name}
                    className="text-sm text-foreground/70 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-primary inline-block" />
                    {name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
