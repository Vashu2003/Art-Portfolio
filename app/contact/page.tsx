'use client'; // Mark this as a Client Component
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { data } from '../../data/data';

export default function Contact() {
  const { title, description, email, phone } = data.contact;
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch('https://formspree.io/f/your_form_id', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success'); // Show success message
      } else {
        setStatus('error'); // Show error message
      }
    } catch (error) {
      setStatus('error'); // Show error message
    }
  };

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        {/* Contact Section */}
        <section className="text-center">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="text-lg mt-4">{description}</p>

          {/* Contact Information */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <strong>Email:</strong>{' '}
                <a href={`mailto:${email}`} className="text-primary hover:underline">
                  {email}
                </a>
              </li>
              <li>
                <strong>Phone:</strong>{' '}
                <a href={`tel:${phone}`} className="text-primary hover:underline">
                  {phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="mt-8 max-w-lg mx-auto">
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
              >
                Send Message
              </button>
            </div>

            {/* Success/Error Message */}
            {status === 'success' && (
              <p className="mt-4 text-green-600">Thank you! Your message has been sent.</p>
            )}
            {status === 'error' && (
              <p className="mt-4 text-red-600">Oops! Something went wrong. Please try again.</p>
            )}
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
