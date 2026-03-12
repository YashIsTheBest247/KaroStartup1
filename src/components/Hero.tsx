import { motion } from "framer-motion";
import { Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroGraphic from "@/assets/hero-graphic.png";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-cream">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--navy)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--navy)) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-gold-light px-4 py-2 mb-6">
              <Rocket className="h-4 w-4 text-gold" />
              <span className="text-sm font-semibold text-navy">A KaroStartup Initiative</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display leading-[1.1] text-navy mb-6">
              Pitch Your Startup to India's Top Investors.
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-8 font-body leading-relaxed">
              Karo Pitch is a platform where founders from across India — especially Tier-2, Tier-3 cities — can pitch their startups and raise funding directly from investors.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-base px-8 py-6">
                Apply to Pitch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="hero-outline" size="lg" className="text-base px-8 py-6">
                Explore Startups
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:flex justify-center"
          >
            <img src={heroGraphic} alt="Startup network" className="w-full max-w-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
