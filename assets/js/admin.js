// ==================== ADMIN AUTHENTICATION ====================
const ADMIN_STORAGE_KEY = 'mountainProvinceAdmin';
const SPOTS_STORAGE_KEY = 'mountainProvinceSpots';

// ==================== DEFAULT SPOTS (29 entries – single source of truth) ====================
const DEFAULT_SPOTS = [
    { id: 1, name: "Sumaguing Cave", municipality: "Sagada", category: "Adventure", description: "The 'Big Cave' with stunning rock formations.", lat: 17.0842, lng: 120.9014, entrance_fee: "₱25", operating_hours: "8:00 AM – 5:00 PM", location: "Sagada", image: "assets/images/sumaguing.jpg", cultural_protocols: "Ask guides before taking photos.", safety_guidelines: "Slippery; wear hiking sandals." },
    { id: 2, name: "Lumiang Cave", municipality: "Sagada", category: "Adventure", description: "Burial cave with over 100 coffins.", lat: 17.0861, lng: 120.9022, entrance_fee: "Included in cave connection", operating_hours: "8:00 AM – 5:00 PM", location: "Sagada", image: "assets/images/lumiang.jpg", cultural_protocols: "Do not touch coffins.", safety_guidelines: "Bring headlamp." },
    { id: 3, name: "Hanging Coffins", municipality: "Sagada", category: "Cultural", description: "Ancient Igorot burial tradition.", lat: 17.0839, lng: 120.9033, entrance_fee: "Free", operating_hours: "Viewable anytime", location: "Echo Valley, Sagada", image: "assets/images/hanging_coffins.jpg", cultural_protocols: "Respect sacred area.", safety_guidelines: "Steep trek; hire guide." },
    { id: 4, name: "Kiltepan Viewpoint", municipality: "Sagada", category: "Viewpoint", description: "Famous sea of clouds at sunrise.", lat: 17.0656, lng: 120.9025, entrance_fee: "₱50", operating_hours: "4:30 AM – 7:00 AM", location: "Kiltepan, Sagada", image: "assets/images/kiltepan.jpg", cultural_protocols: "Stay on designated platforms.", safety_guidelines: "Very cold; bring jacket." },
    { id: 5, name: "Marlboro Hills", municipality: "Sagada", category: "Nature", description: "Rolling hills and sunset views.", lat: 17.0714, lng: 120.8989, entrance_fee: "₱20", operating_hours: "6:00 AM – 6:00 PM", location: "Marlboro, Sagada", image: "assets/images/marlboro.jpg", cultural_protocols: "Leave no trace.", safety_guidelines: "Wide trails, easy hike." },
    { id: 6, name: "Bomod-ok Falls", municipality: "Sagada", category: "Nature", description: "Twin waterfalls, also called 'Big Falls'.", lat: 17.0583, lng: 120.8856, entrance_fee: "₱30", operating_hours: "7:00 AM – 5:00 PM", location: "Fidelisan, Sagada", image: "assets/images/bomodok.jpg", cultural_protocols: "Swim with respect.", safety_guidelines: "Strong current; life vest available." },
    { id: 7, name: "Bokong Falls", municipality: "Sagada", category: "Nature", description: "Smaller falls, near the town.", lat: 17.0789, lng: 120.9067, entrance_fee: "Free", operating_hours: "Always open", location: "Demang, Sagada", image: "assets/images/bokong.jpg", cultural_protocols: "None", safety_guidelines: "Slippery rocks." },
    { id: 8, name: "Maligcong Rice Terraces", municipality: "Bontoc", category: "Nature", description: "Less crowded, breathtaking terraces.", lat: 17.1022, lng: 120.9725, entrance_fee: "Free", operating_hours: "Always open", location: "Maligcong, Bontoc", image: "assets/images/maligcong.jpg", cultural_protocols: "Ask permission before entering fields.", safety_guidelines: "Narrow pathways." },
    { id: 9, name: "Bontoc Museum", municipality: "Bontoc", category: "Cultural", description: "Preserves Ifugao and Bontoc artifacts.", lat: 17.0908, lng: 120.9767, entrance_fee: "₱50", operating_hours: "8:00 AM – 5:00 PM (closed Sun)", location: "Bontoc Proper", image: "assets/images/bontoc_museum.jpg", cultural_protocols: "No flash photography.", safety_guidelines: "None" },
    { id: 10, name: "Alab Rice Terraces", municipality: "Bontoc", category: "Nature", description: "Scenic terraces with traditional villages.", lat: 17.0856, lng: 120.9692, entrance_fee: "Free", operating_hours: "Always open", location: "Alab, Bontoc", image: "assets/images/alab.jpg", cultural_protocols: "Respect locals.", safety_guidelines: "Trails can be muddy." },
    { id: 11, name: "Barlig Rice Terraces", municipality: "Barlig", category: "Nature", description: "Remote and pristine terraces.", lat: 17.0325, lng: 121.1081, entrance_fee: "Free", operating_hours: "Always open", location: "Barlig Proper", image: "assets/images/barlig.jpg", cultural_protocols: "Donations welcome.", safety_guidelines: "Long drive; 4WD recommended." },
    { id: 12, name: "Mt. Amuyao", municipality: "Barlig", category: "Adventure", description: "One of the highest peaks in Cordillera.", lat: 17.0167, lng: 121.1167, entrance_fee: "Free", operating_hours: "Trek starts early", location: "Barlig", image: "assets/images/amuyao.jpg", cultural_protocols: "Offer ritual before climb.", safety_guidelines: "Very challenging; guide required." },
    { id: 13, name: "Sadanga Rice Terraces", municipality: "Sadanga", category: "Nature", description: "Traditional terraces with mini hanging bridges.", lat: 17.1675, lng: 120.9972, entrance_fee: "Free", operating_hours: "Always open", location: "Sadanga", image: "assets/images/sadanga.jpg", cultural_protocols: "Ask before crossing private property.", safety_guidelines: "Suspension bridge sways." },
    { id: 14, name: "Mt. Polis", municipality: "Bauko", category: "Viewpoint", description: "Mountain pass with scenic views.", lat: 16.9722, lng: 121.0356, entrance_fee: "Free", operating_hours: "Always open", location: "Bauko – Bontoc border", image: "assets/images/mt_polis.jpg", cultural_protocols: "None", safety_guidelines: "Foggy; drive carefully." },
    { id: 15, name: "Bauko Weaving Center", municipality: "Bauko", category: "Cultural", description: "See traditional weaving demos.", lat: 16.9889, lng: 120.8447, entrance_fee: "Free", operating_hours: "8:00 AM – 5:00 PM", location: "Bauko Proper", image: "assets/images/bauko_weave.jpg", cultural_protocols: "Buying supports locals.", safety_guidelines: "None" },
    { id: 16, name: "Tadian Terraces", municipality: "Tadian", category: "Nature", description: "Lesser‑known, peaceful terraces.", lat: 16.9986, lng: 120.8203, entrance_fee: "Free", operating_hours: "Always open", location: "Tadian", image: "assets/images/tadian.jpg", cultural_protocols: "Greet locals.", safety_guidelines: "Trails not paved." },
    { id: 17, name: "Besao Rice Terraces", municipality: "Besao", category: "Nature", description: "Terraces with century‑old trees.", lat: 17.0958, lng: 120.8194, entrance_fee: "Free", operating_hours: "Always open", location: "Besao", image: "assets/images/besao.jpg", cultural_protocols: "Donations appreciated.", safety_guidelines: "Bring water." },
    { id: 18, name: "Agawa Rock Paintings", municipality: "Besao", category: "Cultural", description: "Ancient drawings on limestone cliff.", lat: 17.0756, lng: 120.8067, entrance_fee: "₱20", operating_hours: "8:00 AM – 5:00 PM", location: "Agawa, Besao", image: "assets/images/agawa.jpg", cultural_protocols: "Do not touch paintings.", safety_guidelines: "Short hike." },
    { id: 19, name: "Bokya Falls", municipality: "Sagada", category: "Nature", description: "Secluded waterfall.", lat: 17.0611, lng: 120.8764, entrance_fee: "₱20", operating_hours: "7:00 AM – 5:00 PM", location: "Antadao, Sagada", image: "assets/images/bokya.jpg", cultural_protocols: "None", safety_guidelines: "Slippery." },
    { id: 20, name: "Latang & Luminong", municipality: "Sagada", category: "Adventure", description: "Underground river and cave.", lat: 17.0803, lng: 120.8989, entrance_fee: "Included in cave connection", operating_hours: "8:00 AM – 5:00 PM", location: "Sagada", image: "assets/images/latang.jpg", cultural_protocols: "Listen to guide.", safety_guidelines: "Cramped spaces." },
    { id: 21, name: "Pongas Falls", municipality: "Sagada", category: "Nature", description: "Wide falls, good for swimming.", lat: 17.0536, lng: 120.8872, entrance_fee: "₱20", operating_hours: "7:00 AM – 5:00 PM", location: "Fidelisan, Sagada", image: "assets/images/pongas.jpg", cultural_protocols: "None", safety_guidelines: "Life vest recommended." },
    { id: 22, name: "Ankileng Village", municipality: "Sagada", category: "Cultural", description: "Traditional weaving and pottery.", lat: 17.0742, lng: 120.9061, entrance_fee: "Free", operating_hours: "Always open", location: "Sagada", image: "assets/images/ankileng.jpg", cultural_protocols: "Ask before taking photos.", safety_guidelines: "None" },
    { id: 23, name: "Ganduyan Museum", municipality: "Sagada", category: "Cultural", description: "Private collection of Igorot artifacts.", lat: 17.0808, lng: 120.9039, entrance_fee: "₱30", operating_hours: "9:00 AM – 5:00 PM", location: "Sagada", image: "assets/images/ganduyan.jpg", cultural_protocols: "Don’t touch exhibits.", safety_guidelines: "None" },
    { id: 24, name: "Echo Valley", municipality: "Sagada", category: "Nature", description: "Hiking trail leading to hanging coffins.", lat: 17.0847, lng: 120.9028, entrance_fee: "Free (part of Sagada env fee)", operating_hours: "6:00 AM – 6:00 PM", location: "Sagada", image: "assets/images/echo_valley.jpg", cultural_protocols: "Respect burial sites.", safety_guidelines: "Stay on trail." },
    { id: 25, name: "Lake Danum", municipality: "Sagada", category: "Nature", description: "Small man‑made lake.", lat: 17.0658, lng: 120.8947, entrance_fee: "Free", operating_hours: "Always open", location: "Sagada", image: "assets/images/lake_danum.jpg", cultural_protocols: "None", safety_guidelines: "None" },
    { id: 26, name: "Sagada Pottery", municipality: "Sagada", category: "Cultural", description: "Make your own pottery.", lat: 17.0769, lng: 120.9058, entrance_fee: "₱100 (workshop)", operating_hours: "9:00 AM – 4:00 PM", location: "Sagada", image: "assets/images/pottery.jpg", cultural_protocols: "Book ahead.", safety_guidelines: "Use tools carefully." },
    { id: 27, name: "Calvary Hills", municipality: "Sagada", category: "Cultural", description: "Stations of the cross on limestone hills.", lat: 17.0786, lng: 120.9069, entrance_fee: "Free", operating_hours: "Always open", location: "Sagada", image: "assets/images/calvary.jpg", cultural_protocols: "Respect religious site.", safety_guidelines: "Steep stairs." },
    { id: 28, name: "Mt. Data", municipality: "Bauko", category: "Viewpoint", description: "Historical WW2 site, pine forest.", lat: 16.8817, lng: 120.8386, entrance_fee: "Free", operating_hours: "Always open", location: "Bauko", image: "assets/images/mt_data.jpg", cultural_protocols: "None", safety_guidelines: "Cold; foggy." },
    { id: 29, name: "Sagada Weaving", municipality: "Sagada", category: "Cultural", description: "Watch traditional backstrap weaving.", lat: 17.0800, lng: 120.9042, entrance_fee: "Free", operating_hours: "8:00 AM – 5:00 PM", location: "Sagada", image: "assets/images/sagada_weave.jpg", cultural_protocols: "Buy directly from weavers.", safety_guidelines: "None" }
];

// Initialize default admin if none exists
function initAdminAuth() {
    if (!localStorage.getItem(ADMIN_STORAGE_KEY)) {
        const defaultAdmin = {
            id: 1,
            fullname: 'Administrator',
            email: 'admin@mtprovince.ph',
            username: 'admin',
            password: 'admin123'
        };
        localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify([defaultAdmin]));
    }
}
initAdminAuth();

// 🔧 FIXED: Also replace empty array with default spots
function initSpots() {
    const stored = localStorage.getItem(SPOTS_STORAGE_KEY);
    if (!stored) {
        localStorage.setItem(SPOTS_STORAGE_KEY, JSON.stringify(DEFAULT_SPOTS));
    } else {
        const spots = JSON.parse(stored);
        if (spots.length === 0) {
            localStorage.setItem(SPOTS_STORAGE_KEY, JSON.stringify(DEFAULT_SPOTS));
        }
    }
}
initSpots();

// Check if user is logged in
function isAuthenticated() {
    return sessionStorage.getItem('adminUser') !== null;
}

// Login
function login(username, password) {
    const users = JSON.parse(localStorage.getItem(ADMIN_STORAGE_KEY) || '[]');
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        sessionStorage.setItem('adminUser', JSON.stringify({
            id: user.id,
            name: user.fullname,
            username: user.username
        }));
        return true;
    }
    return false;
}

// Logout
function logout() {
    sessionStorage.removeItem('adminUser');
    window.location.href = 'login.html';
}

// Register new admin
function register(fullname, email, username, password) {
    const users = JSON.parse(localStorage.getItem(ADMIN_STORAGE_KEY) || '[]');
    if (users.find(u => u.username === username)) {
        return { success: false, message: 'Username already exists.' };
    }
    if (users.find(u => u.email === email)) {
        return { success: false, message: 'Email already registered.' };
    }
    const newUser = {
        id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
        fullname,
        email,
        username,
        password
    };
    users.push(newUser);
    localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(users));
    return { success: true };
}

// ==================== SPOT MANAGEMENT ====================

// Read all spots
function getSpots() {
    return JSON.parse(localStorage.getItem(SPOTS_STORAGE_KEY) || '[]');
}

// Save spots array to localStorage
function saveSpots(spots) {
    localStorage.setItem(SPOTS_STORAGE_KEY, JSON.stringify(spots));
}

// Add new spot
function addSpot(spotData) {
    const spots = getSpots();
    const newId = spots.length > 0 ? Math.max(...spots.map(s => s.id)) + 1 : 1;
    const newSpot = {
        id: newId,
        ...spotData,
        lat: spotData.lat || null,
        lng: spotData.lng || null,
        entrance_fee: spotData.entrance_fee || 'Free',
        operating_hours: spotData.operating_hours || 'N/A',
        location: spotData.location || '',
        image: spotData.image || 'assets/images/default.jpg',
        cultural_protocols: spotData.cultural_protocols || '',
        safety_guidelines: spotData.safety_guidelines || ''
    };
    spots.push(newSpot);
    saveSpots(spots);
    return newSpot;
}

// Update existing spot
function updateSpot(id, spotData) {
    let spots = getSpots();
    const index = spots.findIndex(s => s.id == id);
    if (index !== -1) {
        spots[index] = {
            ...spots[index],
            ...spotData,
            id: Number(id)
        };
        saveSpots(spots);
        return true;
    }
    return false;
}

// Delete spot
function deleteSpot(id) {
    let spots = getSpots();
    const filtered = spots.filter(s => s.id != id);
    if (filtered.length !== spots.length) {
        saveSpots(filtered);
        return true;
    }
    return false;
}