import { motion } from "framer-motion";
import { ShoppingBag, Cpu, Factory, Globe, Layers, Smartphone } from "lucide-react";

const categories = [
  { icon: ShoppingBag, label: "D2C Brands" },
  { icon: Smartphone, label: "Consumer Startups" },
  { icon: Factory, label: "MSMEs" },
  { icon: Cpu, label: "SaaS Startups" },
  { icon: Layers, label: "Manufacturing" },
  { icon: Globe, label: "Bharat-Focused" },
];

const WhoCanApply = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-display text-navy mb-4">Who Can Apply</h2>
        <p className="text-muted-foreground font-body">Early-stage founders building real businesses across diverse sectors.</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
        {categories.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-border/60 bg-card hover:border-gold/40 hover:shadow-md transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-gold-light flex items-center justify-center">
              <c.icon className="h-6 w-6 text-gold" />
            </div>
            <span className="font-body font-semibold text-sm text-navy">{c.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhoCanApply;
