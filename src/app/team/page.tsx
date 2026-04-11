import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, Phone, Award, GraduationCap } from "lucide-react";

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

const providers = [
  {
    name: "Dr. John Chevigny",
    creds: "DC, CCSP, CSCS",
    role: "Chiropractor & Clinic Director",
    photo: "/team/dr-john-chevigny.jpg",
    bio: "Dr. Chevigny is a Board Certified Chiropractic Sports Physician with a fellowship in Sports Medicine and extensive experience treating professional athletes and everyday patients alike. A Seattle native, he takes a team-based approach — working alongside physicians, acupuncturists, and massage therapists to deliver truly comprehensive care. His own sports injury set him on this path, and that personal experience shapes how he treats every patient: no one-size-fits-all plans here.",
    highlights: [
      "Crossfit Games 2012 & 2013",
      "AVP Professional Volleyball Circuit 2015–2016",
      "Seattle Reign FC 2015–2016",
      "Seattle Marathon 2018",
    ],
    education: [
      "Northeastern University, Boston, MA",
      "Seattle Pacific University, Seattle, WA",
      "Southern California University of Health Sciences, Whittier, CA",
      "Fellowship, Northwest Chiropractic Center & Evergreen Hospital 2015–2016",
    ],
    licenses: ["National Board Certified", "Washington State Board Certified", "CCSP", "CSCS", "Washington State Chiropractic Association"],
  },
  {
    name: "Dr. Gage Ford",
    creds: "DC",
    role: "Chiropractic Physician",
    photo: "/team/gage-ford.jpg",
    bio: "Dr. Ford is a Chiropractic Physician who combines manual therapy and functional rehabilitation with chiropractic care to manage and prevent pain and dysfunction. He uses an evidence-based approach to build treatment plans around each patient's unique goals. Originally from Columbia, Missouri, he earned his Doctorate of Chiropractic from Logan University in St. Louis before joining the MindBody Med team in June 2024. Outside the office you'll find him weightlifting, hiking, and obsessing over football.",
    highlights: [],
    education: ["Doctorate of Chiropractic, Logan University, St. Louis, MO"],
    licenses: ["National Board Certified", "Washington State Board Certified"],
  },
  {
    name: "John \"Wan\" Nguyen",
    creds: "EAMP",
    role: "Acupuncturist",
    photo: "/team/john-nguyen.jpg",
    bio: "John fell in love with acupuncture and Aikido simultaneously in 1996 at Ohio State University — drawn to the idea of healing and self-empowerment through energy. He moved to Seattle in 1997 specifically to become an acupuncturist, graduating from Bastyr University in 2000 with a Master's of Science in Acupuncture. His technique centers on a six-channel balance system using reverse imaging and mirroring, integrating microsystems within the meridians. He primarily specializes in pain management but treats the full range of the body's rhythms.",
    highlights: [],
    education: ["Master's of Science in Acupuncture, Bastyr University, Seattle, WA (2000)"],
    licenses: ["East Asian Medicine Practitioner (EAMP)", "Washington State Licensed"],
  },
  {
    name: "Ash Chima",
    creds: "ACSM-CPT",
    role: "Sports Medicine Personal Trainer & Massage Therapist",
    photo: "/team/ash-chima.jpg",
    bio: "Ash is an American College of Sports Medicine Certified Personal Trainer and sports massage therapist with over six years of experience treating athletes at the highest levels — including NBA, NFL, and NCAA athletes. He graduated from the Southern California Health Institute in Los Angeles, where he developed a specialty in Russian sports massage techniques. His clinical expertise covers conditions including thoracic outlet syndrome, frozen shoulder syndrome, and cervicalgia, bringing a precise, clinical lens to every session.",
    highlights: ["NBA, NFL, and NCAA athlete clientele"],
    education: ["Southern California Health Institute, Los Angeles, CA"],
    licenses: ["ACSM Certified Personal Trainer", "Washington State Licensed Massage Therapist"],
  },
  {
    name: "Maitram \"Mai\" Nguyen",
    creds: "LMT",
    role: "Licensed Massage Therapist",
    photo: "/team/mai-nguyen.jpg",
    bio: "Mai has been practicing massage therapy since 2006 with an unwavering focus on improving the quality of her clients' lives. Over nearly two decades she has continuously expanded her techniques and modalities — specializing in warm bamboo massage, injury rehabilitation, and reducing the cumulative effects of stress and repetitive motion. She adapts and blends multiple modalities to fit each individual's needs, always aiming to increase the health and total vitality of her patients.",
    highlights: ["Warm bamboo massage specialist", "Injury rehabilitation focus"],
    education: [],
    licenses: ["Washington State Licensed Massage Therapist"],
  },
  {
    name: "Natalie George",
    creds: "LMT",
    role: "Licensed Massage Therapist",
    photo: "/team/natalie-george.jpg",
    bio: "Natalie combines site-specific Swedish, myofascial techniques, cupping therapy, lymphatic facilitation, and energy work to calm the nervous system, release tension, and restore balance. She tailors every session to the individual's unique needs and healing journey, connecting mind and body to promote holistic healing. Natalie holds a Bachelor of Science from the University of Oregon and is a graduate of Discovery Point School of Massage. Outside the clinic she is passionate about art, film, and sound healing meditation.",
    highlights: ["Cupping therapy", "Lymphatic facilitation", "Energy work"],
    education: ["B.S. Arts, University of Oregon", "Discovery Point School of Massage"],
    licenses: ["Washington State Licensed Massage Therapist"],
  },
];

export default function TeamPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-24 bg-[#0d3d6e] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">Meet the Team</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Seattle's Most Experienced<br />Multidisciplinary Care Team
          </h1>
          <p className="text-lg text-blue-100 mb-8">
            Chiropractors, acupuncturists, and massage therapists — all under one roof, all working together for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <BookBtn />
            <CallBtn />
          </div>
        </div>
      </section>

      {/* Provider Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-20">
          {providers.map((p, i) => (
            <div key={p.name}
              className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-10 items-start`}>
              {/* Photo */}
              <div className="w-full md:w-72 shrink-0">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image src={p.photo} alt={p.name} fill className="object-cover object-top" />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-xs text-blue-600 font-semibold uppercase tracking-wide">{p.role}</p>
                </div>
              </div>

              {/* Bio */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900">{p.name}</h2>
                <p className="text-[#1A5FA8] font-semibold mb-4">{p.creds}</p>
                <p className="text-gray-600 leading-relaxed mb-5">{p.bio}</p>

                <div className="space-y-4">
                  {p.highlights.length > 0 && (
                    <div>
                      <p className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-1.5">
                        <Award size={15} className="text-amber-500" /> Notable Clients & Events
                      </p>
                      <ul className="space-y-1 ml-5">
                        {p.highlights.map(h => (
                          <li key={h} className="text-sm text-gray-600 list-disc">{h}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {p.education.length > 0 && (
                    <div>
                      <p className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-1.5">
                        <GraduationCap size={15} className="text-[#1A5FA8]" /> Education
                      </p>
                      <ul className="space-y-1 ml-5">
                        {p.education.map(e => (
                          <li key={e} className="text-sm text-gray-600 list-disc">{e}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {p.licenses.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {p.licenses.map(l => (
                        <span key={l} className="bg-[#E8F4FB] text-[#1A5FA8] text-xs font-medium px-3 py-1 rounded-full">{l}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="relative py-24 text-white text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=80')" }}
      >
        <div className="absolute inset-0 bg-[#0d3d6e]/80" />
        <div className="relative max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Meet the Team?</h2>
          <p className="text-blue-100 mb-8 text-lg">New patients get a full evaluation + treatment for just $149. No referral needed.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <BookBtn />
            <CallBtn />
          </div>
        </div>
      </section>
    </main>
  );
}
