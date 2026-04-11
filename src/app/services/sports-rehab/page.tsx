import Link from "next/link";
import { CalendarCheck, Phone, CheckCircle } from "lucide-react";

const HERO_PHOTO = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80";

function BookBtn({ label = "Book My $149 Visit", className = "" }: { label?: string; className?: string }) {
  return (
    <a href="https://www.zocdoc.com" target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-7 py-3.5 rounded-full transition-colors shadow-lg ${className}`}>
      <CalendarCheck size={18} />
      {label}
    </a>
  );
}

const conditions = [
  "Sports & Athletic Injuries", "Post-Surgical Rehab", "Rotator Cuff Tears",
  "ACL / Knee Injuries", "Ankle Sprains & Instability", "Shoulder Impingement",
  "Hip Dysfunction", "Core Weakness", "Muscle Imbalances",
];

const approach = [
  { title: "Movement Assessment", desc: "We identify the compensations and movement faults driving your pain — not just the pain site itself." },
  { title: "Manual Therapy", desc: "Hands-on joint mobilization, soft tissue work, and chiropractic adjustment to restore baseline mobility." },
  { title: "Corrective Exercise", desc: "Targeted exercises to rebuild strength, stability, and proper movement patterns specific to your sport or lifestyle." },
  { title: "Progress & Return to Activity", desc: "Clear milestones and a sport- or activity-specific progression to get you back safely — and keep you there." },
];

export default function SportsRehabPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[480px] flex items-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url('${HERO_PHOTO}')` }}>
        <div className="absolute inset-0 bg-[#0d3d6e]/78" />
        <div className="relative max-w-5xl mx-auto px-4 py-20">
          <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">Functional Rehabilitation</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight max-w-2xl">
            Rehab That Gets You Back in the Game
          </h1>
          <p className="text-blue-100 text-lg mb-8 max-w-xl">
            Movement assessment, manual therapy, and corrective exercise — building back strength and stability so the injury doesn't come back.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <BookBtn />
            <a href="tel:+12065239000"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-full border border-white/30 transition-colors">
              <Phone size={18} />
              (206) 523-9000
            </a>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-[#1A5FA8] font-semibold uppercase tracking-widest text-sm mb-2">What We Treat</p>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10">Injuries, Post-Surgery & Performance Deficits</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {conditions.map(c => (
              <span key={c} className="bg-[#E8F4FB] text-[#1A5FA8] font-medium px-4 py-2 rounded-full text-sm">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#1A5FA8] font-semibold uppercase tracking-widest text-sm mb-2">Our Approach</p>
            <h2 className="text-3xl font-extrabold text-gray-900">Fix the Cause, Not Just the Symptom</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {approach.map((a, i) => (
              <div key={a.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1A5FA8] text-white text-lg font-bold flex items-center justify-center shrink-0">{i + 1}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{a.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multidisciplinary note */}
      <section className="py-14 bg-[#E8F4FB]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Rehab That Works With Your Other Treatments</h3>
          <p className="text-gray-600 leading-relaxed">
            Our rehab programs are built alongside chiropractic care, massage, and acupuncture — all under one roof. Dr. Chevigny and Ash Chima coordinate your plan so every modality is working toward the same goal.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#0d3d6e] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-3">Start Your Recovery Today</h2>
          <p className="text-blue-100 mb-8">New patient evaluation + first treatment — $149. Most insurance accepted.</p>
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
