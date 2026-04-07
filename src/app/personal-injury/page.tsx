import { CalendarCheck, Phone, Shield, CheckCircle, AlertCircle, Clock, FileText, Activity } from "lucide-react";

const injuries = [
  { title: "Whiplash", desc: "The most common auto injury. Neck pain, stiffness, and headaches often appear 24–72 hours after impact — don't wait." },
  { title: "Herniated Disc", desc: "Crash forces can rupture spinal discs, causing radiating pain, numbness, or weakness in the arms or legs." },
  { title: "Soft Tissue Injuries", desc: "Sprains, strains, and muscle tears are common but often dismissed. Left untreated, they become chronic." },
  { title: "Back & Neck Pain", desc: "Spinal misalignment from impact causes pain that worsens without proper treatment. We identify and correct the source." },
  { title: "Headaches & Migraines", desc: "Post-accident headaches are often referred pain from neck and spinal injuries — not just stress." },
  { title: "Nerve Compression", desc: "Swelling and misalignment after a crash can compress nerves, causing tingling, burning, or loss of sensation." },
];

const treatments = [
  { icon: Activity, title: "Chiropractic Adjustments", desc: "Spinal realignment to relieve pressure, reduce inflammation, and restore normal movement." },
  { icon: Shield, title: "Massage Therapy", desc: "Breaks up scar tissue, increases circulation, and relieves muscle tension from impact." },
  { icon: CheckCircle, title: "Functional Rehabilitation", desc: "Targeted exercises to restore range of motion, strength, and stability." },
  { icon: Activity, title: "Acupuncture", desc: "Reduces pain and inflammation while supporting the nervous system's recovery." },
];

const steps = [
  { icon: Phone, step: "01", title: "Call or Book Online", desc: "Contact us as soon as possible after your accident. Early treatment leads to significantly better outcomes." },
  { icon: FileText, step: "02", title: "Comprehensive Assessment", desc: "We conduct a full evaluation — exam, X-rays if needed, injury mapping — to understand the full scope of your injuries." },
  { icon: Activity, step: "03", title: "Personalized Treatment Plan", desc: "We build a plan around your specific injuries and recovery goals, not a one-size-fits-all protocol." },
  { icon: CheckCircle, step: "04", title: "Documentation Support", desc: "We provide thorough records of your injuries and treatment — critical for any insurance or legal process." },
];

const insurances = [
  "UW Regence Blue Cross", "Aetna", "Cigna", "First Choice",
  "Kaiser", "Medicare", "United Health Care", "American Specialty Health", "Premera Blue Cross",
];

export default function PersonalInjuryPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80')" }} />
        <div className="absolute inset-0 bg-[#0d3d6e]/78" />
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <AlertCircle size={14} className="text-yellow-300" />
              Injured in a car accident? Don&apos;t wait.
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Seattle Auto<br />Accident<br />
              <span className="text-blue-200">Chiropractor</span>
            </h1>

            <p className="text-lg text-blue-100 mb-6 leading-relaxed">
              Many crash injuries don&apos;t show symptoms for days — or longer. We specialize in diagnosing and treating auto accident injuries without surgery, and we work directly with your insurance.
            </p>

            <div className="bg-white/10 border border-white/20 rounded-2xl p-4 mb-8 backdrop-blur-sm flex items-start gap-3">
              <Clock size={18} className="text-yellow-300 shrink-0 mt-0.5" />
              <div className="text-sm text-blue-100">
                <span className="font-semibold text-white">Time matters after an accident.</span> Washington state gives you 3 years to file a claim, but the sooner treatment begins, the better your recovery — and the stronger your documentation.
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://www.zocdoc.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-6 py-3.5 rounded-full transition-colors text-base"
              >
                <CalendarCheck size={18} />
                Book Assessment Now
              </a>
              <a
                href="tel:2065239000"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold px-6 py-3.5 rounded-full transition-colors text-base"
              >
                <Phone size={18} />
                (206) 523-9000
              </a>
            </div>
          </div>

          {/* Trust signals */}
          <div className="hidden md:flex flex-col gap-4">
            {[
              { icon: Shield, label: "We bill your insurance directly", sub: "PIP, liability, and major health plans accepted" },
              { icon: FileText, label: "Thorough injury documentation", sub: "Records that support your insurance claim" },
              { icon: CheckCircle, label: "No surgery required", sub: "Effective non-invasive treatment for most auto injuries" },
              { icon: Activity, label: "Same-week appointments available", sub: "Don't delay — early treatment matters" },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-4 bg-white/10 border border-white/15 rounded-2xl px-5 py-4 backdrop-blur-sm">
                <div className="bg-white/15 rounded-full p-2.5 shrink-0">
                  <Icon size={20} className="text-yellow-300" />
                </div>
                <div>
                  <div className="font-semibold text-white">{label}</div>
                  <div className="text-sm text-blue-200">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LATE SYMPTOM WARNING */}
      <section className="bg-amber-50 border-y border-amber-200 py-6 px-4">
        <div className="max-w-3xl mx-auto flex items-start gap-4">
          <AlertCircle size={22} className="text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-amber-900">Symptoms often appear 24–72 hours after a crash — or longer.</span>
            <span className="text-amber-800 text-sm ml-1">Whiplash, herniated discs, and soft tissue injuries are frequently missed in emergency rooms. If you were in an accident, get a proper musculoskeletal evaluation even if you feel fine today.</span>
          </div>
        </div>
      </section>

      {/* COMMON INJURIES */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <div className="text-center mb-12">
          <div className="text-sm font-semibold text-[#1A5FA8] uppercase tracking-wider mb-2">What We Treat</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Common Auto Accident Injuries</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            These injuries respond well to chiropractic care, massage, and rehabilitation — without surgery or heavy medication.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {injuries.map(({ title, desc }) => (
            <div key={title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <div className="w-8 h-8 bg-[#E8F4FB] rounded-lg flex items-center justify-center mb-3">
                <CheckCircle size={16} className="text-[#1A5FA8]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="relative py-16 px-4 overflow-hidden text-white">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=80')" }} />
        <div className="absolute inset-0 bg-[#0d3d6e]/80" />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Been in an accident? Get evaluated today.</h2>
          <p className="text-blue-200 mb-6">Early treatment protects your health and your claim. Same-week appointments available.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://www.zocdoc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-8 py-3.5 rounded-full transition-colors"
            >
              <CalendarCheck size={18} />
              Book Assessment Now
            </a>
            <a
              href="tel:2065239000"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-3.5 rounded-full transition-colors"
            >
              <Phone size={18} />
              (206) 523-9000
            </a>
          </div>
        </div>
      </section>

      {/* HOW WE TREAT */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <div className="text-center mb-12">
          <div className="text-sm font-semibold text-[#1A5FA8] uppercase tracking-wider mb-2">Our Approach</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How We Treat Auto Injuries</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            A comprehensive, non-surgical approach that addresses the root cause — not just the symptoms.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {treatments.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-5 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-[#E8F4FB] rounded-xl flex items-center justify-center shrink-0">
                <Icon size={22} className="text-[#1A5FA8]" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1.5">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-gray-50 py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold text-[#1A5FA8] uppercase tracking-wider mb-2">What to Expect</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Your Path to Recovery</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ icon: Icon, step, title, desc }) => (
              <div key={step} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm text-center">
                <div className="text-4xl font-black text-[#E8F4FB] mb-3">{step}</div>
                <div className="w-10 h-10 bg-[#E8F4FB] rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon size={18} className="text-[#1A5FA8]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSURANCE */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-sm font-semibold text-[#1A5FA8] uppercase tracking-wider mb-2">Insurance & Billing</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">We Work With Your Insurance</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We accept Personal Injury Protection (PIP), liability coverage, and most major health insurance plans. Our team handles the billing process so you can focus on recovery.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Cash pay and custom care packages are also available for patients without coverage.
            </p>
            <a
              href="tel:2065239000"
              className="inline-flex items-center gap-2 text-[#1A5FA8] font-semibold hover:underline"
            >
              <Phone size={16} />
              Questions about coverage? Call (206) 523-9000
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            {insurances.map((ins) => (
              <span
                key={ins}
                className="bg-[#E8F4FB] text-[#1A5FA8] border border-blue-100 rounded-full px-4 py-2 text-sm font-medium"
              >
                {ins}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-20 px-4 overflow-hidden text-white">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80')" }} />
        <div className="absolute inset-0 bg-[#0d3d6e]/80" />
        <div className="relative max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Don&apos;t let crash injuries become chronic pain.</h2>
          <p className="text-blue-200 mb-8 text-lg">
            The sooner you start treatment, the better your outcome. Book an assessment today — same-week availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.zocdoc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-8 py-4 rounded-full transition-colors text-base"
            >
              <CalendarCheck size={18} />
              Book Assessment Now
            </a>
            <a
              href="tel:2065239000"
              className="flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-full transition-colors text-base"
            >
              <Phone size={18} />
              (206) 523-9000
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
