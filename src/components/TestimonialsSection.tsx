import React from 'react';
import { Star, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Day Trader',
      location: 'Toronto, ON',
      content: 'This calculator saved me hundreds of dollars by showing me the real cost differences between brokers. The FX fee breakdown was eye-opening!',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      role: 'Long-term Investor',
      location: 'Vancouver, BC',
      content: 'Finally, a tool that shows the true cost of trading. I switched brokers after using this and my fees dropped by 60%.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      id: 3,
      name: 'Jennifer Park',
      role: 'New Investor',
      location: 'Calgary, AB',
      content: 'As a beginner, this tool helped me understand what I was actually paying in fees. The explanations are clear and helpful.',
      rating: 5,
      avatar: '👩‍🎓'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Portfolio Manager',
      location: 'Montreal, QC',
      content: 'I recommend this calculator to all my clients. It\'s accurate, fast, and helps them make informed decisions about broker selection.',
      rating: 5,
      avatar: '👨‍💼'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Canadian Investors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of investors who use our calculator to make smarter trading decisions 
            and save money on broker fees.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="bg-blue-600 p-2 rounded-full">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="text-3xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role} • {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                10,000+
              </div>
              <div className="text-gray-600 font-medium">
                Calculations Performed
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">
                $100K+
              </div>
              <div className="text-gray-600 font-medium">
                Fees Saved by Users
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2">
                7
              </div>
              <div className="text-gray-600 font-medium">
                Brokers Compared
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">
                99.9%
              </div>
              <div className="text-gray-600 font-medium">
                Uptime Reliability
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}