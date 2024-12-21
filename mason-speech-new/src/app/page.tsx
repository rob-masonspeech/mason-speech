'use client';

import WaitlistForm from './components/landing/waitlistform';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-blue-900 text-center mb-4">
          Mason Speech Academy
        </h1>
        <p className="text-xl text-blue-700 text-center mb-8">
          Bridging the gap between Speech Language Pathologists and parents with engaging, evidence-based tools
        </p>
        <WaitlistForm />
      </div>

      {/* For Parents & SLPs Section */}
      <div className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Parents Card */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">For Parents</h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
                  <span>Engaging videos and songs for consistent practice</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
                  <span>Clear guidance for at-home speech activities</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
                  <span>Track your child's progress over time</span>
                </li>
              </ul>
            </div>

            {/* SLPs Card */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">For SLPs</h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
                  <span>Complete sound library with progression paths</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
                  <span>Easy-to-share resources with parents for carryover practice</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
                  <span>Evidence-based intervention materials</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Initial Sounds Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
          Explore our Resources
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">/f/ Sound</h3>
            <p className="text-gray-700 mb-4">Complete learning path including videos, songs, and practice materials designed by expert Speech Language Pathologists.</p>
            <div className="text-sm text-blue-700">Coming January 2025</div>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">/p/ Sound</h3>
            <p className="text-gray-700 mb-4">Structured progression with engaging content to support both in-session practice and at-home learning.</p>
            <div className="text-sm text-blue-700">Coming February 2025</div>
          </div>
        </div>
      </div>
    </main>
  )
}