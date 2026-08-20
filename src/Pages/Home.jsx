import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import care2  from '../assets/image/care2.jpg'
import care4 from  '../assets/image/care4.jpg'
import care3 from '../assets/image/care3.jpg'
import care5 from '../assets/image/care5.jpg'

const highlights = [
  { label: 'Lives Impacted', value: '24,800+' },
  { label: 'Projects Completed', value: '148' },
  { label: 'Volunteers', value: '1,420' },
  { label: 'Funds Raised', value: '$3.6M' },
]

const campaigns = [
  {
    title: 'Clean Water for Every Community',
    description: 'Install safe water stations and hygiene education in underserved neighborhoods.',
    tag: 'Infrastructure',
  },
  {
    title: 'School Health Outreach',
    description: 'Provide screenings, treatment support, and essential supplies for students.',
    tag: 'Education',
  },
  {
    title: 'Emergency Relief Fund',
    description: 'Deliver food, medicine, and shelter support during urgent crises.',
    tag: 'Relief',
  },
]

const stories = [
  {
    name: 'Amina K.',
    quote: 'The mobile clinic brought needed care to our village and gave my son a chance to recover without worrying about transport costs.',
    location: 'Lagos, Nigeria',
  },
  {
    name: 'Isaiah T.',
    quote: 'The volunteer support and community network helped my family rebuild confidence and access reliable resources again.',
    location: 'Abuja, Nigeria',
  },
]

const events = [
  {
    date: '12 Sep',
    title: 'Community Wellness Day',
    meta: 'Lagos • 9:00 AM',
  },
  {
    date: '26 Sep',
    title: 'Impact Breakfast Briefing',
    meta: 'Abuja • 8:30 AM',
  },
  {
    date: '03 Oct',
    title: 'Volunteers Training Workshop',
    meta: 'Virtual • 11:00 AM',
  },
]

const partners = ['Global Care Alliance', 'HopeBridge Medical', 'Bright Futures Network', 'Youth Empowerment Hub']

const gallery = [
  {
    image: care4,
    title: 'Community Outreach',
    category: 'Community',
  },
  {
    image: care5,
    title: 'Education for Every Child',
    category: 'Education',
  },
  {
    image: care3,
    title: 'Healthcare Outreach',
    category: 'Healthcare',
  },
  {
    image: care2,
    title: 'Our Volunteers',
    category: 'Volunteer',
  },
  {
    image: '/images/gallery/women-empowerment.jpg',
    title: 'Empowering Women',
    category: 'Empowerment',
  },
]
const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Impact Statistics */}
      <section className="section-spacing bg-white">
        <div className="container-base">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {highlights.map((item, index) => (
              <div 
                key={item.label} 
                className={`text-center py-6 ${index < highlights.length - 1 ? 'border-b md:border-b-0 md:border-r' : ''} border-gray-200`}
              >
                <p className="text-4xl md:text-5xl font-serif font-semibold text-[#C9A227] mb-2">
                  {item.value}
                </p>
                <p className="text-sm uppercase tracking-[0.1em] text-[#5F6368] font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaigns Section */}
      <section className="section-spacing bg-[#FAF8F2]">
        <div className="container-base">
          <SectionHeading
            eyebrow="Featured Campaigns"
            title="Programs moving communities forward"
            subtitle="Supporting sustainable change in priority areas"
            className="mb-16"
          />

          <div className="grid md:grid-cols-3 gap-12">
            {campaigns.map((campaign) => (
              <article key={campaign.title} className="group">
                <div className="mb-6 h-2 bg-gradient-to-r from-[#C9A227] to-transparent rounded-full transform group-hover:scale-x-105 transition-transform duration-300 origin-left" />
                
                <div className="inline-block mb-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#C9A227] bg-[#F4E7B2]/30 px-3 py-1.5 rounded-full">
                    {campaign.tag}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[#171717] mb-4">
                  {campaign.title}
                </h3>

                <p className="text-[#5F6368] leading-relaxed mb-6">
                  {campaign.description}
                </p>

                <Button to="/donate" variant="secondary" size="sm">
                  Support Campaign →
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-spacing bg-white">
        <div className="container-base">
          <SectionHeading
            eyebrow="Success Stories"
            title="Stories of hope made possible"   
            subtitle="Real impact from real communities"
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 gap-12">
            {stories.map((story) => (
              <article key={story.name} className="border-l-4 border-[#C9A227] pl-8">
                <blockquote className="mb-6">
                  <p className="font-serif text-xl text-[#171717] leading-relaxed">
                    "{story.quote}"
                  </p>
                </blockquote>
                
                <footer>
                  <p className="font-semibold text-[#171717]">{story.name}</p>
                  <p className="text-sm text-[#5F6368]">{story.location}</p>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="section-spacing bg-[#FAF8F2]">
        <div className="container-base">
          <SectionHeading
            eyebrow="Upcoming Events"
            title="Join our next community gathering"
            subtitle="Connect, learn, and make an impact"
            className="mb-16"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event) => (
              <article key={event.title} className="bg-white p-8 rounded-lg border border-gray-200 hover:border-[#C9A227] transition-colors duration-300">
                <div className="inline-block mb-4">
                  <span className="text-sm font-semibold text-[#C9A227] bg-[#F4E7B2]/30 px-3 py-1.5 rounded-full">
                    {event.date}
                  </span>
                </div>

                <h3 className="font-serif text-xl text-[#171717] mb-2">
                  {event.title}
                </h3>

                <p className="text-[#5F6368] text-sm">
                  {event.meta}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section-spacing bg-white">
        <div className="container-base">
          <SectionHeading
            eyebrow="Partner Organizations"
            title="Trusted allies in impact"
            subtitle="Working together for greater good"
            className="mb-16"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner) => (
              <div 
                key={partner} 
                className="bg-[#FAF8F2] border border-gray-200 rounded-lg p-6 text-center hover:border-[#C9A227] hover:bg-[#F4E7B2]/10 transition-all duration-300"
              >
                <p className="font-medium text-[#171717]">
                  {partner}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Gallery Section */}
<section className="section-spacing bg-[#FAF8F2]">
  <div className="container-base">

    <SectionHeading
      eyebrow="Our Gallery"
      title="Moments that inspire change"
      subtitle="A glimpse into the people, communities, and moments behind our work."
      className="mb-16"
    />

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

      {/* Featured Image */}
      <article className="group relative col-span-2 row-span-2 overflow-hidden rounded-xl min-h-[420px]">
        <img
          src={gallery[0].image}
          alt={gallery[0].title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <span className="inline-block mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#F4E7B2]">
            {gallery[0].category}
          </span>

          <h3 className="font-serif text-2xl md:text-3xl text-white">
            {gallery[0].title}
          </h3>
        </div>
      </article>

      {/* Remaining Images */}
      {gallery.slice(1).map((item) => (
        <article
          key={item.title}
          className="group relative overflow-hidden rounded-xl aspect-[4/3]"
        >
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#F4E7B2]">
              {item.category}
            </span>

            <h3 className="font-serif text-lg text-white mt-1">
              {item.title}
            </h3>
          </div>
        </article>
      ))}

    </div>

    {/* View Gallery Button */}
    <div className="flex justify-center mt-12">
      <Button
        to="/gallery"
        variant="secondary"
        size="lg"
      >
        View Full Gallery →
      </Button>
    </div>

  </div>
</section>

      {/* Final CTA Section */}
      <section className="section-spacing bg-[#171717] text-white">
        <div className="container-base text-center">
          <h2 className="font-serif text-white mb-6">
            Together, we can create a healthier, stronger future.
          </h2>

          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            Your generosity helps us reach communities, empower individuals, and create lasting change.
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

      {/* Newsletter Section */}
      <section className="section-spacing bg-white">
        <div className="container-base max-w-2xl">
          <SectionHeading
            eyebrow="Stay Connected"
            title="Receive updates from the field"
            subtitle="Get stories of impact, campaign alerts, and news about how your support transforms lives."
            className="mb-8"
          />

          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 rounded-lg border border-gray-200 focus:outline-none focus:border-[#C9A227] transition-colors duration-300"
            />
            <Button type="submit" variant="primary" size="lg">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Home
