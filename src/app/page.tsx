import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
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
          <h1 className="text-6xl md:text-8xl font-bold text-black animate-fade-in">
            HairCat
          </h1>
          <p className="text-2xl md:text-3xl text-gray-800 font-medium">
            Book Hair Service Appointments Anytime, Anywhere
          </p>
          <p className="text-lg md:text-xl text-[#FEBF00] font-semibold">
            AI-Powered Hairstyle Recommendations
          </p>
        </div>

        {/* Coming Soon Message */}
        <div className="bg-gray-50 rounded-2xl p-8 shadow-xl border-2 border-[#FEBF00]">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Coming Soon
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            We&apos;re crafting the perfect mobile experience for your hair care needs. 
            Get ready to discover your ideal hairstyle and book appointments with top stylists, all powered by AI!
          </p>
        </div>

        {/* Features Preview */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-200 hover:border-[#FEBF00] transition-colors">
            <div className="text-4xl mb-3">📱</div>
            <h3 className="text-xl font-semibold text-black mb-2">Mobile Booking</h3>
            <p className="text-gray-600">Book appointments instantly from anywhere, anytime</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-200 hover:border-[#FEBF00] transition-colors">
            <div className="text-4xl mb-3">🤖</div>
            <h3 className="text-xl font-semibold text-black mb-2">AI Recommendations</h3>
            <p className="text-gray-600">Get personalized hairstyle suggestions powered by AI</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-200 hover:border-[#FEBF00] transition-colors">
            <div className="text-4xl mb-3">✂️</div>
            <h3 className="text-xl font-semibold text-black mb-2">Expert Stylists</h3>
            <p className="text-gray-600">Connect with verified professional hair stylists</p>
          </div>
        </div>

        {/* App Store Badges Preview */}
        {/* <div className="bg-[#FEBF00] rounded-2xl p-8 text-black shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Download Soon!</h3>
          <p className="text-lg mb-6 opacity-80">
            Be the first to experience the future of hair appointment booking
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-white/90 rounded-lg px-6 py-3 border-2 border-black/10">
              <div className="flex items-center gap-3">
                <div className="text-2xl">📱</div>
                <div>
                  <div className="text-sm opacity-70">Available on</div>
                  <div className="font-bold">App Store</div>
                </div>
              </div>
            </div>
            <div className="bg-white/90 rounded-lg px-6 py-3 border-2 border-black/10">
              <div className="flex items-center gap-3">
                <div className="text-2xl">🤖</div>
                <div>
                  <div className="text-sm opacity-70">Get it on</div>
                  <div className="font-bold">Google Play</div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Notify Me Section */}
        <div className="bg-gray-50 rounded-2xl p-8 shadow-xl border-2 border-gray-200">
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">Stay Updated!</h3>
          <p className="text-lg mb-6 text-gray-700">
            Join our waiting list and get notified when we launch, plus receive early access!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FEBF00] border-2 border-gray-300"
            />
            <button className="bg-[#FEBF00] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#E5AC00] transition-colors duration-200 shadow-lg border-2 border-black/10">
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
