import { useState } from "react";
import { FaQuestionCircle, FaChevronDown, FaInfoCircle } from "react-icons/fa";

const faqData = [
  {
    q: "How do I sign up for a library card?",
    a: "You can sign up for a library card by visiting the front desk of Bhairab Pathagar central branch. Please bring a valid photo ID (NID, passport, or student ID card) and two passport-sized photographs. The registration is completely free.",
  },
  {
    q: "What is the book borrowing policy?",
    a: "General members can borrow up to 3 books at a time for a duration of 14 days. Academic textbooks can be borrowed for up to 7 days. Reference books and rare manuscripts are restricted to in-library reading only.",
  },
  {
    q: "Can I extend the return date of borrowed books?",
    a: "Yes, you can extend the return date once for an additional 7 days, provided the book has not been reserved by another member. Extensions can be requested online through your dashboard or by calling us.",
  },
  {
    q: "How can I donate books to the library?",
    a: "We welcome book donations! You can drop off books in good physical condition directly at our library during opening hours. We accept textbooks, children's books, biographies, and reference materials. For large donations, please contact us beforehand.",
  },
  {
    q: "Is there access to digital books and e-journals?",
    a: "Yes, library members have free access to our e-book collection and academic databases. Once you receive your membership credentials, you can log in to the User Dashboard to read digital copies online.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-emerald-50 to-green-100 py-12 animate-fadeIn">
      <div className="container mx-auto px-4 max-w-3xl">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 text-emerald-700 text-2xl mb-4 shadow">
            <FaQuestionCircle />
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-2 text-sm md:text-base text-gray-600">
            Find answers to common questions about library membership, book borrowing, renewals, and donations.
          </p>
        </div>

        {/* FAQ Accordions */}
        <div className="flex flex-col gap-4 mb-12">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-emerald-50 shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-gray-850 text-sm md:text-base hover:bg-emerald-50/20 transition cursor-pointer"
                >
                  <span>{item.q}</span>
                  <FaChevronDown className={`text-emerald-600 w-4 h-4 transition-transform duration-300 flex-shrink-0 ml-4 ${isOpen ? "rotate-180" : ""}`} />
                </button>

                <div 
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-60 border-t border-gray-100" : "max-h-0"
                  }`}
                >
                  <p className="p-6 text-gray-600 text-sm leading-relaxed bg-gray-50/50">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Help Banner */}
        <div className="bg-[#15803d] rounded-3xl p-6 md:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center gap-6">
          <span className="text-4xl text-emerald-150 flex-shrink-0">
            <FaInfoCircle />
          </span>
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-lg">Still have questions?</h3>
            <p className="text-sm text-emerald-100 mt-1 leading-relaxed">
              If you couldn't find the answer you were looking for, please feel free to send us a direct message on our contact page.
            </p>
          </div>
          <a 
            href="/contact" 
            className="px-5 py-2.5 bg-white text-emerald-800 hover:bg-emerald-50 rounded-xl font-bold text-sm shadow whitespace-nowrap transition cursor-pointer"
          >
            Contact Support
          </a>
        </div>

      </div>
    </div>
  );
};

export default Faq;
