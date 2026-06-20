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

function getFilteredPlaces() {
    const query = document.getElementById('searchBox') && document.getElementById('searchBox').value ? document.getElementById('searchBox').value.toLowerCase() : '';
    places.forEach(p => { p.distance = calculateDistance(userLocation.lat, userLocation.lng, p.lat, p.lng); });

    return places.filter(p => {
        const isNattmatFilter = activeCat === "Nattmat";
        const satisfiesNattmat = isNattmatFilter ? (p.closeHour >= 23 || p.closeHour < 6) : true;
        
        const matchCat = (activeCat === "Alle" || 
                          (activeCat === "IRN" && p.cert === "IRN") || 
                          (activeCat === "Trender" && p.trending) || 
                          (activeCat === "Top10" && p.top10) ||
                          (isNattmatFilter && satisfiesNattmat) ||
                          (activeCat === "Sitteplasser" && p.vibe === "Sitteplasser") ||
                          p.cat === activeCat);
                          
        const matchQuery = (p.name.toLowerCase().includes(query) || p.city.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query));
        
        return matchCat && matchQuery;
    }).sort((a, b) => a.distance - b.distance);
}

function renderFeedAndMap(customList = null) {
    const feed = document.getElementById('feedGrid');
    if (!feed) return;
    feed.innerHTML = '';
    if (markerGroup) markerGroup.clearLayers();

    const listToRender = customList || getFilteredPlaces();

    if(listToRender.length === 0) {
        feed.innerHTML = `<p style="text-align:center; color:var(--text-muted); padding:3rem 0; font-size:0.9rem;">Ingen steder funnet i denne kategorien ennå...</p>`;
        return;
    }

    listToRender.forEach((p, index) => {
        const isOpen = checkIsOpen(p.openHour, p.closeHour);
        const timePill = isOpen ? `<span class="status-pill open-pill">Open</span>` : `<span class="status-pill" style="color:#ff453a; background-color: rgba(255, 69, 58, 0.1);">Closed</span>`;
        
        const searchName = encodeURIComponent(p.name + " " + p.city);
        const tiktokSearchUrl = `https://www.google.com/search?q=${searchName}+site:tiktok.com`;
        const instaSearchUrl = `https://www.instagram.com/explore/tags/${encodeURIComponent(p.name.replace(/\s+/g, ''))}/`;
        const targetUrl = p.url ? p.url : `https://www.google.com/search?q=${searchName}`;

        let displayCat = p.cat;
        if(p.cat === "FastFood") displayCat = "Fast Food";
        if(p.cat === "Midtosten") displayCat = "Tyrkisk & Midtøsten";
        if(p.cat === "Asian") displayCat = "Asian & Wok";
        if(p.cat === "Indisk") displayCat = "Indisk";
        if(p.cat === "TakeAway") displayCat = "Take Away & Catering";
        if(p.cat === "Dessert") displayCat = "Dessert & Kos";

        const distanceStr = p.distance ? `${p.distance.toFixed(1)} km` : '-- km';

        let menuHtml = '';
        if(p.menu) {
            let bestsellersHtml = p.menu.bestsellers.map(i => `<div class="menu-item"><div><div class="menu-item-name">${i.name}</div><div class="menu-item-desc">${i.desc}</div></div><div class="menu-item-price">${i.price}</div></div>`).join('');
            let fullHtml = p.menu.full.map(i => `<div class="menu-item"><div><div class="menu-item-name">${i.name}</div><div class="menu-item-desc">${i.desc}</div></div><div class="menu-item-price">${i.price}</div></div>`).join('');
            menuHtml = `<div class="menu-dropdown" id="menu-${index}"><div class="menu-section-title">⭐ Bestsellere</div>${bestsellersHtml}<div class="menu-section-title">🍽️ Hele menyen</div>${fullHtml}</div>`;
        } else {
            menuHtml = `<div class="menu-dropdown" id="menu-${index}"><p style="font-size:0.8rem; color:var(--text-muted); margin:0 0 1rem 0; font-weight:500;">Menyen for dette stedet lastes inn om kort tid...</p></div>`;
        }

        const card = document.createElement('div');
        card.className = 'food-card';
        card.innerHTML = `
            <div class="card-top">
                <a href="${targetUrl}" target="_blank" class="restaurant-link">
                    <h2 class="restaurant-title">${p.name}</h2>
                    <svg viewBox="0 0 512 512"><path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H176a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0H344a24,24,0,0,0-24,24V40a24,24,0,0,0,24,24H425.4L202.7,286.7a16,16,0,0,0,0,22.6l12,12a16,16,0,0,0,22.6,0L460,98.6V176a24,24,0,0,0,24,24h16a24,24,0,0,0,24-24V24A24,24,0,0,0,488,0Z"/></svg>
                </a>
                <div>${timePill}</div>
            </div>
            <p class="food-desc">${p.desc}</p>
            <div class="meta-line">
                ${p.city}<span style="white-space: nowrap;"> • ${distanceStr} unna</span><span style="white-space: nowrap;"> • <span class="cat-tag">${displayCat}</span></span><span style="white-space: nowrap;"> • Stenger kl. ${p.closeHour === undefined ? '23' : (p.closeHour === 0 ? '00' : p.closeHour)}:00</span><span style="white-space: nowrap;"> • ${p.cert}</span>
            </div>
            <div class="card-buttons" style="display: flex; align-items: center; gap: 0.5rem; width: 100%;">
                <button class="social-btn menu-toggle-btn" onclick="toggleMenu(${index})">📋 Vis meny</button>
                <button class="social-btn" style="padding: 0.6rem; min-width: 36px; justify-content: center;" onclick="window.open('${tiktokSearchUrl}', '_blank')">
                    <svg viewBox="0 0 448 512" style="margin:0;"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,13.61,57.06A122.18,122.18,0,0,0,410,117.47a112.5,112.5,0,0,0,38,7.51Z"/></svg>
                </button>
                <button class="social-btn" style="padding: 0.6rem; min-width: 36px; justify-content: center;" onclick="window.open('${instaSearchUrl}', '_blank')">
                    <svg viewBox="0 0 448 512" style="margin:0;"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2s34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8zM402.4 398.7c-7.8 19.6-22.9 34.7-42.6 42.5-29.5 3.1-99.5 2.4-135.8 2.4s-106.3.7-135.8-2.4c-19.6-7.8-34.7-22.9-42.5-42.6-3.1-29.5-2.4-99.5-2.4-135.8s-.7-106.3 2.4-135.8c7.8-19.6 22.9-34.7 42.6-42.5 29.5-3.1 99.5-2.4 135.8-2.4s106.3-.7 135.8 2.4c19.6 7.8 34.7 22.9 42.5 42.6 3.1 2.4 99.5 2.4 135.8 2.4s.8 106.3-2.4 135.8z"/></svg>
                </button>
                <button class="social-btn share-btn" style="padding: 0.6rem; min-width: 36px; justify-content: center;" onclick="sharePlace('${p.name}', '${p.city}')">
                    <svg viewBox="0 0 448 512" style="margin:0;"><path d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .3 8 .9 11.9l-94.1 47c-18.2-16.1-42.3-25.9-68.8-25.9c-53 0-96 43-96 96s43 96 96 96c26.5 0 50.6-9.8 68.8-25.9l94.1 47c-.6 3.9-.9 7.9-.9 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-26.5 0-50.6 9.8-68.8 25.9l-94.1-47c.6-3.9 .9-7.9 .9-11.9c0-4-.3-8-.9-11.9l94.1-47c18.2 16.1 42.3 25.9 68.8 25.9z"/></svg>
                </button>
            </div>
            ${menuHtml}
        `;
        feed.appendChild(card);

        if (map && markerGroup) {
            const marker = L.circleMarker([p.lat, p.lng], { radius: 7, fillColor: '#ff8b66', color: '#ffffff', weight: 2, opacity: 1, fillOpacity: 0.95 }).addTo(markerGroup);
            marker.bindPopup(`<b>${p.name}</b><br><span style="color:#2b6cb0; font-weight:bold;">🚗 ${distanceStr} unna</span>`);
        }
    });

    if (map && listToRender.length > 0 && !customList) {
        const points = listToRender.map(p => [p.lat, p.lng]);
        points.push([userLocation.lat, userLocation.lng]);
        map.fitBounds(points, { padding: [50, 50], maxZoom: 14 });
    }
}

function toggleMenu(index) {
    const menu = document.getElementById(`menu-${index}`);
    if (!menu) return;
    const btn = menu.parentElement.querySelector('.menu-toggle-btn');
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        if (btn) btn.innerText = "📋 Vis meny";
    } else {
        menu.classList.add('active');
        if (btn) btn.innerText = "✖️ Lukk meny";
    }
}

function surpriseMe() {
    const currentAvailablePlaces = getFilteredPlaces();
    if (currentAvailablePlaces.length === 0) return;
    const randomIndex = Math.floor(Math.random() * currentAvailablePlaces.length);
    const randomPick = currentAvailablePlaces[randomIndex];
    renderFeedAndMap([randomPick]);
    if (map) map.setView([randomPick.lat, randomPick.lng], 14);
}

function filter(cat) {
    activeCat = cat;
    
    document.querySelectorAll('.chip').forEach(btn => {
        btn.classList.remove('active');
    });

    const alleKnapp = document.querySelector(".filter-row button");
    const selectMenyer = document.querySelectorAll(".filter-row select");

    if (cat === 'Alle') {
        if (alleKnapp) alleKnapp.classList.add('active');
    } else {
        selectMenyer.forEach(select => {
            const harValg = Array.from(select.options).some(opt => opt.value === cat);
            if (harValg) {
                select.classList.add('active');
            }
        });
    }

    renderFeedAndMap();
}

document.addEventListener('DOMContentLoaded', () => {
    const searchBox = document.getElementById('searchBox');
    if (searchBox) {
        searchBox.addEventListener('input', () => renderFeedAndMap());
    }
});

window.addEventListener('load', () => {
    setTimeout(() => {
        if (typeof L !== 'undefined') {
            initMap();
        } else {
            renderFeedAndMap();
        }
    }, 300);
});
