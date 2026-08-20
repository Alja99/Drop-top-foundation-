import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'

const programs = [
  {
    title: 'Education',
    summary: 'Unlock learning opportunities through scholarships, school kits, mentorship, and digital literacy support.',
    icon: '📘',
  },
  {
    title: 'Healthcare',
    summary: 'Improve access to preventive care, mobile clinics, maternal support, and essential health education.',
    icon: '🩺',
  },
  {
    title: 'Women Empowerment',
    summary: 'Provide leadership training, enterprise support, and safe pathways to long-term economic independence.',
    icon: '👩🏽‍💼',
  },
  {
    title: 'Youth Development',
    summary: 'Help young people build confidence, skills, and career pathways through mentorship and training.',
    icon: '🌱',
  },
  {
    title: 'Community Development',
    summary: 'Support local infrastructure, civic engagement, and neighborhood resilience through practical partnerships.',
    icon: '🏘️',
  },
  {
    title: 'Emergency Relief',
    summary: 'Deliver rapid response assistance to families facing crises with food, shelter, and recovery funding.',
    icon: '🚑',
  },
]

const Program = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="section-spacing bg-[#FAF8F2]">
        <div className="container-base">
          <SectionHeading
            eyebrow="Our Programs"
            title="Elegant programs driving lasting change"
            subtitle="Explore the six signature areas where our foundation shapes safe, resilient, and opportunity-rich communities."
            className="max-w-3xl"
          />
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-spacing bg-white">
        <div className="container-base">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {programs.map((program) => (
              <article key={program.title} className="group">
                {/* Icon */}
                <div className="text-6xl mb-6 transform group-hover:-translate-y-1 transition-transform duration-300">
                  {program.icon}
                </div>

                {/* Content */}
                <h3 className="font-serif text-2xl text-[#171717] mb-4">
                  {program.title}
                </h3>

                <p className="text-[#5F6368] leading-relaxed mb-6">
                  {program.summary}
                </p>

                <Button href="#" variant="secondary" size="sm">
                  Learn More
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-[#171717] text-white">
        <div className="container-base text-center">
          <h2 className="font-serif text-white mb-6">
            Ready to support these programs?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            Your contribution helps us expand these vital services to more communities and create lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button to="/donate" variant="primary" size="lg">
              Donate Now
            </Button>
            <Button to="/volunteer" variant="secondary" size="lg">
              Join Our Team
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Program