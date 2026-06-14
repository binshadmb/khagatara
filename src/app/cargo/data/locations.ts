export interface LocationEntry {
  country: string;
  flag: string;
  region:
    | "South Asia"
    | "East Asia"
    | "Southeast Asia"
    | "Middle East"
    | "Europe"
    | "Americas"
    | "Africa"
    | "Oceania";
  cities: string[];
}

export const LOCATIONS: LocationEntry[] = [
  // ─── SOUTH ASIA ───────────────────────────────────────────────
  {
    country: "India",
    flag: "🇮🇳",
    region: "South Asia",
    cities: [
      // Major Seaports
      "Mumbai (JNPT)", "Nhava Sheva", "Mundra", "Kandla", "Chennai",
      "Kochi", "Tuticorin (Thoothukudi)", "Visakhapatnam", "Kolkata", "Mangalore",
      "Ennore", "Mormugao (Goa)", "New Mangalore",
      // Metro & Tier-1
      "Delhi", "Bengaluru", "Hyderabad", "Ahmedabad", "Pune", "Surat",
      // South India
      "Coimbatore", "Thiruvananthapuram", "Kozhikode (Calicut)", "Thrissur",
      "Tirupur", "Salem", "Tiruchirapalli", "Madurai", "Mysuru",
      "Hubli-Dharwad", "Belagavi", "Pondicherry", "Vijayawada", "Guntur",
      // North India
      "Jaipur", "Ludhiana", "Amritsar", "Chandigarh", "Agra", "Kanpur",
      "Varanasi", "Lucknow", "Indore", "Bhopal", "Nagpur", "Nashik",
      // East & Northeast
      "Guwahati", "Patna", "Ranchi", "Bhubaneswar", "Raipur", "Siliguri",
    ],
  },
  {
    country: "Bangladesh",
    flag: "🇧🇩",
    region: "South Asia",
    cities: [
      "Dhaka", "Chittagong", "Sylhet", "Khulna", "Comilla",
      "Rajshahi", "Narayanganj", "Gazipur",
    ],
  },
  {
    country: "Sri Lanka",
    flag: "🇱🇰",
    region: "South Asia",
    cities: ["Colombo", "Galle", "Trincomalee", "Hambantota", "Kandy", "Jaffna"],
  },
  {
    country: "Pakistan",
    flag: "🇵🇰",
    region: "South Asia",
    cities: [
      "Karachi", "Lahore", "Islamabad", "Faisalabad", "Gwadar",
      "Peshawar", "Hyderabad", "Quetta",
    ],
  },
  {
    country: "Nepal",
    flag: "🇳🇵",
    region: "South Asia",
    cities: ["Kathmandu", "Birgunj", "Biratnagar", "Bhairahawa", "Pokhara", "Butwal"],
  },
  {
    country: "Maldives",
    flag: "🇲🇻",
    region: "South Asia",
    cities: ["Malé", "Addu City", "Fuvahmulah"],
  },

  // ─── EAST ASIA ────────────────────────────────────────────────
  {
    country: "China",
    flag: "🇨🇳",
    region: "East Asia",
    cities: [
      // Top Ports
      "Shanghai", "Ningbo-Zhoushan", "Shenzhen (Yantian)", "Guangzhou (Nansha)",
      "Tianjin (Xingang)", "Qingdao", "Xiamen", "Dalian", "Lianyungang",
      // Pearl River Delta (Guangdong)
      "Dongguan", "Foshan", "Zhongshan", "Zhuhai", "Jiangmen",
      "Huizhou", "Shantou", "Chaozhou", "Guangzhou",
      // Yangtze River Delta
      "Hangzhou", "Suzhou", "Nanjing", "Wenzhou", "Yiwu",
      "Ningbo", "Wuxi", "Changzhou",
      // Inland Manufacturing
      "Chengdu", "Chongqing", "Wuhan", "Zhengzhou", "Xi'an",
      "Changsha", "Kunming", "Fuzhou", "Beijing",
      // Northeast
      "Harbin", "Shenyang", "Changchun",
    ],
  },
  {
    country: "Hong Kong",
    flag: "🇭🇰",
    region: "East Asia",
    cities: ["Hong Kong"],
  },
  {
    country: "Japan",
    flag: "🇯🇵",
    region: "East Asia",
    cities: [
      "Tokyo", "Yokohama", "Osaka", "Nagoya", "Kobe",
      "Fukuoka", "Sapporo", "Hakata", "Kitakyushu",
    ],
  },
  {
    country: "South Korea",
    flag: "🇰🇷",
    region: "East Asia",
    cities: ["Seoul", "Busan", "Incheon", "Gwangyang", "Ulsan", "Daegu"],
  },
  {
    country: "Taiwan",
    flag: "🇹🇼",
    region: "East Asia",
    cities: ["Taipei", "Kaohsiung", "Taichung", "Keelung", "Taoyuan"],
  },
  {
    country: "Mongolia",
    flag: "🇲🇳",
    region: "East Asia",
    cities: ["Ulaanbaatar", "Zamyn-Üüd"],
  },

  // ─── SOUTHEAST ASIA ───────────────────────────────────────────
  {
    country: "Singapore",
    flag: "🇸🇬",
    region: "Southeast Asia",
    cities: ["Singapore (PSA)", "Jurong Island"],
  },
  {
    country: "Malaysia",
    flag: "🇲🇾",
    region: "Southeast Asia",
    cities: [
      "Kuala Lumpur", "Port Klang (Westports)", "Penang", "Johor Bahru",
      "Ipoh", "Kota Kinabalu", "Kuching", "Tanjung Pelepas",
    ],
  },
  {
    country: "Thailand",
    flag: "🇹🇭",
    region: "Southeast Asia",
    cities: [
      "Bangkok", "Laem Chabang", "Chiang Mai", "Rayong",
      "Phuket", "Hat Yai", "Nakhon Ratchasima",
    ],
  },
  {
    country: "Vietnam",
    flag: "🇻🇳",
    region: "Southeast Asia",
    cities: [
      "Ho Chi Minh City", "Hanoi", "Hai Phong", "Da Nang",
      "Can Tho", "Bien Hoa", "Vung Tau",
    ],
  },
  {
    country: "Indonesia",
    flag: "🇮🇩",
    region: "Southeast Asia",
    cities: [
      "Jakarta (Tanjung Priok)", "Surabaya", "Medan", "Makassar",
      "Batam", "Semarang", "Balikpapan", "Palembang",
    ],
  },
  {
    country: "Philippines",
    flag: "🇵🇭",
    region: "Southeast Asia",
    cities: ["Manila", "Cebu", "Davao", "Subic Bay", "Cagayan de Oro"],
  },
  {
    country: "Myanmar",
    flag: "🇲🇲",
    region: "Southeast Asia",
    cities: ["Yangon (Thilawa)", "Mandalay", "Pathein"],
  },
  {
    country: "Cambodia",
    flag: "🇰🇭",
    region: "Southeast Asia",
    cities: ["Phnom Penh", "Sihanoukville", "Siem Reap"],
  },
  {
    country: "Laos",
    flag: "🇱🇦",
    region: "Southeast Asia",
    cities: ["Vientiane", "Savannakhet", "Pakse"],
  },

  // ─── MIDDLE EAST ──────────────────────────────────────────────
  {
    country: "UAE",
    flag: "🇦🇪",
    region: "Middle East",
    cities: [
      "Dubai", "Jebel Ali", "Abu Dhabi (Khalifa Port)", "Sharjah",
      "Ras Al Khaimah", "Fujairah", "Umm Al Quwain",
    ],
  },
  {
    country: "Saudi Arabia",
    flag: "🇸🇦",
    region: "Middle East",
    cities: [
      "Riyadh", "Jeddah (Islamic Port)", "Dammam (King Abdulaziz Port)",
      "King Abdullah Port", "Yanbu", "Jubail", "Jizan",
    ],
  },
  {
    country: "Qatar",
    flag: "🇶🇦",
    region: "Middle East",
    cities: ["Doha", "Hamad Port", "Ras Laffan"],
  },
  {
    country: "Kuwait",
    flag: "🇰🇼",
    region: "Middle East",
    cities: ["Kuwait City", "Shuwaikh Port", "Shuaiba Port"],
  },
  {
    country: "Oman",
    flag: "🇴🇲",
    region: "Middle East",
    cities: ["Muscat", "Sohar", "Salalah", "Duqm", "Khasab"],
  },
  {
    country: "Bahrain",
    flag: "🇧🇭",
    region: "Middle East",
    cities: ["Manama", "Khalifa Bin Salman Port", "Muharraq"],
  },
  {
    country: "Jordan",
    flag: "🇯🇴",
    region: "Middle East",
    cities: ["Amman", "Aqaba"],
  },
  {
    country: "Iraq",
    flag: "🇮🇶",
    region: "Middle East",
    cities: ["Baghdad", "Basra", "Umm Qasr Port", "Erbil"],
  },
  {
    country: "Turkey",
    flag: "🇹🇷",
    region: "Middle East",
    cities: [
      "Istanbul", "Izmir", "Mersin", "Ankara", "Bursa",
      "Gemlik", "Iskenderun", "Ambarlı",
    ],
  },
  {
    country: "Iran",
    flag: "🇮🇷",
    region: "Middle East",
    cities: ["Tehran", "Bandar Abbas", "Imam Khomeini Port", "Isfahan", "Shiraz"],
  },
  {
    country: "Lebanon",
    flag: "🇱🇧",
    region: "Middle East",
    cities: ["Beirut", "Tripoli"],
  },

  // ─── EUROPE ───────────────────────────────────────────────────
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    region: "Europe",
    cities: [
      "Felixstowe", "Southampton", "London (Tilbury)", "Bristol (Avonmouth)",
      "Liverpool", "Birmingham", "Manchester", "Glasgow", "Leeds", "Edinburgh",
    ],
  },
  {
    country: "Germany",
    flag: "🇩🇪",
    region: "Europe",
    cities: [
      "Hamburg", "Bremerhaven", "Frankfurt", "Munich", "Berlin",
      "Düsseldorf", "Cologne", "Stuttgart", "Leipzig", "Nuremberg",
    ],
  },
  {
    country: "Netherlands",
    flag: "🇳🇱",
    region: "Europe",
    cities: ["Rotterdam", "Amsterdam", "Moerdijk", "Eindhoven", "Venlo"],
  },
  {
    country: "Belgium",
    flag: "🇧🇪",
    region: "Europe",
    cities: ["Antwerp", "Brussels", "Zeebrugge", "Liège", "Ghent"],
  },
  {
    country: "France",
    flag: "🇫🇷",
    region: "Europe",
    cities: ["Le Havre", "Marseille", "Paris", "Lyon", "Bordeaux", "Toulouse", "Dunkirk"],
  },
  {
    country: "Italy",
    flag: "🇮🇹",
    region: "Europe",
    cities: [
      "Genoa", "Gioia Tauro", "Trieste", "La Spezia", "Venice",
      "Milan", "Naples", "Livorno", "Rome",
    ],
  },
  {
    country: "Spain",
    flag: "🇪🇸",
    region: "Europe",
    cities: [
      "Algeciras", "Valencia", "Barcelona", "Bilbao", "Las Palmas",
      "Madrid", "Seville", "Cartagena",
    ],
  },
  {
    country: "Portugal",
    flag: "🇵🇹",
    region: "Europe",
    cities: ["Sines", "Lisbon (Liscont)", "Leixões (Porto)", "Setúbal"],
  },
  {
    country: "Greece",
    flag: "🇬🇷",
    region: "Europe",
    cities: ["Piraeus (Athens)", "Thessaloniki", "Volos", "Patra"],
  },
  {
    country: "Poland",
    flag: "🇵🇱",
    region: "Europe",
    cities: ["Gdańsk", "Gdynia", "Warsaw", "Łódź", "Wrocław", "Kraków"],
  },
  {
    country: "Sweden",
    flag: "🇸🇪",
    region: "Europe",
    cities: ["Gothenburg", "Stockholm", "Malmö", "Helsingborg"],
  },
  {
    country: "Finland",
    flag: "🇫🇮",
    region: "Europe",
    cities: ["Helsinki", "Kotka", "Turku", "Hamina"],
  },
  {
    country: "Russia",
    flag: "🇷🇺",
    region: "Europe",
    cities: ["Moscow", "St. Petersburg", "Novorossiysk", "Vladivostok", "Nakhodka"],
  },

  // ─── AMERICAS ─────────────────────────────────────────────────
  {
    country: "United States",
    flag: "🇺🇸",
    region: "Americas",
    cities: [
      // West Coast
      "Los Angeles (San Pedro)", "Long Beach", "Seattle (Tacoma)", "Oakland",
      // East Coast
      "New York (Newark)", "Savannah", "Baltimore", "Norfolk", "Charleston",
      "Miami", "Houston (Port of Houston)", "New Orleans", "Boston",
      // Inland
      "Chicago", "Dallas", "Atlanta", "Memphis",
    ],
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    region: "Americas",
    cities: [
      "Vancouver", "Prince Rupert", "Toronto", "Montreal", "Halifax",
      "Calgary", "Edmonton", "Winnipeg",
    ],
  },
  {
    country: "Brazil",
    flag: "🇧🇷",
    region: "Americas",
    cities: [
      "Santos", "São Paulo", "Rio de Janeiro", "Itajaí", "Paranaguá",
      "Salvador", "Manaus", "Recife", "Fortaleza",
    ],
  },
  {
    country: "Mexico",
    flag: "🇲🇽",
    region: "Americas",
    cities: [
      "Manzanillo", "Veracruz", "Lázaro Cárdenas", "Altamira",
      "Mexico City", "Guadalajara", "Monterrey",
    ],
  },
  {
    country: "Chile",
    flag: "🇨🇱",
    region: "Americas",
    cities: ["San Antonio", "Valparaíso", "Santiago", "Iquique", "Antofagasta"],
  },
  {
    country: "Argentina",
    flag: "🇦🇷",
    region: "Americas",
    cities: ["Buenos Aires (Exolgan)", "Rosario", "Bahía Blanca", "Mar del Plata"],
  },
  {
    country: "Colombia",
    flag: "🇨🇴",
    region: "Americas",
    cities: ["Buenaventura", "Cartagena", "Bogotá", "Barranquilla", "Medellín"],
  },
  {
    country: "Peru",
    flag: "🇵🇪",
    region: "Americas",
    cities: ["Callao (Lima)", "Paita", "Matarani", "Ilo"],
  },

  // ─── AFRICA ───────────────────────────────────────────────────
  {
    country: "Egypt",
    flag: "🇪🇬",
    region: "Africa",
    cities: ["Alexandria", "Port Said", "Cairo", "Suez", "Damietta", "Ain Sokhna"],
  },
  {
    country: "Nigeria",
    flag: "🇳🇬",
    region: "Africa",
    cities: ["Lagos (Apapa)", "Tin Can Island", "Onne", "Abuja", "Kano", "Port Harcourt"],
  },
  {
    country: "Ghana",
    flag: "🇬🇭",
    region: "Africa",
    cities: ["Tema (Accra)", "Takoradi", "Kumasi"],
  },
  {
    country: "Kenya",
    flag: "🇰🇪",
    region: "Africa",
    cities: ["Mombasa", "Nairobi", "Kisumu", "Eldoret"],
  },
  {
    country: "Tanzania",
    flag: "🇹🇿",
    region: "Africa",
    cities: ["Dar es Salaam", "Zanzibar", "Tanga", "Mtwara"],
  },
  {
    country: "Ethiopia",
    flag: "🇪🇹",
    region: "Africa",
    cities: ["Addis Ababa", "Dire Dawa", "Mekelle"],
  },
  {
    country: "South Africa",
    flag: "🇿🇦",
    region: "Africa",
    cities: [
      "Durban", "Johannesburg", "Cape Town", "Port Elizabeth (Gqeberha)",
      "Richards Bay", "East London", "Pretoria",
    ],
  },
  {
    country: "Mozambique",
    flag: "🇲🇿",
    region: "Africa",
    cities: ["Maputo", "Beira", "Nacala", "Pemba"],
  },
  {
    country: "Djibouti",
    flag: "🇩🇯",
    region: "Africa",
    cities: ["Djibouti City (Port)"],
  },
  {
    country: "Senegal",
    flag: "🇸🇳",
    region: "Africa",
    cities: ["Dakar", "Thiès"],
  },
  {
    country: "Côte d'Ivoire",
    flag: "🇨🇮",
    region: "Africa",
    cities: ["Abidjan", "San-Pédro"],
  },

  // ─── OCEANIA ──────────────────────────────────────────────────
  {
    country: "Australia",
    flag: "🇦🇺",
    region: "Oceania",
    cities: [
      "Sydney (Port Botany)", "Melbourne (Webb Dock)", "Brisbane", "Fremantle (Perth)",
      "Adelaide", "Darwin", "Townsville",
    ],
  },
  {
    country: "New Zealand",
    flag: "🇳🇿",
    region: "Oceania",
    cities: ["Auckland (Ports of Auckland)", "Tauranga", "Wellington", "Christchurch (Lyttelton)"],
  },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

export const REGIONS = Array.from(new Set(LOCATIONS.map((l) => l.region)));

export interface SearchResult {
  city: string;
  country: string;
  flag: string;
  region: string;
}

/** Search across all locations. Returns up to 20 matches. */
export function searchLocations(query: string): SearchResult[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  const results: SearchResult[] = [];

  for (const loc of LOCATIONS) {
    const countryMatch = loc.country.toLowerCase().includes(q);
    for (const city of loc.cities) {
      if (city.toLowerCase().includes(q) || countryMatch) {
        results.push({ city, country: loc.country, flag: loc.flag, region: loc.region });
        if (results.length >= 20) return results;
      }
    }
  }
  return results;
}
