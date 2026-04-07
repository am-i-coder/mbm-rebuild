import Link from "next/link";
import {
  Star, CheckCircle, Phone, CalendarCheck,
  Activity, Zap, Heart, Shield, Users, Award
} from "lucide-react";

// ── PHOTO URLS (swap for real client photos before launch) ────────────────────
const PHOTOS = {
  hero:     "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=80",
  ctaMid:   "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=80",
  ctaFinal: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80",
  chiro:    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
  massage:  "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&q=80",
  acupunc:  "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80",
  accident: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
  rehab:    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
  rlt:      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80",
};

const services = [
  { title: "Chiropractic Care",        desc: "Personalized spinal adjustments and corrective care plans designed around your specific pain and wellness goals.", href: "#",                  photo: PHOTOS.chiro    },
  { title: "Massage Therapy",          desc: "Swedish, deep tissue, sports, prenatal, and trigger-point massage from Seattle's most skilled therapists.",        href: "#",                  photo: PHOTOS.massage  },
  { title: "Acupuncture",              desc: "Traditional and modern acupuncture for pain relief, stress, energy, and whole-body balance.",                       href: "#",                  photo: PHOTOS.acupunc  },
  { title: "Auto Accident Care",       desc: "Specialized treatment for whiplash, soft tissue injuries, and crash-related pain. We work with your insurance.",    href: "/personal-injury",   photo: PHOTOS.accident },
  { title: "Functional Rehabilitation",desc: "Targeted rehab programs to restore strength, mobility, and function after injury or surgery.",                       href: "#",                  photo: PHOTOS.rehab    },
  { title: "Red Light Therapy",        desc: "FDA-registered Prism Light Pod — 17,000 LEDs, 15-minute sessions to accelerate recovery and reduce inflammation.",  href: "#",                  photo: PHOTOS.rlt      },
];

const team = [
  { name: "Dr. John Chevigny", creds: "DC, CCSP, CSCS", role: "Chiropractor & Clinic Director" },
  { name: "Dr. Gage Ford",     creds: "DC",              role: "Chiropractic Physician"         },
  { name: "John (Wan) Nguyen", creds: "EAMP",            role: "Acupuncturist"                  },
  { name: "Ash Chima",         creds: "",                role: "Sports Medicine CPT"            },
  { name: 'Mai Nguyen',        creds: "LMT",             role: "Massage Therapist"              },
  { name: "Natalie George",    creds: "LMT",             role: "Holistic Health Practitioner"   },
];

const reviews = [
  { name: "Sophie",     location: "Seattle, WA", stars: 5, text: "Dr. Chevigny made my back aches and migraines go away after two appointments. He created a plan that actually worked for me."                                       },
  { name: "Alyssa R.",  location: "Seattle, WA", stars: 5, text: "He went above and beyond — even during pregnancy when normal techniques weren't an option. Best chiropractor I've ever seen."                                        },
  { name: "Christine P.",location: "Seattle, WA", stars: 5, text: "I come here for massage and it is always wonderful. Nicole works out the kinks and I feel so much better. Low key, great price, great results."                  },
];

const insurances = [
  "UW Regence Blue Cross","Aetna","Cigna","First Choice",
  "Kaiser","Medicare","United Health Care","American Specialty Health","Premera Blue Cross",
];

// ── SHARED CTA BUTTON ─────────────────────────────────────────────────────────
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
    <a href="tel:2065239000"
      className={`inline-flex items-center justify-center gap-2 border-2 border-white/50 hover:border-white text-white font-semibold px-7 py-3.5 rounded-full transition-colors ${className}`}>
      <Phone size={18} />
      (206) 523-9000
    </a>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[88vh] flex items-center">
        {/* Background photo */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${PHOTOS.hero}')` }} />
        {/* Dark green overlay */}
        <div className="absolute inset-0 bg-[#0d3d6e]/75" />

        <div className="relative max-w-6xl mx-auto px-4 py-24 w-full grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 text-sm font-medium text-white mb-6">
              <Award size={14} className="text-amber-400" />
              Featured in the UW Medicine Clinical Referral Directory
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-white">
              The Chiropractor<br />UW Medicine<br />
              <span className="text-amber-400">Recommends.</span>
            </h1>

            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Seattle&apos;s most trusted clinic for back pain, neck pain, and injury — chiropractic, massage, acupuncture, and rehabilitation all under one roof in Ravenna.
            </p>

            {/* Offer card */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-amber-500 text-white font-black text-2xl rounded-xl px-3 py-1 leading-tight shrink-0">$149</div>
                <div>
                  <div className="font-semibold text-white">New Patient Special</div>
                  <div className="text-sm text-white/70">Exam, consultation &amp; first treatment included — a $300 value.</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <BookBtn />
              <CallBtn />
            </div>
          </div>

          {/* Trust panel */}
          <div className="hidden md:flex flex-col gap-3">
            {[
              { icon: Star,         label: "4.9★ on Google",             sub: "200+ verified patient reviews"                  },
              { icon: Users,        label: "6 licensed providers",        sub: "Chiro, massage, acupuncture & rehab"            },
              { icon: Shield,       label: "Most major insurance accepted",sub: "UW Regence, Aetna, Cigna & more"               },
              { icon: CheckCircle,  label: "Accepting new patients",      sub: "Online booking available 24/7 via ZocDoc"       },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl px-5 py-4">
                <div className="bg-amber-500/20 rounded-full p-2.5 shrink-0">
                  <Icon size={20} className="text-amber-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">{label}</div>
                  <div className="text-sm text-white/60">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-[#1A5FA8] py-4 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-white/80 font-medium">
          <span className="flex items-center gap-1.5"><Star size={13} className="fill-amber-400 text-amber-400" /> 4.9★ Google Rating</span>
          <span className="text-white/30 hidden sm:inline">|</span>
          <span>UW Medicine Referral Network</span>
          <span className="text-white/30 hidden sm:inline">|</span>
          <span>9 Insurance Plans Accepted</span>
          <span className="text-white/30 hidden sm:inline">|</span>
          <span>Ravenna &amp; U District</span>
          <span className="text-white/30 hidden sm:inline">|</span>
          <span>Online Booking via ZocDoc</span>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <div className="text-center mb-12">
          <div className="text-sm font-semibold text-[#1A5FA8] uppercase tracking-wider mb-2">What We Treat</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Comprehensive Care, One Clinic</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">Everything you need to get out of pain and stay out — chiropractic, massage, acupuncture, rehab, and more.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, desc, href, photo }) => (
            <Link key={title} href={href}
              className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-all min-h-[260px] flex flex-col justify-end">
              {/* Photo background */}
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${photo}')` }} />
              {/* Gradient overlay — stronger at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
              {/* Content */}
              <div className="relative p-6">
                <h3 className="font-bold text-white text-lg mb-1.5">{title}</h3>
                <p className="text-sm text-white/75 leading-relaxed mb-3">{desc}</p>
                <span className="text-amber-400 text-sm font-semibold group-hover:underline">Learn more →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── MID-PAGE CTA ── */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${PHOTOS.ctaMid}')` }} />
        <div className="absolute inset-0 bg-[#0d3d6e]/80" />
        <div className="relative max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to feel better?</h2>
          <p className="text-white/70 mb-8 text-lg">New patients get a full exam, consultation, and first treatment for just $149 — a $300 value.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookBtn />
            <CallBtn />
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section id="team" className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <div className="text-center mb-12">
          <div className="text-sm font-semibold text-[#1A5FA8] uppercase tracking-wider mb-2">Who We Are</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Meet Your Providers</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">Licensed specialists in chiropractic, massage therapy, acupuncture, and rehabilitation — all under one roof in Ravenna.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map(({ name, creds, role }) => (
            <div key={name} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#E8F4FB] rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users size={28} className="text-[#1A5FA8]" />
              </div>
              <div className="font-semibold text-gray-900">{name}{creds && <span className="text-[#1A5FA8]">, {creds}</span>}</div>
              <div className="text-sm text-gray-500 mt-1">{role}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-400 mt-8">Full bios &amp; provider photos coming soon.</p>
      </section>

      {/* ── REVIEWS ── */}
      <section id="reviews" className="bg-gray-50 py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold text-[#1A5FA8] uppercase tracking-wider mb-2">Patient Reviews</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Patients Say</h2>
            <div className="flex items-center justify-center gap-1 mt-3">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-amber-400 text-amber-400" />)}
              <span className="ml-2 text-gray-600 text-sm font-medium">4.9 / 5 across Google, Yelp &amp; Facebook</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map(({ name, location, stars, text }) => (
              <div key={name} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(stars)].map((_, i) => <Star key={i} size={15} className="fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed italic mb-4">&ldquo;{text}&rdquo;</p>
                <div className="text-sm font-semibold text-gray-900">{name}</div>
                <div className="text-xs text-gray-400">{location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSURANCE ── */}
      <section id="insurance" className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <div className="text-center mb-10">
          <div className="text-sm font-semibold text-[#1A5FA8] uppercase tracking-wider mb-2">Coverage</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Insurance Accepted</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">We accept most major plans, including UW Regence Blue Cross. Cash pay and bundle packages also available.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {insurances.map((ins) => (
            <span key={ins} className="bg-[#E8F4FB] text-[#1A5FA8] border border-blue-100 rounded-full px-4 py-2 text-sm font-medium">{ins}</span>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500">
          Not sure if we accept your plan?{" "}
          <a href="tel:2065239000" className="text-[#1A5FA8] font-semibold hover:underline">(206) 523-9000</a>
        </p>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${PHOTOS.ctaFinal}')` }} />
        <div className="absolute inset-0 bg-[#0d3d6e]/80" />
        <div className="relative max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start feeling better this week.</h2>
          <p className="text-white/70 mb-8 text-lg">New patients are welcome. Book online in under 2 minutes or call us directly.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookBtn />
            <CallBtn />
          </div>
        </div>
      </section>
    </>
  );
}
