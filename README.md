# Online Hat — E-commerce Website (100% Free)

ক্যাশ অন ডেলিভারি (Pathao) + bKash/Nagad অ্যাডভান্স ডিসকাউন্ট সিস্টেমসহ অনলাইন শপ।
Hosting: **GitHub Pages (ফ্রি)** — কোনো মাসিক খরচ নেই।

---

## 🚀 কিভাবে ফ্রি তে Deploy করবেন (GitHub Pages)

### ধাপ ১: GitHub এ ফাইল আপলোড
1. [github.com](https://github.com) এ ফ্রি একাউন্ট খুলুন
2. **New repository** তৈরি করুন → নাম দিন `online-hat`
3. Visibility: **Public** রাখুন → **Create repository**
4. **uploading an existing file** লিখায় ক্লিক করে এই ফাইলগুলো drag & drop করুন:
   - `index.html`, `product.html`, `style.css`, `products.js`
   - `images` ফোল্ডার (প্রোডাক্টের ছবি থাকলে)
5. **Commit changes** ক্লিক করুন

### ধাপ ২: Pages চালু করুন
1. Repository তে **Settings** → বাম মেনুতে **Pages**
2. Source: **Deploy from a branch** → Branch: **main** → Folder: **/(root)** → **Save**
3. ১–২ মিনিট অপেক্ষা করুন

### ধাপ ৩: আপনার ফ্রি ওয়েবসাইট রেডি 🎉
আপনার লিংক হবে:
```
https://আপনার-ইউজারনেম.github.io/online-hat/
```
এই লিংকটা Facebook Page এর Bio তে দিয়ে দিন (Bhorosha এর মতো)।

> 💡 চাইলে পরে ~১০০০ টাকায় `onlinehat.com` এর মতো ডোমেইন কিনে লাগাতে পারবেন — কিন্তু বাধ্যতামূলক না।

---

## ✏️ কিভাবে নিজের তথ্য বসাবেন

সব সেটিংস একটা ফাইলে: **`products.js`**

```js
const SETTINGS = {
  shopName: "Online Hat",
  phone: "017XXXXXXXX",          // ← আপনার ফোন নম্বর
  whatsapp: "8801XXXXXXXXX",     // ← অর্ডার আসবে এই WhatsApp এ (880 + নম্বর)
  bkash: "01XXXXXXXXX (Personal)",
  nagad: "01XXXXXXXXX (Personal)",
  advanceDiscountPercent: 5,     // ← অ্যাডভান্সে কত % ছাড়
  deliveryInsideDhaka: 60,       // ← ঢাকার ভিতরে ডেলিভারি চার্জ
  deliveryOutsideDhaka: 120,     // ← ঢাকার বাইরে ডেলিভারি চার্জ
};
```

### প্রোডাক্ট বদলানো / নতুন প্রোডাক্ট যোগ
`products.js` এর `PRODUCTS` লিস্টে একটা ব্লক কপি করে এভাবে বসান:

```js
{
  id: "p7",                          // ইউনিক নাম
  name: "Product Name in English",
  nameBn: "প্রোডাক্টের বাংলা নাম",
  price: 500,                        // বর্তমান দাম
  oldPrice: 700,                     // কাটা দাম (আছে যদি)
  image: "images/p7.jpg",            // ছবির ফাইল
  emoji: "📱",                        // ছবি না থাকলে এটা দেখাবে
  badge: "New",                      // কোণার ট্যাগ (চাইলে "" রাখুন)
  desc: "প্রোডাক্টের বর্ণনা...",
},
```

### ছবি যোগ করা
GitHub repo তে **Add file → Upload files** দিয়ে `images` ফোল্ডারে ছবি আপলোড করুন
(ছবির সাইজ ছোট রাখুন — প্রতিটা ~১০০ KB হলে সাইট ফাস্ট লোড হবে; [tinypng.com](https://tinypng.com) ফ্রি তে ছোট করা যায়)।

---

## 📦 অর্ডার কিভাবে আসবে

কাস্টমার ফর্ম পূরণ করলে একটা **WhatsApp মেসেজ** আপনার নম্বরে যাবে এই ফরম্যাটে:

```
🛒 নতুন অর্ডার — Online Hat
📦 প্রোডাক্ট: 5-in-1 USB-C Hub
🔢 পরিমাণ: 1
💰 দাম: ৳569 × 1 = ৳569
🚚 ডেলিভারি (ঢাকার বাইরে): ৳120
✅ সর্বমোট: ৳689
💳 পেমেন্ট: ক্যাশ অন ডেলিভারি
👤 নাম: ...
📱 মোবাইল: ...
🏠 ঠিকানা: ...
```

তারপর আপনার কাজ:
1. **কল দিয়ে কনফার্ম** করুন (নকিয়া অর্ডার বাদ যাবে)
2. কনফার্ম হলে পণ্য কিনুন → **Pathao Courier** এ পার্সেল দিন
3. bKash/Nagad অ্যাডভান্স পেলে টাকা নামলো কিনা চেক করে নিন

> ⚠️ শর্ত: WhatsApp এ অর্ডার পেতে হলে আপনার ফোনে **WhatsApp অ্যাপ লাগানো ও চালু** থাকতে হবে।

---

## 📁 ফাইল লিস্ট

| ফাইল | কাজ |
|---|---|
| `index.html` | হোমপেজ (প্রোডাক্ট গ্রিড, অফার, পেমেন্ট ইনফো) |
| `product.html` | প্রোডাক্ট ডিটেইল + অর্ডার ফর্ম |
| `style.css` | ডিজাইন |
| `products.js` | ⭐ সব সেটিংস ও প্রোডাক্ট লিস্ট — **এডিট করার ফাইল এটাই** |
| `images/` | প্রোডাক্টের ছবি (p1.jpg, p2.jpg ...) |
