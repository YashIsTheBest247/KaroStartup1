import { motion } from "framer-motion";

const AboutKaroStartup = () => (
  <section className="py-24 bg-warm-gray">
    <div className="container mx-auto px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold font-body text-gold uppercase tracking-widest">The Platform Behind</span>
          <h2 className="text-3xl sm:text-4xl font-display text-navy mt-3 mb-6">About KaroStartup</h2>
          <p className="text-muted-foreground font-body leading-relaxed text-lg">
            Over the past 5 years, KaroStartup has built one of India's largest startup storytelling platforms — sharing thousands of founder journeys and inspiring entrepreneurs across the country. With a thriving community and deep ecosystem knowledge, KaroStartup is uniquely positioned to launch Karo Pitch and connect Bharat's founders with the right investors.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutKaroStartup;
