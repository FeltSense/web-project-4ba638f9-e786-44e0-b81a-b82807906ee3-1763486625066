'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
  <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
    <div className="grid md:grid-cols-4 gap-8 md:gap-12 lg:gap-16 mb-12 md:mb-16">
      {/* Company */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-6">Tech Business</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          Empowering businesses with cutting-edge technology solutions and innovative strategies.
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 002.856-3.515 10 10 0 01-2.836.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m-2 16h-2v-8h2v8zm-1-9.309c-.613 0-1.11-.504-1.11-1.127 0-.623.496-1.129 1.11-1.129s1.11.506 1.11 1.129c0 .623-.496 1.127-1.11 1.127m8.469 9.309h-2v-4.269c0-1.087-.02-2.482-1.514-2.482-1.514 0-1.746 1.182-1.746 2.402v4.349h-2v-8h1.923v1.135h.028c.268-.507.922-1.41 1.898-1.41 2.025 0 2.399 1.333 2.399 3.07v5.205z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.807 0-9.726h3.554v1.375c.427-.659 1.191-1.595 2.897-1.595 2.117 0 3.704 1.385 3.704 4.362v5.584zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.956.77-1.71 1.954-1.71 1.184 0 1.915.754 1.915 1.71 0 .951-.73 1.71-1.954 1.71zm1.581 11.597H3.635V9.581h3.283v10.871zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Services */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-6">Services</h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Cloud Solutions
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Digital Strategy
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              AI & Automation
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Cybersecurity
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Consulting
            </a>
          </li>
        </ul>
      </div>

      {/* Company */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-6">Company</h3>
        <ul className="space-y-2">
          <li>
            <a href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
              Home
            </a>
          </li>
          <li>
            <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors text-sm">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Careers
            </a>
          </li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-6">Get In Touch</h3>
        <div className="space-y-4">
          <div>
            <p className="text-gray-400 text-sm mb-1">Email</p>
            <a href="mailto:hello@techbusiness.com" className="text-white hover:text-blue-500 transition-colors text-sm font-medium">
              hello@techbusiness.com
            </a>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-1">Phone</p>
            <a href="tel:+1-800-TECH-BIZ" className="text-white hover:text-blue-500 transition-colors text-sm font-medium">
              +1 (800) 832-4249
            </a>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-1">Address</p>
            <p className="text-gray-400 text-sm">
              123 Innovation Drive<br />
              San Francisco, CA 94102
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="border-t border-gray-800 pt-8 mt-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">
          © 2025 Tech Business. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors text-sm">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors text-sm">
            Terms of Service
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors text-sm">
            Cookie Settings
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
  );
}