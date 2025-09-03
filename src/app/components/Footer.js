export default function Footer() {
  return (
    <footer className="bg-[#4c1d95] text-[#ede9fe] shadow-[0_15px_30px_rgba(0,0,0,0.4)]">
      <div className="max-w-6xl mx-auto px-6 py-4 text-center text-sm">
        © {new Date().getFullYear()} Calculation Galaxy. All rights reserved. |
        Developed by{" "}
        <span className="text-[#a78bfa] font-semibold">Samip Gundaniya</span>
      </div>
    </footer>
  );
}
