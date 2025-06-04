import React from 'react'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="prose prose-blue max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                Welcome to HairCat (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and related services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-medium mb-2">2.1 Personal Information</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Name and contact information</li>
                <li>Email address and phone number</li>
                <li>Profile information and preferences</li>
                <li>Payment information (processed securely through our payment providers)</li>
                <li>Booking history and appointment details</li>
                <li>Device information and usage data</li>
                <li>Face data (collected with explicit consent for virtual try-on features)</li>
              </ul>

              <h3 className="text-xl font-medium mb-2">2.2 Automatically Collected Information</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>IP address and device identifiers</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>App usage statistics and crash reports</li>
                <li>Location data (with your consent)</li>
              </ul>

              <h3 className="text-xl font-medium mb-2">2.3 Face Data Collection and Usage</h3>
              <p className="text-gray-700 mb-4">
                HairCat collects and processes face data to provide virtual try-on features for hairstyles and hair colors. This data is considered sensitive personal information and is handled with the utmost care and security.
              </p>
              
              <h4 className="text-xl font-medium mb-2">What We Collect</h4>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Facial features and structure for virtual try-on purposes</li>
                <li>Basic facial measurements for accurate hair placement</li>
                <li>No biometric data is stored or processed for identification purposes</li>
              </ul>

              <h4 className="text-xl font-medium mb-2">How We Use Face Data</h4>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>To provide virtual try-on features for hairstyles and hair colors</li>
                <li>To improve the accuracy of virtual hair placement</li>
                <li>To enhance user experience with personalized recommendations</li>
                <li>To develop and improve our virtual try-on technology</li>
              </ul>

              <h4 className="text-xl font-medium mb-2">Data Storage and Retention</h4>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Face data is stored securely on our servers using industry-standard encryption</li>
                <li>Data is retained only for the duration of your active account</li>
                <li>You can request immediate deletion of your face data at any time</li>
                <li>Data is automatically deleted after 30 days of account inactivity</li>
              </ul>

              <h4 className="text-xl font-medium mb-2">Third-Party Sharing</h4>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Face data is never shared with third parties for marketing purposes</li>
                <li>We may use trusted cloud service providers for secure data storage</li>
                <li>Any third-party access is strictly limited and bound by confidentiality agreements</li>
                <li>We do not sell or monetize face data in any way</li>
              </ul>

              <p className="text-gray-700 mb-4">
                You have complete control over your face data. You can:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Opt-out of face data collection at any time</li>
                <li>Request immediate deletion of your face data</li>
                <li>Access and download your face data</li>
                <li>Modify or update your face data preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use the collected information for various purposes:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>To provide and maintain our services</li>
                <li>To process your bookings and payments</li>
                <li>To send appointment reminders and notifications</li>
                <li>To improve our services and user experience</li>
                <li>To communicate with you about updates and promotions</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Data Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">We may share your information with:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Hair salons and stylists you book with</li>
                <li>Payment processors and financial institutions</li>
                <li>Service providers and business partners</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
                <li>Data portability</li>
                <li>Withdraw consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Children&apos;s Privacy</h2>
              <p className="text-gray-700 mb-4">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Changes to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">Email: admin@haircat.com</p>
                <p className="text-gray-700">Phone: +63 922 519 1722</p>
                <p className="text-gray-700">Address: University of the Philippines Cebu, Lahug, Cebu City, Philippines</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
} 