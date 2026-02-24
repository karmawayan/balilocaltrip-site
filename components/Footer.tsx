export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        <div>
          <h3 className="text-white font-bold text-xl mb-6 tracking-tighter">BALI LOCAL TRIP</h3>
          <p className="text-sm leading-relaxed">Premium local travel services powered by AI. We provide private drivers, custom tours, and seamless airport transfers across Bali.</p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm">
          <div className="space-y-4">
            <p className="text-white font-bold uppercase tracking-widest text-[10px]">Legal</p>
            <a href="/terms" className="block hover:text-white">Terms</a>
            <a href="/privacy" className="block hover:text-white">Privacy</a>
          </div>
          <div className="space-y-4">
            <p className="text-white font-bold uppercase tracking-widest text-[10px]">Support</p>
            <a href="/contact" className="block hover:text-white">Contact Us</a>
          </div>
        </div>
        <div className="text-sm">
          <p className="text-white font-bold uppercase tracking-widest text-[10px] mb-4">Location</p>
          <p>Kuta, Badung, Bali - Indonesia</p>
          <p className="mt-4 text-xs">© {new Date().getFullYear()} Bali Local Trip.</p>
        </div>
      </div>
    </footer>
  );
}
