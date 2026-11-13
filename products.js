/* =====================================================
   Online Hat — Data Loader
   আসল ডেটা এখন settings.json / products.json / coupons.json এ
   থাকে। Admin Panel (admin.html) থেকে সেগুলো এডিট করা যায়।
   নিচের FALLBACK ডেটা শুধু ব্যাকআপ — JSON ফাইল না পেলে ব্যবহার হয়।
   ===================================================== */
const FALLBACK_SETTINGS = {
  shopName: "Online Hat",
  tagline: "অথেনটিক প্রোডাক্ট, সেরা দামে — সারা বাংলাদেশে হোম ডেলিভারি",
  phone: "01786647606",
  whatsapp: "8801786647606",
  bkash: "01722296526 (Personal)",
  nagad: "01722296526 (Personal)",
  advanceDiscountPercent: 5,
  deliveryInsideDhaka: 60,
  deliveryOutsideDhaka: 120,
  freeDeliveryOver: 0,
  logo: "logo.png",
  orderEndpoint: "",
};

const FALLBACK_PRODUCTS = [
  { id: "p1", name: "5-in-1 USB-C Hub / Docking Station", nameBn: "৫ ইন ১ ইউএসবি-সি হাব", price: 569, oldPrice: 850, image: "images/p1.jpg", emoji: "🔌", badge: "Best Seller", desc: "Multi-function USB-C hub with HDMI 4K, 3x USB 3.0, RJ45 LAN & PD charging." },
  { id: "p2", name: "Wireless Bluetooth Earbuds TWS", nameBn: "ওয়্যারলেস ব্লুটুথ ইয়ারবাডস", price: 287, oldPrice: 450, image: "images/p2.jpg", emoji: "🎧", badge: "Hot Deal", desc: "TWS earbuds with charging case, touch control, HD mic & deep bass." },
  { id: "p3", name: "Mini Tripod & Phone Holder Stand", nameBn: "মিনি ট্রাইপড ও ফোন হোল্ডার", price: 350, oldPrice: 500, image: "images/p3.jpg", emoji: "📱", badge: "", desc: "Adjustable tripod stand for mobile & camera. 360° rotation." },
  { id: "p4", name: "64GB High-Speed Pen Drive", nameBn: "৬৪ জিবি হাই-স্পিড পেনড্রাইভ", price: 490, oldPrice: 650, image: "images/p4.jpg", emoji: "💾", badge: "", desc: "USB 3.0 metal body pen drive, read speed up to 100MB/s." },
  { id: "p5", name: "Selfie Ring Light with Stand", nameBn: "সেলফি রিং লাইট স্ট্যান্ডসহ", price: 750, oldPrice: 990, image: "images/p5.jpg", emoji: "💡", badge: "New", desc: "10-inch LED ring light, 3 color modes & brightness control." },
  { id: "p6", name: "Gaming Mouse RGB Backlit", nameBn: "গেমিং মাউস আরজিবি", price: 420, oldPrice: 600, image: "images/p6.jpg", emoji: "🖱️", badge: "", desc: "6-button gaming mouse with RGB lighting, DPI up to 3200." },
];

let SETTINGS = FALLBACK_SETTINGS;
let PRODUCTS = FALLBACK_PRODUCTS;
let COUPONS = [];

function loadShopData(cb) {
  const t = Date.now(); // cache-buster — publish করলেই নতুন ডেটা আসে
  Promise.all([
    fetch("settings.json?t=" + t).then(r => r.ok ? r.json() : Promise.reject()).catch(() => FALLBACK_SETTINGS),
    fetch("products.json?t=" + t).then(r => r.ok ? r.json() : Promise.reject()).catch(() => ({ products: FALLBACK_PRODUCTS })),
    fetch("coupons.json?t=" + t).then(r => r.ok ? r.json() : Promise.reject()).catch(() => []),
  ]).then(([s, p, c]) => {
    SETTINGS = Object.assign({}, FALLBACK_SETTINGS, s || {});
    PRODUCTS = (p && Array.isArray(p.products) && p.products.length) ? p.products : FALLBACK_PRODUCTS;
    COUPONS = Array.isArray(c) ? c : [];
    if (cb) cb();
  });
}
