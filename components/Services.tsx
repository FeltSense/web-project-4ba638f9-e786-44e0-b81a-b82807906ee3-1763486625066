import Image from 'next/image';

export default function Services() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 overflow-hidden">
  {/* Decorative Elements */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-200/20 rounded-full blur-3xl"></div>
  
  <div className="container mx-auto px-4 relative z-10">
    {/* Section Header */}
    <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
      <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm">
        <span className="text-2xl">🐱</span>
        <span className="text-sm font-medium text-amber-800 tracking-wide uppercase">What We Offer</span>
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
        Work Better,
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-600"> With Cats</span>
      </h2>
      <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
        Experience a workspace designed for productivity, community, and feline companionship in the heart of Buenos Aires
      </p>
    </div>

    {/* Services Grid - Asymmetric Layout */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto">
      
      {/* Service 1 - Large Feature */}
      <div className="lg:col-span-7 group">
        <div className="relative h-full bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
          <div className="relative h-72 md:h-96 overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=800&h=600&fit=crop" 
              width={800} 
              height={600} 
              alt="Friendly office cats lounging in sunlit workspace"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
            <div className="absolute top-6 right-6 bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              Most Popular
            </div>
          </div>
          <div className="p-8 md:p-10">
            <div className="flex items-start gap-4 mb-4">
              <div className="text-4xl">😻</div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Resident Cat Companions</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-4">
                  Meet our friendly feline colleagues who roam freely throughout the space. Research shows that interacting with cats reduces stress, lowers blood pressure, and boosts creativity. Take a break with Luna, Mochi, or Tango for instant mood elevation.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-slate-700">
                    <span className="text-amber-500">✓</span>
                    <span>Trained, friendly, and health-certified cats</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-700">
                    <span className="text-amber-500">✓</span>
                    <span>Dedicated cat lounges for quiet time</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-700">
                    <span className="text-amber-500">✓</span>
                    <span>Optional cat-free zones available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service 2 - Medium Card */}
      <div className="lg:col-span-5 group">
        <div className="relative h-full bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
          <div className="relative h-56 overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop" 
              width={600} 
              height={400} 
              alt="Bright open floor plan with natural sunlight and indoor plants"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-30"
            />
          </div>
          <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
            <div className="text-4xl mb-4">☀️</div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Sunlit Open Spaces</h3>
            <p className="text-emerald-50 text-base leading-relaxed mb-4">
              Floor-to-ceiling windows flood our 500m² workspace with natural Argentine sunshine. Surrounded by thriving plants and wood accents, you&apos;ll feel energized and inspired all day long.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">Floor-to-ceiling windows</span>
              <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">Indoor jungle vibes</span>
              <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">Ergonomic furniture</span>
            </div>
          </div>
        </div>
      </div>

      {/* Service 3 - Wide Card */}
      <div className="lg:col-span-5 group">
        <div className="relative h-full bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
          <div className="p-8 md:p-10">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Flexible Work Zones</h3>
            <p className="text-slate-600 text-base leading-relaxed mb-6">
              Choose your perfect spot: soundproof phone booths for calls, cozy nooks for deep focus, collaborative tables for team brainstorms, or lounge areas for casual meetings. Your workspace, your rules.
            </p>
            <div className="relative h-48 rounded-2xl overflow-hidden mb-4">
              <Image 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=300&fit=crop" 
                width={600} 
                height={300} 
                alt="Diverse workspace zones including quiet areas and collaborative spaces"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="text-lg">🔇</span>
                <span>Quiet zones</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="text-lg">💬</span>
                <span>Collab spaces</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="text-lg">📞</span>
                <span>Phone booths</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <span className="text-lg">🛋️</span>
                <span>Lounge areas</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service 4 - Featured Card */}
      <div className="lg:col-span-7 group">
        <div className="relative h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
          <div className="grid md:grid-cols-2 h-full">
            <div className="relative h-64 md:h-auto overflow-hidden order-2 md:order-1">
              <Image 
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&h=600&fit=crop" 
                width={600} 
                height={600} 
                alt="Premium coffee bar featuring Argentine specialty drinks and pastries"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-transparent"></div>
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center order-1 md:order-2">
              <div className="text-4xl mb-4">☕</div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Premium Coffee Bar</h3>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                Fuel your productivity with artisan Argentine coffee, yerba mate, premium teas, and fresh medialunas. Our on-site barista crafts specialty drinks all day, included with your membership.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-200">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-400">✓</span>
                  </div>
                  <span>Local Buenos Aires roasters</span>
                </li>
                <li className="flex items-center gap-3 text-slate-200">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-400">✓</span>
                  </div>
                  <span>Traditional yerba mate service</span>
                </li>
                <li className="flex items-center gap-3 text-slate-200">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-400">✓</span>
                  </div>
                  <span>Fresh pastries & healthy snacks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>

    {/* Bottom CTA */}
    <div className="mt-16 text-center">
      <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
        <span className="text-slate-700">Plus: High-speed WiFi, Event space, Networking events & Printing services</span>
      </div>
    </div>
  </div>
</section>
  );
}