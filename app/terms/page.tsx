export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-32 text-slate-700">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-2">1. Booking Policy</h2>
          <p>All bookings made through our AI Assistant are considered valid once you receive a confirmation summary. Prices quoted are final for the agreed route.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-2">2. Cancellation & Refunds</h2>
          <p>We offer a <strong>Free Cancellation</strong> policy up to 24 hours before your scheduled pickup time. Cancellations made within 12 hours may be subject to a cancellation fee.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-2">3. All-Inclusive Rates</h2>
          <p>Our rates are all-inclusive, covering the vehicle, professional driver, and fuel. Entrance fees to attractions and parking fees are generally excluded unless stated otherwise.</p>
        </section>
      </div>
    </div>
  );
}
