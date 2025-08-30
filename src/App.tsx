import React from 'react';
import { MapPin, Navigation, Users, Building, GraduationCap, Store, Shield } from 'lucide-react';

interface LocationItem {
  name: string;
  icon: React.ReactNode;
  category: string;
  googleMapsUrl: string;
}

const locations: LocationItem[] = [
  {
    name: "Masjid",
    icon: <Building className="w-5 h-5" />,
    category: "Ibadah",
    googleMapsUrl: "https://maps.google.com/search/masjid"
  },
  {
    name: "Balai RT",
    icon: <Users className="w-5 h-5" />,
    category: "Pemerintahan",
    googleMapsUrl: "https://maps.google.com/search/balai+rt"
  },
  {
    name: "Ketua RT",
    icon: <Users className="w-5 h-5" />,
    category: "Pemerintahan",
    googleMapsUrl: "https://maps.google.com/search/ketua+rt"
  },
  {
    name: "Wakil RT",
    icon: <Users className="w-5 h-5" />,
    category: "Pemerintahan",
    googleMapsUrl: "https://maps.google.com/search/wakil+rt"
  },
  {
    name: "Sekretaris",
    icon: <Users className="w-5 h-5" />,
    category: "Pemerintahan",
    googleMapsUrl: "https://maps.google.com/search/sekretaris+rt"
  },
  {
    name: "Bendahara",
    icon: <Users className="w-5 h-5" />,
    category: "Pemerintahan",
    googleMapsUrl: "https://maps.google.com/search/bendahara+rt"
  },
  {
    name: "TPQ",
    icon: <GraduationCap className="w-5 h-5" />,
    category: "Pendidikan",
    googleMapsUrl: "https://maps.google.com/search/tpq"
  },
  {
    name: "RA",
    icon: <GraduationCap className="w-5 h-5" />,
    category: "Pendidikan",
    googleMapsUrl: "https://maps.google.com/search/raudhatul+athfal"
  },
  {
    name: "Indomaret",
    icon: <Store className="w-5 h-5" />,
    category: "Komersial",
    googleMapsUrl: "https://maps.google.com/search/indomaret"
  },
  {
    name: "SEKTOR 1",
    icon: <Shield className="w-5 h-5" />,
    category: "Keamanan",
    googleMapsUrl: "https://maps.google.com/search/sektor+1"
  },
  {
    name: "SEKTOR 2",
    icon: <Shield className="w-5 h-5" />,
    category: "Keamanan",
    googleMapsUrl: "https://maps.google.com/search/sektor+2"
  },
  {
    name: "SEKTOR 3",
    icon: <Shield className="w-5 h-5" />,
    category: "Keamanan",
    googleMapsUrl: "https://maps.google.com/search/sektor+3"
  },
  {
    name: "SEKTOR 4",
    icon: <Shield className="w-5 h-5" />,
    category: "Keamanan",
    googleMapsUrl: "https://maps.google.com/search/sektor+4"
  },
  {
    name: "SEKTOR 5",
    icon: <Shield className="w-5 h-5" />,
    category: "Keamanan",
    googleMapsUrl: "https://maps.google.com/search/sektor+5"
  },
  {
    name: "SEKTOR 6",
    icon: <Shield className="w-5 h-5" />,
    category: "Keamanan",
    googleMapsUrl: "https://maps.google.com/search/sektor+6"
  },
  {
    name: "SEKTOR 7",
    icon: <Shield className="w-5 h-5" />,
    category: "Keamanan",
    googleMapsUrl: "https://maps.google.com/search/sektor+7"
  }
];

const categoryColors = {
  "Ibadah": "bg-green-100 text-green-800 border-green-200",
  "Pemerintahan": "bg-blue-100 text-blue-800 border-blue-200",
  "Pendidikan": "bg-purple-100 text-purple-800 border-purple-200",
  "Komersial": "bg-orange-100 text-orange-800 border-orange-200",
  "Keamanan": "bg-red-100 text-red-800 border-red-200"
};

function App() {
  const groupedLocations = locations.reduce((acc, location) => {
    if (!acc[location.category]) {
      acc[location.category] = [];
    }
    acc[location.category].push(location);
    return acc;
  }, {} as Record<string, LocationItem[]>);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <img 
                src="/pp.jpg" 
                alt="Logo" 
                className="w-10 h-10 rounded-md object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Peta Denah Citra Pesona Buduran RT 37 RW 07</h1>
              <p className="text-slate-600">Temukan lokasi penting di lingkungan RT 37 RW 07</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Map Section - Left Column */}
          <div className="flex-1 lg:flex-[3]">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                <h2 className="text-xl font-semibold text-white flex items-center space-x-2">
                  <Navigation className="w-5 h-5" />
                  <span>Denah Lokasi</span>
                </h2>
              </div>
              <div className="p-6">
                <div className="relative bg-slate-50 rounded-lg overflow-hidden border-2 border-dashed border-slate-300">
                  <img 
                    src="/DENAH-01.jpg" 
                    alt="Denah Lokasi" 
                    className="w-full h-auto max-h-[600px] object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="flex items-center justify-center h-96 text-slate-500">
                            <div class="text-center">
                              <div class="w-16 h-16 mx-auto mb-4 bg-slate-200 rounded-lg flex items-center justify-center">
                                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                  <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                                </svg>
                              </div>
                              <p class="text-lg font-medium">Denah Lokasi</p>
                              <p class="text-sm">Gambar denah akan ditampilkan di sini</p>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Information Panel - Right Column */}
          <div className="flex-1 lg:flex-[2]">
            <div className="bg-white rounded-xl shadow-lg border border-slate-200">
              <div className="bg-gradient-to-r from-slate-700 to-slate-800 px-6 py-4">
                <h2 className="text-xl font-semibold text-white flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>Daftar Lokasi Penting</span>
                </h2>
              </div>
              
              <div className="p-6 max-h-[600px] overflow-y-auto">
                <div className="space-y-6">
                  {Object.entries(groupedLocations).map(([category, items]) => (
                    <div key={category} className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[category as keyof typeof categoryColors]}`}>
                          {category}
                        </span>
                        <div className="flex-1 h-px bg-slate-200"></div>
                      </div>
                      
                      <div className="grid gap-2">
                        {items.map((location, index) => (
                          <a
                            key={index}
                            href={location.googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center space-x-3 p-3 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 hover:shadow-md"
                          >
                            <div className="flex-shrink-0 p-2 bg-slate-100 rounded-lg group-hover:bg-blue-100 transition-colors duration-200">
                              {location.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-slate-900 group-hover:text-blue-900 transition-colors duration-200">
                                {location.name}
                              </p>
                            </div>
                            <div className="flex-shrink-0">
                              <Navigation className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors duration-200" />
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 rounded-b-xl">
                <p className="text-xs text-slate-600 text-center">
                  Klik pada lokasi untuk membuka di Google Maps
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-sm text-slate-600">
            <p>© 2025 Peta Denah Interaktif. Dibuat dengan teknologi modern untuk kemudahan navigasi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;