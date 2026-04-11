import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, Phone, CheckCircle, ChevronRight } from "lucide-react";

const HERO_PHOTO = "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1600&q=80";

function BookBtn({ label = "Book My $149 Visit", className = "" }: { label?: string; className?: string }) {
  return (
    <a href="https://www.zocdoc.com" target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-7 py-3.5 rounded-full transition-colors shadow-lg ${className}`}>
      <CalendarCheck size={18} />
      {label}
    </a>
  );
}

const modalities = [
  { title: "Swedish Massage", desc: "Classic relaxation massage using long, flowing strokes to reduce stress and promote circulation." },
  { title: "Deep Tissue", desc: "Targeted pressure on deeper muscle layers and connective tissue to release chronic tension and adhesions." },
  { title: "Sports Massage", desc: "Pre- and post-activity massage designed to improve performance, reduce soreness, and prevent injury." },
  { title: "Russian Sports Massage", desc: "Specialized technique brought by Ash Chima from elite athletic training — used with NBA, NFL, and NCAA athletes." },
  { title: "Warm Bamboo Massage", desc: "Mai Nguyen's signature modality — uses warm bamboo tools to increase circulation, energy, and deep tissue release." },
  { title: "Myofascial Release", desc: "Sustained pressure into fascial restrictions to restore movement and eliminate pain across large body areas." },
  { title: "Cupping Therapy", desc: "Traditional suction technique that lifts and separates tissue to release tension and improve blood flow." },
  { title: "Lymphatic Facilitation", desc: "Gentle techniques to support lymphatic drainage — ideal for post-surgical recovery and immune support." },
  { title: "Trigger Point Therapy", desc: "Precise pressure on hyperirritable muscle knots to release referred pain patterns throughout the body." },
];

const therapists = [
  { name: "Ash Chima", creds: "ACSM-CPT, LMT", note: "Sports massage, Russian techniques, clinical conditions", photo: "/team/ash-chima.jpg" },
  { name: "Maitram \"Mai\" Nguyen", creds: "LMT", note: "Warm bamboo, injury rehab, stress & repetitive motion", photo: "/team/mai-nguyen.jpg" },
  { name: "Natalie George", creds: "LMT", note: "Swedish, myofascial, cupping, lymphatic, energy work", photo: "/team/natalie-george.jpg" },
];

export default function MassageTherapyPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[480px] flex items-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url('${HERO_PHOTO}')` }}>
        <div className="absolute inset-0 bg-[#0d3d6e]/78" />
        <div className="relative max-w-5xl mx-auto px-4 py-20">
          <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">Massage Therapy</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight max-w-2xl">
            Seattle's Most Skilled Massage Therapists — Booked Out 3 Months
          </h1>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl">
            Swedish, deep tissue, sports, Russian, warm bamboo, cupping, and more. Three licensed therapists with decades of combined experience.
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

      {/* Modalities */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#1A5FA8] font-semibold uppercase tracking-widest text-sm mb-2">What We Offer</p>
            <h2 className="text-3xl font-extrabold text-gray-900">9 Massage Modalities Under One Roof</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modalities.map(m => (
              <div key={m.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">{m.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Therapists */}
      <section className="py-16 bg-[#E8F4FB]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#1A5FA8] font-semibold uppercase tracking-widest text-sm mb-2">Your Therapists</p>
            <h2 className="text-3xl font-extrabold text-gray-900">Licensed. Experienced. Exceptional.</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {therapists.map(t => (
              <div key={t.name} className="text-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 shadow-md">
                  <Image src={t.photo} alt={t.name} fill className="object-cover object-top" />
                </div>
                <p className="font-bold text-gray-900">{t.name}</p>
                <p className="text-[#1A5FA8] text-sm font-semibold mb-1">{t.creds}</p>
                <p className="text-gray-500 text-sm">{t.note}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/team" className="text-[#1A5FA8] font-semibold text-sm flex items-center justify-center gap-1 hover:gap-2 transition-all">
              Read full bios <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Insurance note */}
      <section className="py-10 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-gray-600">Most major insurance plans accepted for massage therapy when medically necessary. <Link href="/insurance" className="text-[#1A5FA8] font-semibold underline">View accepted plans →</Link></p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#0d3d6e] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-3">We're Booked Out — But We Hold Slots for New Patients</h2>
          <p className="text-blue-100 mb-8">Call to ask about availability or book online to get on the schedule.</p>
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
