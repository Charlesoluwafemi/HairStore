export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-[#d4af37] py-10 px-6 md:px-12">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border border-[#d4af37] flex items-center justify-center">EH</div>
            <span className="font-bold">EVERYTHING HAIR & CO.</span>
          </div>
          <p className="mt-3 text-sm text-gray-400">You Define Your Style<br/>REVAMP. RESTYLE. REWIG.</p>
        </div>
        <div className="text-sm space-y-2">
          <p>About us</p><p>Contact us</p><p>Shipment Policy</p><p>Return Policy</p><p>Privacy Policy</p>
        </div>
        <div className="text-sm">
          <p>Warri, Delta State, NG</p><p>WhatsApp: +234 000 000 0000</p><p>Email: hello@everythinghair.co</p>
        </div>
        <div className="text-sm">
          <p>Subscribe for deals</p>
          <div className="flex mt-2"><input placeholder="Email" className="px-3 py-2 bg-white/10 text-white" /><button className="bg-[#d4af37] text-black px-4">Join</button></div>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-gray-500">© 2026 Everything Hair & Co. All rights reserved.</div>
    </footer>
  );
}
