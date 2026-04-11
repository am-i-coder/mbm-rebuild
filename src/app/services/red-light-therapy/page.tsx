import Link from "next/link";
import { CalendarCheck, Phone, CheckCircle, Zap, Clock, Activity } from "lucide-react";

const HERO_PHOTO = "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1600&q=80";
const MID_PHOTO  = "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=80";

function BookBtn({ label = "Book a Session", className = "" }: { label?: string; className?: string }) {
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

const benefits = [
  { title: "Accelerated Recovery", desc: "Stimulates cellular energy production (ATP), enabling faster muscle and tissue repair after injury or training." },
  { title: "Reduced Inflammation", desc: "Clinically shown to reduce systemic and local inflammation — without drugs or side effects." },
  { title: "Pain Relief", desc: "Modulates pain signals at the cellular level. Effective for chronic and acute musculoskeletal pain." },
  { title: "Improved Circulation", desc: "Promotes nitric oxide release, expanding blood vessels and increasing oxygen delivery to tissues." },
  { title: "Skin & Collagen Support", desc: "Stimulates collagen production and skin cell renewal — benefits that extend beyond musculoskeletal health." },
  { title: "Performance Enhancement", desc: "Used by elite athletes for pre- and post-training sessions to prime muscles and reduce soreness." },
];

const conditions = [
  "Post-Surgical Recovery", "Sports & Training Recovery", "Chronic Back & Neck Pain",
  "Arthritis & Joint Pain", "Muscle Soreness & Fatigue", "Soft Tissue Injuries",
  "Wound Healing", "Neuropathy", "Fibromyalgia",
];

const podStats = [
  { icon: <Zap size={28} className="text-amber-400" />, stat: "17,000", label: "Individual LEDs" },
  { icon: <Clock size={28} className="text-amber-400" />, stat: "15 min", label: "Per session" },
  { icon: <Activity size={28} className="text-amber-400" />, stat: "360°", label: "Full body coverage" },
];

export default function RedLightTherapyPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[520px] flex items-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url('${HERO_PHOTO}')` }}>
        <div className="absolute inset-0 bg-[#0d3d6e]/78" />
        <div className="relative max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">Red Light Therapy</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              The Prism Light Pod — Seattle's Premier Red Light Therapy
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              FDA-registered. 17,000 LEDs. Full-body coverage in 15 minutes. Used by elite athletes and now available in Seattle's Ravenna neighborhood.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <BookBtn />
              <CallBtn />
            </div>
          </div>
          <div className="hidden md:block bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <p className="font-bold text-lg mb-5">The Prism Light Pod</p>
            <div className="grid grid-cols-3 gap-4 mb-5">
              {podStats.map(s => (
                <div key={s.label} className="text-center">
                  <div className="flex justify-center mb-1">{s.icon}</div>
                  <p className="text-2xl font-extrabold">{s.stat}</p>
                  <p className="text-blue-200 text-xs">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-white/20 pt-4 space-y-2 text-sm">
              {["FDA-registered device", "Red (660nm) + Near-infrared (850nm)", "Non-invasive, no UV, no heat damage", "No downtime required"].map(f => (
                <div key={f} className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-amber-400 shrink-0" />
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What is RLT */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#1A5FA8] font-semibold uppercase tracking-widest text-sm mb-2">What Is It</p>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Photobiomodulation — Your Cells on Overdrive</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Red light therapy (photobiomodulation) uses specific wavelengths of red (660nm) and near-infrared (850nm) light to penetrate skin and stimulate mitochondria — the energy powerhouses of your cells. This triggers a cascade of healing processes: more ATP production, less oxidative stress, reduced inflammation, and accelerated tissue repair.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The Prism Light Pod at MindBody Med delivers this therapy at a scale most clinics can't match — 17,000 LEDs covering your entire body simultaneously in a single 15-minute session.
            </p>
          </div>
          <div className="bg-[#E8F4FB] rounded-2xl p-8 space-y-4">
            <p className="font-bold text-gray-900 text-lg">How It Works</p>
            {[
              { n: "1", t: "Step In", d: "Lie down inside the Prism Light Pod — a full-body light enclosure." },
              { n: "2", t: "15-Minute Session", d: "17,000 LEDs emit targeted red and near-infrared wavelengths across your entire body." },
              { n: "3", t: "Cellular Activation", d: "Light energy is absorbed by mitochondria, boosting ATP and triggering repair processes." },
              { n: "4", t: "Walk Out", d: "No downtime. Most patients feel immediate improvements in pain, energy, or mobility." },
            ].map(s => (
              <div key={s.n} className="flex gap-3">
                <div className="w-7 h-7 rounded-full bg-[#1A5FA8] text-white text-sm font-bold flex items-center justify-center shrink-0">{s.n}</div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{s.t}</p>
                  <p className="text-gray-500 text-sm">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#1A5FA8] font-semibold uppercase tracking-widest text-sm mb-2">Benefits</p>
            <h2 className="text-3xl font-extrabold text-gray-900">What Red Light Therapy Does for You</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(b => (
              <div key={b.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-[#1A5FA8] font-semibold uppercase tracking-widest text-sm mb-2">Conditions</p>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10">Who Benefits Most</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {conditions.map(c => (
              <span key={c} className="bg-[#E8F4FB] text-[#1A5FA8] font-medium px-4 py-2 rounded-full text-sm">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Mid CTA */}
      <section className="relative py-20 text-white text-center bg-cover bg-center"
        style={{ backgroundImage: `url('${MID_PHOTO}')` }}>
        <div className="absolute inset-0 bg-[#0d3d6e]/80" />
        <div className="relative max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4">Pair It With Chiropractic or Massage</h2>
          <p className="text-blue-100 mb-8 text-lg">Red light therapy works best as part of a comprehensive care plan. Ask about combining your session with a chiropractic adjustment or massage for maximum results.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <BookBtn />
            <CallBtn />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-10">Common Questions</h2>
          <div className="space-y-6">
            {[
              { q: "Is it safe?", a: "Yes. Red and near-infrared light therapy is non-invasive, has no UV radiation, and produces no thermal damage to tissue. It is FDA-registered and has been studied in hundreds of peer-reviewed clinical trials." },
              { q: "How many sessions do I need?", a: "Many patients notice benefits after a single session. For chronic conditions, a series of 6–12 sessions over 2–4 weeks is typically recommended. Your provider will help you build a plan." },
              { q: "Does it hurt?", a: "Not at all. The Prism Light Pod feels like lying in warmth. Most patients find sessions deeply relaxing." },
              { q: "Can I combine it with other treatments?", a: "Absolutely — and it's often more effective that way. Red light therapy pairs particularly well with chiropractic adjustments and massage. Talk to your provider about same-day stacking." },
              { q: "Is it covered by insurance?", a: "Most insurance plans do not cover red light therapy yet. We offer competitive session pricing. Ask the front desk about session packages." },
            ].map(f => (
              <div key={f.q} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">{f.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#0d3d6e] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-3">Try the Prism Light Pod Today</h2>
          <p className="text-blue-100 mb-8">Seattle's only full-body red light therapy experience. Book a session or call to ask us anything.</p>
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
