'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form-submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          project_id: '4ba638f9-e786-44e0-b81a-b82807906ee3',  // NEW: Track which project this form belongs to
          website_id: '4ba638f9-e786-44e0-b81a-b82807906ee3',  // Legacy support
          founder_id: 'ad786eef-d254-40ca-b4aa-418fc4f475a7',    // NEW: Track project owner
          form_data: { ...formData, submitted_at: new Date().toISOString() }
        })
      });
      
      if (!response.ok) throw new Error('Form submission failed');
      
      console.log('✅ Form submitted successfully');
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 3000);
      
    } catch (error) {
      console.error('❌ Form submission error:', error);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-24 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
      </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
            <p className="text-gray-600">Thank you for reaching out. We&apos;ll get back to you soon.</p>
    </div>
  </div>
</section>
    );
      }

  return (
    <form onSubmit={handleSubmit}>
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
  <div className="max-w-2xl mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-slate-900 mb-3">Let"s Connect</h2>
      <p className="text-lg text-slate-600">Tell us about your project. We"re here to help your business grow.</p>
    </div>
    
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">Full Name</label>
        <input 
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Sarah Johnson"
          required
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-slate-900 placeholder-slate-400 transition-all"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">Email Address</label>
        <input 
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="sarah@company.com"
          required
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-slate-900 placeholder-slate-400 transition-all"
        />
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">Phone Number</label>
        <input 
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+1 (555) 123-4567"
          required
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-slate-900 placeholder-slate-400 transition-all"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">How Can We Help?</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="Share details about your project, timeline, or any questions you have..."
          required
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-white text-slate-900 placeholder-slate-400 transition-all"
        ></textarea>
      </div>
      
      <button 
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
      >
        {isSubmitting ? "Sending your message..." : "Get Started Today"}
      </button>
      
      <p className="text-xs text-slate-500 text-center">We"ll respond within 24 hours. No spam, just genuine conversations.</p>
    </div>
  </div>
</section>
    </form>
  );
}