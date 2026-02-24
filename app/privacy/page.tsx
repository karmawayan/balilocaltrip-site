export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-32 text-slate-700">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
      <div className="space-y-6">
        <p>At <strong>Bali Local Trip</strong>, we are committed to protecting your personal data.</p>
        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-2">Data Collection</h2>
          <p>We only collect information necessary to process your travel booking, such as your name, WhatsApp number, and hotel location.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-2">How We Use Your Data</h2>
          <p>Your data is used solely for coordinating your pickup and ensuring a smooth travel experience. We never sell your personal information to third parties.</p>
        </section>
      </div>
    </div>
  );
}
