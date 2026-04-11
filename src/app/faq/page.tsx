import Link from "next/link";
import { CalendarCheck, Phone } from "lucide-react";

function BookBtn({ label = "Book My $149 Visit", className = "" }: { label?: string; className?: string }) {
  return (
    <a href="https://www.zocdoc.com" target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-7 py-3.5 rounded-full transition-colors shadow-lg ${className}`}>
      <CalendarCheck size={18} />
      {label}
    </a>
  );
}

const faqs = [
  {
    category: "New Patients",
    items: [
      { q: "What should I expect at my first appointment?", a: "Your first visit includes a thorough health history review, orthopedic and neurological examination, postural and movement assessment, and your first treatment — all for $149. Plan for about 60–75 minutes." },
      { q: "Do I need a referral?", a: "No referral is needed. Washington State allows direct access to chiropractic and massage therapy without a physician referral." },
      { q: "What should I wear?", a: "Comfortable, loose-fitting clothing is ideal. For chiropractic appointments, athletic wear works well. We provide gowns for massage if needed." },
      { q: "How do I book an appointment?", a: "You can book online through ZocDoc, or call us at (206) 523-9000. Same-day and emergency appointments are available during business hours." },
    ],
  },
  {
    category: "Chiropractic",
    items: [
      { q: "Is chiropractic adjustment safe?", a: "Yes. Chiropractic adjustments are among the safest forms of healthcare for musculoskeletal conditions. Dr. Chevigny and Dr. Ford will review your health history and any contraindications before treatment." },
      { q: "Will I need X-rays?", a: "Not always. X-rays are ordered when clinically indicated — for example, after trauma, or when findings suggest it's needed for safe treatment. We refer out for imaging when necessary." },
      { q: "How many visits will I need?", a: "It depends on the condition, severity, and your goals. Many patients feel significant improvement in 3–6 visits. Dr. Chevigny will give you an honest assessment at your first visit." },
      { q: "Can chiropractic help with headaches?", a: "Yes — cervicogenic headaches and migraines often respond very well to chiropractic care. Spinal manipulation and soft tissue work address the cervical dysfunction that triggers many headache types." },
    ],
  },
  {
    category: "Massage Therapy",
    items: [
      { q: "How far out are you booked for massage?", a: "Our massage therapists are typically booked 2–3 months out. We recommend calling to get on the schedule as early as possible, or ask about cancellation list availability." },
      { q: "What types of massage do you offer?", a: "Swedish, deep tissue, sports massage, Russian sports massage, warm bamboo, myofascial release, cupping therapy, lymphatic facilitation, trigger point therapy, and energy work. See our massage therapy page for full descriptions." },
      { q: "Is massage covered by insurance?", a: "Massage may be covered when medically necessary as part of a treatment plan. We can document medical necessity when appropriate. Call to discuss your specific situation." },
    ],
  },
  {
    category: "Acupuncture",
    items: [
      { q: "Does acupuncture hurt?", a: "Most patients feel little to no discomfort. The needles are hair-thin — nothing like a hypodermic needle. Many patients feel deeply relaxed or even fall asleep during treatment." },
      { q: "How many acupuncture sessions do I need?", a: "Acute conditions often respond in 3–6 sessions. Chronic conditions may require 8–12 sessions for sustained improvement. John will give you a realistic treatment timeline at your first visit." },
      { q: "What conditions does acupuncture treat?", a: "Acupuncture is most commonly used for pain management, but also addresses stress, insomnia, digestive issues, fatigue, fertility support, post-surgical recovery, and overall health maintenance." },
    ],
  },
  {
    category: "Red Light Therapy",
    items: [
      { q: "What is the Prism Light Pod?", a: "The Prism Light Pod is an FDA-registered full-body red light therapy device with 17,000 LEDs delivering red (660nm) and near-infrared (850nm) light simultaneously in a 15-minute session." },
      { q: "Is red light therapy covered by insurance?", a: "Not currently. Most insurance plans do not cover photobiomodulation. We offer competitive single-session and package pricing." },
      { q: "Can I combine red light therapy with other treatments?", a: "Yes — and it's often more effective that way. Many patients do red light immediately before or after chiropractic or massage for amplified results." },
    ],
  },
  {
    category: "Auto Accident / Personal Injury",
    items: [
      { q: "How soon after an accident should I come in?", a: "As soon as possible — ideally within 24–72 hours. Early treatment improves outcomes and documents injuries for your insurance claim. Don't wait until symptoms worsen." },
      { q: "Do I pay out of pocket for auto accident treatment?", a: "Typically not. PIP (Personal Injury Protection) coverage in Washington pays for your treatment regardless of fault. We work directly with your insurance company and/or personal injury attorney." },
      { q: "What if I don't feel hurt right away?", a: "Adrenaline and inflammation can mask injury symptoms for days after a crash. Common delayed symptoms include neck pain, headaches, and back pain. Come in for an evaluation even if you feel okay." },
    ],
  },
];

export default function FAQPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-20 bg-[#0d3d6e] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">FAQ</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Frequently Asked Questions</h1>
          <p className="text-blue-100 text-lg">Everything you need to know before your first visit — and beyond.</p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 space-y-14">
          {faqs.map(section => (
            <div key={section.category}>
              <h2 className="text-xl font-extrabold text-[#1A5FA8] mb-6 pb-2 border-b border-[#E8F4FB]">{section.category}</h2>
              <div className="space-y-5">
                {section.items.map(item => (
                  <div key={item.q} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-12 bg-[#E8F4FB]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Still Have Questions?</h3>
          <p className="text-gray-600 mb-6">Call us at <a href="tel:+12065239000" className="text-[#1A5FA8] font-semibold hover:underline">(206) 523-9000</a> — we're happy to talk through anything before you book.</p>
          <BookBtn />
        </div>
      </section>
    </main>
  );
}
