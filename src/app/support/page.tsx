import React from 'react'
import { Mail, Phone, Clock } from 'lucide-react'
import Link from 'next/link'

const faqs = [
  {
    question: "How do I get started with HairCat?",
    answer: "Getting started is easy! Simply download the app, create an account, and follow the onboarding process. You&apos;ll be able to browse and book appointments with top-rated stylists in your area."
  },
  {
    question: "How do I book an appointment?",
    answer: "Browse through our curated list of stylists, select your preferred service, choose an available time slot, and confirm your booking. You&apos;ll receive a confirmation email with all the details."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, Apple Pay, and other secure payment methods. All transactions are encrypted and secure."
  },
  {
    question: "Can I cancel or reschedule my appointment?",
    answer: "Yes, you can cancel or reschedule your appointment up to 24 hours before the scheduled time through the app or by contacting our support team."
  }
]

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Support Center</h1>
          <p className="text-xl text-gray-600">We&apos;re here to help you with any questions or concerns</p>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="text-blue-600 w-5 h-5" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-600">support@haircat.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="text-blue-600 w-5 h-5" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-gray-600">+63 922 519 1722</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="text-blue-600 w-5 h-5" />
              <div>
                <p className="font-medium">Hours</p>
                <p className="text-gray-600">Mon-Fri: 9AM-6PM EST</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-medium text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Support */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Still need help?</p>
          <Link href="/support/ticket" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Submit a Support Ticket
          </Link>
        </div>
      </div>
    </div>
  )
}