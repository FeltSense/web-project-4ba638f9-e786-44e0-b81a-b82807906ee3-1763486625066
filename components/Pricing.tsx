export default function Pricing() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-2">$29</h2>
          <p className="text-amber-100 text-lg font-medium">One-time payment</p>
        </div>

        {/* Content */}
        <div className="px-8 py-12">
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold mt-1">✓</span>
              <span className="text-gray-700">Resident cats providing stress relief and companionship</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold mt-1">✓</span>
              <span className="text-gray-700">Open floor plan with abundant natural light and plants</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold mt-1">✓</span>
              <span className="text-gray-700">Dedicated quiet zones and collaborative areas</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold mt-1">✓</span>
              <span className="text-gray-700">Premium coffee/tea bar with local Argentine specialties</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold mt-1">✓</span>
              <span className="text-gray-700">Regular networking events, workshops, and community dinners</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 font-bold mt-1">✓</span>
              <span className="text-gray-700">Flexible membership options (daily, weekly, monthly)</span>
            </li>
          </ul>

          {/* Button */}
          <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get Your Website - $29
          </button>
        </div>
      </div>
    </div>
  );
}
