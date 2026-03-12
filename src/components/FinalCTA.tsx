import { motion } from "framer-motion";
import { ArrowRight, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => (
  <section id="cta" className="py-24 bg-navy relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
      style={{ background: "radial-gradient(circle, hsl(var(--gold)) 0%, transparent 70%)" }} />

    <div className="container relative z-10 mx-auto px-6 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-5xl font-display text-cream mb-6">Ready to Pitch Your Startup?</h2>
        <p className="text-white font-body max-w-xl mx-auto mb-10 text-lg">
          Join the growing list of founders who are getting discovered by India's top investors through Karo Pitch.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" className="text-base px-8 py-6">
            Apply Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" className="text-base px-8 py-6 bg-transparent border-2 border-cream/20 text-cream hover:bg-cream/10">
            <Handshake className="mr-2 h-5 w-5" />
            Partner With Us
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
