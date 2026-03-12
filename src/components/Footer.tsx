const Footer = () => (
  <footer className="bg-navy border-t border-cream/10 py-12">
    <div className="container mx-auto px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-display text-xl text-cream">Karo<span className="text-gold">Pitch</span></span>
          <p className="text-white/100 text-sm font-body mt-1">A KaroStartup Initiative</p>
        </div>
        <div className="flex items-center gap-6">
          <a href="https://www.instagram.com/karopitch/" target="_blank" rel="noopener noreferrer"
            className="text-white/100 hover:text-gold text-sm font-body transition-colors">Instagram</a>
          <a href="https://karostartup.com" target="_blank" rel="noopener noreferrer"
            className="text-white/100 hover:text-gold text-sm font-body transition-colors">Website</a>
          <a href="mailto:business@karostartup.com"
            className="text-white/100 hover:text-gold text-sm font-body transition-colors">Contact</a>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-cream/10 text-center">
        <p className="text-white/100 text-xs font-body">© 2026 KaroStartup. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
