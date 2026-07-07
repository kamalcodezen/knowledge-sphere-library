import { FaTrophy, FaMedal, FaHeart, FaGift } from "react-icons/fa";

const donorsData = [
  { rank: 1, name: "Dr. Kamal Uddin", type: "Platinum", books: 120, funds: "৳50,000", joined: "Jan 2024" },
  { rank: 2, name: "Farhana Ahmed", type: "Gold", books: 85, funds: "৳30,000", joined: "Mar 2024" },
  { rank: 3, name: "Arif Rayhan", type: "Gold", books: 60, funds: "৳25,000", joined: "Feb 2024" },
  { rank: 4, name: "Sajid Hasan", type: "Silver", books: 45, funds: "৳15,000", joined: "May 2024" },
  { rank: 5, name: "Nusrat Jahan", type: "Silver", books: 40, funds: "৳12,000", joined: "Jul 2024" },
  { rank: 6, name: "Tariqul Islam", type: "Bronze", books: 25, funds: "৳8,000", joined: "Jun 2024" },
  { rank: 7, name: "Muna Chowdhury", type: "Bronze", books: 20, funds: "৳5,000", joined: "Aug 2024" },
];

const badgeColors = {
  Platinum: "bg-purple-100 text-purple-800 border-purple-200",
  Gold: "bg-yellow-100 text-yellow-850 border-yellow-250",
  Silver: "bg-gray-100 text-gray-800 border-gray-250",
  Bronze: "bg-amber-100 text-amber-900 border-amber-200",
};

const Donors = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-emerald-50 to-green-100 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Title Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 text-emerald-700 text-2xl mb-4 shadow">
            <FaTrophy />
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight">
            Donor Leaderboard
          </h1>
          <p className="mt-2 text-sm md:text-base text-gray-600">
            We express our deepest gratitude to the generous patrons who support our mission to spread knowledge and light up minds.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-2xl border border-emerald-100 p-6 flex items-center gap-4 shadow-sm">
            <div className="h-12 w-12 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-xl flex-shrink-0">
              <FaGift />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-sm">Become a Contributor</h3>
              <p className="text-xs text-gray-500 mt-1">
                You can support us by donating books or funds to expand our physical and digital catalog.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-emerald-100 p-6 flex items-center gap-4 shadow-sm">
            <div className="h-12 w-12 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-xl flex-shrink-0">
              <FaHeart />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-sm">Your Impact</h3>
              <p className="text-xs text-gray-500 mt-1">
                Your donations help purchase textbooks for students, expand academic research databases, and host children's reading clubs.
              </p>
            </div>
          </div>
        </div>

        {/* Leaderboard Table */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-emerald-50">
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-bold text-gray-800 text-lg">Top Contributors</h2>
            <button className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-xs font-semibold shadow hover:scale-[1.02] transition cursor-pointer">
              Donate Now
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100">
                  <th className="py-4 px-6 text-center w-16">Rank</th>
                  <th className="py-4 px-6">Name</th>
                  <th className="py-4 px-6">Tier</th>
                  <th className="py-4 px-6 text-right">Books Donated</th>
                  <th className="py-4 px-6 text-right">Funds Contributed</th>
                  <th className="py-4 px-6 text-center">Patron Since</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {donorsData.map((donor) => (
                  <tr key={donor.rank} className="hover:bg-emerald-50/20 transition-colors">
                    <td className="py-4 px-6 text-center font-bold">
                      {donor.rank <= 3 ? (
                        <span className={`inline-flex items-center justify-center h-7 w-7 rounded-full text-xs font-bold ${
                          donor.rank === 1 ? "bg-yellow-100 text-yellow-800" :
                          donor.rank === 2 ? "bg-gray-200 text-gray-800" :
                          "bg-amber-100 text-amber-900"
                        }`}>
                          <FaMedal className="w-4 h-4" />
                        </span>
                      ) : (
                        <span className="text-gray-500">#{donor.rank}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 font-semibold text-gray-850">{donor.name}</td>
                    <td className="py-4 px-6">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${badgeColors[donor.type]}`}>
                        {donor.type}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right font-medium text-gray-650">{donor.books}</td>
                    <td className="py-4 px-6 text-right font-medium text-gray-800">{donor.funds}</td>
                    <td className="py-4 px-6 text-center text-xs text-gray-400 font-semibold">{donor.joined}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donors;
