import { FaBookReader, FaUsers, FaGlobe, FaAward, FaCheckCircle } from "react-icons/fa";

const stats = [
  { id: 1, label: "Total Books", value: "10,000+", icon: FaBookReader },
  { id: 2, label: "Active Members", value: "2,500+", icon: FaUsers },
  { id: 3, label: "Digital Catalog", value: "100%", icon: FaGlobe },
  { id: 4, label: "Years of Service", value: "15+", icon: FaAward },
];

const values = [
  "Free access to a wide selection of books, text-books, and reference materials.",
  "Quiet, air-conditioned study rooms and reading zones for learners.",
  "Digital cataloging and online booking to simplify book borrowing.",
  "Community-driven programs, book discussions, and children's story hours.",
  "Partnerships with local academic institutions and donation networks.",
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-emerald-50 to-green-100 py-12 animate-fadeIn">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight">
            About Bhairab Pathagar
          </h1>
          <p className="mt-3 text-sm md:text-base text-gray-600 leading-relaxed">
            Nurturing curiosity, fostering community, and providing access to academic, programming, and literary resources since 2011.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-emerald-50 mb-12">
          <div className="prose max-w-none text-gray-600 text-sm md:text-base leading-relaxed">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Our Mission & Vision</h2>
            <p className="mb-4">
              Bhairab Pathagar was established with a singular vision: to create a vibrant hub of learning where anyone can access the books they need to expand their horizons. What started as a small room with a few shelves has evolved into a modern library offering both physical reading spaces and a growing digital network.
            </p>
            <p>
              We believe that knowledge should be accessible to all. Whether you are an academic researcher studying advanced calculus, a programmer learning modern JavaScript, or a child discovering their first fairy tale, we provide a welcoming space for your learning journey.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <div key={stat.id} className="bg-white rounded-2xl p-6 text-center border border-emerald-100 shadow-sm hover:shadow transition">
              <span className="inline-flex p-3 rounded-xl bg-emerald-50 text-emerald-700 text-xl mb-3">
                <stat.icon />
              </span>
              <p className="text-2xl font-extrabold text-gray-800">{stat.value}</p>
              <p className="text-xs font-semibold text-gray-400 mt-1 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Core Values / Benefits Card */}
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-emerald-50">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Why Choose Our Library</h2>
          
          <div className="flex flex-col gap-4">
            {values.map((val, i) => (
              <div key={i} className="flex items-start gap-3">
                <FaCheckCircle className="text-emerald-600 w-5 h-5 flex-shrink-0 mt-0.5" />
                <p className="text-gray-655 text-sm md:text-base leading-relaxed">{val}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
