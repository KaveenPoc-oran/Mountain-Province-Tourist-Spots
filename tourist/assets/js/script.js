// ==================== GLOBAL TOURIST SPOTS DATA ====================
const touristSpots = [
    // ========== SAGADA ==========
    {
        id: 1,
        name: "Hanging Coffins",
        municipality: "Sagada",
        category: "Cultural",
        description: "Ancient burial coffins hung on limestone cliffs – a sacred Igorot tradition.",
        image: "images/Hanging-Coffins-Sagada.jpg",
        lat: 17.0840, lng: 120.9010,
        location: "Echo Valley, Sagada",
        entrance_fee: "₱100 environmental fee",
        operating_hours: "Daily 6:00 AM – 5:00 PM",
        cultural_protocols: "Do not touch coffins. Guide mandatory (₱300/group). Photography allowed from designated areas.",
        safety_guidelines: "Slippery trail; wear trekking sandals. Stay on marked paths."
    },
    {
        id: 2,
        name: "Sumaguing Cave",
        municipality: "Sagada",
        category: "Adventure",
        description: "The 'Big Cave' famous for massive rock formations and an underground river.",
        image: "images/sumaguing-cave.jpg",
        lat: 17.0860, lng: 120.8990,
        location: "Sagada",
        entrance_fee: "₱100 environmental fee",
        operating_hours: "Daily 6:00 AM – 5:00 PM",
        cultural_protocols: "Guide required (₱500/up to 5 pax). Barefoot on limestone sections.",
        safety_guidelines: "Quick‑dry clothes, trekking sandals, headlamp. No touching formations."
    },
    {
        id: 3,
        name: "Lumiang Burial Cave",
        municipality: "Sagada",
        category: "Cultural",
        description: "Over 100 stacked coffins, some 500 years old. Start of the Cave Connection.",
        image: "images/Lumiang CAVE.jpg",
        lat: 17.0830, lng: 120.8980,
        location: "Sagada",
        entrance_fee: "₱100 environmental fee",
        operating_hours: "Daily 6:00 AM – 5:00 PM",
        cultural_protocols: "Guide required. Do not open or touch coffins.",
        safety_guidelines: "Sturdy sandals; expect crawling and wading."
    },
    {
        id: 4,
        name: "Echo Valley",
        municipality: "Sagada",
        category: "Nature",
        description: "Scenic valley with hanging coffins, underground river, and coffee farms.",
        image: "images/Echo valley.jpg",
        lat: 17.0825, lng: 120.9020,
        location: "Sagada",
        entrance_fee: "₱100 environmental fee",
        operating_hours: "Daily 6:00 AM – 5:00 PM",
        cultural_protocols: "Guide recommended. Sacred burial ground – respect all areas.",
        safety_guidelines: "Trail can be muddy; wear proper footwear."
    },
    {
        id: 5,
        name: "Bomod-ok Falls",
        municipality: "Sagada",
        category: "Nature",
        description: "200‑ft waterfall, also known as 'Big Falls'. Swimming and trekking.",
        image: "images/Bomod-ok-Falls.webp",
        lat: 17.1050, lng: 120.8850,
        location: "Aguid-Pide-Fidelisan, Sagada",
        entrance_fee: "₱100 environmental fee + ₱25–30 village fee",
        operating_hours: "Daily 6:00 AM – 5:00 PM",
        cultural_protocols: "Guide mandatory (₱500/up to 5 pax).",
        safety_guidelines: "Moderate to challenging trek; start early, bring water."
    },
    {
        id: 6,
        name: "Pongas Falls",
        municipality: "Sagada",
        category: "Nature",
        description: "Multi‑tier waterfall with a deep natural pool. Less crowded.",
        image: "images/Pongas Falls.jpg",
        lat: 17.0950, lng: 120.8800,
        location: "Sagada",
        entrance_fee: "₱100 environmental fee",
        operating_hours: "Daily 6:00 AM – 5:00 PM (check trail status)",
        cultural_protocols: "Guide recommended (₱600/group).",
        safety_guidelines: "Trail may be closed due to erosion; verify at tourism office."
    },
    {
        id: 7,
        name: "Marlboro Hills (Kamanbaneng Peak)",
        municipality: "Sagada",
        category: "Viewpoint",
        description: "Sunrise viewpoint with sea of clouds, wild horses, and unique blue soil.",
        image: "images/sagada-marlboro-hills.jpg",
        lat: 17.0880, lng: 120.8950,
        location: "Sagada",
        entrance_fee: "₱100 environmental fee",
        operating_hours: "Open 24h (best before sunrise)",
        cultural_protocols: "Guide required (₱800–1,600). Do NOT walk on blue soil.",
        safety_guidelines: "Very cold before sunrise; bring jacket, gloves, flashlight."
    },
    {
        id: 8,
        name: "Kiltepan Viewpoint",
        municipality: "Sagada",
        category: "Viewpoint",
        description: "Famous sea of clouds overlooking Kiltepan Rice Terraces.",
        image: "images/Kiltepan view point.jpg",
        lat: 17.0700, lng: 120.9050,
        location: "Sagada",
        entrance_fee: "₱100 environmental fee",
        operating_hours: "Sunrise (4:00 AM onwards)",
        cultural_protocols: "Free on main peak; ₱50 at Pog‑o viewpoint.",
        safety_guidelines: "Dress warmly; crowded on weekends."
    },
    {
        id: 9,
        name: "Lake Danum",
        municipality: "Sagada",
        category: "Nature",
        description: "Natural lake with pine forest views, popular for sunset picnics.",
        image: "images/lake danum.jpg",
        lat: 17.0790, lng: 120.9100,
        location: "Sagada",
        entrance_fee: "₱100 environmental fee",
        operating_hours: "Open 24h",
        cultural_protocols: "Respect as ancestral water source; loud behavior discouraged.",
        safety_guidelines: "Colder than town; bring jacket for sunset."
    },
    {
        id: 10,
        name: "Blue Soil Hills",
        municipality: "Sagada",
        category: "Nature",
        description: "Copper‑sulfate‑rich soil that glows blue – fragile geological wonder.",
        image: "images/Blue soil.jpg",
        lat: 17.0890, lng: 120.8940,
        location: "Sagada",
        entrance_fee: "₱100 environmental fee",
        operating_hours: "Open 24h (best after light rain)",
        cultural_protocols: "Strictly NO walking on blue slopes; stay on brown paths.",
        safety_guidelines: "Combine with Marlboro traverse; guide required."
    },
    {
        id: 11,
        name: "Balangagan Cave",
        municipality: "Sagada",
        category: "Cultural",
        description: "Ancient burial cave with crystal‑white limestone formations and WWII history.",
        image: "images/balangagan cave.jpg",
        lat: 17.0810, lng: 120.8960,
        location: "Sagada",
        entrance_fee: "₱100 environmental fee",
        operating_hours: "Daily 8:00 AM – 4:00 PM",
        cultural_protocols: "Guide required (₱800/up to 5). Capacity limit: 100 people.",
        safety_guidelines: "Slippery; 2.5–3 hour spelunking."
    },
    {
        id: 12,
        name: "Bokong Falls (Small Falls)",
        municipality: "Sagada",
        category: "Nature",
        description: "20‑ft waterfall with deep swimming hole and cliff‑jumping spot.",
        image: "images/bkong falls.jpg",
        lat: 17.0760, lng: 120.9090,
        location: "Sagada",
        entrance_fee: "₱100 environmental fee",
        operating_hours: "Daily 6:00 AM – 5:00 PM",
        cultural_protocols: "Guide not mandatory but recommended.",
        safety_guidelines: "Cliff jump approx. 6m; check depth first."
    },
    // ========== BONTOC ==========
    {
        id: 13,
        name: "Bontoc Museum",
        municipality: "Bontoc",
        category: "Cultural",
        description: "Museum preserving Bontoc heritage – artifacts, textiles, and a reconstructed village.",
        image: "images/Bontoc museum.jfif",
        lat: 17.0930, lng: 120.9770,
        location: "Bontoc",
        entrance_fee: "₱100",
        operating_hours: "Daily 8:00 AM – 12:00 PM, 1:00–5:00 PM",
        cultural_protocols: "No photography indoors. Respect exhibits.",
        safety_guidelines: "Accessible by jeepney from Sagada."
    },
    {
        id: 14,
        name: "Maligcong Rice Terraces",
        municipality: "Bontoc",
        category: "Cultural",
        description: "Ancient stone‑walled terraces with organic farming; best viewed from Mt. Kupapey.",
        image: "images/Maligcong_Rice_Terraces.jpg",
        lat: 17.1000, lng: 120.9700,
        location: "Maligcong, Bontoc",
        entrance_fee: "₱50 registration",
        operating_hours: "Open 24h",
        cultural_protocols: "Guide recommended (₱500/group). Stay on trails.",
        safety_guidelines: "Start sunrise trek at 4:30 AM. Homestays available."
    },
    {
        id: 15,
        name: "Mount Kupapey",
        municipality: "Bontoc",
        category: "Viewpoint",
        description: "Summit overlooking Maligcong terraces and Chico River; named after butterflies.",
        image: "images/Mt.KUPAPEY.jpeg",
        lat: 17.1050, lng: 120.9750,
        location: "Maligcong, Bontoc",
        entrance_fee: "₱50 registration",
        operating_hours: "Open 24h",
        cultural_protocols: "Guide required (part of terrace trek).",
        safety_guidelines: "1–1.5 hr hike; sea of clouds best Dec–Feb."
    },
    {
        id: 16,
        name: "Alab Petroglyphs",
        municipality: "Bontoc",
        category: "Cultural",
        description: "Ancient rock carvings (over 1000 years old) – National Cultural Treasure.",
        image: "https://guidetothephilippines.ph/images/articles/2022/2/alab-petroglyphs.jpg",
        lat: 17.0900, lng: 120.9800,
        location: "Alab, Bontoc",
        entrance_fee: "Free",
        operating_hours: "Daylight hours",
        cultural_protocols: "Guided trek required.",
        safety_guidelines: "Moderate trek; bring water."
    },
    // ========== BARLIG ==========
    {
        id: 17,
        name: "Mount Amuyao",
        municipality: "Barlig",
        category: "Adventure",
        description: "Major climb (8/9) with the 'Infinite Stairway'; connects to Batad Rice Terraces.",
        image: "images/Amuyao knife edge.jpg",
        lat: 17.0830, lng: 121.0830,
        location: "Barlig",
        entrance_fee: "Registration at Barlig Tourism",
        operating_hours: "2D/1N expeditions",
        cultural_protocols: "Medical certificate strictly required. Guide fee ₱2,000–2,500/day.",
        safety_guidelines: "Very cold at summit; prepare for leeches and steep steps."
    },
    {
        id: 18,
        name: "Barlig Rice Terraces",
        municipality: "Barlig",
        category: "Cultural",
        description: "Vertically stacked terraces in Lias and Kadaclan – a living museum.",
        image: "images/barlig rice terraces.jpg",
        lat: 17.0800, lng: 121.0850,
        location: "Barlig",
        entrance_fee: "Small registration fee",
        operating_hours: "Open 24h",
        cultural_protocols: "Guide fee ₱500–800. Homestays only.",
        safety_guidelines: "Limited jeepneys from Bontoc (1–2 PM). Weak signal."
    },
    // ========== SADANGA ==========
    {
        id: 19,
        name: "Fowa-as Falls",
        municipality: "Sadanga",
        category: "Nature",
        description: "Hidden waterfall sacred to locals; 2–3 hr trek through forests.",
        image: "images/Fowa-as.jpg",
        lat: 17.1670, lng: 120.9670,
        location: "Sadanga",
        entrance_fee: "Free",
        operating_hours: "Daylight",
        cultural_protocols: "Considered sacred; behave respectfully.",
        safety_guidelines: "Moderate trek; best in rainy season."
    },
    {
        id: 20,
        name: "Bokong Rice Terraces",
        municipality: "Sadanga",
        category: "Cultural",
        description: "One of the oldest terraces in the province, built with traditional stone‑walling.",
        image: "images/Bokong.jpg",
        lat: 17.1650, lng: 120.9650,
        location: "Sadanga",
        entrance_fee: "Free",
        operating_hours: "Open 24h",
        cultural_protocols: "Active agricultural area; ask permission before entering fields.",
        safety_guidelines: "Trails can be narrow and slippery."
    },
    {
        id: 21,
        name: "Maatong Hot Spring",
        municipality: "Sadanga",
        category: "Nature",
        description: "Natural thermal spring with therapeutic mineral waters.",
        image: "images/Maatong.jpg",
        lat: 17.1700, lng: 120.9600,
        location: "Sadanga",
        entrance_fee: "Free",
        operating_hours: "Daylight",
        cultural_protocols: "Respect as communal resource.",
        safety_guidelines: "Soak after trekking;水温自然温暖."
    },
    {
        id: 22,
        name: "Nabenngan Bridge",
        municipality: "Sadanga",
        category: "Cultural",
        description: "Traditional hanging bridge made of bamboo and rattan.",
        image: "images/Nabenngan.jpg",
        lat: 17.1680, lng: 120.9660,
        location: "Sadanga",
        entrance_fee: "Free",
        operating_hours: "Open 24h",
        cultural_protocols: "Symbol of community cooperation; cross carefully.",
        safety_guidelines: "Weight limit; do not swing."
    },
    {
        id: 23,
        name: "Belwang Rice Terraces",
        municipality: "Sadanga",
        category: "Cultural",
        description: "Scenic terraces with traditional rice cultivation.",
        image: "images/belwang rice terraces.jpg",
        lat: 17.1720, lng: 120.9620,
        location: "Sadanga",
        entrance_fee: "Free",
        operating_hours: "Open 24h",
        cultural_protocols: "Sustainable farming practices; respect the land.",
        safety_guidelines: "Best photographed in golden hour."
    },
    {
        id: 24,
        name: "Angoten Cave",
        municipality: "Sadanga",
        category: "Nature",
        description: "Limestone cave with unique rock formations; historical significance.",
        image: "images/Angoten.jpg",
        lat: 17.1630, lng: 120.9690,
        location: "Sadanga",
        entrance_fee: "Free",
        operating_hours: "Daylight",
        cultural_protocols: "Spiritual importance; ask for local guide.",
        safety_guidelines: "Bring flashlight; slippery floor."
    },
    // ========== BAUKO ==========
    {
        id: 25,
        name: "Mount Kalawitan",
        municipality: "Bauko",
        category: "Adventure",
        description: "Training ground for Everest team; mossy forest and dwarf bamboo summit.",
        image: "images/mt Kalawitan.jpg",
        lat: 16.9830, lng: 120.9170,
        location: "Bauko",
        entrance_fee: "Permit required",
        operating_hours: "2D/1N climb",
        cultural_protocols: "Guide mandatory. Traditional food and dances can be arranged.",
        safety_guidelines: "Major climb (7/9); leeches, steep 'Monkey Trail'."
    },
    {
        id: 26,
        name: "Mount Polis",
        municipality: "Bauko",
        category: "Historical",
        description: "WWII battleground; highest point of Halsema Highway; sea of clouds.",
        image: "images/mt.polis.jpg",
        lat: 16.9800, lng: 120.9150,
        location: "Bauko",
        entrance_fee: "Free",
        operating_hours: "Open 24h",
        cultural_protocols: "Stopover viewpoint; respect memorial areas.",
        safety_guidelines: "Foggy and cold; hot coffee sold at roadside."
    },
    {
        id: 27,
        name: "Mount Data National Park",
        municipality: "Bauko",
        category: "Nature",
        description: "Historic peace accord site (1986); mossy forest, waterfalls, rare cloud rats.",
        image: "https://guidetothephilippines.ph/images/articles/2022/2/mount-data-national-park.jpg",
        lat: 16.9700, lng: 120.9100,
        location: "Bauko",
        entrance_fee: "PAMB regulated",
        operating_hours: "Mt. Data Hotel open daily",
        cultural_protocols: "Inner Peace Sanctum – firearms embedded in monument.",
        safety_guidelines: "Extremely cold at night; buy vegetables from stalls."
    },
    // ========== TADIAN ==========
    {
        id: 28,
        name: "Tadian Rice Terraces",
        municipality: "Tadian",
        category: "Cultural",
        description: "Dacudac 'Amphitheater' and Cagubatan terraces irrigated by Holy Water spring.",
        image: "images/Tadian rice terraces.jpg",
        lat: 16.9830, lng: 120.8170,
        location: "Tadian",
        entrance_fee: "Small environmental fee",
        operating_hours: "Open 24h",
        cultural_protocols: "Legend of 'Holy Water' – never‑drying spring.",
        safety_guidelines: "1.5–2 hr drive from Sagada; register at municipal hall."
    },
    {
        id: 29,
        name: "Mt. Mogao",
        municipality: "Tadian",
        category: "Viewpoint",
        description: "360° view of Dacudac terraces and Ilocos coastline; sacred watershed.",
        image: "images/mt mogao.webp",
        lat: 16.9800, lng: 120.8200,
        location: "Tadian",
        entrance_fee: "Guide fee ₱500–700",
        operating_hours: "Daylight",
        cultural_protocols: "Named after 'Mother Mountain' – symbol of fertility.",
        safety_guidelines: "1.5–2 hr hike; good mobile signal at summit."
    }
];

// ==================== HELPER FUNCTIONS ====================

/**
 * Returns the full array of tourist spots.
 */
function getSpots() {
    return touristSpots;
}

/**
 * Returns a spot by its ID.
 */
function getSpotById(id) {
    return touristSpots.find(spot => spot.id == id);
}

/**
 * Filters spots by municipality.
 */
function filterByMunicipality(municipality) {
    if (municipality === 'all') return touristSpots;
    return touristSpots.filter(spot => spot.municipality === municipality);
}

/**
 * Searches spots by name, municipality, or keyword.
 */
function searchSpots(keyword) {
    if (!keyword.trim()) return touristSpots;
    const term = keyword.toLowerCase();
    return touristSpots.filter(spot =>
        spot.name.toLowerCase().includes(term) ||
        spot.municipality.toLowerCase().includes(term) ||
        spot.description.toLowerCase().includes(term)
    );
}

// ==================== DYNAMIC CARD GENERATION (for index.html) ====================

function generateSpotCards(spots) {
    const grid = document.getElementById('spotsGrid');
    if (!grid) return;

    grid.innerHTML = '';
    spots.forEach(spot => {
        const col = document.createElement('div');
        col.className = 'col';
        col.innerHTML = `
            <div class="card h-100">
                <img src="${spot.image}" class="card-img-top spot-img" alt="${spot.name}" onerror="this.src='assets/images/default.jpg'">
                <div class="card-body">
                    <h5 class="card-title">${spot.name}</h5>
                    <p class="card-text"><i class="fas fa-map-marker-alt"></i> ${spot.municipality}</p>
                    <p class="card-text"><small>${spot.description.substring(0, 80)}...</small></p>
                    <button class="btn btn-primary" onclick="openSpotModal(${spot.id})">View Details</button>
                </div>
            </div>
        `;
        grid.appendChild(col);
    });
}

// ==================== SINGLE MODAL HANDLER (for index.html) ====================

function openSpotModal(spotId) {
    const spot = getSpotById(spotId);
    if (!spot) return;

    const modal = new bootstrap.Modal(document.getElementById('spotModal'));
    document.getElementById('spotModalLabel').innerText = spot.name;
    document.getElementById('spotModalBody').innerHTML = `
        <img src="${spot.image}" class="img-fluid mb-3" alt="${spot.name}" onerror="this.src='assets/images/default.jpg'">
        <p><strong>Municipality:</strong> ${spot.municipality}</p>
        <p><strong>Category:</strong> ${spot.category}</p>
        <p><strong>Location:</strong> ${spot.location || 'N/A'}</p>
        <p><strong>Entrance Fee:</strong> ${spot.entrance_fee || 'Free'}</p>
        <p><strong>Operating Hours:</strong> ${spot.operating_hours || 'N/A'}</p>
        <hr>
        <h5>Description</h5>
        <p>${spot.description}</p>
        ${spot.cultural_protocols ? `<h5>Cultural Protocols</h5><p>${spot.cultural_protocols}</p>` : ''}
        ${spot.safety_guidelines ? `<h5>Safety Guidelines</h5><p>${spot.safety_guidelines}</p>` : ''}
    `;
    modal.show();
}

// ==================== SEARCH & FILTER (for index.html) ====================

function initSearchAndFilter() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const filterButtons = document.querySelectorAll('.filter-btn');

    if (searchInput && searchBtn) {
        function performSearch() {
            const filteredBySearch = searchSpots(searchInput.value);
            const activeMunicipality = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
            let finalSpots = filteredBySearch;
            if (activeMunicipality !== 'all') {
                finalSpots = finalSpots.filter(s => s.municipality === activeMunicipality);
            }
            generateSpotCards(finalSpots);
        }

        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') performSearch();
        });
    }

    if (filterButtons.length) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', function(e) {
                filterButtons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');

                const municipality = this.dataset.filter;
                const keyword = document.getElementById('searchInput')?.value || '';
                const filteredBySearch = searchSpots(keyword);
                let finalSpots = municipality === 'all' ? filteredBySearch : filteredBySearch.filter(s => s.municipality === municipality);
                generateSpotCards(finalSpots);
            });
        });
    }
}

// ==================== EXPORT (for use in other pages) ====================
// On pages where script.js is loaded, these functions become globally available.