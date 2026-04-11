import { Phone, MapPin, Clock, CalendarCheck, Mail } from "lucide-react";

function BookBtn({ label = "Book Online", className = "" }: { label?: string; className?: string }) {
  return (
    <a href="https://www.zocdoc.com" target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-7 py-3.5 rounded-full transition-colors shadow-lg ${className}`}>
      <CalendarCheck size={18} />
      {label}
    </a>
  );
}

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-20 bg-[#0d3d6e] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">Contact Us</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Get in Touch</h1>
          <p className="text-blue-100 text-lg">Call, book online, or stop by. Same-day and emergency appointments available during business hours.</p>
        </div>
      </section>

      {/* Contact Info + Map */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#E8F4FB] flex items-center justify-center shrink-0">
                <Phone size={22} className="text-[#1A5FA8]" />
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Phone</p>
                <a href="tel:+12065239000" className="text-[#1A5FA8] text-lg font-semibold hover:underline">(206) 523-9000</a>
                <p className="text-gray-500 text-sm mt-1">Fax: (206) 523-5566</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#E8F4FB] flex items-center justify-center shrink-0">
                <MapPin size={22} className="text-[#1A5FA8]" />
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Location</p>
                <p className="text-gray-700">2705 NE 65th Street</p>
                <p className="text-gray-700">Seattle, WA 98115</p>
                <p className="text-gray-500 text-sm mt-1">Ravenna neighborhood, near University District. Free on-site parking adjacent to office. Easy access by car, bus, or bicycle.</p>
                <a href="https://maps.google.com/?q=2705+NE+65th+Street+Seattle+WA+98115" target="_blank" rel="noopener noreferrer"
                  className="text-[#1A5FA8] text-sm font-semibold mt-2 inline-block hover:underline">
                  Get directions →
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#E8F4FB] flex items-center justify-center shrink-0">
                <Clock size={22} className="text-[#1A5FA8]" />
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">Office Hours</p>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between gap-8">
                    <span className="text-gray-700 font-medium">Monday – Friday</span>
                    <span className="text-gray-600">8:00am – 6:00pm</span>
                  </div>
                  <div className="flex justify-between gap-8">
                    <span className="text-gray-700 font-medium">Saturday</span>
                    <span className="text-gray-500">Closed</span>
                  </div>
                  <div className="flex justify-between gap-8">
                    <span className="text-gray-700 font-medium">Sunday</span>
                    <span className="text-gray-500">Closed</span>
                  </div>
                </div>
                <p className="text-amber-600 text-sm mt-3 font-medium">Same-day and emergency appointments available — call during business hours.</p>
              </div>
            </div>

            <div className="pt-4">
              <BookBtn label="Book an Appointment Online" />
            </div>
          </div>

          {/* Map embed */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-96 bg-gray-100">
            <iframe
              title="MindBody Med Seattle Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.4!2d-122.2988!3d47.6751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMindBody+Med!5e0!3m2!1sen!2sus!4v1"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* New patient note */}
      <section className="py-12 bg-[#E8F4FB]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">New Patient Special — $149</h3>
          <p className="text-gray-600">Full evaluation + first treatment. No referral required. Call or book online to get started.</p>
        </div>
      </section>
    </main>
  );
}
