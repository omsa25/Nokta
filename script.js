// 1. DATAGRUNNLAG - HELE LISTEN DIN MED MANGE STEDER
const places = [
    // --- FAST FOOD & BURGERS ---
    { 
        name: "Pele Pele", cat: "FastFood", city: "Oslo", lat: 59.9122048, lng: 10.7603045, status: "100%", trending: true, top10: true, vibe: "Sitteplasser", openHour: 11, closeHour: 23, 
        desc: "Ekstrem TikTok-hype på Grønland! Sprø, saftig og sykt populær halal-kylling og burgere.", cert: "Uavhengig", url: "https://pelepele.no/",
        menu: { bestsellers: [{ name: "Pele Pele Crispy Burger", desc: "Supercrispy kyllingbryst, signatursaus", price: "149,-" }], full: [{ name: "Hot Wings 6stk", desc: "Sprø kyllingvinger med dip", price: "89,-" }] }
    },
    { 
        name: "88 Street Burger", cat: "FastFood", city: "Lørenskog", lat: 59.9272856, lng: 10.9531406, status: "100%", trending: true, top10: true, vibe: "Sitteplasser", openHour: 12, closeHour: 22, 
        desc: "Premium smashburgere lokalt på Lørenskog. Høy kvalitet og saftig biffkjøtt.", cert: "Muslimsk eier", url: "https://www.facebook.com/88burgerlorenskog/",
        menu: { bestsellers: [{ name: "88 Classic Smash", desc: "2x80g storfekjøtt, cheddar, pickles, 88-saus", price: "139,-" }], full: [{ name: "Truffle Smash Burger", desc: "Trøffelmajones, stekt løk", price: "149,-" }] }
    },
    { 
        name: "Zam Zam Hasle", cat: "FastFood", city: "Oslo", lat: 59.923412, lng: 10.791533, status: "100%", trending: true, top10: true, vibe: "Nattmat", openHour: 11, closeHour: 23, 
        desc: "Deres legendariske 'Nanwich' er en viral hit som bare må testes. Fullpakket med smak.", cert: "Uavhengig", url: "",
        menu: { bestsellers: [{ name: "Kylling Nanwich", desc: "Kylling kebabkjøtt pakket inn i rykende ferskt nanbrød med hvitløksdressing", price: "159,-" }], full: [{ name: "Biff Tallerken", desc: "Marinert strimlet biff med pommes frites og salat", price: "189,-" }] }
    },
    { 
        name: "Smash & Grab Drammen", cat: "FastFood", city: "Drammen", lat: 59.743811, lng: 10.204544, status: "100%", trending: true, top10: true, vibe: "Nattmat", openHour: 12, closeHour: 23, 
        desc: "Drammens mest populære smashburger med sprø og fete osteskorper.", cert: "Muslimsk eier", url: "",
        menu: { bestsellers: [{ name: "Classic Oklahoma Smash", desc: "2x80g biffkjøtt presset med tynne løkskiver, cheddar og grab-saus", price: "145,-" }], full: [{ name: "Dirty Fries", desc: "Pommes frites toppet med smeltet cheddar, hakket jalapenos og løk", price: "69,-" }] }
    },
    { name: "Mannu Grill", cat: "FastFood", city: "Strømmen", lat: 59.946122, lng: 11.004455, status: "100%", top10: true, vibe: "Nattmat", openHour: 11, closeHour: 2, desc: "Klassisk og elsket samlingspunkt for ekte kebab på Strømmen. Kjent for rullekebab.", cert: "Muslimsk eier", url: "" },
    { name: "Nam Nam Hauketo", cat: "FastFood", city: "Oslo", lat: 59.845012, lng: 10.806034, status: "100%", top10: true, vibe: "Nattmat", openHour: 12, closeHour: 23, desc: "Legendarisk og hyllet halal biffpizza sør i Oslo. Svære porsjoner.", cert: "IRN", url: "" },
    { name: "Halal Tøyen Burger", cat: "FastFood", city: "Oslo", lat: 59.915033, lng: 10.775044, status: "100%", top10: false, vibe: "Nattmat", openHour: 11, closeHour: 23, desc: "Sykt saftige, tykke burgere og ikoniske, sprø søtpotetfries på Tøyen.", cert: "IRN", url: "" },
    { name: "Jønk Triaden", cat: "FastFood", city: "Lørenskog", lat: 59.928812, lng: 10.957533, status: "Valg", top10: false, vibe: "Sitteplasser", openHour: 12, closeHour: 22, desc: "Himmelske smashburgere på senteret. Husk å spesifisere halal ved bestilling.", cert: "Uavhengig", url: "https://www.jonk.no/" },
    { name: "Fly Chicken Steen & Strøm", cat: "FastFood", city: "Oslo", lat: 59.911812, lng: 10.744133, status: "Valg", top10: false, vibe: "Sitteplasser", openHour: 10, closeHour: 21, desc: "Sprø, fritert kylling og fete loaded fries. Kyllingen er sertifisert halal.", cert: "IRN", url: "https://flychicken.no/" },
    { name: "Bastard Burgers Torggata", cat: "FastFood", city: "Oslo", lat: 59.914522, lng: 10.749233, status: "Valg", top10: false, vibe: "Sitteplasser", openHour: 11, closeHour: 23, desc: "Svensk smashburger-suksess i Torggata med eget dedikert halal-kjøtt på forespørsel.", cert: "Uavhengig", url: "https://bastardburgers.com/no/" },
    { name: "Legal Burgers", cat: "FastFood", city: "Oslo", lat: 59.918044, lng: 10.755055, status: "100%", top10: false, vibe: "Nattmat", openHour: 12, closeHour: 23, desc: "Smakfulle, rimelige og saftige burgere elsket av studenter inni sentrum.", cert: "IRN", url: "" },

    // --- ASIAN & WOK ---
    { 
        name: "Tasty Thai Grønland", cat: "Asian", city: "Oslo", lat: 59.9131854, lng: 10.7604482, status: "100%", trending: true, top10: true, vibe: "Sitteplasser", openHour: 12, closeHour: 22, 
        desc: "Kjempepopulær og sykt smaksrik halal thaimat på Grønland. Alltid god stemning.", cert: "IRN", url: "https://tastythai.no/",
        menu: { bestsellers: [{ name: "Pad Thai Kylling", desc: "Klassiske risnudler, egg, peanøtter", price: "165,-" }], full: [{ name: "Kylling Satay", desc: "Grillede kyllingspyd m/peanøttsaus", price: "159,-" }] }
    },
    { name: "Wok & Go Torggata", cat: "Asian", city: "Oslo", lat: 59.915233, lng: 10.749944, status: "100%", trending: true, top10: false, vibe: "Nattmat", openHour: 11, closeHour: 23, desc: "Lynrask og rykende fersk halal street-wok. Du velger saus og proteiner selv.", cert: "IRN", url: "https://wokgo.no/" },
    { name: "Rice & Noodles", cat: "Asian", city: "Oslo", lat: 59.913822, lng: 10.753011, status: "100%", trending: false, top10: false, vibe: "Sitteplasser", openHour: 12, closeHour: 22, desc: "Vilt populært vietnamesisk konsept i Youngstorget-området. Alt kjøtt er halal.", cert: "IRN", url: "https://www.ricenoodles.no/" },
    { name: "Dim Sum House", cat: "Asian", city: "Oslo", lat: 59.916544, lng: 10.738055, status: "Valg", trending: false, top10: false, vibe: "Sitteplasser", openHour: 14, closeHour: 22, desc: "Eksklusiv og nydelig dumplings og wok. Spør betjeningen etter den egne halal-menyen.", cert: "Uavhengig", url: "https://dimsumhouse.no/" },
    { name: "Sushibar+Wine Posthallen", cat: "Asian", city: "Oslo", lat: 59.911211, lng: 10.745522, status: "100%", trending: false, top10: false, vibe: "Sitteplasser", openHour: 11, closeHour: 22, desc: "Premium, bærekraftig sushi hvor alt kylling- og biffkjøtt er sertifisert halal.", cert: "IRN", url: "https://sushibarwine.no/" },
    { name: "Asia Aker Brygge", cat: "Asian", city: "Oslo", lat: 59.910533, lng: 10.726544, status: "Valg", trending: false, top10: false, vibe: "Sitteplasser", openHour: 12, closeHour: 23, desc: "Luksuriøst asiatisk fusjonskonsept med nydelige og trygge halal-alternativer.", cert: "Uavhengig", url: "https://asiaakerbrygge.no/" },
    { name: "Tasty Thai Stovner", cat: "Asian", city: "Oslo", lat: 59.9614907, lng: 10.9241876, status: "100%", trending: false, top10: false, vibe: "Sitteplasser", openHour: 13, closeHour: 21, desc: "Autentiske og krydrede thairetter lett tilgjengelig på Stovner Senter.", cert: "IRN", url: "" },

    // --- MIDTØSTEN ---
    { 
        name: "Alibaba Turkish Grill", cat: "Midtosten", city: "Oslo", lat: 59.9191861, lng: 10.7633571, status: "100%", top10: true, vibe: "Sitteplasser", openHour: 11, closeHour: 23, 
        desc: "Legendarisk tyrkisk kullgrill og fantastiske grillretter midt i hjertet av Oslo.", cert: "Muslimsk eier", url: "https://alibabagrill.no/",
        menu: { bestsellers: [{ name: "Adana Kebab Tallerken", desc: "Krydret lammedeig spiddet på kullgrill", price: "210,-" }], full: [{ name: "Kyllingspyd (Tavuk Sis)", desc: "Marinert kyllingbryst på spidd", price: "199,-" }] }
    },
    { name: "Saray Restaurant", cat: "Midtosten", city: "Oslo", lat: 59.919245, lng: 10.765032, status: "100%", top10: true, vibe: "Sitteplasser", openHour: 11, closeHour: 23, desc: "Flott tyrkisk restaurant i Trondheimsveien. Perfekt atmosfære for familiemiddager.", cert: "Muslimsk eier", url: "https://saray.no/" },
    { name: "Alibaba Stovner", cat: "Midtosten", city: "Oslo", lat: 59.9615019, lng: 10.924748, status: "100%", top10: true, vibe: "Sitteplasser", openHour: 12, closeHour: 22, desc: "Smakfulle tyrkiske retter og ypperlig kebab sentralt på Stovner Senter.", cert: "Muslimsk eier", url: "" },
    { name: "Istanbul Restaurant", cat: "Midtosten", city: "Oslo", lat: 59.912611, lng: 10.765522, status: "100%", vibe: "Sitteplasser", openHour: 11, closeHour: 23, desc: "Enormt og alltid stappfullt tyrkisk mathus på Grønland. Perfekt for vennegjenger.", cert: "Muslimsk eier", url: "https://istanbulrestaurant.no/" },
    { name: "Grill Kassa Grønland", cat: "Midtosten", city: "Oslo", lat: 59.912833, lng: 10.763011, status: "100%", vibe: "Nattmat", openHour: 11, closeHour: 1, desc: "Rå tyrkisk kullgrill. Spidde- og adana-kebabene her smaker helt konge og autentisk.", cert: "Muslimsk eier", url: "" },
    { name: "Kebabish Original", cat: "Midtosten", city: "Oslo", lat: 59.914044, lng: 10.764555, status: "100%", vibe: "Sitteplasser", openHour: 12, closeHour: 23, desc: "Klassiske pakistanske og midtøsten-retter rett fra glødende tandoor-ovnen.", cert: "IRN", url: "https://kebabish.no/" },

    // --- INDISK ---
    { 
        name: "New Delhi Restaurant", cat: "Indisk", city: "Oslo", lat: 59.911943, lng: 10.751351, status: "100%", top10: true, vibe: "Sitteplasser", openHour: 15, closeHour: 23,
        desc: "Helt fantastisk, moderne og kritikerrost indisk restaurant på Tjuvholmen/Aker Brygge.", cert: "Uavhengig", url: "https://tyholmen.newdelhi.no/",
        menu: { bestsellers: [{ name: "Chicken Tikka Masala", desc: "Grillet kylling i fyldig, kremet tomatsaus", price: "235,-" }], full: [{ name: "Garlic Naan", desc: "Ferskt tandooribakt nanbrød med hvitløk", price: "49,-" }] }
    },
    { name: "Jewel of India", cat: "Indisk", city: "Oslo", lat: 59.914832, lng: 10.716182, status: "100%", top10: false, vibe: "Sitteplasser", openHour: 16, closeHour: 22, desc: "Gourmetopplevelse på Frogner med førsteklasses råvarer og tradienstell indiske oppskrifter.", cert: "Muslimsk eier", url: "https://jewelofindia.no/" },
    { name: "Badmash Lillestrøm", cat: "Indisk", city: "Lillestrøm", lat: 59.957511, lng: 11.046022, status: "100%", vibe: "Sitteplasser", openHour: 13, closeHour: 22, desc: "Urbant indisk streetfood-konsept med magisk og sykt populær Butter Chicken.", cert: "IRN", url: "https://badmash.no/" },
    { name: "Listen to Baljit", cat: "Indisk", city: "Oslo", lat: 59.911533, lng: 10.724044, status: "100%", trending: true, vibe: "Sitteplasser", openHour: 12, closeHour: 23, desc: "Moderne indisk street-gourmet på Frogner. Fantastiske smaker, farger og unike vibber.", cert: "IRN", url: "https://listentobaljit.no/" },
    { name: "Mantra Torggata", cat: "Indisk", city: "Oslo", lat: 59.914911, lng: 10.749522, status: "100%", vibe: "Sitteplasser", openHour: 13, closeHour: 22, desc: "Ekte indisk tandoori midt i sentrum med 100% offisiell halal-sertifisering.", cert: "IRN", url: "https://mantrarestaurant.no/" },

    // --- TAKE AWAY & CATERING ---
    { name: "Hira Foods", cat: "TakeAway", city: "Oslo", lat: 59.919811, lng: 10.751122, status: "100%", trending: true, vibe: "Takeaway", openHour: 9, closeHour: 20, desc: "Legendarisk og massivt populær halal-catering. Kjent for uforglemmelig pakistansk festmat.", cert: "Muslimsk eier", url: "https://hirafoods.no/" },
    { name: "Kitchen Caters Lørenskog", cat: "TakeAway", city: "Lørenskog", lat: 59.931211, lng: 10.962122, status: "100%", trending: true, vibe: "Takeaway", openHour: 10, closeHour: 21, desc: "Fantastisk og superpopulær pakistansk og indisk takeaway/catering på Lørenskog.", cert: "Muslimsk eier", url: "https://kitchencaters.no/" },
    { name: "Al-Khair Catering", cat: "TakeAway", city: "Oslo", lat: 59.924233, lng: 10.785044, status: "100%", vibe: "Takeaway", openHour: 9, closeHour: 19, desc: "Autentisk pakistansk catering av ypperste klasse. Himmelsk Biryani og rykende varm Korma.", cert: "Muslimsk eier", url: "https://alkhair.no/" },
    { name: "Ziafat Catering", cat: "TakeAway", city: "Oslo", lat: 59.914511, lng: 10.766022, status: "100%", vibe: "Takeaway", openHour: 10, closeHour: 19, desc: "Førsteklasses festmat og skreddersydde menyer for alle typer store halal-arrangementer.", cert: "Muslimsk eier", url: "https://ziafat.no/" },
    { name: "Lillestrøm Halal Takeaway", cat: "TakeAway", city: "Lillestrøm", lat: 59.955411, lng: 11.042222, status: "100%", vibe: "Takeaway", openHour: 12, closeHour: 22, desc: "Hurtig, fersk og glovarm takeaway perfekt for de kveldene du bare vil rulle bortom og hente i bil.", cert: "Uavhengig", url: "" },

    // --- DESSERT & KOS ---
    { name: "Churros Grønland", cat: "Dessert", city: "Oslo", lat: 59.913111, lng: 10.762022, status: "100%", trending: true, vibe: "Nattmat", openHour: 12, closeHour: 23, desc: "Rykende ferske, sprø spanske churros med varm, smeltet sjokolade. Sykt populært på kveldstid!", cert: "Uavhengig", url: "" },
    { name: "Waffle & Co", cat: "Dessert", city: "Oslo", lat: 59.914111, lng: 10.748022, status: "100%", vibe: "Sitteplasser", openHour: 11, closeHour: 22, desc: "Ekstreme loaded boblevafler med alt av is, bær og sauser du overhodet kan drømme om.", cert: "Uavhengig", url: "" },
    { name: "Munchies Ice Cream", cat: "Dessert", city: "Oslo", lat: 59.912233, lng: 10.759544, status: "100%", trending: true, vibe: "Nattmat", openHour: 13, closeHour: 0, desc: "Gatens mest berømte rulle-is og milkshaker, perfekt stoppested på kveldstid.", cert: "Uavhengig", url: "" },
    { name: "Pascal Tollbugata", cat: "Dessert", city: "Oslo", lat: 59.910911, lng: 10.744522, status: "100%", vibe: "Sitteplasser", openHour: 10, closeHour: 18, desc: "Franske makroner og luksuriøse kaker i særklasse for en skikkelig fine feiring eller date.", cert: "Uavhengig", url: "https://pascal.no/" },
    { name: "Sweet Treats Lørenskog", cat: "Dessert", city: "Lørenskog", lat: 59.929011, lng: 10.958022, status: "100%", vibe: "Sitteplasser", openHour: 11, closeHour: 22, desc: "Fantastisk kaffebar på Lørenskog med dritgode nystekte crêpes, vafler og ferske donuts.", cert: "Uavhengig", url: "" }
];

// 2. STYRINGSMOTOR FOR LOKASJON OG FILTER
let userLocation = { lat: 59.9285, lng: 10.9592 }; 
let activeCat = "Alle";
let map, markerGroup;

// --- NY INFO-BOKS FUNKSJON ---
function toggleInfo() {
    const modal = document.getElementById('infoModal');
    if (modal.classList.contains('show')) {
        modal.classList.remove('show');
        setTimeout(() => modal.style.display = 'none', 300);
    } else {
        modal.style.display = 'flex';
        void modal.offsetWidth; 
        modal.classList.add('show');
    }
}

// DELINGSFUNKSJON
function sharePlace(name, city) {
    const mapsUrl = `http://googleusercontent.com/maps.google.com/maps?q=${encodeURIComponent(name + ' ' + city)}`;
    const shareText = `🔥 Sjekk ut ${name} i ${city}! Fant stedet på Nokta. – 100% Halal. Se kartet her: ${mapsUrl}`;

    if (navigator.share) {
        navigator.share({
            title: `Nokta. - ${name}`,
            text: shareText,
            url: mapsUrl
        }).catch(console.error);
    } else {
        navigator.clipboard.writeText(shareText).then(() => {
            alert(`🔗 Kobling og info for ${name} er kopiert! Lim inn rett i chatten.`);
        }).catch(console.error);
    }
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; 
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon/2) * Math.sin(dLon/2);
    return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))); 
}

function initMap() {
    if (typeof L === 'undefined') return;
    map = L.map('map', { zoomControl: false }).setView([userLocation.lat, userLocation.lng], 12);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {}).addTo(map);
    markerGroup = L.layerGroup().addTo(map);
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            userLocation.lat = position.coords.latitude;
            userLocation.lng = position.coords.longitude;
            L.circleMarker([userLocation.lat, userLocation.lng], { radius: 8, fillColor: '#2b6cb0', color: '#ffffff', weight: 3, fillOpacity: 1 }).addTo(map);
            map.setView([userLocation.lat, userLocation.lng], 12);
            renderFeedAndMap();
        }, () => { renderFeedAndMap(); });
    } else { renderFeedAndMap(); }
}

function checkIsOpen(open, close) {
    const now = new Date();
    const hour = now.getHours();
    if (close < open) { return (hour >= open || hour < close); }
    return (hour >= open && hour < close);
}
