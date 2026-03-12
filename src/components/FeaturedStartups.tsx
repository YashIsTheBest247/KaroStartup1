import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const startups = [
  { name: "FreshKart", category: "D2C Brand", desc: "Farm-to-table organic produce delivery across Tier-2 cities." },
  { name: "SkillBridge", category: "SaaS", desc: "AI-powered skill assessment platform for rural talent pools." },
  { name: "BharatTextiles", category: "Manufacturing", desc: "Sustainable handloom fabrics modernized for global markets." },
  { name: "PaySetu", category: "Consumer Startup", desc: "UPI-based micro-lending solution for street vendors." },
  { name: "GreenMile", category: "MSME", desc: "Electric last-mile delivery fleet for Indian e-commerce." },
  { name: "CropSense", category: "Bharat-Focused", desc: "IoT soil monitoring for smallholder farmers in rural India." },
];

const FeaturedStartups = () => (
  <section id="startups" className="py-24 bg-background">
    <div className="container mx-auto px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-display text-navy mb-4">Featured Startups</h2>
        <p className="text-muted-foreground font-body">Discover innovative ventures from across India.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {startups.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group bg-card rounded-2xl p-6 border border-border/60 hover:border-gold/40 hover:shadow-lg transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-display text-lg text-navy">{s.name}</h3>
                <span className="inline-block mt-1 text-xs font-semibold font-body bg-gold-light text-gold px-3 py-1 rounded-full">
                  {s.category}
                </span>
              </div>
              <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center group-hover:bg-gold-light transition-colors">
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-gold transition-colors" />
              </div>
            </div>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedStartups;
