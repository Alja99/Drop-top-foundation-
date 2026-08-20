const campaignOptions = [
  'Clean Water for Every Community',
  'School Health Outreach',
  'Emergency Relief Fund',
  'Women Empowerment Initiative',
]

const presetAmounts = ['$25', '$50', '$100', '$250', '$500']
const paymentMethods = ['Mobile Money', 'Card', 'Bank Transfer', 'PayPal']
const securityBadges = ['SSL Encrypted', 'PCI Compliant', 'Trusted Donor Protection']

const Donate = () => {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14 text-slate-900">
      <section className="rounded-[32px] bg-white p-8 shadow-lg md:p-10">
        <div className="rounded-[28px] bg-gradient-to-r from-slate-900 via-slate-800 to-yellow-900 p-8 text-white">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">Campaign Progress</p>
              <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">Help us reach $250,000</h1>
            </div>
            <button type="button" className="rounded-full bg-yellow-500 px-7 py-3 font-semibold text-slate-950 transition hover:bg-yellow-400">
              Donate Now
            </button>
          </div>

          <div className="mt-6 h-4 overflow-hidden rounded-full bg-white/15">
            <div className="h-full w-[72%] rounded-full bg-yellow-400" />
          </div>
          <div className="mt-3 flex items-center justify-between text-sm text-slate-200">
            <span>$180,000 raised</span>
            <span>72% complete</span>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
<div className="space-y-8">
            <div className="rounded-[28px] bg-slate-50 p-8 transition duration-300 hover:shadow-lg">
              <h2 className="text-3xl font-bold text-slate-900">Choose your impact</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {presetAmounts.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    className="rounded-2xl border border-slate-300 bg-white px-5 py-5 text-lg font-semibold text-slate-900 transition duration-300 hover:border-yellow-500 hover:text-yellow-700 hover:scale-105 hover:shadow-md"
                  >
                    {amount}
                  </button>
                ))}
              </div>

              <label className="mt-6 block">
                <span className="mb-3 block text-base font-semibold text-slate-700">Custom donation amount</span>
                <input
                  type="number"
                  placeholder="Enter amount"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-lg outline-none focus:border-yellow-500"
                />
              </label>

              <div className="mt-6 flex gap-4">
                <button type="button" className="rounded-full bg-yellow-500 px-8 py-4 text-lg font-semibold text-slate-950 transition hover:bg-yellow-400">
                  One-time
                </button>
                <button type="button" className="rounded-full bg-slate-900 px-8 py-4 text-lg font-semibold text-white transition hover:bg-slate-800">
                  Monthly
                </button>
              </div>

              <div className="mt-7">
                <p className="mb-3 text-base font-semibold text-slate-700">Campaign selection</p>
                <select className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-lg outline-none focus:border-yellow-500">
                  {campaignOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="rounded-[28px] bg-slate-50 p-8 transition duration-300 hover:shadow-lg">
              <h2 className="text-3xl font-bold text-slate-900">Donor information</h2>
              <form className="mt-6 space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-3 block text-base font-semibold text-slate-700">Full name</span>
                    <input type="text" className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-lg outline-none focus:border-yellow-500" />
                  </label>
                  <label className="block">
                    <span className="mb-3 block text-base font-semibold text-slate-700">Email</span>
                    <input type="email" className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-lg outline-none focus:border-yellow-500" />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-3 block text-base font-semibold text-slate-700">Country</span>
                  <input type="text" className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-lg outline-none focus:border-yellow-500" />
                </label>
              </form>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-[28px] bg-slate-50 p-8">
              <h2 className="text-3xl font-bold text-slate-900">Secure payment</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {paymentMethods.map((method) => (
                  <button
                    key={method}
                    type="button"
                    className="rounded-2xl bg-white px-5 py-5 text-lg font-semibold text-slate-800 shadow-sm transition hover:bg-yellow-50"
                  >
                    {method}
                  </button>
                ))}
              </div>

              <div className="mt-7 rounded-2xl bg-white p-6 shadow-sm">
                <p className="text-base font-semibold text-slate-700">Card details</p>
                <div className="mt-4 space-y-4">
                  <input type="text" placeholder="Card number" className="w-full rounded-2xl border border-slate-300 px-5 py-4 text-lg" />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input type="text" placeholder="MM/YY" className="w-full rounded-2xl border border-slate-300 px-5 py-4 text-lg" />
                    <input type="text" placeholder="CVV" className="w-full rounded-2xl border border-slate-300 px-5 py-4 text-lg" />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {securityBadges.map((badge) => (
                  <span key={badge} className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                    {badge}
                  </span>
                ))}
              </div>

              <button type="button" className="mt-7 w-full rounded-full bg-yellow-500 px-8 py-5 text-xl font-bold text-slate-950 transition hover:bg-yellow-400">
                Complete Donation
              </button>
            </div>

            <div className="rounded-[28px] bg-slate-900 p-8 text-white transition duration-300 hover:shadow-lg hover:scale-105">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">Thank you</p>
              <h3 className="mt-4 text-3xl font-bold">Your generosity is making an impact</h3>
              <p className="mt-4 text-lg text-slate-300">
                A confirmation email and receipt have been prepared for your records.
              </p>
              <div className="mt-6 rounded-2xl bg-white/10 p-6">
                <p className="text-base text-slate-300">Donation receipt confirmation</p>
                <p className="mt-2 text-2xl font-semibold">Receipt #DR-2026-0458</p>
                <p className="mt-2 text-lg text-slate-200">Thank you for giving $100 to the School Health Outreach Campaign.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Donate