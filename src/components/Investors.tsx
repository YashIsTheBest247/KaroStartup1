import { motion } from "framer-motion";
import { UserCheck } from "lucide-react";

const Investors = () => (
  <section id="investors" className="py-24 bg-warm-gray">
    <div className="container mx-auto px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto"
      >
        <div className="w-16 h-16 rounded-2xl bg-gold-light flex items-center justify-center mx-auto mb-6">
          <UserCheck className="h-8 w-8 text-gold" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-display text-navy mb-4">
          Meet Investors Looking for the Next Big Startup.
        </h2>
        <p className="text-muted-foreground font-body leading-relaxed mb-10">
          Our curated investor network includes angel investors, VCs, and industry leaders actively seeking innovative startups to back. Investor profiles will be revealed closer to the event.
        </p>

        <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-20 h-20 rounded-full bg-muted border-2 border-border flex items-center justify-center">
                <span className="text-2xl font-display text-muted-foreground">?</span>
              </div>
              <span className="text-xs text-muted-foreground font-body">Coming Soon</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Investors;
