import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'

const opportunities = [
  {
    title: 'Community Outreach Lead',
    description: 'Support field campaigns, event registration, and public engagement across local communities.',
  },
  {
    title: 'Program Support Volunteer',
    description: 'Coordinate sessions, assist with logistics, and help ensure smooth service delivery.',
  },
  {
    title: 'Digital Advocacy Volunteer',
    description: 'Create awareness content, manage social engagement, and support fundraising storytelling.',
  },
]

const benefits = [
  'Hands-on experience in mission-driven community work',
  'Access to mentorship and leadership development opportunities',
  'Recognition through community impact events and volunteer badges',
  'Flexible involvement options for school, corporate, and local groups',
]

const requirements = [
  'Age 18+ or supported by a guardian where applicable',
  'Reliable communication and a strong interest in community impact',
  'Availability for at least one shift per month',
  'Willingness to sign a volunteer agreement and meet orientation expectations',
]

const skills = ['Community Engagement', 'Fundraising', 'Event Support', 'Teaching', 'Content Creation', 'Project Coordination']

const availability = [
  { day: 'Monday', slot: '9:00 AM - 12:00 PM' },
  { day: 'Wednesday', slot: '1:00 PM - 4:00 PM' },
  { day: 'Friday', slot: '11:00 AM - 2:00 PM' },
  { day: 'Saturday', slot: '10:00 AM - 3:00 PM' },
]

const Volunteer = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="section-spacing bg-[#FAF8F2]">
        <div className="container-base">
          <SectionHeading
            eyebrow="Volunteer with us"
            title="Give your time to a cause that changes lives"
            subtitle="Join our volunteer network to help deliver training, connect communities to services, and strengthen the systems that support long-term impact."
            className="max-w-3xl"
          />
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="section-spacing bg-white">
        <div className="container-base">
          <h2 className="font-serif text-3xl text-[#171717] mb-12">Volunteer opportunities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {opportunities.map((item) => (
              <article key={item.title} className="border-l-4 border-[#C9A227] pl-6">
                <h3 className="font-serif text-2xl text-[#171717] mb-4">{item.title}</h3>
                <p className="text-[#5F6368] leading-relaxed">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Requirements */}
      <section className="section-spacing bg-[#FAF8F2]">
        <div className="container-base">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-2xl text-[#171717] mb-6">Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-4">
                    <span className="text-[#C9A227] font-bold text-xl">✓</span>
                    <span className="text-[#5F6368]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-[#171717] mb-6">Requirements</h3>
              <ul className="space-y-4">
                {requirements.map((requirement) => (
                  <li key={requirement} className="flex gap-4">
                    <span className="text-[#C9A227] font-bold text-xl">•</span>
                    <span className="text-[#5F6368]">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-spacing bg-white">
        <div className="container-base max-w-2xl">
          <h2 className="font-serif text-3xl text-[#171717] mb-12">Volunteer Application</h2>

          <form className="space-y-6">
            <div>
              <label className="block mb-2">
                <span className="font-semibold text-[#171717]">Full Name</span>
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#C9A227] transition-colors"
              />
            </div>

            <div>
              <label className="block mb-2">
                <span className="font-semibold text-[#171717]">Email Address</span>
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#C9A227] transition-colors"
              />
            </div>

            <div>
              <label className="block mb-2">
                <span className="font-semibold text-[#171717]">Phone Number</span>
              </label>
              <input
                type="tel"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#C9A227] transition-colors"
              />
            </div>

            <div>
              <p className="font-semibold text-[#171717] mb-4">Skills & Interests</p>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill) => (
                  <label key={skill} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-[#FAF8F2] transition-colors">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="text-[#5F6368]">{skill}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block mb-2">
                <span className="font-semibold text-[#171717]">Tell us your motivation</span>
              </label>
              <textarea
                rows={5}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#C9A227] transition-colors resize-none"
              />
            </div>

            <Button type="submit" variant="primary" size="lg" className="w-full">
              Submit Application
            </Button>
          </form>
        </div>
      </section>

      {/* Availability */}
      <section className="section-spacing bg-[#FAF8F2]">
        <div className="container-base">
          <h2 className="font-serif text-3xl text-[#171717] mb-12">Volunteer Availability</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {availability.map((slot) => (
              <div
                key={slot.day}
                className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:border-[#C9A227] transition-colors"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[#C9A227] mb-2">
                  {slot.day}
                </p>
                <p className="font-medium text-[#171717]">{slot.slot}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-[#171717] text-white">
        <div className="container-base text-center">
          <h2 className="font-serif text-white mb-6">
            Questions about volunteering?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            Contact our volunteer coordinator at volunteer@bdtfoundation.org or call us directly.
          </p>
          <Button to="/contact" variant="secondary" size="lg">
            Get in Touch
          </Button>
        </div>
      </section>
    </main>
  )
}

export default Volunteer