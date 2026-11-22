/* =====================================================================
   THE RHEIDOL ROOMS — SITE AYARLARI  (en sık düzenlenecek dosya)
   Telefon, saat, adres veya sosyal medya değişirse sadece burayı güncelle.
   (Değişken adları GALATA_* olarak kalır: ortak mimari, main.js aynı.)
   ===================================================================== */
window.GALATA_CONFIG = {
  brand: "The Rheidol Rooms",
  siteUrl: "https://yahyasogut.github.io/rheidol/",

  social: {
    instagram: "https://www.instagram.com/therheidolrooms/",
    // Varsa doldur, boş bırakılanlar sitede görünmez:
    facebook: "",
    tiktok: "",
    google: "https://maps.app.goo.gl/dxdn7HDTvczRwHsT9"
  },

  branches: [
    {
      id: "rheidol",
      name: "The Rheidol Rooms",
      tagline: { en: "Neighbourhood café · breakfast, brunch & coffee", tr: "Mahalle kafesi · kahvaltı, brunch ve kahve" },
      address: ["16 Rheidol Terrace", "London N1 8NS"],
      phone: "+44 20 7916 1657",
      // Kaynak: Google İşletme profili (Kasım 2026) — işletmeyle teyit edilmeli
      hours: { en: "Every day 08:00 – 17:00", tr: "Her gün 08:00 – 17:00" },
      maps: "https://maps.app.goo.gl/dxdn7HDTvczRwHsT9",
      lat: 51.5348259, lng: -0.0986253
    }
  ]
};
