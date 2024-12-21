import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Check } from 'lucide-react';

type UserType = 'parent' | 'slp' | 'ei-provider' | 'other';

interface FormData {
  email: string;
  userType: UserType;
}

const WaitlistForm = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    userType: 'parent'
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    setStatus('submitting');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', formData); // For testing
      setStatus('success');
      setFormData({ email: '', userType: 'parent' });
    } catch (err) {
      setStatus('error');
      setError('Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 p-4 rounded-lg flex items-center gap-2 text-green-700">
        <Check className="w-5 h-5" />
        <span>Thank you! We'll keep you updated on our launch.</span>
      </div>
    );
  }

  return (
    <div className="max-w-md w-full mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            value={formData.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => 
              setFormData(prev => ({ ...prev, email: e.target.value }))}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900"
            disabled={status === 'submitting'}
          />
          {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>

        <div>
          <select
            value={formData.userType}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setFormData(prev => ({ ...prev, userType: e.target.value as UserType }))}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900"
            disabled={status === 'submitting'}
          >
            <option value="parent">I am a Parent</option>
            <option value="slp">I am a Speech Language Pathologist (SLP)</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {status === 'submitting' ? 'Joining...' : 'Join Waitlist'}
        </button>
      </form>
    </div>
  );
};

export default WaitlistForm;