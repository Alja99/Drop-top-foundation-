import { Link } from 'react-router-dom'
import homePic from '../assets/image/home pic.jpg'
import Button from './Button'

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${homePic})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />

      {/* Content */}
      <div className="relative z-10 container-base text-center text-white py-24">
        {/* Eyebrow */}
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#F4E7B2] mb-8 animate-slideUp">
          Health • Hope • Humanity
        </p>

        {/* Main Headline */}
        <h1 className="font-serif text-white mb-6 leading-tight animate-slideUp" style={{ animationDelay: '0.1s' }}>
          Every life deserves a chance to thrive.
        </h1>

        {/* Supporting Text */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-12 leading-relaxed animate-slideUp font-light" style={{ animationDelay: '0.2s' }}>
          We support communities through healthcare, education, empowerment, and humanitarian initiatives that create lasting impact.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slideUp" style={{ animationDelay: '0.3s' }}>
          <Button to="/donate" variant="primary" size="lg">
            Donate Now
          </Button>
          <Link
            to="#impact"
            className="inline-flex items-center justify-center px-8 py-4 text-16px font-semibold border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#171717] transition-all duration-300"
          >
            Explore Our Impact
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
