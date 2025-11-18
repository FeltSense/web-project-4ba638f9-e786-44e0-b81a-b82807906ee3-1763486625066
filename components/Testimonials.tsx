import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50 overflow-hidden">
  {/* Decorative paw prints */}
  <div className="absolute top-20 left-10 opacity-10 text-amber-600 text-6xl">🐾</div>
  <div className="absolute bottom-32 right-16 opacity-10 text-orange-600 text-7xl">🐾</div>
  <div className="absolute top-40 right-1/4 opacity-10 text-amber-500 text-5xl">🐾</div>
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 bg-amber-200/50 text-amber-900 px-4 py-2 rounded-full text-sm font-medium mb-4">
        <span className="text-lg">😻</span>
        <span>Loved by our community</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        What Our Members Say
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Real stories from entrepreneurs and creatives who found their purr-fect workspace
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {/* Testimonial 1 */}
      <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-amber-100">
        <div className="absolute -top-4 -right-4 bg-gradient-to-br from-orange-400 to-amber-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-lg group-hover:rotate-12 transition-transform duration-500">
          😸
        </div>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <Image 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" 
              width={64} 
              height={64} 
              alt="Sofia Martinez"
              className="rounded-full ring-4 ring-amber-200"
            />
            <div className="absolute -bottom-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-white"></div>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg">Sofia Martínez</h4>
            <p className="text-amber-700 text-sm">UX Designer & Cat Enthusiast</p>
          </div>
        </div>
        
        <div className="mb-4 flex gap-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-amber-400 text-xl">★</span>
          ))}
        </div>
        
        <p className="text-gray-700 leading-relaxed">
          "I&apos;ve increased my productivity by <span className="font-bold text-orange-600">40% since joining</span> three months ago. Having Luna the tabby cat curl up next to me during deep work sessions is therapeutic. The natural light and wooden desks make it feel like home, not an office."
        </p>
      </div>

      {/* Testimonial 2 */}
      <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-orange-100">
        <div className="absolute -top-4 -right-4 bg-gradient-to-br from-amber-400 to-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-lg group-hover:rotate-12 transition-transform duration-500">
          😺
        </div>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <Image 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
              width={64} 
              height={64} 
              alt="Thomas Beaumont"
              className="rounded-full ring-4 ring-orange-200"
            />
            <div className="absolute -bottom-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-white"></div>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg">Thomas Beaumont</h4>
            <p className="text-orange-700 text-sm">Startup Founder</p>
          </div>
        </div>
        
        <div className="mb-4 flex gap-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-amber-400 text-xl">★</span>
          ))}
        </div>
        
        <p className="text-gray-700 leading-relaxed">
          "Closed <span className="font-bold text-orange-600">two major partnership deals</span> from connections I made at the networking events here. The community vibe is unmatched - everyone&apos;s supportive, not competitive. Plus, the cortado from the coffee bar is the best in Palermo."
        </p>
      </div>

      {/* Testimonial 3 */}
      <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-amber-100">
        <div className="absolute -top-4 -right-4 bg-gradient-to-br from-orange-500 to-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-lg group-hover:rotate-12 transition-transform duration-500">
          😻
        </div>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <Image 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" 
              width={64} 
              height={64} 
              alt="Valentina Rossi"
              className="rounded-full ring-4 ring-amber-200"
            />
            <div className="absolute -bottom-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-white"></div>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg">Valentina Rossi</h4>
            <p className="text-amber-700 text-sm">Content Strategist</p>
          </div>
        </div>
        
        <div className="mb-4 flex gap-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-amber-400 text-xl">★</span>
          ))}
        </div>
        
        <p className="text-gray-700 leading-relaxed">
          "Working from home was isolating. Here, I&apos;ve built genuine friendships and my stress levels dropped significantly. <span className="font-bold text-orange-600">The cat lounge is my secret weapon</span> - 10 minutes with Mochi between calls resets my entire mood. This place saved my mental health."
        </p>
      </div>
    </div>

    {/* Feature Testimonial - Full Width */}
    <div className="relative bg-gradient-to-r from-amber-100 via-orange-100 to-amber-100 rounded-3xl p-8 md:p-12 shadow-xl border-2 border-amber-200 overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-300 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-300 rounded-full blur-3xl opacity-20"></div>
      
      <div className="relative grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-1 flex justify-center">
          <div className="relative">
            <Image 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" 
              width={160} 
              height={160} 
              alt="Diego Fernández"
              className="rounded-full ring-8 ring-white shadow-2xl"
            />
            <div className="absolute -bottom-2 -right-2 bg-gradient-to-br from-orange-500 to-amber-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              6 months
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-amber-500 text-2xl">★</span>
              ))}
            </div>
            <span className="text-gray-600 font-medium">Featured Review</span>
          </div>
          
          <h4 className="font-bold text-gray-900 text-2xl mb-2">Diego Fernández</h4>
          <p className="text-orange-700 font-medium mb-4">Tech Entrepreneur & Community Leader</p>
          
          <p className="text-gray-800 text-lg leading-relaxed mb-6">
            "I moved my entire <span className="font-bold text-orange-600">12-person startup team here</span> and we&apos;ve never looked back. The open floor plan lets us collaborate freely, while the cat lounges give us space to decompress. We&apos;ve hosted <span className="font-bold text-orange-600">3 successful workshops</span> in the event space and the premium coffee keeps our energy high. What really stands out is how the space is designed - the warm wood, the art featuring local cats, the abundant sunlight. It feels intentional, thoughtful. This isn&apos;t just a desk rental; it&apos;s a community that genuinely cares about your success."
          </p>
          
          <div className="flex flex-wrap gap-3">
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow">🚀 Team Growth</span>
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow">🎯 Event Host</span>
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow">😸 Cat Lover</span>
          </div>
        </div>
      </div>
    </div>

    {/* Stats Bar */}
    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
      <div className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
        <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
        <div className="text-gray-600 text-sm">Member Satisfaction</div>
      </div>
      <div className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
        <div className="text-4xl font-bold text-amber-600 mb-2">150+</div>
        <div className="text-gray-600 text-sm">Active Members</div>
      </div>
      <div className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
        <div className="text-4xl font-bold text-orange-600 mb-2">7</div>
        <div className="text-gray-600 text-sm">Resident Cats</div>
      </div>
      <div className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
        <div className="text-4xl font-bold text-amber-600 mb-2">24/7</div>
        <div className="text-gray-600 text-sm">Access Available</div>
      </div>
    </div>
  </div>
</section>
  );
}