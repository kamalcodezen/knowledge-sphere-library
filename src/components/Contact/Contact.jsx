import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-emerald-50 to-green-100 py-12 animate-fadeIn">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight">
            Contact Us
          </h1>
          <p className="mt-3 text-sm md:text-base text-gray-600">
            Have questions about catalog membership, donations, or library policies? Get in touch with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Info Panel */}
          <div className="md:col-span-5 flex flex-col gap-6">
            
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-emerald-50 flex flex-col gap-6">
              <h2 className="font-bold text-gray-800 text-lg border-b border-gray-100 pb-3">Get in Touch</h2>
              
              <div className="flex items-start gap-4">
                <span className="p-3 bg-emerald-50 text-emerald-700 rounded-xl text-lg">
                  <FaPhoneAlt />
                </span>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Call Us</p>
                  <a href="tel:+8801700000000" className="font-semibold text-gray-700 hover:text-emerald-600 transition">+880 1700-000000</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="p-3 bg-emerald-50 text-emerald-700 rounded-xl text-lg">
                  <FaEnvelope />
                </span>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Email Us</p>
                  <a href="mailto:info@bhairabpathagar.com" className="font-semibold text-gray-700 hover:text-emerald-600 transition">info@bhairabpathagar.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="p-3 bg-emerald-50 text-emerald-700 rounded-xl text-lg">
                  <FaMapMarkerAlt />
                </span>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Visit Us</p>
                  <p className="font-semibold text-gray-700">Bhairab Bazar Road, Kishoreganj, Bangladesh</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="p-3 bg-emerald-50 text-emerald-700 rounded-xl text-lg">
                  <FaClock />
                </span>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Open Hours</p>
                  <p className="font-semibold text-gray-700">Sat - Thu: 9:00 AM - 8:00 PM</p>
                  <p className="text-xs text-gray-400 font-semibold mt-0.5">Friday: Closed</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-emerald-50 h-56 relative flex items-center justify-center p-6 text-center">
              <div className="absolute inset-0 bg-emerald-100/30 opacity-60"></div>
              <div className="relative z-10">
                <FaMapMarkerAlt className="text-red-500 text-3xl mx-auto mb-2 animate-bounce" />
                <h4 className="font-bold text-gray-800 text-sm">Interactive Map Location</h4>
                <p className="text-xs text-gray-500 mt-1 max-w-xs mx-auto">Bhairab Pathagar central branch. Loading map coordinates...</p>
              </div>
            </div>

          </div>

          {/* Form Panel */}
          <div className="md:col-span-7">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-emerald-50 h-full flex flex-col justify-between">
              <div>
                <h2 className="font-bold text-gray-800 text-xl mb-2">Send a Message</h2>
                <p className="text-gray-500 text-sm mb-6">Drop us a line and we'll reply to your email address within 24 hours.</p>

                {isSubmitted && (
                  <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-start gap-3 animate-fadeIn">
                    <FaCheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Message Sent Successfully!</p>
                      <p className="mt-1 text-emerald-700 leading-relaxed">
                        Thank you for reaching out. We have received your inquiry and will contact you back shortly.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Your Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition" 
                        placeholder="e.g. Kamal Hossain" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition" 
                        placeholder="e.g. name@example.com" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Subject</label>
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition" 
                      placeholder="How can we help you?" 
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Your Message</label>
                    <textarea 
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition resize-none" 
                      placeholder="Type your message here..." 
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-green-700 to-emerald-600 text-white rounded-xl font-bold text-sm shadow hover:shadow-green-500/20 hover:scale-[1.01] transition cursor-pointer"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
