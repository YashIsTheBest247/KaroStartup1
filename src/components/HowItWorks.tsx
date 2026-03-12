import { motion } from "framer-motion";
import { FileText, CheckCircle, Presentation, TrendingUp } from "lucide-react";

const steps = [
  { icon: FileText, title: "Apply with Your Pitch Deck", desc: "Submit your startup details and pitch deck through our simple application form." },
  { icon: CheckCircle, title: "Get Shortlisted", desc: "Our team at KaroStartup reviews and shortlists the most promising startups." },
  { icon: Presentation, title: "Pitch Live to Investors", desc: "Present your business in a structured pitch event in front of curated investors." },
  { icon: TrendingUp, title: "Raise Funding & Scale", desc: "Connect with interested investors, close your round, and scale your business." },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-24 bg-navy">
    <div className="container mx-auto px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-display text-cream mb-4">How It Works</h2>
        <p className="text-cream/60 font-body">Four simple steps from application to funding.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="relative text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-5">
              <s.icon className="h-7 w-7 text-gold" />
            </div>
            <span className="text-gold font-body font-bold text-sm mb-2 block">Step {i + 1}</span>
            <h3 className="font-display text-lg text-cream mb-2">{s.title}</h3>
            <p className="text-cream/50 text-sm font-body leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
