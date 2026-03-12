import { motion } from "framer-motion";
import { Target, Users, Lightbulb } from "lucide-react";

const points = [
  { icon: Target, title: "What is Karo Pitch?", text: "A curated pitch platform where early-stage founders present their businesses directly to investors in structured pitch events." },
  { icon: Lightbulb, title: "Why Karo Pitch?", text: "Thousands of founders are building amazing businesses but lack access to investors. Karo Pitch bridges this gap through curated events and a discovery platform." },
  { icon: Users, title: "Our Mission", text: "To build India's most accessible startup discovery and funding platform — empowering Bharat entrepreneurs from Tier-2, Tier-3 cities and beyond." },
];

const About = () => (
  <section id="about" className="py-24 bg-background">
    <div className="container mx-auto px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-display text-navy mb-4">About Karo Pitch</h2>
        <p className="text-muted-foreground font-body leading-relaxed">
          Connecting India's most promising founders with the investors who can fuel their growth.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {points.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="bg-card rounded-2xl p-8 border border-border/60 hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl bg-gold-light flex items-center justify-center mb-5">
              <p.icon className="h-6 w-6 text-gold" />
            </div>
            <h3 className="font-display text-xl text-navy mb-3">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed font-body">{p.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
