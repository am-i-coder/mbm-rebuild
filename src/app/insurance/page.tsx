import Link from "next/link";
import { CalendarCheck, Phone, CheckCircle, HelpCircle } from "lucide-react";

function BookBtn({ label = "Book My $149 Visit", className = "" }: { label?: string; className?: string }) {
  return (
    <a href="https://www.zocdoc.com" target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-7 py-3.5 rounded-full transition-colors shadow-lg ${className}`}>
      <CalendarCheck size={18} />
      {label}
    </a>
  );
}

const plans = [
  "Regence Blue Cross / Blue Shield",
  "Premera Blue Cross",
  "Aetna",
  "Cigna",
  "First Choice Health",
  "Kaiser Permanente",
  "Medicare",
  "United Health Care",
  "American Specialty Health (ASH)",
];

const faqs = [
  { q: "Do I need a referral?", a: "No referral is needed to see our chiropractors or massage therapists in Washington State. Just call or book online." },
  { q: "How do I know if my plan covers chiropractic?", a: "Call the member services number on the back of your insurance card and ask about chiropractic benefits. We're also happy to verify your benefits for you — call our office before your first visit." },
  { q: "What if my insurance isn't listed?", a: "Contact us before your appointment. We may still be able to bill your plan, or we can discuss affordable self-pay options." },
  { q: "Do you accept Medicare?", a: "Yes. We accept Medicare for chiropractic services. Note that Medicare covers spinal manipulation but does not cover maintenance care." },
  { q: "Is massage covered by insurance?", a: "Massage may be covered when it is medically necessary and prescribed as part of a treatment plan. We can work with your provider to document medical necessity when appropriate." },
  { q: "Is red light therapy covered?", a: "Most insurance plans do not currently cover red light therapy. We offer competitive pricing and session packages — ask the front desk for details." },
  { q: "What is the $149 new patient special?", a: "The $149 new patient special covers your full health history, orthopedic and neurological examination, postural assessment, and your first treatment — all in one visit. This is our standard new patient rate regardless of insurance." },
];

export default function InsurancePage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-20 bg-[#0d3d6e] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">Insurance</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">We Work With Your Insurance</h1>
          <p className="text-blue-100 text-lg">Most major plans accepted. No referral needed. Questions? Call us and we'll check your benefits before your visit.</p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#1A5FA8] font-semibold uppercase tracking-widest text-sm mb-2">Accepted Plans</p>
            <h2 className="text-3xl font-extrabold text-gray-900">Accepted Insurance Plans</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {plans.map(p => (
              <div key={p} className="flex items-center gap-3 bg-[#E8F4FB] rounded-xl px-5 py-4">
                <CheckCircle size={18} className="text-[#1A5FA8] shrink-0" />
                <span className="text-gray-800 font-medium">{p}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm text-center mt-6">
            Don't see your plan? <a href="tel:+12065239000" className="text-[#1A5FA8] font-semibold hover:underline">Call us at (206) 523-9000</a> — we may still be able to help.
          </p>
        </div>
      </section>

      {/* Auto accident note */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Injured in an Auto Accident?</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            We work directly with auto insurance (PIP) and personal injury attorneys. You typically pay nothing out of pocket for auto accident treatment while your claim is active.
          </p>
          <Link href="/personal-injury" className="text-[#1A5FA8] font-semibold hover:underline">
            Learn about auto accident care →
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-10">Insurance Questions Answered</h2>
          <div className="space-y-5">
            {faqs.map(f => (
              <div key={f.q} className="border border-gray-100 rounded-xl p-6 shadow-sm">
                <div className="flex gap-3 mb-2">
                  <HelpCircle size={18} className="text-[#1A5FA8] mt-0.5 shrink-0" />
                  <h3 className="font-bold text-gray-900">{f.q}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed ml-7">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0d3d6e] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-3">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-8">New patient special: full evaluation + first treatment for $149. Call to verify your benefits — we'll handle the rest.</p>
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
