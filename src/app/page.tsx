import Image from "next/image";
import { Smartphone, Sparkles, Scissors, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Mascot Image */}
        <div className="relative">
          <div className="absolute inset-0 bg-[#FEBF00] rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="relative bg-white rounded-full p-8 shadow-2xl border-4 border-[#FEBF00] mx-auto w-fit">
            <Image
              src="/images/haircat-mascot-nobg.png"
              alt="HairCat Mascot"
              width={300}
              height={300}
              priority
              className="animate-bounce-slow"
            />
          </div>
        </div>

        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold text-black animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-[#FEBF00] to-[#FFD700]">
            HairCat
          </h1>
          <p className="text-2xl md:text-3xl text-gray-800 font-medium">
            Book Hair Service Appointments Anytime, Anywhere
          </p>
          <p className="text-lg md:text-xl text-[#FEBF00] font-semibold flex items-center justify-center gap-2">
            <Sparkles className="w-6 h-6" />
            AI-Powered Hairstyle Recommendations
          </p>
        </div>

        {/* App Store Button */}
        <div className="flex justify-center gap-6 mt-8">
          <a 
            href="https://apps.apple.com/app/haircat" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transform hover:scale-105 transition-transform duration-200"
          >
            <Image
              src="/images/appstore.webp"
              alt="Available on the App Store"
              width={250}
              height={80}
              className="cursor-pointer select-none"
              priority
            />
          </a>
          <a 
            href="https://bg-app-images.s3.us-east-1.amazonaws.com/app-images/feedback/haircat"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-105 transition-transform duration-200"
          >
            <div className="bg-black rounded-md px-6 py-3 flex items-center gap-3 shadow-lg border-2 border-gray-800">
              <Image
                src="/images/android-logo.png"
                alt="Android Logo"
                width={40}
                height={40}
                className="select-none"
              />
              <div className="text-left">
                <div className="text-xs text-gray-400">GET IT ON</div>
                <div className="text-white font-semibold">Android</div>
              </div>
            </div>
          </a>
        </div>

        {/* Features Preview */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200 hover:border-[#FEBF00] transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="bg-[#FEBF00]/10 p-4 rounded-full w-fit mx-auto mb-4">
              <Smartphone className="w-8 h-8 text-[#FEBF00]" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">Mobile Booking</h3>
            <p className="text-gray-600">Book appointments instantly from anywhere, anytime</p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200 hover:border-[#FEBF00] transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="bg-[#FEBF00]/10 p-4 rounded-full w-fit mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-[#FEBF00]" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">AI Recommendations</h3>
            <p className="text-gray-600">Get personalized hairstyle suggestions powered by AI</p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200 hover:border-[#FEBF00] transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="bg-[#FEBF00]/10 p-4 rounded-full w-fit mx-auto mb-4">
              <Scissors className="w-8 h-8 text-[#FEBF00]" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">Expert Stylists</h3>
            <p className="text-gray-600">Connect with verified professional hair stylists</p>
          </div>
        </div>

        {/* Notify Me Section */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-200">
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">Stay Updated!</h3>
          <p className="text-lg mb-6 text-gray-700">
            Join our waiting list and get notified when we launch, plus receive early access!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FEBF00] border-2 border-gray-300"
              />
            </div>
            <button className="bg-[#FEBF00] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#E5AC00] transition-colors duration-200 shadow-lg border-2 border-black/10 hover:shadow-xl hover:-translate-y-0.5">
              Notify Me
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-gray-600 text-sm">
          <p>© 2025 HairCat. Your perfect hairstyle is just a tap away! ✨</p>
        </div>
      </div>
    </div>
  );
}
