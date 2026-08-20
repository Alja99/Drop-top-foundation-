const contactDetails = [
  {
    label: 'Address',
    value: '32 Hope Avenue, Monrovia, Liberia',
  },
  {
    label: 'Phone number',
    value: '+231  880 123 4567',
  },
  {
    label: 'Email',
    value: 'hello@billionairedroptap.org',
  },
  {
    label: 'Office hours',
    value: 'Mon - Fri • 8:00 AM - 5:00 PM',
  },
]

const officeHours = [
  { day: 'Monday - Friday', time: '8:00 AM - 5:00 PM' },
  { day: 'Saturday', time: '9:00 AM - 2:00 PM' },
  { day: 'Sunday', time: 'Closed' },
]

const socialLinks = [
  { name: 'Facebook', icon: 'f' },
  { name: 'LinkedIn', icon: 'in' },
  { name: 'Instagram', icon: '◎' },
  { name: 'X', icon: '𝕏' },
]

const Contact = () => {
  return (
    <main className="bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-14 md:px-0">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-700">Contact Us</p>
          <h1 className="mt-3 text-4xl font-extrabold text-slate-900 md:text-5xl">Let’s connect for impact</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Reach out to our team to volunteer, partner, or support our programs with your time, skills, or donations.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] bg-white p-8 shadow-lg md:p-10 transition duration-300 hover:shadow-xl">
            <h2 className="text-3xl font-bold text-slate-900">Send us a message</h2>
            <form className="mt-8 space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="mb-3 block text-base font-semibold text-slate-700">Full name</span>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 text-lg outline-none transition focus:border-yellow-500"
                  />
                </label>
                <label className="block">
                  <span className="mb-3 block text-base font-semibold text-slate-700">Email address</span>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 text-lg outline-none transition focus:border-yellow-500"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-3 block text-base font-semibold text-slate-700">Subject</span>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 text-lg outline-none transition focus:border-yellow-500"
                />
              </label>

              <label className="block">
                <span className="mb-3 block text-base font-semibold text-slate-700">Message</span>
                <textarea
                  rows="7"
                  placeholder="Tell us about your inquiry"
                  className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 text-lg outline-none transition focus:border-yellow-500"
                />
              </label>

              <button
                type="button"
                className="rounded-full bg-yellow-500 px-8 py-4 text-lg font-semibold text-slate-950 transition hover:bg-yellow-400"
              >
                Submit message
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-[28px] bg-white p-8 shadow-lg transition duration-300 hover:shadow-xl">
              <h2 className="text-3xl font-bold text-slate-900">Reach our office</h2>
              <div className="mt-7 space-y-5">
                {contactDetails.map((item) => (
                  <div key={item.label} className="rounded-2xl bg-slate-50 p-6 transition duration-300 hover:scale-105 hover:shadow-md">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-700">{item.label}</p>
                    <p className="mt-3 text-lg font-medium text-slate-800">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <p className="text-base font-semibold uppercase tracking-[0.25em] text-yellow-700">Follow us</p>
                <div className="mt-4 flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href="#"
                      aria-label={social.name}
                      className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-lg font-bold text-white transition hover:bg-yellow-600"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[28px] bg-white p-8 shadow-lg transition duration-300 hover:shadow-xl">
              <h2 className="text-3xl font-bold text-slate-900">Office hours</h2>
              <div className="mt-7 space-y-4">
                {officeHours.map((entry) => (
                  <div key={entry.day} className="flex items-center justify-between rounded-2xl bg-slate-50 px-6 py-5 transition duration-300 hover:scale-105 hover:shadow-md">
                    <span className="text-lg font-medium text-slate-700">{entry.day}</span>
                    <span className="text-base font-semibold text-slate-900">{entry.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 md:px-0">
        <div className="overflow-hidden rounded-[28px] bg-white shadow-lg">
          <iframe
            title="Foundation office map"
            src="https://www.google.com/maps?q=Lekki%20Phase%201%20Lagos%20Nigeria&z=15&output=embed"
            className="h-[360px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  )
}

export default Contact
