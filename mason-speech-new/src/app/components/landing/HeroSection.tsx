import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  return (
    <header className="bg-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Revolutionizing Early Speech Intervention
          </h1>
          <p className="text-xl text-blue-700 mb-8">
            Bridging the gap between Speech Language Pathologists and parents with engaging, evidence-based tools
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700">
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};