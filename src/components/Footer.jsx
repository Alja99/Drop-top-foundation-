import Button from './Button'

const Footer = () => {
  return (
    <footer className="bg-[#171717] text-white">
      <div className="section-spacing">
        <div className="container-base">
          {/* Main Footer Grid */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand Column */}
            <div>
              <h2 className="font-serif text-2xl text-white mb-4">
                Billionaire Drop Tap Foundation
              </h2>
              <p className="text-white/70 leading-relaxed max-w-sm">
                Supporting communities with healthcare access, education, and humanitarian relief through every act of care.
              </p>
              <div className="flex gap-4 mt-6">
                <a href="#" className="text-[#C9A227] hover:text-[#F4E7B2] transition-colors" aria-label="Facebook">
                  <span className="text-sm font-medium">f</span>
                </a>
                <a href="#" className="text-[#C9A227] hover:text-[#F4E7B2] transition-colors" aria-label="Instagram">
                  <span className="text-sm font-medium">𝓲</span>
                </a>
                <a href="#" className="text-[#C9A227] hover:text-[#F4E7B2] transition-colors" aria-label="LinkedIn">
                  <span className="text-sm font-medium">in</span>
                </a>
                <a href="#" className="text-[#C9A227] hover:text-[#F4E7B2] transition-colors" aria-label="X">
                  <span className="text-sm font-medium">𝕏</span>
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#C9A227] mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li><a href="/" className="text-white/70 hover:text-[#C9A227] transition-colors">Home</a></li>
                <li><a href="/about" className="text-white/70 hover:text-[#C9A227] transition-colors">About Us</a></li>
                <li><a href="/program" className="text-white/70 hover:text-[#C9A227] transition-colors">Programs</a></li>
                <li><a href="/volunteer" className="text-white/70 hover:text-[#C9A227] transition-colors">Volunteer</a></li>
                <li><a href="/contact" className="text-white/70 hover:text-[#C9A227] transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Stay Connected Column */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#C9A227] mb-6">
                Stay Connected
              </h3>
              <p className="text-white/70 text-sm mb-4">
                Receive updates from the field about our impact and programs.
              </p>
              <form className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#C9A227] transition-colors"
                />
                <Button type="submit" variant="primary" size="sm">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 pt-8">
            <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-white/70 hover:text-[#C9A227] transition-colors">Privacy Policy</a>
                <a href="#" className="text-white/70 hover:text-[#C9A227] transition-colors">Terms</a>
              </div>
              <p className="text-white/70 text-sm text-center md:text-right">
                © 2026 Billionaire Drop Tap Foundation. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer