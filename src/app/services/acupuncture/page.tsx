import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, Phone, CheckCircle, ChevronRight } from "lucide-react";

const HERO_PHOTO = "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1600&q=80";
const MID_PHOTO  = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80";

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
  "Chronic & Acute Pain", "Back & Neck Pain", "Migraines & Headaches",
  "Stress & Anxiety", "Insomnia", "Digestive Issues",
  "Fertility Support", "Fatigue & Low Energy", "Knee & Joint Pain",
  "Sports Injuries", "Post-Surgical Recovery", "Sciatica",
];

const benefits = [
  { title: "Drug-Free Pain Relief", desc: "Acupuncture stimulates the body's own pain-relief mechanisms — no side effects, no dependency." },
  { title: "Reduced Inflammation", desc: "Needle placement triggers local and systemic anti-inflammatory responses backed by modern research." },
  { title: "Stress & Nervous System Reset", desc: "Regulates the autonomic nervous system, shifting the body from 'fight or flight' to rest and recovery." },
  { title: "Improved Circulation", desc: "Increases blood flow to injured or tight areas, accelerating healing and reducing muscle tension." },
  { title: "Whole-Body Balance", desc: "Addresses root causes across multiple body systems — not just the site of pain." },
  { title: "Complements Other Treatments", desc: "Works seamlessly alongside chiropractic and massage for faster, more complete recovery." },
];

const steps = [
  { step: "01", title: "Health Intake", desc: "John takes a thorough history including your chief complaint, lifestyle, sleep, stress, and energy levels." },
  { step: "02", title: "Pulse & Tongue Diagnosis", desc: "Traditional diagnostic methods to identify underlying imbalances across organ systems." },
  { step: "03", title: "Needle Placement", desc: "Ultra-thin sterile needles are placed at specific points. Most patients feel little to no discomfort." },
  { step: "04", title: "Rest & Integrate", desc: "Needles rest in place for 20–30 minutes while you relax. Many patients fall asleep." },
];

export default function AcupuncturePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[520px] flex items-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url('${HERO_PHOTO}')` }}>
        <div className="absolute inset-0 bg-[#0d3d6e]/78" />
        <div className="relative max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">Acupuncture</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              Seattle Acupuncture for Pain, Stress & Whole-Body Health
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              24+ years of clinical experience. Bastyr-trained. Specializing in pain management with a technique refined over decades of practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <BookBtn />
              <CallBtn />
            </div>
          </div>
          <div className="hidden md:block bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <p className="font-bold text-lg mb-4">New Patient Special</p>
            <p className="text-4xl font-extrabold text-amber-400 mb-1">$149</p>
            <p className="text-blue-100 text-sm mb-4">Full intake + first acupuncture treatment</p>
            <ul className="space-y-2 text-sm">
              {["Comprehensive health history", "Traditional pulse & tongue diagnosis", "Personalized point selection", "Full treatment session included"].map(item => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle size={15} className="text-amber-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-[#1A5FA8] font-semibold uppercase tracking-widest text-sm mb-2">Conditions We Treat</p>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10">Acupuncture Works Across the Whole Body</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {conditions.map(c => (
              <span key={c} className="bg-[#E8F4FB] text-[#1A5FA8] font-medium px-4 py-2 rounded-full text-sm">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#1A5FA8] font-semibold uppercase tracking-widest text-sm mb-2">Why Acupuncture</p>
            <h2 className="text-3xl font-extrabold text-gray-900">Ancient Practice, Modern Evidence</h2>
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

      {/* What to Expect */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#1A5FA8] font-semibold uppercase tracking-widest text-sm mb-2">Your First Visit</p>
            <h2 className="text-3xl font-extrabold text-gray-900">What to Expect</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {steps.map(s => (
              <div key={s.step} className="flex gap-4">
                <div className="text-3xl font-extrabold text-[#E8F4FB] text-[#1A5FA8] w-12 shrink-0">{s.step}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid CTA with Wan bio */}
      <section className="relative py-20 text-white bg-cover bg-center"
        style={{ backgroundImage: `url('${MID_PHOTO}')` }}>
        <div className="absolute inset-0 bg-[#0d3d6e]/80" />
        <div className="relative max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-4">24 Years of Healing in Seattle</h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              John "Wan" Nguyen has been practicing acupuncture in Seattle since 2000. His technique uses a six-channel balance system — combining reverse imaging, body mirroring, and meridian microsystems to address the root cause of pain rather than just the symptom.
            </p>
            <BookBtn />
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src="/team/john-nguyen.jpg" alt="John Wan Nguyen EAMP" width={180} height={180}
              className="rounded-full object-cover object-top mb-4 border-4 border-white/20" />
            <p className="font-bold text-lg">John "Wan" Nguyen</p>
            <p className="text-amber-400 text-sm font-semibold">EAMP</p>
            <p className="text-blue-100 text-sm mt-1">Bastyr University, Class of 2000</p>
            <Link href="/team" className="mt-3 text-white/70 hover:text-white text-sm flex items-center gap-1 transition-colors">
              Full bio <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="py-12 bg-[#E8F4FB]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Insurance Accepted</h3>
          <p className="text-gray-600 text-sm">We accept most major plans including Regence, Premera, Aetna, Cigna, First Choice, Kaiser, Medicare, and more. <Link href="/insurance" className="text-[#1A5FA8] font-semibold underline">See full list →</Link></p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#0d3d6e] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-3">Ready to Feel Better?</h2>
          <p className="text-blue-100 mb-8">New patient intake + first treatment — $149. Call or book online today.</p>
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
