/* =====================================================
   SHOP SETTINGS — EDIT EVERYTHING HERE (no coding needed)
   ===================================================== */
const SETTINGS = {
  shopName: "Online Hat",              // আপনার শপের নাম দিন
  tagline: "অথেনটিক প্রোডাক্ট, সেরা দামে — সারা বাংলাদেশে হোম ডেলিভারি",

  // শপের লোগো — repo তে images ফোল্ডারে logo.png আপলোড করলে অটো দেখাবে।
  // লোগো ছবি না থাকলে প্রথম অক্ষর দেখাবে। এডিট করবেন না যদি না নিজের লোগো থাকে।
  logo: "logo.png",
  phone: "01786647606",                // আপনার ফোন নম্বর (কাস্টমার কল করবে)

  // WhatsApp number in international format WITHOUT + (01XXXXXXXXX -> 8801XXXXXXXXX)
  // অর্ডার এই নম্বরে WhatsApp এ আসবে
  whatsapp: "8801786647606",

  // অ্যাডভান্স পেমেন্ট নম্বর (Send Money করার জন্য)
  bkash: "01722296526 (Personal)",
  nagad: "01722296526 (Personal)",

  // অ্যাডভান্স (bKash/Nagad) দিলে কত % ডিসকাউন্ট
  advanceDiscountPercent: 5,

  // ডেলিভারি চার্জ
  deliveryInsideDhaka: 60,
  deliveryOutsideDhaka: 120,

  // এই তোলকের উপরে ফ্রি ডেলিভারি (0 দিলে ফিচার বন্ধ)
  freeDeliveryOver: 0,
};

/* =====================================================
   PRODUCTS — এভাবে নিজের প্রোডাক্ট যোগ/বদলান
   image: "images/p1.jpg" ফোল্ডারে ছবি রাখুন। ছবি না থাকলে
   emoji দেখাবে।
   ===================================================== */
const PRODUCTS = [
  {
    id: "p1",
    name: "5-in-1 USB-C Hub / Docking Station",
    nameBn: "৫ ইন ১ ইউএসবি-সি হাব",
    price: 569,
    oldPrice: 850,
    image: "images/p1.jpg",
    emoji: "🔌",
    badge: "Best Seller",
    desc: "Multi-function USB-C hub with HDMI 4K, 3x USB 3.0, RJ45 LAN & PD charging. Works with laptops, phones & tablets. 1 month warranty.",
  },
  {
    id: "p2",
    name: "Wireless Bluetooth Earbuds TWS",
    nameBn: "ওয়্যারলেস ব্লুটুথ ইয়ারবাডস",
    price: 287,
    oldPrice: 450,
    image: "images/p2.jpg",
    emoji: "🎧",
    badge: "Hot Deal",
    desc: "TWS earbuds with charging case, touch control, HD mic & deep bass. 4–5 hours playtime. Compatible with all phones.",
  },
  {
    id: "p3",
    name: "Mini Tripod & Phone Holder Stand",
    nameBn: "মিনি ট্রাইপড ও ফোন হোল্ডার",
    price: 350,
    oldPrice: 500,
    image: "images/p3.jpg",
    emoji: "📱",
    badge: "",
    desc: "Adjustable tripod stand for mobile & camera. Perfect for reels, vlogs & online classes. Strong grip, 360° rotation.",
  },
  {
    id: "p4",
    name: "64GB High-Speed Pen Drive",
    nameBn: "৬৪ জিবি হাই-স্পিড পেনড্রাইভ",
    price: 490,
    oldPrice: 650,
    image: "images/p4.jpg",
    emoji: "💾",
    badge: "",
    desc: "USB 3.0 metal body pen drive, read speed up to 100MB/s. Dual connector (Type-C + USB) available.",
  },
  {
    id: "p5",
    name: "Selfie Ring Light with Stand",
    nameBn: "সেলফি রিং লাইট স্ট্যান্ডসহ",
    price: 750,
    oldPrice: 990,
    image: "images/p5.jpg",
    emoji: "💡",
    badge: "New",
    desc: "10-inch LED ring light, 3 color modes & brightness control. Best for live streaming, makeup & reels.",
  },
  {
    id: "p6",
    name: "Gaming Mouse RGB Backlit",
    nameBn: "গেমিং মাউস আরজিবি",
    price: 420,
    oldPrice: 600,
    image: "images/p6.jpg",
    emoji: "🖱️",
    badge: "",
    desc: "6-button gaming mouse with RGB lighting, adjustable DPI up to 3200. Works on PC & laptop.",
  },
];
