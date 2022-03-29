const products = [
  {
    "name": "HP K300 Backlit Membrane Wired Gaming Keyboard with Mixed Color Lighting, 4 LED Indicators, Matte Finish Double Injection Key Caps and Windows Lock Key / 3 Years Warranty(4QM95AA)",
    "image": "https://m.media-amazon.com/images/I/51MTVvshACL._SL1000_.jpg",
    "price": 999,
    "original_price": 1599,
    "link": "https://www.amazon.in/dp/B08497X176",
    "off": 38
  },
  {
    "name": "Aditi Toys Hi-Arm Blaster Soft Bullet Gun, Included 10 Official Dart for Children, Teens, Adults || Range - 30+ Feet || Age - 3+ Years || BIS Approved",
    "image": "https://m.media-amazon.com/images/I/61ddKqQOEQL._SL1280_.jpg",
    "price": 289,
    "original_price": 499,
    "link": "https://www.amazon.in/dp/B09SWY1KSG",
    "off": 42
  },
  {
    "name": "Fastrack Men Pilot Sunglasses Yellow Frame Blue Lens",
    "image": "https://m.media-amazon.com/images/I/614KUEt1VjL._UX679_.jpg",
    "price": 540,
    "original_price": 999,
    "link": "https://www.amazon.in/dp/B07BDX5Y7Q",
    "off": 46
  },
  {
    "name": "Flipkart SmartBuy FKSBMK12 Multi Cooker Electric Kettle  (1.2 L, Black)",
    "image": "https://rukminim1.flixcart.com/image/416/416/jrjizrk0/electric-kettle/s/g/z/flipkart-smartbuy-fksbmk12-original-imafdbcnrghdeywc.jpeg?q=70",
    "price": 899,
    "original_price": 1899,
    "link": "https://dl.flipkart.com/dl/flipkart-smartbuy-fksbmk12-multi-cooker-electric-kettle/p/itmf8a44gybbhyhd",
    "off": 53
  },
  {
    "name": "ARNV Microfiber Cloth for Detailing, Cleaning and Polishing (Pack of 4, Blue)",
    "image": "https://m.media-amazon.com/images/I/71irUSnqPXL._SL1100_.jpg",
    "price": 166,
    "original_price": 299,
    "link": "https://www.amazon.in/dp/B07D96MYML",
    "off": 44
  },
  {
    "name": "RK PRODUCTS 94 S Pet Bed  (BLUE AND BLACK)",
    "image": "https://rukminim1.flixcart.com/image/416/416/k09vv680/pet-bed/z/z/t/s-94-r-k-products-original-imafkywmyecbezms.jpeg?q=70",
    "price": 352,
    "original_price": 1099,
    "link": "https://dl.flipkart.com/dl/rk-products-94-s-pet-bed/p/itm423bdd87e887c",
    "off": 68
  },
  {
    "name": "Nutri Desire Cardamom Green Whole - 50gm + 50gm Elaichi Grade - Big Size (Buy 1 Get 1 Free)",
    "image": "https://m.media-amazon.com/images/I/61WXOD2zLAL._SL1500_.jpg",
    "price": 228,
    "original_price": 399,
    "link": "https://www.amazon.in/dp/B08JD6422Y",
    "off": 43
  },
  {
    "name": "AmbiTech Ankle Wrap (Customized Compression,Ergonomic Design,Easy application, Comfortable, Durable)- (Large)",
    "image": "https://m.media-amazon.com/images/I/61UISMyw7pL._SY606_.jpg",
    "price": 125,
    "original_price": 249,
    "link": "https://www.amazon.in/dp/B08HH1KVH8",
    "off": 50
  },
  {
    "name": "Nivea Naturally Good Combo, Lavender Body Lotion 200 ml, Lily of the Valley & Oil Shower gel 300 ml, Bio Green Tea Roll on 50 ml, With Stylin' Pouch, 4 Pieces",
    "image": "https://m.media-amazon.com/images/I/81ZmdksYXML._SX522_.jpg",
    "price": 664,
    "original_price": 997,
    "link": "https://www.amazon.in/dp/B0986T4JP3",
    "off": 33
  },
  {
    "name": "beatXP Blue plus Digital Bathroom Weighing Scale with LCD Panel & Thick Tempered Glass, Electronic Weight Machine for Human Body - 2 Year Warranty",
    "image": "https://m.media-amazon.com/images/I/51danSojHlL._SL1500_.jpg",
    "price": 449,
    "original_price": 1399,
    "link": "https://www.amazon.in/dp/B09MFX8ZHC",
    "off": 68
  },
  {
    "name": "Hammer KO 2.0 Wireless Bluetooth in Ear True Wireless Earbuds with Mic (Black)",
    "image": "https://m.media-amazon.com/images/I/61zwwQ+vLAL._SL1500_.jpg",
    "price": 1999,
    "original_price": 2999,
    "link": "https://www.amazon.in/dp/B09H6RGC61",
    "off": 33
  },
  {
    "name": "PNY 240 GB Internal Sold State Hard Drive (Phantom 1)",
    "image": "https://m.media-amazon.com/images/I/81epRu8WZ-L._SL1500_.jpg",
    "price": 2825,
    "original_price": 3999,
    "link": "https://www.amazon.in/dp/B01MYYVO9M",
    "off": 29
  },
  {
    "name": "Amazon Brand - Solimo Pineapple Face Wash with Chia Seed, 150ml & Amazon Brand - Solimo Orange Face and Body Scrub",
    "image": "https://m.media-amazon.com/images/I/71+PHRz9lUL._SX522_.jpg",
    "price": 350,
    "original_price": 1000,
    "link": "https://www.amazon.in/dp/B09NMGT3NR",
    "off": 65
  },
  {
    "name": "Pigeon by Stovekraft Radiance Pro Desk, Torch Emergency Lamp with 1200mAH Battery (Blue, Large)",
    "image": "https://m.media-amazon.com/images/I/71+obsDzAOL._SL1500_.jpg",
    "price": 329,
    "original_price": 599,
    "link": "https://www.amazon.in/dp/B08J3VG99G",
    "off": 45
  },
  {
    "name": "Men Light Grey Melange Solid Rapid-Dry Running Jacket",
    "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11953404/2021/10/26/e7602906-6586-450d-84c3-5f56666caf141635242884385-HRX-by-Hrithik-Roshan-Men-Light-Grey-Melange-Solid-Rapid-Dry-1.jpg",
    "price": 439,
    "original_price": 1199,
    "link": "https://www.myntra.com/jackets/hrx-by-hrithik-roshan/hrx-by-hrithik-roshan-men-light-grey-melange-solid-rapid-dry-running-jacket/11953404/buy",
    "off": 63
  },
  {
    "name": "Chandrika Glycerine Ayurveda Gel Bar, 125g (Pack of 6)",
    "image": "https://m.media-amazon.com/images/I/71k4QQl5-OL._SX522_PIbundle-6,TopRight,0,0_AA522SH20_.jpg",
    "price": 265,
    "original_price": 528,
    "link": "https://www.amazon.in/dp/B07MQW396Z",
    "off": 50
  },
  {
    "name": "Clean & Clear Morning Energy Lemon Fresh Face Wash  (300 ml)",
    "image": "https://rukminim1.flixcart.com/image/416/416/kcgk1ow0/face-wash/x/n/r/300-morning-energy-lemon-fresh-clean-clear-original-imafth356uetvh9z.jpeg?q=70",
    "price": 238,
    "original_price": 435,
    "link": "https://dl.flipkart.com/dl/clean-clear-morning-energy-lemon-fresh-face-wash/p/itmfhtc5w7ayj2eh",
    "off": 45
  },
  {
    "name": "The Better Home Anti Bacterial Liquid Handwash 5 Litre Bottle | Hand Wash Refill Pack",
    "image": "https://m.media-amazon.com/images/I/51F4bZ36JkL._SX522_.jpg",
    "price": 1199,
    "original_price": 4499,
    "link": "https://www.amazon.in/dp/B09Q1JWV2S",
    "off": 73
  },
  {
    "name": "Baidyanath Chyawanprash Special (1 Kg) & Giloy Juice (500 Ml) - Combo Pack",
    "image": "https://m.media-amazon.com/images/I/71sMM4pfRuL._SL1500_.jpg",
    "price": 330,
    "original_price": 599,
    "link": "https://www.amazon.in/dp/B087RGTVNL",
    "off": 45
  },
  {
    "name": "REDMI 10 (Caribbean Green, 64 GB)  (4 GB RAM)",
    "image": "https://rukminim1.flixcart.com/image/416/416/l0tweq80/mobile/d/d/s/-original-imagcgtgyqebxqhx.jpeg?q=70",
    "price": 10999,
    "original_price": 14999,
    "link": "https://dl.flipkart.com/dl/redmi-10-caribbean-green-64-gb/p/itmbfb8dfcdd6e10",
    "off": 27
  },
  {
    "name": "[ICICI & Federal Card] Blue Star 1.5 Ton 3 Star Inverter Split AC (Copper, IC318EBTU, 2021, White)",
    "image": "https://m.media-amazon.com/images/I/619tERULaiL._SX679_.jpg",
    "price": 32490,
    "original_price": 59000,
    "link": "https://www.amazon.in/dp/B08WLQHCZX",
    "off": 45
  },
  {
    "name": "HP X1000 Wired Mouse (Black/Grey)",
    "image": "https://m.media-amazon.com/images/I/61mucoT+ifL._SL1500_.jpg",
    "price": 249,
    "original_price": 399,
    "link": "https://www.amazon.in/dp/B009VCGPSY",
    "off": 38
  },
  {
    "name": "Amazon Brand - Solimo Mira Multi-Purpose Laptop Table with Cup Holder (Black)",
    "image": "https://m.media-amazon.com/images/I/61L4WDsTAWS._SL1500_.jpg",
    "price": 383,
    "original_price": 599,
    "link": "https://www.amazon.in/dp/B08TX47TJ6",
    "off": 36
  },
  {
    "name": "Milton Thermosteel Carafe Classic Tea/Coffee Pot (2000 Ml) & Thermosteel Carafe Flask Tea/ Coffee Pot, 2000 Ml, Silver, 2 Pieces",
    "image": "https://m.media-amazon.com/images/I/81M7bQO9+gL._SX569_.jpg",
    "price": 2035,
    "original_price": 2999,
    "link": "https://www.amazon.in/dp/B08K9SHT7B",
    "off": 32
  },
  {
    "name": "Cocaodo Fruit and Nut chocolate truffles, 9 units",
    "image": "https://m.media-amazon.com/images/I/71FL5CUtwZL._SL1500_.jpg",
    "price": 124,
    "original_price": 288,
    "link": "https://www.amazon.in/dp/B09JSP1BSH",
    "off": 57
  },
  {
    "name": "Diverse Men's Printed Slim Fit Cotton Boxer (Combo Pack of 3)(DCMBSCMSC14L35-422_Multicolor_XL)",
    "image": "https://m.media-amazon.com/images/I/81NLmz9TQNL._UL1500_.jpg",
    "price": 251,
    "original_price": 488,
    "link": "https://www.amazon.in/dp/B08DRMCNVT",
    "off": 49
  },
  {
    "name": "HP Core i3 11th Gen - (8 GB/512 GB SSD/Windows 11 Home) 15s-dy3501TU Thin and Light Laptop  (15.6 inch, Natural Silver, 1.75 kg, With MS Office)",
    "image": "https://rukminim1.flixcart.com/image/416/416/kyt0ya80/computer/s/z/b/-original-imagayc6ahrmg8y7.jpeg?q=70",
    "price": 41990,
    "original_price": 49590,
    "link": "https://dl.flipkart.com/dl/hp-core-i3-11th-gen-8-gb-512-gb-ssd-windows-11-home-15s-dy3501tu-thin-light-laptop/p/itm450f55a8c2cb2",
    "off": 15
  },
  {
    "name": "Beautilo Vitamin C Brightening Hand and Nail Cream - Deeply Nourish Dry Hand & Skin With Argan Oil, Jojoba Oils, Cocoa & Shea Butter, 50 g",
    "image": "https://m.media-amazon.com/images/I/71rrUceEn0L._SL1500_.jpg",
    "price": 159,
    "original_price": 299,
    "link": "https://www.amazon.in/dp/B08L44JS2Y",
    "off": 47
  },
  {
    "name": "Indigo Women's Straight Kurti (Pack of 2)",
    "image": "https://m.media-amazon.com/images/I/71NwnKLCZxL._UL1500_.jpg",
    "price": 259,
    "original_price": 399,
    "link": "https://www.amazon.in/dp/B078K9Y5WB",
    "off": 35
  },
  {
    "name": "Diolty Liquid Detergent 5 Litre, Liquid Detergent for Top Load & Front Load Washing Machine | Suitable For All Fabrics | Eco-friendly, Non-toxic (Pink)",
    "image": "https://m.media-amazon.com/images/I/51yZ1JytrXL._SL1080_.jpg",
    "price": 399,
    "original_price": 699,
    "link": "https://www.amazon.in/dp/B09NR4P283",
    "off": 43
  },
  {
    "name": "U & I Prime Shuffle 1 Wireless Bluetooth In Ear Neckband Headset with Mic (Black)",
    "image": "https://m.media-amazon.com/images/I/41wOp8KddzS._SX522_.jpg",
    "price": 679,
    "original_price": 2999,
    "link": "https://www.amazon.in/dp/B097ZMVQRC",
    "off": 77
  },
  {
    "name": "Nivia Skipping Rope JR-571 With Weight",
    "image": "https://m.media-amazon.com/images/I/41O9Or6ERCL.jpg",
    "price": 88,
    "original_price": 149,
    "link": "https://www.amazon.in/dp/B010HUI9PU",
    "off": 41
  },
  {
    "name": "Sunrise 500 Meters Long Range LED Torch  (Red : Rechargeable)",
    "image": "https://rukminim1.flixcart.com/image/416/416/jtuej680/torch/7/j/m/500-meters-long-range-led-sunrise-original-imafa9eyzatvbpan.jpeg?q=70",
    "price": 394,
    "original_price": 1299,
    "link": "https://dl.flipkart.com/dl/sunrise-500-meters-long-range-led-torch/p/itm9f23efe9c5cb5",
    "off": 70
  },
  {
    "name": "LAVA D2 max 2 m Micro USB Cable  (Compatible with Mobile, White, One Cable)",
    "image": "https://rukminim1.flixcart.com/image/416/416/ktszgy80/data-cable/micro-usb-cable/l/b/p/d2-max-lava-original-imag72c4qp55zgrt.jpeg?q=70",
    "price": 49,
    "original_price": 349,
    "link": "https://dl.flipkart.com/dl/lava-d2-max-2-m-micro-usb-cable/p/itmbfb4a6b191b9a",
    "off": 86
  },
  {
    "name": "Redgear F-15 Wired Optical Gaming Mouse  (USB 2.0, USB 3.0, Black)",
    "image": "https://rukminim1.flixcart.com/image/416/416/kqidx8w0/mouse/a/3/c/f-15-redgear-original-imag4gf8pzgwzxyt.jpeg?q=70",
    "price": 371,
    "original_price": 999,
    "link": "https://dl.flipkart.com/dl/redgear-f-15-wired-optical-gaming-mouse/p/itm554692cb3fa83",
    "off": 63
  },
  {
    "name": "Neu.Farm Value - Cashew/Kaju - Whole W400 - Cashew Nuts - Pack of 2 (200g x2) Cashews  (2 x 200 g)",
    "image": "https://rukminim1.flixcart.com/image/416/416/knqd3m80/nut-dry-fruit/r/v/q/400-value-cashew-kaju-whole-w400-cashew-nuts-pack-of-2-200g-x2-original-imag2cgqyruhxhtf.jpeg?q=70",
    "price": 325,
    "original_price": 595,
    "link": "https://dl.flipkart.com/dl/neu-farm-value-cashew-kaju-whole-w400-cashew-nuts-pack-2-200g-x2-cashews/p/itmbdcdeae164dd4",
    "off": 45
  },
  {
    "name": "LuvIt Luscious Love Delights - Heart Shaped Chocolate Bars | A Gift of Love | Valentine's Gift | Pack of 1 - 162g Each",
    "image": "https://m.media-amazon.com/images/I/411m6cuE0YL.jpg",
    "price": 149,
    "original_price": 220,
    "link": "https://www.amazon.in/dp/B09KSBWXCN",
    "off": 32
  },
  {
    "name": "LuvIt Luscious Love Delights, Heart Shaped Chocolate – A Gift of Love, 342g - Pack of 2",
    "image": "https://m.media-amazon.com/images/I/61zYZ2b5RIL._SL1280_.jpg",
    "price": 225,
    "original_price": 499,
    "link": "https://www.amazon.in/dp/B083ZZMVDS",
    "off": 55
  },
  {
    "name": "[ICICI Credit Cards] LG 1.5 Ton 4 Star DUAL Inverter Split AC (Copper, Super Convertible 5-in-1 Cooling, HD Filter with Anti-Virus Protection, 2022 Model, PS-Q19RNYE, White)",
    "image": "https://m.media-amazon.com/images/I/51hbo8yQ1EL._SX425_.jpg",
    "price": 38390,
    "original_price": 48990,
    "link": "https://www.amazon.in/dp/B09NS5Y4BG",
    "off": 22
  },
  {
    "name": "KENT 16058 Induction Cooktop  (Black, Touch Panel)",
    "image": "https://rukminim1.flixcart.com/image/416/416/k3q76a80/induction-cook-top/a/j/e/kent-gem-16058-original-imafmsmmhctgkgfp.jpeg?q=70",
    "price": 1379,
    "original_price": 3100,
    "link": "https://dl.flipkart.com/dl/kent-16058-induction-cooktop/p/itm30df3eea416c8",
    "off": 56
  },
  {
    "name": "Inalsa 2.5 L Inox-1200W Air Fryer with Power & Heating Light Indicator And 30min Timer with Bell Ring, (Black)",
    "image": "https://m.media-amazon.com/images/I/61CCYpuLN7S._SL1200_.jpg",
    "price": 3599,
    "original_price": 9999,
    "link": "https://www.amazon.in/dp/B091VNN9DX",
    "off": 64
  },
  {
    "name": "ASUS TUF Dash F15 (2021), 15.6-inch (39.62 cms) FHD 144Hz, Intel Core i5-11300H 11th Gen, RTX 3050 Ti 4GB Graphics Gaming Laptop (16GB RAM/512GB SSD/Office 2019/Windows 10/White/2 kg), FX516PE-HN087TS",
    "image": "https://m.media-amazon.com/images/I/81mLxU0CcAL._SX425_.jpg",
    "price": 78990,
    "original_price": 120990,
    "link": "https://www.amazon.in/dp/B096KX76QX",
    "off": 35
  },
  {
    "name": "Server Men Shoes 4068-4069 Hiking",
    "image": "https://m.media-amazon.com/images/I/71UYPLm+D+L._UL1500_.jpg",
    "price": 614,
    "original_price": 999,
    "link": "https://www.amazon.in/dp/B09QJNKRHT",
    "off": 39
  },
  {
    "name": "Brewvin Organic Amla Ginger Fennel Herbal Tea, 100g Pouch, Manages Digestion, Organically Harvested",
    "image": "https://m.media-amazon.com/images/I/71G79HpmaqS._SL1500_.jpg",
    "price": 99,
    "original_price": 199,
    "link": "https://www.amazon.in/dp/B08WKDBTVV",
    "off": 50
  },
  {
    "name": "Jaquline USA Rose Love Face Gel Scrub 100g",
    "image": "https://m.media-amazon.com/images/I/6140yOTv02L._SL1500_.jpg",
    "price": 93,
    "original_price": 179,
    "link": "https://www.amazon.in/dp/B09GW6JXLN",
    "off": 48
  },
  {
    "name": "Prestige Iris 750 Watt Mixer Grinder with 3 Stainless Steel Jar + 1 Juicer Jar (White and Blue)",
    "image": "https://m.media-amazon.com/images/I/81+M1QrVNIL._SL1500_.jpg",
    "price": 2888,
    "original_price": 5999,
    "link": "https://www.amazon.in/dp/B0756K5DYZ",
    "off": 52
  },
  {
    "name": "Nivea Women Deodorant, Pearl and Beauty, 150ml (Pack of 3)",
    "image": "https://m.media-amazon.com/images/I/516jDGvWstL._SX522_PIbundle-3,TopRight,0,0_AA522SH20_.jpg",
    "price": 325,
    "original_price": 675,
    "link": "https://www.amazon.in/dp/B09DSBDV4N",
    "off": 52
  },
  {
    "name": "Red Chief Casual Shoes for Men PF3470",
    "image": "https://m.media-amazon.com/images/I/71tp9vQqlCL._UL1500_.jpg",
    "price": 1163,
    "original_price": 2999,
    "link": "https://www.amazon.in/dp/B07DGSV4HZ",
    "off": 61
  },
  {
    "name": "Philips Audio HTL1045/94 45w 5.0 Channel HDMI Soundbar Speaker,Black",
    "image": "https://m.media-amazon.com/images/I/81t4dZC0pWL._SL1500_.jpg",
    "price": 5017,
    "original_price": 7999,
    "link": "https://www.amazon.in/dp/B08CYJTW8P",
    "off": 37
  },
  {
    "name": "Kingsway Sticky Sun Shades for Car Window for Chevrolet Beat (Red, Set of 4, Cotton Fabric)",
    "image": "https://m.media-amazon.com/images/I/61X8QfY9RdL._SL1000_.jpg",
    "price": 122,
    "original_price": 299,
    "link": "https://www.amazon.in/dp/B06VSDRMQV",
    "off": 59
  },
  {
    "name": "Signoraware Plastic Square Dinner Set, White, 24-Pieces",
    "image": "https://m.media-amazon.com/images/I/71l2RGD09ZL._SX679_.jpg",
    "price": 944,
    "original_price": 1730,
    "link": "https://www.amazon.in/dp/B013QTKZK6",
    "off": 45
  },
  {
    "name": "SignoraWare High Borosilicate Bakeware Safe Glass Release Knob, 800 ml, Transparent",
    "image": "https://m.media-amazon.com/images/I/61BCDkIvToL._SX679_.jpg",
    "price": 182,
    "original_price": 595,
    "link": "https://www.amazon.in/dp/B07MXYZ4LT",
    "off": 69
  },
  {
    "name": "SignoraWare Smile Glass Water Bottle, 1 Litre, Set of 2, Green",
    "image": "https://m.media-amazon.com/images/I/51HdsgO3CiL._SX679_.jpg",
    "price": 221,
    "original_price": 550,
    "link": "https://www.amazon.in/dp/B07PDKFFBC",
    "off": 60
  },
  {
    "name": "Infinity (JBL) Swing 320 by Harman, True Wireless Earbuds with Mic, 19 Hours of Playtime, Dual Equalizers, Dual Connect, Bluetooth 5.0, Type C & Voice Assistant Support (Black)",
    "image": "https://m.media-amazon.com/images/I/51UwXG8jNXL._SX679_.jpg",
    "price": 2099,
    "original_price": 5999,
    "link": "https://www.amazon.in/dp/B09HC2TH6D",
    "off": 65
  },
  {
    "name": "Biotique Natural Makeup Starkissed Moist Matte Lipstick, Tangerine Tango",
    "image": "https://m.media-amazon.com/images/I/51ZeZQm8uwL._SX679_.jpg",
    "price": 133,
    "original_price": 249,
    "link": "https://www.amazon.in/dp/B083KBXF4L",
    "off": 47
  },
  {
    "name": "Signoraware Ice Candy Plastic Stylish Jumbo Plastic Sipper, 500ml, Pink",
    "image": "https://m.media-amazon.com/images/I/81BAmiAbKRL._SY879_.jpg",
    "price": 62,
    "original_price": 135,
    "link": "https://www.amazon.in/dp/B01NH2W7RI",
    "off": 54
  },
  {
    "name": "Signoraware Three Star Small Bowl Container, 500ml, Set of 1, Blue",
    "image": "https://m.media-amazon.com/images/I/710a9uYgQbL._SX679_.jpg",
    "price": 72,
    "original_price": 170,
    "link": "https://www.amazon.in/dp/B00NFE3EB0",
    "off": 58
  },
  {
    "name": "Signoraware Nano Round Big Container Set, 140ml, Set of 6, Turkish Blue",
    "image": "https://m.media-amazon.com/images/I/71yqz1NUQBL._SX679_.jpg",
    "price": 128,
    "original_price": 330,
    "link": "https://www.amazon.in/dp/B014R9OF64",
    "off": 61
  },
  {
    "name": "HRX by Hrithik Roshan Medium 23 L Laptop Backpack HRX Ribbed  (Black, Red, Grey)",
    "image": "https://rukminim1.flixcart.com/image/775/930/klv7ekw0/backpack/r/o/h/hrx-ribbed-1992325-backpack-hrx-by-hrithik-roshan-original-imagyw74ppx7bggz.jpeg?q=50",
    "price": 489,
    "original_price": 1399,
    "link": "https://dl.flipkart.com/dl/hrx-hrithik-roshan-ribbed-23-l-backpack/p/itmfeemrypapxzxv",
    "off": 65
  },
  {
    "name": "Milton Comfy Matt Melamine Tray, Large, Brown (15\" x 11\")",
    "image": "https://m.media-amazon.com/images/I/81w0IFvfnaL._SX679_.jpg",
    "price": 189,
    "original_price": 530,
    "link": "https://www.amazon.in/dp/B085LHK3QN",
    "off": 64
  },
  {
    "name": "Amazon Brand - Symbol Men's Quilted",
    "image": "https://m.media-amazon.com/images/I/81uTC78bnbL._UX569_.jpg",
    "price": 564,
    "original_price": 1299,
    "link": "https://www.amazon.in/dp/B08LYGNH1R",
    "off": 57
  },
  {
    "name": "eCraftIndia Shadow Ganesh Ji Metal Tea Light Holder (8 cm x 8 cm x 11 cm, Brown)",
    "image": "https://m.media-amazon.com/images/I/71w5Rp6S0IL._SY879_.jpg",
    "price": 83,
    "original_price": 399,
    "link": "https://www.amazon.in/dp/B01L1IULRG",
    "off": 79
  },
  {
    "name": "Maped Craft Scissor Set - Pack of 2 (Multicolor)",
    "image": "https://m.media-amazon.com/images/I/810QguJwH4L._SX522_.jpg",
    "price": 443,
    "original_price": 999,
    "link": "https://www.amazon.in/dp/B003S49OL6",
    "off": 56
  },
  {
    "name": "Levi's Men's Regular Fit Checkered Boxer Shorts",
    "image": "https://m.media-amazon.com/images/I/517NzDb5UVL._UX679_.jpg",
    "price": 274,
    "original_price": 549,
    "link": "https://www.amazon.in/dp/B088PCG1TQ",
    "off": 50
  },
  {
    "name": "Sirona Reusable Blink & Glow Face Razor for Women - 2 Razors | Painless Facial Hair Removal | Eyebrow Shaper | For Eyebrows, Upper Lip, Forehead, Peach Fuzz, Chin and Sideburns | Dermaplaning Tool",
    "image": "https://m.media-amazon.com/images/I/51DK9AlGdpL._SX522_.jpg",
    "price": 149,
    "original_price": 225,
    "link": "https://www.amazon.in/dp/B09G31S9K6",
    "off": 34
  },
  {
    "name": "Greenshield Household Wipes 50's",
    "image": "https://m.media-amazon.com/images/I/71WAgTKkFTL._SL1500_.jpg",
    "price": 129,
    "original_price": 299,
    "link": "https://www.amazon.in/dp/B08CC8DWTT",
    "off": 57
  },
  {
    "name": "Meeowmee Cotton Soft Reusable /Washable Baby Diaperpants. (6)",
    "image": "https://m.media-amazon.com/images/I/61my2-XGqTL._SL1280_.jpg",
    "price": 93,
    "original_price": 179,
    "link": "https://www.amazon.in/dp/B09QYSK6WV",
    "off": 48
  },
  {
    "name": "Noise Beads TWS Earbuds with Longest Playtime in Single Charge, Metallic Finish, HyperSync™ Technology, Full Touch Controls (Onyx Black)",
    "image": "https://m.media-amazon.com/images/I/51nhTdeIjLL._SL1500_.jpg",
    "price": 1499,
    "original_price": 2999,
    "link": "https://www.amazon.in/dp/B09D3X79FC",
    "off": 50
  },
  {
    "name": "Flipkart SmartBuy Premium TA 1022 750 W Pop Up Toaster  (Black)",
    "image": "https://rukminim1.flixcart.com/image/416/416/kd69z0w0/pop-up-toaster/j/c/z/flipkart-smartbuy-premium-ta-1022-original-imafu4xxu2yjjgqk.jpeg?q=70",
    "price": 599,
    "original_price": 1999,
    "link": "https://dl.flipkart.com/dl/flipkart-smartbuy-premium-ta-1022-750-w-pop-up-toaster/p/itm3f40b79b5a964",
    "off": 70
  },
  {
    "name": "Crescent Smart - Parasmani 10A Wi-Fi Smart Plug, Best Suitable for Small Appliances Like (Television, Wall Lamp, Mobile Chargers, Electronics Appliances, Etc) Compatible with Alexa & Google Assistant.",
    "image": "https://m.media-amazon.com/images/I/61pWnFQ6JXS._SL1500_.jpg",
    "price": 650,
    "original_price": 999,
    "link": "https://www.amazon.in/dp/B097HN7NXM",
    "off": 35
  },
  {
    "name": "BodyGuard Fruits and Vegetables Disinfectant Multipurpose Tablets - 100 Tablets",
    "image": "https://images-eu.ssl-images-amazon.com/images/I/51pHaRJ-8hL._SX300_SY300_QL70_FMwebp_.jpg",
    "price": 261,
    "original_price": 898,
    "link": "https://www.amazon.in/dp/B08C4M9X2S",
    "off": 71
  },
  {
    "name": "Boult Audio AirBass Propods X TWS Earbuds, 32H Playtime, Fast Charging Type-C, IPX5 Water Resistant, Touch Controls and Voice Assistant (Black)",
    "image": "https://m.media-amazon.com/images/I/61LL4tCXoYL._SX522_.jpg",
    "price": 1299,
    "original_price": 5999,
    "link": "https://www.amazon.in/dp/B09ND98QXM",
    "off": 78
  },
  {
    "name": "VAHDAM - Organic Green Tea Sampler Trial Pack | 15 Assorted Green Tea Bags | USDA Certified Organic Green Tea",
    "image": "https://m.media-amazon.com/images/I/81bB8oDsIjL._SX679_.jpg",
    "price": 99,
    "original_price": 225,
    "link": "https://www.amazon.in/dp/B08GG35QD4",
    "off": 56
  },
  {
    "name": "Saffola Mealmaker SOYA Chunks with Supersoft Technology, Tender & Juicy, Pouch 1 kg",
    "image": "https://m.media-amazon.com/images/I/71i3eKzIeZL._SX679_.jpg",
    "price": 168,
    "original_price": 210,
    "link": "https://www.amazon.in/dp/B08WQPZ1JB",
    "off": 20
  },
  {
    "name": "Signoraware Aqua Tone Borosilicate Glass Water Bottle, Set of 1, (Blue, 360ml/18mm)",
    "image": "https://m.media-amazon.com/images/I/51vkmIcjoiL._SL1050_.jpg",
    "price": 178,
    "original_price": 299,
    "link": "https://www.amazon.in/dp/B079VPWTYK",
    "off": 40
  },
  {
    "name": "Maybelline New York Hypercurl Mascara Washable, Black, 9.2g",
    "image": "https://m.media-amazon.com/images/I/51pQmQhAm0L._SX522_.jpg",
    "price": 241,
    "original_price": 399,
    "link": "https://www.amazon.in/dp/B008KH5258",
    "off": 40
  },
  {
    "name": "BookMyCostume Captain America Superhero Cape Kids Fancy Dress Costume",
    "image": "https://m.media-amazon.com/images/I/61qMz-W1x4L._UL1500_.jpg",
    "price": 115,
    "original_price": 199,
    "link": "https://www.amazon.in/dp/B08KT4ZBB6",
    "off": 42
  },
  {
    "name": "Boult Audio Airbass Z1 Bluetooth Headset  (Black, True Wireless)",
    "image": "https://rukminim1.flixcart.com/image/416/416/l0sgyvk0/headphone/p/i/u/-original-imagcgfyjgnh9rgg.jpeg?q=70",
    "price": 1499,
    "original_price": 5499,
    "link": "https://dl.flipkart.com/dl/boult-audio-airbass-z1-bluetooth-headset/p/itmafb7e4f4c15f0",
    "off": 73
  },
  {
    "name": "Santoor Brightening Sheet Mask Aloe & Sandal, Sandalwood, 17 ml, 4 Count",
    "image": "https://images-eu.ssl-images-amazon.com/images/I/41w1lVu74UL._SX300_SY300_QL70_FMwebp_.jpg",
    "price": 198,
    "original_price": 396,
    "link": "https://www.amazon.in/dp/B091QH7W85",
    "off": 50
  },
  {
    "name": "U & I Bigger Series Wireless Bluetooth In Ear Neckband Headset with Mic",
    "image": "https://m.media-amazon.com/images/I/51Zb98zzMUL._SX569_.jpg",
    "price": 619,
    "original_price": 3499,
    "link": "https://www.amazon.in/dp/B08HKN9Z1K",
    "off": 82
  },
  {
    "name": "Lakmé Absolute Gel Stylist Nail Color, Jade Floret, 12 ml",
    "image": "https://m.media-amazon.com/images/I/51hjP+RIr1L._SL1000_.jpg",
    "price": 167,
    "original_price": 299,
    "link": "https://www.amazon.in/dp/B01N6S6RRP",
    "off": 44
  },
  {
    "name": "Fire-Boltt Call Bluetooth Calling Smartwatch with SpO2 & 1.7” Metal Body with Blood Oxygen Monitoring, Continuous Heart Rate, Full Touch & Multiple Watch Faces, Black, Free Size",
    "image": "https://m.media-amazon.com/images/I/61BSmqNVYPL._SX569_.jpg",
    "price": 4499,
    "original_price": 9999,
    "link": "https://www.amazon.in/dp/B09QX7L573",
    "off": 55
  },
  {
    "name": "WISELIFE Yoga Mat Strap and Sling Belt for Carrying & Holding Mat with Overlocking Closure",
    "image": "https://m.media-amazon.com/images/I/71l+bbnDl3S._SL1500_.jpg",
    "price": 299,
    "original_price": 499,
    "link": "https://www.amazon.in/dp/B097PC1G6L",
    "off": 40
  },
  {
    "name": "Dettol Body Wash and Shower Gel for Women and Men, Refresh (Pack of 3 - 250ml each) | Soap-Free Bodywash | 12h Complete Odour Protection",
    "image": "https://m.media-amazon.com/images/I/718aOAb1qtS._SX522_PIbundle-3,TopRight,0,0_AA522SH20_.jpg",
    "price": 240,
    "original_price": 600,
    "link": "https://www.amazon.in/dp/B07XTS6DLS",
    "off": 60
  },
  {
    "name": "Sansui Prima 2 Slice 800 W Pop Up Toaster  (Sky Blue, Chrome)",
    "image": "https://rukminim1.flixcart.com/image/416/416/kffq2kw0/pop-up-toaster/n/z/y/sansui-prima-2-slice-original-imafvwyg9tgrhxyg.jpeg?q=70",
    "price": 1099,
    "original_price": 2599,
    "link": "https://dl.flipkart.com/dl/sansui-prima-2-slice-800-w-pop-up-toaster/p/itm0810eedc84bf0",
    "off": 58
  },
  {
    "name": "Ant Esports GP110 Wired Gamepad, Compatible for PC & Laptop Computer (Windows 10/8 /7) / PS3 / Android",
    "image": "https://m.media-amazon.com/images/I/61wZOp372cL._SX569_.jpg",
    "price": 799,
    "original_price": 1999,
    "link": "https://www.amazon.in/dp/B09FT5DXC7",
    "off": 60
  },
  {
    "name": "CUROVIT Daisy ABS Health Faucet Gun Pack of 2 Silver Color Chrome Finish Leak Proof Hygiene Spray for Toilet Seat",
    "image": "https://m.media-amazon.com/images/I/61+q59DgpfL._SL1000_.jpg",
    "price": 283,
    "original_price": 899,
    "link": "https://www.amazon.in/dp/B09BVT4WQD",
    "off": 69
  },
  {
    "name": "Budweiser 0.0 Non Alcoholic Beer Pack of 6, 6 X 330ml",
    "image": "https://m.media-amazon.com/images/I/51nT5Q1a+GL._PIbundle-6,TopRight,0,0_AA500SH20_.jpg",
    "price": 288,
    "original_price": 480,
    "link": "https://www.amazon.in/dp/B086CBSSL3",
    "off": 40
  },
  {
    "name": "HUESLAND by Ahmedabad Cotton Sateen Striped 220 TC Cotton Double Duvet Cover with 2 Pillow Covers - Peach",
    "image": "https://m.media-amazon.com/images/I/91Ty3i9kX0L._SL1500_.jpg",
    "price": 658,
    "original_price": 1299,
    "link": "https://www.amazon.in/dp/B01NGTVAJL",
    "off": 49
  },
  {
    "name": "Amazon Brand – Solimo Coconut Water Enriched with Vitamin C, 200ml (Pack of 6)",
    "image": "https://m.media-amazon.com/images/I/819gdqp40iL._SL1500_.jpg",
    "price": 185,
    "original_price": 299,
    "link": "https://www.amazon.in/dp/B08HQN7LNY",
    "off": 38
  },
  {
    "name": "QUADA Compression Sleeve for Unisex- BEST Calf Compression Socks for Running Shin Splint Calf Pain Relief Leg Support Sleeve for Runners Medical Air Travel Nursing Cycling (L, Green)",
    "image": "https://m.media-amazon.com/images/I/51TecIFVT2S._SL1500_.jpg",
    "price": 257,
    "original_price": 499,
    "link": "https://www.amazon.in/dp/B09244TVD2",
    "off": 48
  },
  {
    "name": "Wizme Combo Set Of 5 Pcs Comb Set With Box Holder For Women And Girls Antique Combs With Compact Mirror (Black) Pack Of 1",
    "image": "https://m.media-amazon.com/images/I/717iJsAGZ5S._SL1500_.jpg",
    "price": 299,
    "original_price": 399,
    "link": "https://www.amazon.in/dp/B07SQJ3XGN",
    "off": 25
  },
  {
    "name": "Luster Diamond Skin Gel | Massage Gel | Helps Invigorate & Rejuvenate Skin | Face & Body Massage Gel | For Women & Men | All Skin Types | Paraben & Sulfate Free -500ml",
    "image": "https://m.media-amazon.com/images/I/71AV0GQe63L._SL1500_.jpg",
    "price": 128,
    "original_price": 199,
    "link": "https://www.amazon.in/dp/B07D7RDZGD",
    "off": 36
  },
  {
    "name": "(Renewed) SanDisk Ultra Dual 64GB USB 3.0 OTG Pen Drive",
    "image": "https://m.media-amazon.com/images/I/51-pb2hDPAL._SX569_.jpg",
    "price": 490,
    "original_price": 699,
    "link": "https://www.amazon.in/dp/B07SWVLRF7",
    "off": 30
  },
  {
    "name": "U & I Prime Buzz 1 Truly Wireless Bluetooth In Ear Headset with Mic (Black)",
    "image": "https://m.media-amazon.com/images/I/51dz5Er81pS._SX569_.jpg",
    "price": 899,
    "original_price": 3999,
    "link": "https://www.amazon.in/dp/B097ZPM7F5",
    "off": 78
  },
  {
    "name": "Kitty & The Woof Gang Red and Black with White base check cotton shirt, dress with Corduroy stripe across back with studs | Smart and trendy Shirt For Dog, Cat and Puppies | Please check the Size Chart before ordering | Size S",
    "image": "https://m.media-amazon.com/images/I/81Qbf2OT3EL._SL1500_.jpg",
    "price": 215,
    "original_price": 399,
    "link": "https://www.amazon.in/dp/B07W56J23P",
    "off": 46
  },
  {
    "name": "Cute Critters Adjustable Bell Buckle Velvet Neck Strap for Kitten Cat Puppy (Blue)",
    "image": "https://m.media-amazon.com/images/I/31IlTfq2gCL.jpg",
    "price": 99,
    "original_price": 199,
    "link": "https://www.amazon.in/dp/B08PSWXFTS",
    "off": 50
  },
  {
    "name": "Truwax Car Wash Shampoo 500ml",
    "image": "https://m.media-amazon.com/images/I/61c8ES2QGHL._SL1500_.jpg",
    "price": 88,
    "original_price": 199,
    "link": "https://www.amazon.in/dp/B09FLR9417",
    "off": 56
  },
  {
    "name": "SNDIA Canvas Waist Bag Fanny Pack Travel Pouch (Black)",
    "image": "https://m.media-amazon.com/images/I/812RHc6Uv6S._SX569_.jpg",
    "price": 199,
    "original_price": 1499,
    "link": "https://www.amazon.in/dp/B0922YM7HS",
    "off": 87
  },
  {
    "name": "Butterfly Smart Mixer Grinder, 750W, 4 Jars (Grey)",
    "image": "https://m.media-amazon.com/images/I/71+cDVETcIL._SL1500_.jpg",
    "price": 2599,
    "original_price": 3999,
    "link": "https://www.amazon.in/dp/B075JJ5NQC",
    "off": 35
  }
]

module.exports = {products}