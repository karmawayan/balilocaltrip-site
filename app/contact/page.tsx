export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-32">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact Us</h1>
      <p className="text-slate-500 mb-12 text-xl">Need assistance? We are here to help.</p>
      
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-lg font-bold mb-4">Fast Response</h3>
          <p className="text-slate-600 mb-6">For instant booking and quotes, please use our <strong>AI Assistant</strong> on the homepage. It is available 24/7.</p>
          
          <h3 className="text-lg font-bold mb-2">Email</h3>
          <p className="text-slate-600 mb-6">hello@balilocaltrip.com</p>
          
          <h3 className="text-lg font-bold mb-2">Location</h3>
          <p className="text-slate-600 italic">Kuta, Badung, Bali - Indonesia</p>
        </div>
        
        <div className="bg-blue-600 rounded-3xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Why Book With Us?</h3>
          <ul className="space-y-4 text-blue-100">
            <li>✓ 24/7 Smart AI Support</li>
            <li>✓ Modern & Clean Vehicles</li>
            <li>✓ English-Speaking Drivers</li>
            <li>✓ No Hidden Fees</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
