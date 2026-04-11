import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, Phone, CheckCircle, Award, ChevronRight } from "lucide-react";

const HERO_PHOTO = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80";
const MID_PHOTO  = "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=80";

function BookBtn({ label = "Book My $149 Visit", className = "" }: { label?: string; className?: string }) {
  return (
    <a href="https://www.zocdoc.com" target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-7 py-3.5 rounded-full transition-colors shadow-lg ${className}`}>
      <CalendarCheck size={18} />
      {label}
    </a>
  );
}

function CallBtn({ className = "" }: { className?: string }) {
  return (
    <a href="tel:+12065239000"
      className={`inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-full border border-white/30 transition-colors ${className}`}>
      <Phone size={18} />
      (206) 523-9000
    </a>
  );
}

const conditions = [
  "Back & Neck Pain", "Headaches & Migraines", "Sciatica",
  "Sports Injuries", "Auto Accident Injuries", "Whiplash",
  "Herniated Discs", "Shoulder & Hip Pain", "Posture Problems",
  "Nerve Compression", "Repetitive Strain", "Scoliosis",
];

const techniques = [
  { title: "Spinal Manipulation", desc: "Precise manual adjustments to restore proper joint movement, reduce nerve irritation, and relieve pain." },
  { title: "Soft Tissue Therapy", desc: "Myofascial release, instrument-assisted techniques, and trigger-point work to address muscle and connective tissue." },
  { title: "Functional Rehabilitation", desc: "Targeted exercises to rebuild strength, stability, and movement patterns — so the problem doesn't come back." },
  { title: "Functional Taping", desc: "Kinesio and rigid taping to support joints, reduce swelling, and allow safe return to activity." },
  { title: "Sports Medicine", desc: "Board-certified sports chiropractic (CCSP) for athletes at every level — from weekend warriors to pros." },
  { title: "Corrective Care Plans", desc: "Long-term programs addressing the root cause, not just the symptom — built around your specific goals." },
];

const whyUs = [
  "UW Medicine Clinical Referral Partner",
  "Board Certified Sports Physician (CCSP, CSCS)",
  "Multidisciplinary team: chiro + massage + acupuncture in one visit",
  "Professional athlete experience: AVP Volleyball, Seattle Reign FC, Seattle Marathon",
  "Most major insurance plans accepted",
  "Same-day and emergency appointments available",
];

export default function ChiropracticPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[520px] flex items-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url('${HERO_PHOTO}')` }}>
        <div className="absolute inset-0 bg-[#0d3d6e]/78" />
        <div className="relative max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">Chiropractic Care</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              Seattle's Sports Chiropractic Specialists
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              Board-certified, UW-referred, and experienced with professional athletes. Real treatment plans — not just an adjustment and out the door.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <BookBtn />
              <CallBtn />
            </div>
          </div>
          <div className="hidden md:block bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <p className="font-bold text-lg mb-4">New Patient Special</p>
            <p className="text-4xl font-extrabold text-amber-400 mb-1">$149</p>
            <p className="text-blue-100 text-sm mb-4">Full evaluation + first treatment</p>
            <ul className="space-y-2 text-sm">
              {["Health history & goals review", "Orthopedic & neurological exam", "Postural & movement assessment", "First treatment included"].map(item => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle size={15} className="text-amber-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-[#1A5FA8] font-semibold uppercase tracking-widest text-sm mb-2">Conditions We Treat</p>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10">If It Hurts, We've Treated It</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {conditions.map(c => (
              <span key={c} className="bg-[#E8F4FB] text-[#1A5FA8] font-medium px-4 py-2 rounded-full text-sm">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Techniques */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#1A5FA8] font-semibold uppercase tracking-widest text-sm mb-2">How We Treat</p>
            <h2 className="text-3xl font-extrabold text-gray-900">No One-Size-Fits-All</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">Dr. Chevigny employs a wide variety of techniques — every person is unique and will be cared for as such.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techniques.map(t => (
              <div key={t.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">{t.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid CTA */}
      <section className="relative py-20 text-white text-center bg-cover bg-center"
        style={{ backgroundImage: `url('${MID_PHOTO}')` }}>
        <div className="absolute inset-0 bg-[#0d3d6e]/80" />
        <div className="relative max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4">UW Medicine Clinical Referral Partner</h2>
          <p className="text-blue-100 mb-8">MindBody Med is listed in the UW Medicine Clinical Referral Directory — one of the highest trust signals a Seattle chiropractic practice can earn.</p>
          <BookBtn />
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#1A5FA8] font-semibold uppercase tracking-widest text-sm mb-2">Why MindBody Med</p>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Credentials Backed by Results</h2>
            <ul className="space-y-3">
              {whyUs.map(w => (
                <li key={w} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#1A5FA8] mt-0.5 shrink-0" />
                  <span className="text-gray-700">{w}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#E8F4FB] rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/team/dr-john-chevigny.jpg" alt="Dr. John Chevigny" width={64} height={64} className="rounded-full object-cover object-top" />
              <div>
                <p className="font-bold text-gray-900">Dr. John Chevigny</p>
                <p className="text-sm text-[#1A5FA8]">DC, CCSP, CSCS</p>
              </div>
            </div>
            <p className="text-gray-600 italic text-sm leading-relaxed">
              "My own sports injury set me on this path. I know what it feels like to be sidelined — and I know how to get you back to the things you love. There's no cookie-cutter plan here."
            </p>
            <div className="mt-4 pt-4 border-t border-blue-200">
              <Link href="/team" className="text-[#1A5FA8] text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                Meet the full team <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#0d3d6e] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-3">Stop Waiting. Start Healing.</h2>
          <p className="text-blue-100 mb-8">New patient evaluation + first treatment — $149. Most insurance accepted. Same-day appointments available.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <BookBtn />
            <a href="tel:+12065239000"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-full border border-white/30 transition-colors">
              <Phone size={18} />
              (206) 523-9000
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
