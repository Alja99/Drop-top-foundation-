import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'

const About = () => {
  const values = [
    {
      title: 'Our Mission',
      description: 'To elevate health, dignity, and resilience in underserved communities through sustainable programs and compassionate action.',
    },
    {
      title: 'Our Vision',
      description: 'A future where every person can access inclusive, sustainable support and opportunities to thrive.',
    },
    {
      title: 'Our Values',
      description: 'Empathy, transparency, collaboration, and measurable community impact in everything we do.',
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="section-spacing bg-[#FAF8F2]">
        <div className="container-base">
          <SectionHeading
            eyebrow="About Our Foundation"
            title="Building stronger, healthier communities"
            subtitle="Billionaire Drop Tap Foundation is committed to improving access to care, preparedness, and opportunity through community-driven partnerships and sustainable impact."
            className="max-w-3xl"
          />
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-spacing bg-white">
        <div className="container-base">
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((item) => (
              <div key={item.title} className="border-t-4 border-[#C9A227] pt-6">
                <h3 className="font-serif text-2xl text-[#171717] mb-4">
                  {item.title}
                </h3>
                <p className="text-[#5F6368] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-spacing bg-[#FAF8F2]">
        <div className="container-base">
          <SectionHeading
            eyebrow="Our Story"
            title="Started with a vision for change"
            subtitle="Founded on the belief that every person deserves access to healthcare, education, and opportunity."
            className="mb-12"
          />
          <div className="max-w-3xl mx-auto">
            <p className="text-[#5F6368] leading-relaxed mb-6">
              Billionaire Drop Tap Foundation emerged from a deep commitment to address the healthcare and development challenges facing underserved communities. Our journey began with listening to communities, understanding their needs, and co-creating sustainable solutions that respect local knowledge and agency.
            </p>
            <p className="text-[#5F6368] leading-relaxed">
              Today, we work across multiple sectors—health, education, and economic empowerment—building partnerships that create lasting change. Every program we launch, every volunteer we train, and every dollar donated reflects our shared commitment to a more equitable world.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section-spacing bg-white">
        <div className="container-base">
          <SectionHeading
            eyebrow="Our Impact"
            title="Measurable change across communities"
            className="mb-16"
          />
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-5xl font-serif font-semibold text-[#C9A227] mb-4">24,800+</p>
              <p className="text-xl text-[#171717] font-semibold mb-2">Lives Impacted</p>
              <p className="text-[#5F6368]">People have received healthcare, education, or direct support through our programs.</p>
            </div>
            <div>
              <p className="text-5xl font-serif font-semibold text-[#C9A227] mb-4">148</p>
              <p className="text-xl text-[#171717] font-semibold mb-2">Active Projects</p>
              <p className="text-[#5F6368]">Community-led initiatives spanning healthcare, education, and economic development.</p>
            </div>
            <div>
              <p className="text-5xl font-serif font-semibold text-[#C9A227] mb-4">1,420</p>
              <p className="text-xl text-[#171717] font-semibold mb-2">Trained Volunteers</p>
              <p className="text-[#5F6368]">Community members equipped to lead change in their own neighborhoods.</p>
            </div>
            <div>
              <p className="text-5xl font-serif font-semibold text-[#C9A227] mb-4">$3.6M</p>
              <p className="text-xl text-[#171717] font-semibold mb-2">Funds Deployed</p>
              <p className="text-[#5F6368]">Direct investment in communities with transparent, measurable impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-[#171717] text-white">
        <div className="container-base text-center">
          <h2 className="font-serif text-white mb-6">
            Join us in creating lasting change
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            Whether through volunteering your time or supporting our programs financially, every contribution matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button to="/donate" variant="primary" size="lg">
              Donate Now
            </Button>
            <Button to="/volunteer" variant="secondary" size="lg">
              Become a Volunteer
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About