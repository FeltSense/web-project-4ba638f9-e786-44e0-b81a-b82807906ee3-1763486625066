import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl"></div>
  
  {/* Floating cat paw prints decoration */}
  <div className="absolute top-20 left-10 opacity-10 text-amber-900 text-6xl rotate-12 hidden lg:block">🐾</div>
  <div className="absolute top-40 right-20 opacity-10 text-amber-900 text-5xl -rotate-12 hidden lg:block">🐾</div>
  <div className="absolute bottom-32 left-1/4 opacity-10 text-amber-900 text-4xl rotate-45 hidden lg:block">🐾</div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32 lg:pb-24">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left content */}
      <div className="space-y-8 text-center lg:text-left">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-amber-200">
          <span className="text-2xl">🐱</span>
          <span className="text-sm font-medium text-amber-900">Buenos Aires&apos; First Cat-Friendly Co-Working</span>
        </div>

        {/* Headline */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
            Work Better
            <span className="block mt-2 bg-gradient-to-r from-amber-600 via-orange-500 to-rose-500 bg-clip-text text-transparent">
              With Cats
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-700 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            A modern co-working space where productivity meets purrs. Natural light, premium amenities, and resident cats create the perfect environment for remote workers and entrepreneurs in Buenos Aires.
          </p>
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-amber-200/50">
            <span className="text-amber-600">☀️</span>
            <span className="text-sm font-medium text-slate-700">Natural Light</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-amber-200/50">
            <span className="text-emerald-600">🌿</span>
            <span className="text-sm font-medium text-slate-700">Plant-Filled Spaces</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-amber-200/50">
            <span className="text-rose-600">☕</span>
            <span className="text-sm font-medium text-slate-700">Premium Coffee Bar</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
          <button className="group px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
            <span className="flex items-center justify-center gap-2">
              Book a Tour
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
          <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-900 font-semibold rounded-xl border-2 border-amber-200 hover:border-amber-300 hover:bg-white transition-all duration-200">
            View Memberships
          </button>
        </div>

        {/* Social proof */}
        <div className="pt-8 flex items-center gap-6 justify-center lg:justify-start border-t border-amber-200/50">
          <div className="flex -space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 border-2 border-white shadow-sm"></div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 border-2 border-white shadow-sm"></div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 border-2 border-white shadow-sm"></div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 border-2 border-white shadow-sm"></div>
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold text-slate-900">200+ Happy Members</p>
            <p className="text-xs text-slate-600">Join our growing community</p>
          </div>
        </div>
      </div>

      {/* Right content - Image Grid */}
      <div className="relative">
        <div className="grid grid-cols-2 gap-4">
          {/* Main large image */}
          <div className="col-span-2 relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-300">
            <Image 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" 
              width={800} 
              height={600} 
              alt="Modern co-working space with natural light and wooden accents"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
          </div>
          
          {/* Two smaller images */}
          <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-300">
            <Image 
              src="https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&q=80" 
              width={400} 
              height={400} 
              alt="Friendly office cat lounging in sunny workspace"
              className="object-cover w-full h-full"
            />
            <div className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-amber-900 shadow-sm">
              Meet Our Cats 🐈
            </div>
          </div>
          
          <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-300">
            <Image 
              src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=400&q=80" 
              width={400} 
              height={400} 
              alt="Premium coffee bar with artisan drinks"
              className="object-cover w-full h-full"
            />
            <div className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-amber-900 shadow-sm">
              Premium Coffee ☕
            </div>
          </div>
        </div>

        {/* Floating stat card */}
        <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-amber-200/50 hidden lg:block">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-2xl">
              🏆
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">4.9/5</p>
              <p className="text-sm text-slate-600">Member Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom scroll indicator */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-bounce">
      <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Explore More</span>
      <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
</section>
  );
}