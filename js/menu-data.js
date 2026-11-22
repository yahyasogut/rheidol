/* =====================================================================
   THE RHEIDOL ROOMS — MENÜ
   rheidol: Rheidol Rooms yemek menüsü (2 sayfa görsel) + içecek menüsü (PDF) — Kasım 2026
   Not: Espresso panoda 3 fiyatla yazılı (2.9 / 3.10 / 3.5); karar gereği yalnız Single/Double gösterilir.
   Python üretici betikle üretildi, fiyatlar menüyle tek tek karşılaştırıldı; elle düzenlemek serbest.

   Ürün alanları:
     name  { en, tr }           ürün adı
     desc  { en, tr }           açıklama (isteğe bağlı)
     price 12.95 | "+50p"       tek fiyat (sayı → £12.95 olarak yazılır)
     prices [{label:{en,tr}, price}]  çoklu fiyat (175ml/250ml/şişe, 25ml/50ml...)
     tags  ["v","vg","gf","h"]  v=vejetaryen, vg=vegan, gf=glutensiz, h=helal
     extra true                 ekstra/ilave satırı (daha sade gösterilir)
   Kategori: id, group ("food"|"drinks"), title, note (isteğe bağlı), price (tüm ürünler aynı fiyatsa)
   ===================================================================== */
window.GALATA_MENU = {
 "rheidol": [
  {
   "id": "breakfast",
   "group": "food",
   "title": {
    "en": "Breakfast",
    "tr": "Kahvaltı"
   },
   "note": {
    "en": "All breakfasts served with sourdough toast. Vegan Delights served with gluten-free vegan toast.",
    "tr": "Tüm kahvaltılar ekşi maya tost ekmeğiyle servis edilir. Vegan Delights glutensiz vegan tost ekmeğiyle gelir."
   },
   "items": [
    {
     "name": {
      "en": "Full English Breakfast",
      "tr": "İngiliz Kahvaltısı"
     },
     "desc": {
      "en": "Fried eggs, bacon, Cumberland sausage, hash browns, Portobello mushroom, grilled vine tomatoes, baked beans",
      "tr": "Sahanda yumurta, bacon, Cumberland sosis, patates köftesi (hash brown), Portobello mantarı, ızgara salkım domates, kuru fasulye"
     },
     "price": 16
    },
    {
     "name": {
      "en": "The Gate",
      "tr": "The Gate"
     },
     "desc": {
      "en": "Fried egg, bacon, Cumberland sausage, hash brown, baked beans",
      "tr": "Sahanda yumurta, bacon, Cumberland sosis, hash brown, kuru fasulye"
     },
     "price": 11
    },
    {
     "name": {
      "en": "Mediterranean Breakfast",
      "tr": "Akdeniz Kahvaltısı"
     },
     "desc": {
      "en": "Fried eggs, grilled halloumi, honey and jam, Turkish spicy sausage, freshly cut tomatoes, cucumber, olives, filo pastry, feta cheese",
      "tr": "Sahanda yumurta, ızgara hellim, bal ve reçel, acılı sucuk, taze doğranmış domates, salatalık, zeytin, yufka böreği, beyaz peynir"
     },
     "price": 16
    },
    {
     "name": {
      "en": "Vegetarian Breakfast",
      "tr": "Vejetaryen Kahvaltı"
     },
     "desc": {
      "en": "Poached eggs, vegan sausage, grilled halloumi, avocado, Portobello mushroom, sautéed spinach, grilled vine tomatoes",
      "tr": "Poşe yumurta, vegan sosis, ızgara hellim, avokado, Portobello mantarı, sote ıspanak, ızgara salkım domates"
     },
     "price": 15.5,
     "tags": [
      "v"
     ]
    },
    {
     "name": {
      "en": "Vegan Delights",
      "tr": "Vegan Delights"
     },
     "desc": {
      "en": "Vegan sausages, falafel, hummus, avocado, sautéed spinach, Portobello mushroom, grilled vine tomatoes, baked beans",
      "tr": "Vegan sosis, falafel, humus, avokado, sote ıspanak, Portobello mantarı, ızgara salkım domates, kuru fasulye"
     },
     "price": 15.5,
     "tags": [
      "vg"
     ]
    },
    {
     "name": {
      "en": "Halal Full Breakfast",
      "tr": "Helal İngiliz Kahvaltısı"
     },
     "desc": {
      "en": "Fried eggs, turkey rashers, grilled halloumi, hash browns, Portobello mushroom, grilled vine tomatoes, baked beans",
      "tr": "Sahanda yumurta, hindi füme, ızgara hellim, hash brown, Portobello mantarı, ızgara salkım domates, kuru fasulye"
     },
     "price": 16,
     "tags": [
      "h"
     ]
    },
    {
     "name": {
      "en": "Eggs on Toast",
      "tr": "Tost Ekmeğinde Yumurta"
     },
     "desc": {
      "en": "Fried, poached or scrambled",
      "tr": "Sahanda, poşe veya çırpılmış (scrambled)"
     },
     "price": 6.5,
     "tags": [
      "v"
     ]
    },
    {
     "name": {
      "en": "Beans on Toast",
      "tr": "Tost Ekmeğinde Kuru Fasulye"
     },
     "price": 6,
     "tags": [
      "v",
      "vg"
     ]
    }
   ]
  },
  {
   "id": "healthy",
   "group": "food",
   "title": {
    "en": "Something Healthy",
    "tr": "Sağlıklı Seçenekler"
   },
   "items": [
    {
     "name": {
      "en": "Granola",
      "tr": "Granola"
     },
     "desc": {
      "en": "With Greek yogurt, mixed fruits, almond flakes, crunchy peanut butter and maple syrup",
      "tr": "Süzme yoğurt, karışık meyve, badem dilimleri, çıtır fıstık ezmesi ve akçaağaç şurubu ile"
     },
     "price": 11,
     "tags": [
      "v"
     ]
    },
    {
     "name": {
      "en": "Porridge",
      "tr": "Yulaf Lapası"
     },
     "desc": {
      "en": "With mixed fruits, almonds and maple syrup or honey",
      "tr": "Karışık meyve, badem ve akçaağaç şurubu veya bal ile"
     },
     "price": 9,
     "tags": [
      "v"
     ]
    }
   ]
  },
  {
   "id": "sweet",
   "group": "food",
   "title": {
    "en": "Sweet & Savoury",
    "tr": "Tatlı & Tuzlu"
   },
   "items": [
    {
     "name": {
      "en": "Classic Fluffy Pancake",
      "tr": "Klasik Pankek"
     },
     "desc": {
      "en": "Freshly made pancakes, seasonal mixed fruits, fresh cream, and maple syrup or Nutella",
      "tr": "Taze pişmiş pankek, mevsim meyveleri, taze krema; akçaağaç şurubu veya Nutella"
     },
     "price": 12
    },
    {
     "name": {
      "en": "The Angel Tower",
      "tr": "The Angel Tower"
     },
     "desc": {
      "en": "Freshly made pancakes, fried egg, bacon, Cumberland sausage, fresh cream and maple syrup",
      "tr": "Taze pişmiş pankek, sahanda yumurta, bacon, Cumberland sosis, taze krema ve akçaağaç şurubu"
     },
     "price": 13.5
    },
    {
     "name": {
      "en": "French Toast",
      "tr": "French Toast"
     },
     "desc": {
      "en": "Two French toasts served with seasonal fruits, ice cream, pistachio pieces, fresh cream and maple syrup",
      "tr": "İki dilim French toast; mevsim meyveleri, dondurma, antep fıstığı parçaları, taze krema ve akçaağaç şurubu ile"
     },
     "price": 12
    }
   ]
  },
  {
   "id": "brunch",
   "group": "food",
   "title": {
    "en": "Brunch",
    "tr": "Brunch"
   },
   "items": [
    {
     "name": {
      "en": "Eggs Florentine",
      "tr": "Eggs Florentine"
     },
     "desc": {
      "en": "Poached eggs with sautéed spinach and hollandaise sauce. Served on toasted sourdough.",
      "tr": "Sote ıspanak ve hollandez soslu poşe yumurta. Kızarmış ekşi maya ekmeğiyle servis edilir."
     },
     "price": 13,
     "tags": [
      "v"
     ]
    },
    {
     "name": {
      "en": "Eggs Benedict",
      "tr": "Eggs Benedict"
     },
     "desc": {
      "en": "Poached eggs with bacon and hollandaise sauce. Served on toasted sourdough.",
      "tr": "Bacon ve hollandez soslu poşe yumurta. Kızarmış ekşi maya ekmeğiyle servis edilir."
     },
     "price": 13.5
    },
    {
     "name": {
      "en": "Eggs Royale",
      "tr": "Eggs Royale"
     },
     "desc": {
      "en": "Poached eggs with smoked salmon, avocado and hollandaise sauce. Served on toasted sourdough.",
      "tr": "Füme somon, avokado ve hollandez soslu poşe yumurta. Kızarmış ekşi maya ekmeğiyle servis edilir."
     },
     "price": 14
    },
    {
     "name": {
      "en": "The Rheidol Smash",
      "tr": "The Rheidol Smash"
     },
     "desc": {
      "en": "Smashed avocado served on toasted sourdough, topped with a poached or fried egg",
      "tr": "Kızarmış ekşi maya ekmeği üzerinde avokado ezmesi; üzerine poşe ya da sahanda yumurta"
     },
     "price": 9,
     "tags": [
      "v"
     ]
    },
    {
     "name": {
      "en": "The Bishop",
      "tr": "The Bishop"
     },
     "desc": {
      "en": "Smashed avocado, feta cheese, roasted peppers and pesto sauce. Served on toasted sourdough.",
      "tr": "Avokado ezmesi, beyaz peynir, közlenmiş biber ve pesto sos. Kızarmış ekşi maya ekmeğiyle servis edilir."
     },
     "price": 12,
     "tags": [
      "v"
     ]
    },
    {
     "name": {
      "en": "The Rheidol",
      "tr": "The Rheidol"
     },
     "desc": {
      "en": "Smashed avocado, goat's cheese, sun-dried tomato and pesto sauce. Served on toasted sourdough.",
      "tr": "Avokado ezmesi, keçi peyniri, kurutulmuş domates ve pesto sos. Kızarmış ekşi maya ekmeğiyle servis edilir."
     },
     "price": 13.5,
     "tags": [
      "v"
     ]
    },
    {
     "name": {
      "en": "Bagel Sunshine",
      "tr": "Bagel Sunshine"
     },
     "desc": {
      "en": "Smoked salmon on bagel halves with cream cheese, topped with poached eggs",
      "tr": "Krem peynirli bagel yarımları üzerinde füme somon; üzerine poşe yumurta"
     },
     "price": 14.5
    },
    {
     "name": {
      "en": "Menemen (Anatolian Eggs)",
      "tr": "Menemen"
     },
     "desc": {
      "en": "Traditional Turkish-style eggs gently cooked with juicy tomatoes, green peppers and aromatic spices. Served with toasted sourdough. Add-ons (£2.50 each): cheese, feta, Cumberland sausage, bacon, sucuk.",
      "tr": "Sulu domates, yeşil biber ve baharatlarla ağır ateşte pişen geleneksel menemen. Kızarmış ekşi maya ekmeğiyle servis edilir. İlaveler (her biri £2.50): kaşar, beyaz peynir, Cumberland sosis, bacon, sucuk."
     },
     "price": 13,
     "tags": [
      "v"
     ]
    },
    {
     "name": {
      "en": "Çılbır (Turkish Eggs)",
      "tr": "Çılbır"
     },
     "desc": {
      "en": "Poached eggs on garlic yoghurt and scattered spinach, topped with chickpeas and butter chilli pepper sauce. Served with toasted sourdough.",
      "tr": "Sarımsaklı yoğurt ve ıspanak üzerinde poşe yumurta; nohut ve tereyağlı pul biber sos ile. Kızarmış ekşi maya ekmeğiyle servis edilir."
     },
     "price": 13,
     "tags": [
      "v"
     ]
    },
    {
     "name": {
      "en": "Shakshuka",
      "tr": "Shakshuka"
     },
     "desc": {
      "en": "Middle Eastern skillet of fried eggs, tomatoes, peppers, aubergine, chilli flakes and garlic yoghurt. Served with toasted sourdough. Add-ons (£2.50 each): cheese, spinach, feta, Cumberland sausage, bacon, sucuk.",
      "tr": "Tavada yumurta, domates, biber, patlıcan, pul biber ve sarımsaklı yoğurt — Orta Doğu usulü. Kızarmış ekşi maya ekmeğiyle servis edilir. İlaveler (her biri £2.50): kaşar, ıspanak, beyaz peynir, Cumberland sosis, bacon, sucuk."
     },
     "price": 14,
     "tags": [
      "v"
     ]
    },
    {
     "name": {
      "en": "Chef's Special",
      "tr": "Şefin Özel Tabağı"
     },
     "desc": {
      "en": "Chicken escalope topped with fried onion, garlic, cherry tomatoes, basil, mozzarella and parmesan, with a side of chips",
      "tr": "Kızarmış soğan, sarımsak, çeri domates, fesleğen, mozzarella ve parmesanlı tavuk eskalop; yanında patates kızartması"
     },
     "price": 16
    }
   ]
  },
  {
   "id": "omelette",
   "group": "food",
   "title": {
    "en": "Omelette",
    "tr": "Omlet"
   },
   "note": {
    "en": "Served with a side of salad or fries.",
    "tr": "Yanında salata veya patates kızartması ile."
   },
   "items": [
    {
     "name": {
      "en": "Classic Omelette",
      "tr": "Klasik Omlet"
     },
     "price": 9,
     "tags": [
      "v"
     ]
    },
    {
     "name": {
      "en": "Vegetable toppings",
      "tr": "Sebze ilaveleri"
     },
     "desc": {
      "en": "Each — spinach, tomato, mushroom, peppers, onion",
      "tr": "Her biri — ıspanak, domates, mantar, biber, soğan"
     },
     "price": 1.95,
     "extra": true
    },
    {
     "name": {
      "en": "Meat & dairy toppings",
      "tr": "Et ve süt ürünü ilaveleri"
     },
     "desc": {
      "en": "Each — ham, cheese, bacon, chicken, Cumberland sausage, halloumi, feta",
      "tr": "Her biri — jambon, kaşar, bacon, tavuk, Cumberland sosis, hellim, beyaz peynir"
     },
     "price": 2.5,
     "extra": true
    }
   ]
  },
  {
   "id": "jacket",
   "group": "food",
   "title": {
    "en": "Jacket Potatoes",
    "tr": "Fırın Patates"
   },
   "items": [
    {
     "name": {
      "en": "Plain Jacket Potato",
      "tr": "Sade Fırın Patates"
     },
     "price": 7.5,
     "tags": [
      "v",
      "vg"
     ]
    },
    {
     "name": {
      "en": "Vegetable toppings",
      "tr": "Sebze ilaveleri"
     },
     "desc": {
      "en": "Each — baked beans, mushroom, sweetcorn, coleslaw, olives, avocado",
      "tr": "Her biri — kuru fasulye, mantar, mısır, coleslaw, zeytin, avokado"
     },
     "price": 1.95,
     "extra": true
    },
    {
     "name": {
      "en": "Meat & dairy toppings",
      "tr": "Et ve süt ürünü ilaveleri"
     },
     "desc": {
      "en": "Each — chicken, tuna & mayo, bacon, sucuk, cheese, feta cheese",
      "tr": "Her biri — tavuk, mayonezli ton balığı, bacon, sucuk, kaşar, beyaz peynir"
     },
     "price": 2.5,
     "extra": true
    },
    {
     "name": {
      "en": "Jacket Breakfast",
      "tr": "Fırın Patates Kahvaltısı"
     },
     "desc": {
      "en": "Cumberland sausage, bacon, egg and baked beans",
      "tr": "Cumberland sosis, bacon, yumurta ve kuru fasulye"
     },
     "price": 16
    }
   ]
  },
  {
   "id": "sandwiches",
   "group": "food",
   "title": {
    "en": "Sandwiches",
    "tr": "Sandviçler"
   },
   "items": [
    {
     "name": {
      "en": "BLT",
      "tr": "BLT"
     },
     "desc": {
      "en": "Bacon, lettuce, tomatoes",
      "tr": "Bacon, marul, domates"
     },
     "price": 7
    },
    {
     "name": {
      "en": "Breakfast",
      "tr": "Kahvaltı Sandviçi"
     },
     "desc": {
      "en": "Bacon, Cumberland sausage, fried egg",
      "tr": "Bacon, Cumberland sosis, sahanda yumurta"
     },
     "price": 8.5
    },
    {
     "name": {
      "en": "Caprese",
      "tr": "Caprese"
     },
     "desc": {
      "en": "Mozzarella, sun-dried tomato, sautéed spinach, with pesto sauce",
      "tr": "Mozzarella, kurutulmuş domates, sote ıspanak, pesto sos"
     },
     "price": 9.5,
     "tags": [
      "v"
     ]
    },
    {
     "name": {
      "en": "Chicken Club",
      "tr": "Chicken Club"
     },
     "desc": {
      "en": "Chicken, bacon, lettuce, tomatoes, with mayonnaise",
      "tr": "Tavuk, bacon, marul, domates, mayonez"
     },
     "price": 10
    },
    {
     "name": {
      "en": "Tuna Mayo Melt",
      "tr": "Tuna Mayo Melt"
     },
     "desc": {
      "en": "Tuna mayonnaise and melted cheese",
      "tr": "Mayonezli ton balığı ve eritilmiş peynir"
     },
     "price": 9
    }
   ]
  },
  {
   "id": "wraps",
   "group": "food",
   "title": {
    "en": "Wraps",
    "tr": "Dürümler"
   },
   "items": [
    {
     "name": {
      "en": "Grilled Halloumi & Avocado",
      "tr": "Izgara Hellim & Avokado"
     },
     "desc": {
      "en": "With roasted peppers and mixed leaves",
      "tr": "Közlenmiş biber ve karışık yeşillik ile"
     },
     "price": 13,
     "tags": [
      "v"
     ]
    },
    {
     "name": {
      "en": "Falafel & Hummus",
      "tr": "Falafel & Humus"
     },
     "desc": {
      "en": "With mixed leaves and onion",
      "tr": "Karışık yeşillik ve soğan ile"
     },
     "price": 12,
     "tags": [
      "v"
     ]
    },
    {
     "name": {
      "en": "Grilled Chicken",
      "tr": "Izgara Tavuk"
     },
     "desc": {
      "en": "Marinated chicken with mixed leaves, fresh onion and vine tomatoes",
      "tr": "Marine tavuk, karışık yeşillik, taze soğan ve salkım domates ile"
     },
     "price": 12
    },
    {
     "name": {
      "en": "Chicken Escalope",
      "tr": "Tavuk Eskalop"
     },
     "desc": {
      "en": "With roasted peppers, mixed leaves and vine tomatoes",
      "tr": "Közlenmiş biber, karışık yeşillik ve salkım domates ile"
     },
     "price": 13.5
    }
   ]
  },
  {
   "id": "soup",
   "group": "food",
   "title": {
    "en": "Today's Special Soup",
    "tr": "Günün Çorbası"
   },
   "note": {
    "en": "Please ask our staff what the soup of the day is.",
    "tr": "Günün çorbasını lütfen ekibimize sorun."
   },
   "items": [
    {
     "name": {
      "en": "Soup of the Day",
      "tr": "Günün Çorbası"
     },
     "desc": {
      "en": "Cycles between lentil, broccoli and tomato soup",
      "tr": "Mercimek, brokoli ve domates çorbası arasında değişir"
     },
     "price": 7,
     "tags": [
      "v",
      "vg"
     ]
    }
   ]
  },
  {
   "id": "starters",
   "group": "food",
   "title": {
    "en": "Starters",
    "tr": "Başlangıçlar"
   },
   "items": [
    {
     "name": {
      "en": "Traditional Stuffed Vine Leaves",
      "tr": "Zeytinyağlı Yaprak Sarma"
     },
     "desc": {
      "en": "Hand-rolled vine leaves filled with aromatic herbs and rice, drizzled with olive oil",
      "tr": "Elde sarılmış, otlu pirinç dolgulu asma yaprağı; zeytinyağı ile"
     },
     "price": 9,
     "tags": [
      "v"
     ]
    },
    {
     "name": {
      "en": "Classic Hummus",
      "tr": "Klasik Humus"
     },
     "desc": {
      "en": "Smooth chickpeas with tahini, lemon and garlic, served with warm pita",
      "tr": "Tahin, limon ve sarımsaklı nohut ezmesi; sıcak pide ile"
     },
     "price": 7,
     "tags": [
      "v"
     ]
    },
    {
     "name": {
      "en": "Marinated Olive Bowl",
      "tr": "Marine Zeytin Tabağı"
     },
     "desc": {
      "en": "A selection of Mediterranean olives marinated in lemon and garlic",
      "tr": "Limon ve sarımsakla marine edilmiş Akdeniz zeytinleri"
     },
     "price": 9,
     "tags": [
      "v",
      "vg"
     ]
    },
    {
     "name": {
      "en": "Artisan Cheese Plate",
      "tr": "Peynir Tabağı"
     },
     "desc": {
      "en": "A curated selection of Mediterranean and local cheese served with oven crackers, grapes and walnuts",
      "tr": "Seçme Akdeniz ve yerel peynirleri; fırın kraker, üzüm ve ceviz ile"
     },
     "price": 11,
     "tags": [
      "v"
     ]
    },
    {
     "name": {
      "en": "Grilled Halloumi",
      "tr": "Izgara Hellim"
     },
     "desc": {
      "en": "Premium Cypriot halloumi",
      "tr": "Kıbrıs hellimi"
     },
     "price": 9,
     "tags": [
      "v"
     ]
    },
    {
     "name": {
      "en": "Grilled Turkish Beef Sucuk",
      "tr": "Izgara Sucuk"
     },
     "desc": {
      "en": "Thick slices of authentic spicy Turkish beef sausage",
      "tr": "Kalın dilimlenmiş acılı dana sucuk"
     },
     "price": 9
    },
    {
     "name": {
      "en": "Buffalo Wings",
      "tr": "Buffalo Kanat"
     },
     "desc": {
      "en": "Grilled wings covered in spicy buffalo sauce, served with ranch dip",
      "tr": "Acı buffalo soslu ızgara tavuk kanat; ranch sos ile"
     },
     "price": 9
    }
   ]
  },
  {
   "id": "grill",
   "group": "food",
   "title": {
    "en": "From the Grill",
    "tr": "Izgaradan"
   },
   "note": {
    "en": "All served with a side of fries. Tiger prawns served with sourdough.",
    "tr": "Hepsi patates kızartmasıyla servis edilir. Kaplan karides ekşi maya ekmeğiyle gelir."
   },
   "items": [
    {
     "name": {
      "en": "Royal Angus Burger",
      "tr": "Royal Angus Burger"
     },
     "desc": {
      "en": "Angus beef, trio mix lettuce, vine tomato, fried onion, gherkin, cheese and burger sauce",
      "tr": "Angus dana köfte, üç çeşit marul, salkım domates, kızarmış soğan, turşu, peynir ve burger sos"
     },
     "price": 15
    },
    {
     "name": {
      "en": "The Hangover Cure",
      "tr": "The Hangover Cure"
     },
     "desc": {
      "en": "Angus beef, bacon, egg, trio mix lettuce, vine tomato, fried onion, gherkin, cheese and burger sauce",
      "tr": "Angus dana köfte, bacon, yumurta, üç çeşit marul, salkım domates, kızarmış soğan, turşu, peynir ve burger sos"
     },
     "price": 18
    },
    {
     "name": {
      "en": "Chicken Burger",
      "tr": "Tavuk Burger"
     },
     "desc": {
      "en": "Marinated chicken breast, trio mix lettuce, vine tomato, fried onion, gherkin, cheese and burger sauce",
      "tr": "Marine tavuk göğsü, üç çeşit marul, salkım domates, kızarmış soğan, turşu, peynir ve burger sos"
     },
     "price": 14
    },
    {
     "name": {
      "en": "Golden Halloumi Burger",
      "tr": "Hellim Burger"
     },
     "desc": {
      "en": "Grilled Cypriot halloumi, trio mix lettuce, vine tomato, fried onion, gherkin, roasted peppers and hummus",
      "tr": "Izgara Kıbrıs hellimi, üç çeşit marul, salkım domates, kızarmış soğan, turşu, közlenmiş biber ve humus"
     },
     "price": 14,
     "tags": [
      "v"
     ]
    },
    {
     "name": {
      "en": "Vegetarian Burger",
      "tr": "Vejetaryen Burger"
     },
     "desc": {
      "en": "Savoury veggie patty, trio mix lettuce, vine tomato, fried onion, gherkin, roasted peppers and hummus",
      "tr": "Sebze köftesi, üç çeşit marul, salkım domates, kızarmış soğan, turşu, közlenmiş biber ve humus"
     },
     "price": 14,
     "tags": [
      "v"
     ]
    },
    {
     "name": {
      "en": "Grilled Salmon",
      "tr": "Izgara Somon"
     },
     "desc": {
      "en": "Salmon steak with a side of fresh seasonal salad and asparagus",
      "tr": "Somon fileto; taze mevsim salatası ve kuşkonmaz ile"
     },
     "price": 24
    },
    {
     "name": {
      "en": "Grilled Chicken Shish",
      "tr": "Tavuk Şiş"
     },
     "desc": {
      "en": "Marinated chicken breast cubes served with bread and fresh seasonal salad",
      "tr": "Marine tavuk göğsü küpleri; ekmek ve taze mevsim salatası ile"
     },
     "price": 19
    },
    {
     "name": {
      "en": "Grilled Sea Bass",
      "tr": "Izgara Levrek"
     },
     "desc": {
      "en": "Two fillets of fresh sea bass served with fresh seasonal salad",
      "tr": "İki fileto taze levrek; mevsim salatası ile"
     },
     "price": 22
    },
    {
     "name": {
      "en": "Grilled Mackerel",
      "tr": "Izgara Uskumru"
     },
     "desc": {
      "en": "Two fillets of fresh mackerel served with fresh seasonal salad",
      "tr": "İki fileto taze uskumru; mevsim salatası ile"
     },
     "price": 22
    },
    {
     "name": {
      "en": "Grilled Octopus",
      "tr": "Izgara Ahtapot"
     },
     "desc": {
      "en": "Served with fresh seasonal salad",
      "tr": "Taze mevsim salatası ile"
     },
     "price": 26
    },
    {
     "name": {
      "en": "Tiger Prawns",
      "tr": "Kaplan Karides"
     },
     "desc": {
      "en": "Mixed bell peppers, spring onion, tomato, garlic, mixed herbs and double cream",
      "tr": "Renkli biber, taze soğan, domates, sarımsak, karışık otlar ve krema"
     },
     "price": 17
    }
   ]
  },
  {
   "id": "salads",
   "group": "food",
   "title": {
    "en": "Salads",
    "tr": "Salatalar"
   },
   "items": [
    {
     "name": {
      "en": "Falafel Salad",
      "tr": "Falafel Salata"
     },
     "desc": {
      "en": "Hummus, mixed leaves, cherry tomatoes, cucumber, red onion, carrot, beetroot, sun-dried tomato, olive oil and balsamic vinegar",
      "tr": "Humus, karışık yeşillik, çeri domates, salatalık, kırmızı soğan, havuç, pancar, kurutulmuş domates, zeytinyağı ve balzamik sirke"
     },
     "price": 13,
     "tags": [
      "v"
     ]
    },
    {
     "name": {
      "en": "Halloumi or Feta & Avocado",
      "tr": "Hellim veya Beyaz Peynir & Avokado"
     },
     "desc": {
      "en": "Mixed leaves, cherry tomatoes, cucumber, carrot, beetroot, sun-dried tomato, olive oil and balsamic vinegar",
      "tr": "Karışık yeşillik, çeri domates, salatalık, havuç, pancar, kurutulmuş domates, zeytinyağı ve balzamik sirke"
     },
     "price": 13,
     "tags": [
      "v"
     ]
    },
    {
     "name": {
      "en": "Chicken Caesar",
      "tr": "Tavuklu Sezar"
     },
     "desc": {
      "en": "Marinated chicken on a bed of lettuce with garlic croutons, parmesan cheese and Caesar dressing",
      "tr": "Marul yatağında marine tavuk; sarımsaklı kruton, parmesan ve Sezar sos ile"
     },
     "price": 14.5
    }
   ]
  },
  {
   "id": "pasta",
   "group": "food",
   "title": {
    "en": "Pasta",
    "tr": "Makarnalar"
   },
   "items": [
    {
     "name": {
      "en": "The Green Angel",
      "tr": "The Green Angel"
     },
     "desc": {
      "en": "Penne pasta with burrata cheese and pesto sauce",
      "tr": "Burrata peyniri ve pesto soslu penne"
     },
     "price": 14,
     "tags": [
      "v"
     ]
    },
    {
     "name": {
      "en": "Penne Arrabbiata",
      "tr": "Penne Arrabbiata"
     },
     "desc": {
      "en": "Tomato-based penne with chilli, garlic and olives, topped with parmesan",
      "tr": "Acı biber, sarımsak ve zeytinli domates soslu penne; üzerine parmesan"
     },
     "price": 13,
     "tags": [
      "v"
     ]
    },
    {
     "name": {
      "en": "The Angelic Cream",
      "tr": "The Angelic Cream"
     },
     "desc": {
      "en": "Fettuccine with chicken, mushroom, garlic and onion, topped with parmesan",
      "tr": "Tavuk, mantar, sarımsak ve soğanlı fettuccine; üzerine parmesan"
     },
     "price": 15
    }
   ]
  },
  {
   "id": "kids",
   "group": "food",
   "title": {
    "en": "Little Angels",
    "tr": "Little Angels (Çocuk Menüsü)"
   },
   "items": [
    {
     "name": {
      "en": "Mini English",
      "tr": "Mini İngiliz Kahvaltısı"
     },
     "desc": {
      "en": "Fried egg, bacon, Cumberland sausage, baked beans",
      "tr": "Sahanda yumurta, bacon, Cumberland sosis, kuru fasulye"
     },
     "price": 8
    },
    {
     "name": {
      "en": "Little Finger Fish",
      "tr": "Balık Kroket"
     },
     "desc": {
      "en": "Fried fish fingers served with fries",
      "tr": "Kızarmış balık parmak; patates kızartması ile"
     },
     "price": 9
    },
    {
     "name": {
      "en": "Golden Chicken Nuggets",
      "tr": "Tavuk Nugget"
     },
     "desc": {
      "en": "100% chicken breast nuggets served with fries",
      "tr": "%100 tavuk göğsü nugget; patates kızartması ile"
     },
     "price": 9
    },
    {
     "name": {
      "en": "Kids Chips and Cheese",
      "tr": "Peynirli Patates"
     },
     "desc": {
      "en": "Crispy golden fries topped with melted cheddar cheese",
      "tr": "Eritilmiş cheddar peynirli çıtır patates kızartması"
     },
     "price": 8,
     "tags": [
      "v"
     ]
    }
   ]
  },
  {
   "id": "sides",
   "group": "food",
   "title": {
    "en": "Sides",
    "tr": "Yan Ürünler"
   },
   "items": [
    {
     "name": {
      "en": "Fried egg",
      "tr": "Sahanda yumurta"
     },
     "price": 2.5
    },
    {
     "name": {
      "en": "Poached egg",
      "tr": "Poşe yumurta"
     },
     "price": 2.5
    },
    {
     "name": {
      "en": "Cumberland sausage",
      "tr": "Cumberland sosis"
     },
     "price": 2.5
    },
    {
     "name": {
      "en": "Baked beans",
      "tr": "Kuru fasulye"
     },
     "price": 2.5
    },
    {
     "name": {
      "en": "Grilled vine tomatoes",
      "tr": "Izgara salkım domates"
     },
     "price": 2.5
    },
    {
     "name": {
      "en": "Vegan sausage",
      "tr": "Vegan sosis"
     },
     "price": 2.5
    },
    {
     "name": {
      "en": "Portobello mushroom",
      "tr": "Portobello mantarı"
     },
     "price": 2.5
    },
    {
     "name": {
      "en": "Sautéed spinach",
      "tr": "Sote ıspanak"
     },
     "price": 2.5
    },
    {
     "name": {
      "en": "Bacon",
      "tr": "Bacon"
     },
     "price": 3
    },
    {
     "name": {
      "en": "Falafel (4 pcs)",
      "tr": "Falafel (4 adet)"
     },
     "price": 3
    },
    {
     "name": {
      "en": "Hash browns",
      "tr": "Hash brown"
     },
     "price": 3
    },
    {
     "name": {
      "en": "Sucuk",
      "tr": "Sucuk"
     },
     "price": 3
    },
    {
     "name": {
      "en": "Turkey rashers",
      "tr": "Hindi füme"
     },
     "price": 3
    },
    {
     "name": {
      "en": "Ham",
      "tr": "Jambon"
     },
     "price": 3
    },
    {
     "name": {
      "en": "Feta cheese",
      "tr": "Beyaz peynir"
     },
     "price": 3
    },
    {
     "name": {
      "en": "Grated cheese",
      "tr": "Rendelenmiş peynir"
     },
     "price": 3
    },
    {
     "name": {
      "en": "Avocado",
      "tr": "Avokado"
     },
     "price": 3
    },
    {
     "name": {
      "en": "Grilled asparagus",
      "tr": "Izgara kuşkonmaz"
     },
     "price": 3
    },
    {
     "name": {
      "en": "Any style 2 eggs",
      "tr": "İstediğiniz usulde 2 yumurta"
     },
     "price": 4
    },
    {
     "name": {
      "en": "Chicken",
      "tr": "Tavuk"
     },
     "price": 4
    },
    {
     "name": {
      "en": "Smoked salmon",
      "tr": "Füme somon"
     },
     "price": 4
    },
    {
     "name": {
      "en": "Fries",
      "tr": "Patates kızartması"
     },
     "price": 4
    }
   ]
  },
  {
   "id": "hot",
   "group": "drinks",
   "title": {
    "en": "Hot Drinks",
    "tr": "Sıcak İçecekler"
   },
   "items": [
    {
     "name": {
      "en": "Espresso",
      "tr": "Espresso"
     },
     "prices": [
      {
       "label": {
        "en": "Single",
        "tr": "Tek"
       },
       "price": 2.9
      },
      {
       "label": {
        "en": "Double",
        "tr": "Duble"
       },
       "price": 3.1
      }
     ]
    },
    {
     "name": {
      "en": "Americano",
      "tr": "Americano"
     },
     "price": 3.4
    },
    {
     "name": {
      "en": "Macchiato",
      "tr": "Macchiato"
     },
     "price": 3.5
    },
    {
     "name": {
      "en": "Cortado",
      "tr": "Cortado"
     },
     "price": 3.5
    },
    {
     "name": {
      "en": "Cappuccino",
      "tr": "Cappuccino"
     },
     "price": 4.1
    },
    {
     "name": {
      "en": "Latte",
      "tr": "Latte"
     },
     "price": 4.1
    },
    {
     "name": {
      "en": "Flat White",
      "tr": "Flat White"
     },
     "price": 3.8
    },
    {
     "name": {
      "en": "Mocha",
      "tr": "Mocha"
     },
     "price": 4.5
    },
    {
     "name": {
      "en": "Hot Chocolate",
      "tr": "Sıcak Çikolata"
     },
     "price": 4.3
    },
    {
     "name": {
      "en": "Babycino",
      "tr": "Babycino"
     },
     "price": 2.1
    },
    {
     "name": {
      "en": "Matcha Latte",
      "tr": "Matcha Latte"
     },
     "price": 4.3
    },
    {
     "name": {
      "en": "Chai Latte",
      "tr": "Chai Latte"
     },
     "price": 4.3
    },
    {
     "name": {
      "en": "Breakfast Tea",
      "tr": "Kahvaltı Çayı (Breakfast Tea)"
     },
     "price": 3.1
    },
    {
     "name": {
      "en": "Black Tea",
      "tr": "Siyah Çay"
     },
     "price": 3
    },
    {
     "name": {
      "en": "Herbal Teas",
      "tr": "Bitki Çayları"
     },
     "desc": {
      "en": "Earl Grey / Green / Peppermint / Camomile / Rooibos / Jasmine / Lemon & Ginger",
      "tr": "Earl Grey / Yeşil çay / Nane / Papatya / Rooibos / Yasemin / Limon & Zencefil"
     },
     "price": 3.6
    },
    {
     "name": {
      "en": "Non-dairy milk",
      "tr": "Bitkisel süt"
     },
     "price": "+50p",
     "extra": true
    },
    {
     "name": {
      "en": "Syrups",
      "tr": "Şuruplar"
     },
     "price": "+50p",
     "extra": true
    }
   ]
  },
  {
   "id": "cold",
   "group": "drinks",
   "title": {
    "en": "Cold Drinks",
    "tr": "Soğuk İçecekler"
   },
   "items": [
    {
     "name": {
      "en": "Iced Latte",
      "tr": "Iced Latte"
     },
     "price": 4.7
    },
    {
     "name": {
      "en": "Iced Cappuccino",
      "tr": "Iced Cappuccino"
     },
     "price": 4.7
    },
    {
     "name": {
      "en": "Iced Americano",
      "tr": "Iced Americano"
     },
     "price": 4.2
    },
    {
     "name": {
      "en": "Iced Mocha",
      "tr": "Iced Mocha"
     },
     "price": 5.2
    },
    {
     "name": {
      "en": "Iced Hot Chocolate",
      "tr": "Soğuk Çikolata"
     },
     "price": 5
    },
    {
     "name": {
      "en": "Iced Chai Latte",
      "tr": "Iced Chai Latte"
     },
     "price": 5
    },
    {
     "name": {
      "en": "Iced Matcha Latte",
      "tr": "Iced Matcha Latte"
     },
     "price": 5
    },
    {
     "name": {
      "en": "Non-dairy milk",
      "tr": "Bitkisel süt"
     },
     "price": "+50p",
     "extra": true
    },
    {
     "name": {
      "en": "Syrups",
      "tr": "Şuruplar"
     },
     "price": "+50p",
     "extra": true
    }
   ]
  },
  {
   "id": "juices",
   "group": "drinks",
   "title": {
    "en": "Fresh Juices",
    "tr": "Taze Sıkma"
   },
   "items": [
    {
     "name": {
      "en": "Orange",
      "tr": "Portakal"
     },
     "price": 6.5
    },
    {
     "name": {
      "en": "Lemonade",
      "tr": "Limonata"
     },
     "price": 6
    },
    {
     "name": {
      "en": "Apple Juice",
      "tr": "Elma Suyu"
     },
     "price": 5
    }
   ]
  },
  {
   "id": "soft",
   "group": "drinks",
   "title": {
    "en": "Mixer / Soft Drinks",
    "tr": "Meşrubatlar"
   },
   "items": [
    {
     "name": {
      "en": "Coca Cola",
      "tr": "Coca Cola"
     },
     "price": 3.25
    },
    {
     "name": {
      "en": "Fanta",
      "tr": "Fanta"
     },
     "price": 3.25
    },
    {
     "name": {
      "en": "Sprite",
      "tr": "Sprite"
     },
     "price": 3.25
    },
    {
     "name": {
      "en": "San Pellegrino",
      "tr": "San Pellegrino"
     },
     "desc": {
      "en": "Lemon, Blood Orange, Pomegranate & Orange",
      "tr": "Limon, Kan portakalı, Nar & Portakal"
     },
     "price": 2.75
    },
    {
     "name": {
      "en": "Lipton Ice Tea",
      "tr": "Lipton Ice Tea"
     },
     "price": 3.5
    },
    {
     "name": {
      "en": "Appletiser",
      "tr": "Appletiser"
     },
     "price": 3.5
    },
    {
     "name": {
      "en": "Red Bull",
      "tr": "Red Bull"
     },
     "price": 3.5
    },
    {
     "name": {
      "en": "Bundaberg Ginger Beer",
      "tr": "Bundaberg Ginger Beer"
     },
     "price": 3.9
    },
    {
     "name": {
      "en": "Fruit Shoot",
      "tr": "Fruit Shoot"
     },
     "price": 1
    },
    {
     "name": {
      "en": "Sparkling Water",
      "tr": "Maden Suyu"
     },
     "price": 3
    },
    {
     "name": {
      "en": "Still Water",
      "tr": "Su"
     },
     "price": 2.5
    }
   ]
  },
  {
   "id": "milkshakes",
   "group": "drinks",
   "title": {
    "en": "Milkshakes",
    "tr": "Milkshake'ler"
   },
   "items": [
    {
     "name": {
      "en": "Vanilla",
      "tr": "Vanilya"
     },
     "price": 7.5
    },
    {
     "name": {
      "en": "Banana",
      "tr": "Muz"
     },
     "price": 7.5
    },
    {
     "name": {
      "en": "Strawberry",
      "tr": "Çilek"
     },
     "price": 7.5
    },
    {
     "name": {
      "en": "Chocolate",
      "tr": "Çikolata"
     },
     "price": 7.5
    },
    {
     "name": {
      "en": "Caramel",
      "tr": "Karamel"
     },
     "price": 7.5
    },
    {
     "name": {
      "en": "Oreo",
      "tr": "Oreo"
     },
     "price": 7.5
    },
    {
     "name": {
      "en": "Kinder Bueno",
      "tr": "Kinder Bueno"
     },
     "price": 7.5
    },
    {
     "name": {
      "en": "Lotus Biscoff",
      "tr": "Lotus Biscoff"
     },
     "price": 7.5
    },
    {
     "name": {
      "en": "Allpress Shake",
      "tr": "Allpress Shake"
     },
     "price": 8
    }
   ]
  },
  {
   "id": "smoothies",
   "group": "drinks",
   "title": {
    "en": "Smoothies",
    "tr": "Smoothie'ler"
   },
   "price": 7.5,
   "items": [
    {
     "name": {
      "en": "Avo-Go-Go",
      "tr": "Avo-Go-Go"
     },
     "desc": {
      "en": "Mango, spinach, broccoli, avocado, coconut, ginger",
      "tr": "Mango, ıspanak, brokoli, avokado, hindistan cevizi, zencefil"
     }
    },
    {
     "name": {
      "en": "Pash N' Shoot",
      "tr": "Pash N' Shoot"
     },
     "desc": {
      "en": "Mango, passion fruit, pineapple",
      "tr": "Mango, çarkıfelek, ananas"
     }
    },
    {
     "name": {
      "en": "Coco Loco",
      "tr": "Coco Loco"
     },
     "desc": {
      "en": "Mango, pineapple, coconut, lime, mint",
      "tr": "Mango, ananas, hindistan cevizi, misket limonu, nane"
     }
    },
    {
     "name": {
      "en": "Strawberry Split",
      "tr": "Strawberry Split"
     },
     "desc": {
      "en": "Strawberry and banana",
      "tr": "Çilek ve muz"
     }
    },
    {
     "name": {
      "en": "Big 5",
      "tr": "Big 5"
     },
     "desc": {
      "en": "Mango, pineapple, strawberry, kiwi",
      "tr": "Mango, ananas, çilek, kivi"
     }
    },
    {
     "name": {
      "en": "Kale Kick",
      "tr": "Kale Kick"
     },
     "desc": {
      "en": "Mango, spinach, kale",
      "tr": "Mango, ıspanak, kara lahana"
     }
    },
    {
     "name": {
      "en": "Detox Zing",
      "tr": "Detox Zing"
     },
     "desc": {
      "en": "Banana, blueberry, carrot, courgette, ginger",
      "tr": "Muz, yaban mersini, havuç, kabak, zencefil"
     }
    },
    {
     "name": {
      "en": "Berry Go Round",
      "tr": "Berry Go Round"
     },
     "desc": {
      "en": "Strawberry, blackberry, raspberry",
      "tr": "Çilek, böğürtlen, ahududu"
     }
    }
   ]
  },
  {
   "id": "sparkling",
   "group": "drinks",
   "title": {
    "en": "Sparkling Wine",
    "tr": "Köpüklü Şarap"
   },
   "items": [
    {
     "name": {
      "en": "Terre di Rai Prosecco 20cl",
      "tr": "Terre di Rai Prosecco 20cl"
     },
     "desc": {
      "en": "Italy",
      "tr": "İtalya"
     },
     "price": 9.9
    },
    {
     "name": {
      "en": "Prosecco Rosé 20cl",
      "tr": "Prosecco Rosé 20cl"
     },
     "desc": {
      "en": "Italy",
      "tr": "İtalya"
     },
     "price": 9.9
    },
    {
     "name": {
      "en": "Paladin Prosecco Dry Tondo DOC",
      "tr": "Paladin Prosecco Dry Tondo DOC"
     },
     "desc": {
      "en": "Italy",
      "tr": "İtalya"
     },
     "price": 32
    },
    {
     "name": {
      "en": "Esedra Prosecco Rosé Brut DOC",
      "tr": "Esedra Prosecco Rosé Brut DOC"
     },
     "desc": {
      "en": "Italy",
      "tr": "İtalya"
     },
     "price": 32
    }
   ]
  },
  {
   "id": "rose",
   "group": "drinks",
   "title": {
    "en": "Rosé Wine",
    "tr": "Roze Şarap"
   },
   "items": [
    {
     "name": {
      "en": "Terre di Rai Pinot Grigio Rosé DOC",
      "tr": "Terre di Rai Pinot Grigio Rosé DOC"
     },
     "desc": {
      "en": "Italy",
      "tr": "İtalya"
     },
     "prices": [
      {
       "label": {
        "en": "175ml",
        "tr": "175ml"
       },
       "price": 7
      },
      {
       "label": {
        "en": "250ml",
        "tr": "250ml"
       },
       "price": 9
      },
      {
       "label": {
        "en": "Bottle",
        "tr": "Şişe"
       },
       "price": 26
      }
     ]
    },
    {
     "name": {
      "en": "Fishbone Ruby Rosé",
      "tr": "Fishbone Ruby Rosé"
     },
     "desc": {
      "en": "Australia",
      "tr": "Avustralya"
     },
     "prices": [
      {
       "label": {
        "en": "175ml",
        "tr": "175ml"
       },
       "price": 7.5
      },
      {
       "label": {
        "en": "250ml",
        "tr": "250ml"
       },
       "price": 10.5
      },
      {
       "label": {
        "en": "Bottle",
        "tr": "Şişe"
       },
       "price": 30
      }
     ]
    }
   ]
  },
  {
   "id": "white",
   "group": "drinks",
   "title": {
    "en": "White Wine",
    "tr": "Beyaz Şarap"
   },
   "items": [
    {
     "name": {
      "en": "Terre di Rai Pinot Grigio DOC",
      "tr": "Terre di Rai Pinot Grigio DOC"
     },
     "desc": {
      "en": "Italy",
      "tr": "İtalya"
     },
     "prices": [
      {
       "label": {
        "en": "175ml",
        "tr": "175ml"
       },
       "price": 7
      },
      {
       "label": {
        "en": "250ml",
        "tr": "250ml"
       },
       "price": 9
      },
      {
       "label": {
        "en": "Bottle",
        "tr": "Şişe"
       },
       "price": 26
      }
     ]
    },
    {
     "name": {
      "en": "Raiz de Chile Chardonnay",
      "tr": "Raiz de Chile Chardonnay"
     },
     "desc": {
      "en": "Chile",
      "tr": "Şili"
     },
     "prices": [
      {
       "label": {
        "en": "175ml",
        "tr": "175ml"
       },
       "price": 7
      },
      {
       "label": {
        "en": "250ml",
        "tr": "250ml"
       },
       "price": 9
      },
      {
       "label": {
        "en": "Bottle",
        "tr": "Şişe"
       },
       "price": 26
      }
     ]
    },
    {
     "name": {
      "en": "Villemarin Côtes de Thau White",
      "tr": "Villemarin Côtes de Thau White"
     },
     "desc": {
      "en": "France",
      "tr": "Fransa"
     },
     "prices": [
      {
       "label": {
        "en": "175ml",
        "tr": "175ml"
       },
       "price": 7.5
      },
      {
       "label": {
        "en": "250ml",
        "tr": "250ml"
       },
       "price": 10
      },
      {
       "label": {
        "en": "Bottle",
        "tr": "Şişe"
       },
       "price": 29
      }
     ]
    },
    {
     "name": {
      "en": "Biscaye Baie Sauvignon Blanc",
      "tr": "Biscaye Baie Sauvignon Blanc"
     },
     "desc": {
      "en": "France",
      "tr": "Fransa"
     },
     "prices": [
      {
       "label": {
        "en": "175ml",
        "tr": "175ml"
       },
       "price": 8
      },
      {
       "label": {
        "en": "250ml",
        "tr": "250ml"
       },
       "price": 10.5
      },
      {
       "label": {
        "en": "Bottle",
        "tr": "Şişe"
       },
       "price": 30
      }
     ]
    }
   ]
  },
  {
   "id": "red",
   "group": "drinks",
   "title": {
    "en": "Red Wine",
    "tr": "Kırmızı Şarap"
   },
   "items": [
    {
     "name": {
      "en": "Raiz de Chile Merlot",
      "tr": "Raiz de Chile Merlot"
     },
     "desc": {
      "en": "Chile",
      "tr": "Şili"
     },
     "prices": [
      {
       "label": {
        "en": "175ml",
        "tr": "175ml"
       },
       "price": 7
      },
      {
       "label": {
        "en": "250ml",
        "tr": "250ml"
       },
       "price": 9
      },
      {
       "label": {
        "en": "Bottle",
        "tr": "Şişe"
       },
       "price": 26
      }
     ]
    },
    {
     "name": {
      "en": "Terre di Rai Vino Rosso",
      "tr": "Terre di Rai Vino Rosso"
     },
     "desc": {
      "en": "Italy",
      "tr": "İtalya"
     },
     "prices": [
      {
       "label": {
        "en": "175ml",
        "tr": "175ml"
       },
       "price": 7
      },
      {
       "label": {
        "en": "250ml",
        "tr": "250ml"
       },
       "price": 9
      },
      {
       "label": {
        "en": "Bottle",
        "tr": "Şişe"
       },
       "price": 26
      }
     ]
    },
    {
     "name": {
      "en": "Cape Ridge Pinotage",
      "tr": "Cape Ridge Pinotage"
     },
     "desc": {
      "en": "South Africa",
      "tr": "Güney Afrika"
     },
     "prices": [
      {
       "label": {
        "en": "175ml",
        "tr": "175ml"
       },
       "price": 7.5
      },
      {
       "label": {
        "en": "250ml",
        "tr": "250ml"
       },
       "price": 9.5
      },
      {
       "label": {
        "en": "Bottle",
        "tr": "Şişe"
       },
       "price": 28
      }
     ]
    },
    {
     "name": {
      "en": "Villemarin Collines de la Moure Red",
      "tr": "Villemarin Collines de la Moure Red"
     },
     "desc": {
      "en": "France",
      "tr": "Fransa"
     },
     "prices": [
      {
       "label": {
        "en": "175ml",
        "tr": "175ml"
       },
       "price": 7.5
      },
      {
       "label": {
        "en": "250ml",
        "tr": "250ml"
       },
       "price": 10
      },
      {
       "label": {
        "en": "Bottle",
        "tr": "Şişe"
       },
       "price": 29
      }
     ]
    }
   ]
  },
  {
   "id": "cocktails",
   "group": "drinks",
   "title": {
    "en": "Cocktails",
    "tr": "Kokteyller"
   },
   "price": 11,
   "items": [
    {
     "name": {
      "en": "Campari",
      "tr": "Campari"
     }
    },
    {
     "name": {
      "en": "Aperol Spritz",
      "tr": "Aperol Spritz"
     }
    },
    {
     "name": {
      "en": "Limoncello",
      "tr": "Limoncello"
     }
    }
   ]
  },
  {
   "id": "spirits",
   "group": "drinks",
   "title": {
    "en": "Spirits",
    "tr": "Sert İçkiler"
   },
   "items": [
    {
     "name": {
      "en": "Jack Daniel's",
      "tr": "Jack Daniel's"
     },
     "prices": [
      {
       "label": {
        "en": "25ml",
        "tr": "25ml"
       },
       "price": 7.5
      },
      {
       "label": {
        "en": "50ml",
        "tr": "50ml"
       },
       "price": 10
      }
     ]
    },
    {
     "name": {
      "en": "Black Label",
      "tr": "Black Label"
     },
     "prices": [
      {
       "label": {
        "en": "25ml",
        "tr": "25ml"
       },
       "price": 7.5
      },
      {
       "label": {
        "en": "50ml",
        "tr": "50ml"
       },
       "price": 10
      }
     ]
    },
    {
     "name": {
      "en": "Hendrick's",
      "tr": "Hendrick's"
     },
     "prices": [
      {
       "label": {
        "en": "25ml",
        "tr": "25ml"
       },
       "price": 7.5
      },
      {
       "label": {
        "en": "50ml",
        "tr": "50ml"
       },
       "price": 10
      }
     ]
    },
    {
     "name": {
      "en": "Smirnoff",
      "tr": "Smirnoff"
     },
     "prices": [
      {
       "label": {
        "en": "25ml",
        "tr": "25ml"
       },
       "price": 7.5
      },
      {
       "label": {
        "en": "50ml",
        "tr": "50ml"
       },
       "price": 10
      }
     ]
    },
    {
     "name": {
      "en": "London Dry Gin / Pink",
      "tr": "London Dry Gin / Pembe"
     },
     "prices": [
      {
       "label": {
        "en": "25ml",
        "tr": "25ml"
       },
       "price": 7.5
      },
      {
       "label": {
        "en": "50ml",
        "tr": "50ml"
       },
       "price": 10
      }
     ]
    },
    {
     "name": {
      "en": "Tequila",
      "tr": "Tekila"
     },
     "prices": [
      {
       "label": {
        "en": "25ml",
        "tr": "25ml"
       },
       "price": 7.5
      },
      {
       "label": {
        "en": "50ml",
        "tr": "50ml"
       },
       "price": 10
      }
     ]
    },
    {
     "name": {
      "en": "Rum",
      "tr": "Rom"
     },
     "prices": [
      {
       "label": {
        "en": "25ml",
        "tr": "25ml"
       },
       "price": 7.5
      },
      {
       "label": {
        "en": "50ml",
        "tr": "50ml"
       },
       "price": 10
      }
     ]
    },
    {
     "name": {
      "en": "Hennessy",
      "tr": "Hennessy"
     },
     "prices": [
      {
       "label": {
        "en": "25ml",
        "tr": "25ml"
       },
       "price": 7.5
      },
      {
       "label": {
        "en": "50ml",
        "tr": "50ml"
       },
       "price": 10
      }
     ]
    },
    {
     "name": {
      "en": "Courvoisier",
      "tr": "Courvoisier"
     },
     "prices": [
      {
       "label": {
        "en": "25ml",
        "tr": "25ml"
       },
       "price": 7.5
      },
      {
       "label": {
        "en": "50ml",
        "tr": "50ml"
       },
       "price": 10
      }
     ]
    }
   ]
  },
  {
   "id": "draught",
   "group": "drinks",
   "title": {
    "en": "Draught Beers",
    "tr": "Fıçı Biralar"
   },
   "items": [
    {
     "name": {
      "en": "Peroni",
      "tr": "Peroni"
     },
     "prices": [
      {
       "label": {
        "en": "Half pint",
        "tr": "Yarım pint"
       },
       "price": 4.5
      },
      {
       "label": {
        "en": "Pint",
        "tr": "Pint"
       },
       "price": 7.5
      }
     ]
    },
    {
     "name": {
      "en": "Asahi",
      "tr": "Asahi"
     },
     "prices": [
      {
       "label": {
        "en": "Half pint",
        "tr": "Yarım pint"
       },
       "price": 4.5
      },
      {
       "label": {
        "en": "Pint",
        "tr": "Pint"
       },
       "price": 7.5
      }
     ]
    },
    {
     "name": {
      "en": "Meantime IPA",
      "tr": "Meantime IPA"
     },
     "prices": [
      {
       "label": {
        "en": "Half pint",
        "tr": "Yarım pint"
       },
       "price": 4.5
      },
      {
       "label": {
        "en": "Pint",
        "tr": "Pint"
       },
       "price": 7.5
      }
     ]
    }
   ]
  },
  {
   "id": "bottled",
   "group": "drinks",
   "title": {
    "en": "Bottled Beers",
    "tr": "Şişe Biralar"
   },
   "items": [
    {
     "name": {
      "en": "Ephesus Draft 50cl",
      "tr": "Ephesus Draft 50cl"
     },
     "price": 4
    },
    {
     "name": {
      "en": "Ephesus 33cl",
      "tr": "Ephesus 33cl"
     },
     "price": 3
    },
    {
     "name": {
      "en": "Peroni",
      "tr": "Peroni"
     },
     "price": 4
    },
    {
     "name": {
      "en": "Heineken",
      "tr": "Heineken"
     },
     "price": 4
    },
    {
     "name": {
      "en": "Corona",
      "tr": "Corona"
     },
     "price": 5
    },
    {
     "name": {
      "en": "Moretti",
      "tr": "Moretti"
     },
     "price": 5
    },
    {
     "name": {
      "en": "Estrella",
      "tr": "Estrella"
     },
     "price": 5
    }
   ]
  },
  {
   "id": "ciders",
   "group": "drinks",
   "title": {
    "en": "Ciders",
    "tr": "Elma Şarabı (Cider)"
   },
   "price": 6,
   "items": [
    {
     "name": {
      "en": "Magners",
      "tr": "Magners"
     }
    },
    {
     "name": {
      "en": "Bulmers",
      "tr": "Bulmers"
     }
    },
    {
     "name": {
      "en": "Old Mout",
      "tr": "Old Mout"
     },
     "desc": {
      "en": "Kiwi & Lime / Pineapple & Raspberry / Berries & Cherries / Mango & Passion Fruit / Berries & Cherries 0%",
      "tr": "Kivi & Misket limonu / Ananas & Ahududu / Orman meyveleri & Kiraz / Mango & Çarkıfelek / Orman meyveleri & Kiraz %0 alkol"
     }
    }
   ]
  }
 ]
};
