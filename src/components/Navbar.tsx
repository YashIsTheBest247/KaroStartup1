import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = ["About", "How It Works", "Startups", "Investors"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#" className="font-display text-xl text-navy tracking-tight">
          Karo<span className="text-gold">Pitch</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace(/ /g, "-")}`}
              className="text-sm font-medium text-muted-foreground hover:text-navy transition-colors">
              {link}
            </a>
          ))}
          <a href="#cta" className="text-sm font-semibold bg-navy text-cream px-5 py-2.5 rounded-lg hover:bg-navy-light transition-colors">
            Apply Now
          </a>
        </div>

        <button className="md:hidden text-navy" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-cream border-b border-border px-6 pb-4"
        >
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace(/ /g, "-")}`}
              className="block py-3 text-sm font-medium text-muted-foreground hover:text-navy"
              onClick={() => setOpen(false)}>
              {link}
            </a>
          ))}
          <a href="#cta" className="block mt-2 text-sm font-semibold bg-navy text-cream px-5 py-2.5 rounded-lg text-center"
            onClick={() => setOpen(false)}>
            Apply Now
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
