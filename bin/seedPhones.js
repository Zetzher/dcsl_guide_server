require('dotenv').config();
const mongoose = require("mongoose");
const { Phone } = require("../schema/index");

mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);

Phone.collection.drop();

const phone = [{
  "id": 1,
  "manufacturer": "Google",
  "model": "Google Pixel 3",
  "image": "https://www.cnet.com/a/img/resize/e07817c847551d2b8f27049028dcb06d7c48dd7e/hub/2018/10/13/92cde876-c7d5-4762-a297-94214173e5f2/106-google-pixel-3.jpg?auto=webp&fit=crop&height=675&width=1200",
  "price": 799,
  "description": "Staying too far from your loved ones? Video call them for hours on end. The weather is romantic? Listen to your favourite playlists all day long. Don’t want to go out this weekend? Then binge watch your favourite series on the Internet. The Pixel 3 ensures that there’s never a dull moment, all thanks to its powerful battery, impressive cameras and its expansive bezel-less display.",
  "specs": {
    "body": "145.6 x 68.2 x 7.9 mm (5.73 x 2.69 x 0.31 in)",
    "camera": {
      "main": "12.2 MP (wide) dual pixel",
      "selfie": "8 MP (ultrawide), no AF",
      "features": "Dual-LED flash, Auto-HDR, panorama"
    },
    "memory": "64/128 GB, 4 GB RAM",
    "battery": "Non-removable Li-Po 2915 mAh battery",
    "chipset": "Qualcomm SDM845 Snapdragon 845 (10 nm)",
    "display": "5.5 inches, 1080 x 2160 pixels, 18:9 ratio (~443 ppi density)",
    "features": "NFC, USB 3.1 Type-C 1.0, fingerprint (rear-mounted), fast battery charging, Gorilla Glass 5, aluminum frame, IP68 dust/water resistant, Always-on display, HDR",
    "platform": "OS Android 9.0 (Pie)"
  },
  "stock": 56
}, {
  "id": 2,
  "manufacturer": "Samsung",
  "model": "Samsung Note 9",
  "image": "https://fdn.gsmarena.com/imgroot/news/18/08/note9-best-display/-728w2/gsmarena_000.jpg",
  "price": 999,
  "description": "Galaxy Note 9 puts powerful technology in the hands of pioneers who demand more. Innovative features and design make it the only phone to keep up with the next generation of achievers.",
  "specs": {
    "body": "161.9 x 76.4 x 8.8 mm (6.37 x 3.01 x 0.35 in)",
    "camera": {
      "main": "12 MP, f/1.5-2.4, 26mm (wide), 1/2.55\", 1.4µm, dual pixel PDAF, OIS + 12 MP, f/2.4, 52mm (telephoto), 1/3.4\", 1.0µm, AF, OIS, 2x optical zoom",
      "selfie": "8 MP, f/1.7, 25mm (wide), 1/3.6\", 1.22µm, AF",
      "features": "LED flash, auto-HDR, panorama"
    },
    "memory": "512 GB/8 GB RAM or 128 GB/6 GB RAM",
    "battery": "Non-removable Li-Ion 4000 mAh battery",
    "chipset": "Exynos 9810 Octa (10 nm)",
    "display": "6.4 inches, 1440 x 2960 pixels, 18.5:9 ratio (~516 ppi density)",
    "features": "NFC, front/back glass (Gorilla Glass 5), aluminum frame, S Pen, Samsung Pay, IP68 dust/water proof, Always-on display, USB 3.1 Type-C 1.0, Iris scanner, fingerprint (rear-mounted), Samsung DeX (desktop experience support), Fast battery charging (Quick Charge 2.0), Bixby natural language commands and dictation",
    "platform": "Android 8.1 (Oreo), upgradable to Android 9.0 (Pie); One UI"
  },
  "stock": 74
}, {
  "id": 3,
  "manufacturer": "Apple",
  "model": "Apple iPhone XS",
  "image": "https://cdn.pocket-lint.com/r/s/1200x630/assets/images/145712-phones-review-review-apple-iphone-xs-review-the-safe-update-image1-pcnvrsowyf.jpg",
  "price": 999,
  "description": "Welcome to the big screens! Super Retina in two sizes — including the largest display ever on an iPhone. Even faster Face ID. The smartest, most powerful chip in a smartphone. And a breakthrough dual‑camera system. iPhone XS is everything you love about iPhone. Taken to the extreme.",
  "specs": {
    "body": "143.6 x 70.9 x 7.7 mm (5.65 x 2.79 x 0.30 in)",
    "camera": {
      "main": "12 MP (wide) + 12 MP (telephoto), 2x optical zoom",
      "selfie": "7 MP (standard)",
      "features": "Quad-LED dual-tone flash, HDR (photo/panorama)"
    },
    "memory": "64/256/512 GB, 4 GB RAM",
    "battery": "Non-removable Li-Ion 2658 mAh battery",
    "chipset": "Apple A12 Bionic (7 nm)",
    "display": "Super AMOLED, 5.8 inches, 1125 x 2436 pixels, 19.5:9 ratio (~458 ppi density)",
    "features": "NFC, Face ID, fast battery charging, stainless steel frame, IP68 dust/water resistant, Apple Pay, Dolby Vision, HDR10, Wide color gamut, 3D Touch, Siri",
    "platform": "iOS 12, upgradable to iOS 12.1.3"
  },
  "stock": 60
}, {
  "id": 4,
  "manufacturer": "Samsung",
  "model": "Samsung Galaxy S9+",
  "image": "https://cdn.pocket-lint.com/r/s/970x/assets/images/143732-phones-review-review-samsung-galaxy-s9-plus-review-image1-cr1olnqehf-jpg.webp",
  "price": 840,
  "description": "The perfect formula of a gorgeous 5.8-inch screen, sexy dual-curved design and terrific camera. Whiplash-fast speeds, wireless charging and water resistance complete the package.",
  "specs": {
    "body": "158.1 x 73.8 x 8.5 mm (6.22 x 2.91 x 0.33 in)",
    "camera": {
      "main": "12 MP (wide) Dual Pixel + 12 MP (telephoto), 2x optical zoom",
      "selfie": "8 MP, AF",
      "features": "LED flash, auto-HDR, panorama"
    },
    "memory": "64/128/256 GB, 6 GB RAM",
    "battery": "Non-removable Li-Ion 3500 mAh battery",
    "chipset": "Exynos 9810 Octa (10 nm)/Qualcomm SDM845 Snapdragon 845 (10 nm)",
    "display": "Super AMOLED, 6.2 inches, 1440 x 2960 pixels, 18.5:9 ratio (~529 ppi density)",
    "features": "Iris scanner, fingerprint (rear-mounted), heart rate, NFC, front/back glass (Gorilla Glass 5), aluminum frame, Samsung Pay, IP68 dust/water proof, HDR10, 3D Touch (home button only), Always-on display, Samsung DeX, Quick Charge 2.0, Qi/PMA wireless charging, Bixby, ANT+",
    "platform": "Android 8.0 (Oreo)"
  },
  "stock": 86
}, {
  "id": 5,
  "manufacturer": "Xiaomi",
  "model": "Xiaomi Pocophone F1",
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7uirzXpHCISpx1IRSf5tohGnRQ29pxThxFQ&usqp=CAU",
  "price": 300,
  "description": "Pocophone F1 runs on the Qualcomm® Snapdragon™ 845 mobile platform, meaning you get Snapdragon''s powerful AI engine on their most advanced flagship 10nm class chip. Enjoy unbeatable performance and lower power consumption.",
  "specs": {
    "body": "155.5 x 75.3 x 8.8 mm (6.12 x 2.96 x 0.35 in)",
    "camera": {
      "main": "12 MP dual pixel + 5 MP, depth sensor",
      "selfie": "20 MP",
      "features": "Dual-LED flash, HDR, panorama"
    },
    "memory": "256 GB, 8 GB RAM or 64/128 GB, 6 GB RAM",
    "battery": "Non-removable Li-Po 4000 mAh battery",
    "chipset": "Qualcomm SDM845 Snapdragon 845 (10 nm)",
    "display": "IPS LCD, 6.18 inches, 1080 x 2246 pixels, 18.7:9 ratio (~403 ppi density)",
    "features": "USB 2.0 Type-C 1.0, infrared face recognition, fingerprint (rear-mounted), fast battery charging (Quick Charge 3.0), Gorilla Glass",
    "platform": "Android 8.1 (Oreo), upgradable to Android 9.0 (Pie); MIUI 10.2 POCO"
  },
  "stock": 98
}, {
  "id": 6,
  "manufacturer": "Xiaomi",
  "model": "Xiaomi Mi 8",
  "image": "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2018/08/xiaomi-mi-8-analisis-opinion_0.jpg?itok=IGpJ4Xs1",
  "price": 400,
  "description": "Astonishing value, insane performance, awesome photography, a larger than ever 18.7:9 AMOLED display and a cool new 3D Face recognition feature are all reasons why it is an amazing phone.",
  "specs": {
    "body": "154.9 x 74.8 x 7.6 mm (6.10 x 2.94 x 0.30 in)",
    "camera": {
      "main": "12 MP dual pixel + 12 MP (telephoto), AF, 2x optical zoom",
      "selfie": "20 MP",
      "features": "Dual-LED flash, HDR, panorama"
    },
    "memory": "64/128/256 GB, 6 GB RAM or 128 GB, 8 GB RAM",
    "battery": "Non-removable Li-Po 3400 mAh battery",
    "chipset": "Qualcomm SDM845 Snapdragon 845 (10 nm)",
    "display": "Super AMOLED, 6.21 inches, 1080 x 2248 pixels (~402 ppi density)",
    "features": "NFC, USB Type-C 1.0, infrared face recognition, fingerprint (rear-mounted), fast battery charging (Quick Charge 4.0+), Gorilla Glass 5, aluminum frame",
    "platform": "Android 8.1 (Oreo), upgradable to Android 9.0 (Pie); MIUI 10.1"
  },
  "stock": 80
}, {
  "id": 7,
  "manufacturer": "Huawei",
  "model": "Huawei Mate 10 Pro",
  "image": "https://i.blogs.es/315468/mate-10-pro_picture_preview/450_1000.jpeg",
  "price": 800,
  "description": "Supported by the revolutionary GPU Turbo technology, the image processing speed is greatly accelerated to bring you a smooth and immersive visual experience.",
  "specs": {
    "body": "154.2 x 74.5 x 7.9 mm (6.07 x 2.93 x 0.31 in)",
    "camera": {
      "main": "12 MP (wide), laser AF + 20 MP (wide), 2x lossless zoom, PDAF & laser AF",
      "selfie": "8 MP (wide), AF",
      "features": "Leica optics, dual-LED dual-tone flash, panorama, HDR"
    },
    "memory": "128 GB, 6 GB RAM or 64 GB, 4 GB RAM",
    "battery": "Non-removable Li-Po 4000 mAh battery",
    "chipset": "HiSilicon Kirin 970 (10 nm)",
    "display": "AMOLED, 6.0 inches, 1080 x 2160 pixels, 18:9 ratio (~402 ppi density)",
    "features": "NFC, USB 3.1 Type-C 1.0, fingerprint (rear-mounted), fast battery charging, Gorilla Glass, front/back glass, aluminum frame, IP67 dust/water resistant",
    "platform": "Android 8.0 (Oreo), upgradable to Android 9.0 (Pie); EMUI 8"
  },
  "stock": 96
}, {
  "id": 8,
  "manufacturer": "Huawei",
  "model": "Huawei Honor 10 Lite",
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpl4GsvekCqrtLYnz-IASZYA3LoEZiFNUwpw&usqp=CAU",
  "price": 330,
  "description": "The Honor 10 Lite is a fashion icon you can hold in the palm of your hand. Inspired by the beautiful color of the sky, HONOR chose a youthful, energetic and natural design that fades gradually from light to dark – Sky Blue.",
  "specs": {
    "body": "154.8 x 73.6 x 8 mm (6.09 x 2.90 x 0.31 in)",
    "camera": {
      "main": "13 MP (wide) + 2 MP, depth sensor",
      "selfie": "24 MP (wide)",
      "features": "LED flash, HDR, panorama"
    },
    "memory": "64/128 GB, 6 GB RAM or 64 GB, 4 GB RAM",
    "battery": "Non-removable Li-Po 3400 mAh battery",
    "chipset": "Hisilicon Kirin 710 (12 nm)",
    "display": "IPS LCD, 6.21 inches, 1080 x 2340 pixels, 19.5:9 ratio (~415 ppi density)",
    "features": "NFC, microUSB 2.0, USB On-The-Go, fingerprint (rear-mounted), HDR",
    "platform": "Android 9.0 (Pie); EMUI 9"
  },
  "stock": 90
}, {
  "id": 9,
  "manufacturer": "Samsung",
  "model": "Samsung Galaxy A50",
  "image": "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/05/galaxy-a50_2.jpg?itok=U1IIkDdH",
  "price": 444,
  "description": "Samsung Galaxy A50 is a Smartphone Powered by Android 9.0 Pie and Triple rear cameras (25MP Primary + 8MP Ultra Wide + 5MP Depth Sensor).",
  "specs": {
    "body": "158.5 x 74.7 x 7.7 mm (6.24 x 2.94 x 0.30 in)",
    "camera": {
      "main": "25MP + 5MP + 8MP",
      "selfie": "25MP",
      "features": "LED flash, panorama, HDR"
    },
    "memory": "64/128 GB, 4/6 GB RAM",
    "chipset": "Exynos 9610 (10nm)",
    "display": "6.4 inches, 100.5 cm2 (~84.9% screen-to-body ratio)",
    "platform": "Android 9.0 (Pie)"
  },
  "stock": 58
}, {
  "id": 10,
  "manufacturer": "Xiaomi",
  "model": "Xiaomi Redmi Note 7",
  "image": "https://cdn.pocket-lint.com/r/s/970x/assets/images/148258-phones-review-redmi-note-7-image1-qyoibyf6uz-jpg.webp",
  "price": 222,
  "description": "Xiaomi Redmi Note 7 is a 4G Smartphone Powered by MIUI 10 based on Android 9.0 Pie with 12MP + 2MP dual rear camera with LED Flash. ( 48MP + 5MP dual Rear camera with LED flash model available in CHINA )",
  "specs": {
    "body": "159.2 x 75.2 x 8.1 mm (6.27 x 2.96 x 0.32 in)",
    "camera": {
      "main": "12MP + 2MP",
      "selfie": "13MP",
      "features": "Dual-LED flash, HDR, panorama"
    },
    "memory": "64 GB, 4/6 GB RAM or 32 GB, 3 GB RAM",
    "chipset": "Qualcomm SDM660 Snapdragon 660 (14 nm)",
    "display": "6.3 inches, 97.4 cm2 (~81.4% screen-to-body ratio)",
    "platform": "Android 9.0 (Pie); MIUI 10"
  },
  "stock": 96
}, {
  "id": 11,
  "manufacturer": "Xiaomi",
  "model": "Xiaomi Redmi Note 7 Pro",
  "image": "https://cdn.pocket-lint.com/r/s/970x/assets/images/148258-phones-review-redmi-note-7-image1-qyoibyf6uz-jpg.webp",
  "price": 311,
  "description": "Xiaomi Redmi Note 7 Pro is a 4G Smartphone Powered by MIUI 10 based on Android 9.0 Pie and comes with 48MP + 5MP dual rear camera with LED Flash.",
  "specs": {
    "body": "159.2 x 75.2 x 8.1 mm (6.27 x 2.96 x 0.32 in)",
    "camera": {
      "main": "48MP + 5MP",
      "selfie": "13MP",
      "features": "Dual-LED flash, HDR, panorama"
    },
    "memory": "128 GB, 6 GB RAM or 64 GB, 4 GB RAM",
    "chipset": "Qualcomm SDM675 Snapdragon 675 (11 nm)",
    "display": "6.3 inches, 97.4 cm2 (~81.4% screen-to-body ratio)",
    "platform": "Android 9.0 (Pie); MIUI 10"
  },
  "stock": 76
}, {
  "id": 12,
  "manufacturer": "Samsung",
  "model": "Samsung Galaxy S10+",
  "image": "https://cdn.pocket-lint.com/r/s/1200x/assets/images/147129-phones-review-review-samsung-galaxy-s10-plus-review-image1-zmvrefihpw.jpg",
  "price": 1997,
  "description": "Samsung Galaxy S10 5G is a smartphone powered by Android 9.0 Pie, Stereo speakers and Quad rear camera 12MP (Wide) + 12MP (Telephoto) + 16MP (Ultrawide) + TOF camera with LED flash. In-display fingerprint sensor.",
  "specs": {
    "body": "157.6 x 74.1 x 7.8 mm (6.20 x 2.92 x 0.31 in)",
    "camera": {
      "main": "12MP + 12MP + 16MP",
      "selfie": "10MP",
      "features": "LED flash, auto-HDR, panorama"
    },
    "memory": "1 TB, 12 GB RAM, 128/512 GB, 8 GB RAM",
    "chipset": "Exynos 9820 (8 nm) - EMEA Qualcomm SDM855 Snapdragon 855 (7 nm) - USA/LATAM, China",
    "display": "6.4 inches, 103.8 cm2 (~88.9% screen-to-body ratio)",
    "platform": "Android 9.0 (Pie); One UI"
  },
  "stock": 67
}, {
  "id": 13,
  "manufacturer": "Samsung",
  "model": "Samsung Galaxy M30",
  "image": "https://cdn.mos.cms.futurecdn.net/T4KTXTqBLzLmVUTkC5w4RE.jpg",
  "price": 333,
  "description": "Samsung Galaxy M30 is a Smartphone Powered by Android 8.1 Oreo with Samsung Experience 9.5 and triple rear cameras (13MP Primary + 5MP + 5MP Ultra Ultra Wide).",
  "specs": {
    "body": "159 x 75.1 x 8.4 mm (6.26 x 2.96 x 0.33 in)",
    "camera": {
      "main": "13MP + 5MP + 5MP",
      "selfie": "16MP",
      "features": "LED flash, panorama, HDR"
    },
    "memory": "128 GB, 6 GB RAM or 64 GB, 4 GB RAM",
    "chipset": "Exynos 7904 (14 nm)",
    "display": "6.4 inches, 105.2 cm2 (~88.1% screen-to-body ratio)",
    "platform": "Android 8.1 (Oreo)"
  },
  "stock": 4
}, {
  "id": 14,
  "manufacturer": "Samsung",
  "model": "Samsung Galaxy A30",
  "image": "https://fdn.gsmarena.com/imgroot/reviews/19/samsung-galaxy-a30/lifestyle/-727w2/gsmarena_014.jpg",
  "price": 377,
  "description": "Samsung Galaxy A30 is a Smartphone Powered by Android 9.0 Pie and Dual rear cameras (16MP Primary + 5MP Ultra Wide).",
  "specs": {
    "body": "158.5 x 74.7 x 7.7 mm (6.24 x 2.94 x 0.30 in)",
    "camera": {
      "main": "16MP + 5MP",
      "selfie": "16MP",
      "features": "LED flash, panorama, HDR"
    },
    "memory": "64 GB, 4 GB RAM or 32 GB, 3 GB RAM",
    "chipset": "Exynos 7904 (14 nm)",
    "display": "6.4 inches, 100.5 cm2 (~84.9% screen-to-body ratio)",
    "platform": "Android 9.0 (Pie)"
  },
  "stock": 61
}, {
  "id": 15,
  "manufacturer": "Samsung",
  "model": "Samsung Galaxy M20",
  "image": "https://s1.eestatic.com/2019/03/29/elandroidelibre/el_androide_libre_386974353_179671170_1024x576.jpg",
  "price": 244,
  "description": "Samsung Galaxy M20 is a Smartphone Powered by Android 8.1 Oreo with Samsung Experience 9.5 and Dual rear cameras (13MP Primary + 5MP Ultra Ultra Wide).",
  "specs": {
    "body": "156.4 x 74.5 x 8.8 mm (6.16 x 2.93 x 0.35 in)",
    "camera": {
      "main": "13MP + 5MP",
      "selfie": "8MP",
      "features": "LED flash, panorama, HDR"
    },
    "memory": "64 GB, 4 GB RAM or 32 GB, 3 GB RAM",
    "chipset": "Exynos 7904 (14 nm)",
    "display": "6.3 inches, 97.4 cm2 (~83.6% screen-to-body ratio)",
    "platform": "Android 8.1 (Oreo); Experience 9.5"
  },
  "stock": 48
}, {
  "id": 16,
  "manufacturer": "Xiaomi",
  "model": "Xiaomi Mi 9",
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ2MBPDXQo9tD9-U6NPI0Ri9jukWdmqPmmrA&usqp=CAU",
  "price": 711,
  "description": "Xiaomi Mi 9 is a Smartphone Powered by MIUI 10 based on Android 9 Pie, 48MP(RGB) + 12MP(Telephoto) + 16MP(Ultra-wide) triple rear camera with 4-axis OIS, Optical zoom, 4K video recording, dual tone LED flash, 20MP Front Camera and Pressure sensitive fingerprint sensor, 20W wireless fast charging",
  "specs": {
    "body": "157.5 x 74.7 x 7.6 mm (6.20 x 2.94 x 0.30 in)",
    "camera": {
      "main": "48MP + 12MP + 16MP",
      "selfie": "20MP",
      "features": "Dual-LED flash, HDR, panorama"
    },
    "memory": "64/128 GB, 6/8 GB RAM",
    "chipset": "Qualcomm SDM855 Snapdragon 855 (7 nm)",
    "display": "6.39 inches, 100.2 cm2 (~85.2% screen-to-body ratio)",
    "platform": "Android 9.0 (Pie); MIUI 10"
  },
  "stock": 61
}, {
  "id": 17,
  "manufacturer": "Samsung",
  "model": "Samsung Galaxy S10",
  "image": "https://cdn.pocket-lint.com/r/s/1200x/assets/images/147148-phones-review-review-samsung-galaxy-s10-image1-kakveu1jtu.jpg",
  "price": 1997,
  "description": "Samsung Galaxy S10 5G is a smartphone powered by Android 9.0 Pie, Stereo speakers and Quad rear camera 12MP (Wide) + 12MP (Telephoto) + 16MP (Ultrawide) + TOF camera with LED flash. In-display fingerprint sensor.",
  "specs": {
    "body": "149.9 x 70.4 x 7.8 mm (5.90 x 2.77 x 0.31 in)",
    "camera": {
      "main": "12MP + 12MP + 16MP",
      "selfie": "10MP",
      "features": "LED flash, auto-HDR, panorama"
    },
    "memory": "128/512 GB, 8 GB RAM",
    "chipset": "Exynos 9820 (8 nm) - EMEA Qualcomm SDM855 Snapdragon 855 (7 nm) - USA/LATAM, China",
    "display": "6.1 inches, 93.2 cm2 (~88.3% screen-to-body ratio)",
    "platform": "Android 9.0 (Pie); One UI"
  },
  "stock": 30
}, {
  "id": 18,
  "manufacturer": "Xiaomi",
  "model": "Xiaomi Redmi 7",
  "image": "https://i.blogs.es/e0bf2e/xiaomi-redmi-7-08/450_1000.jpg",
  "price": 222,
  "description": "Xiaomi Redmi Note 7 is a 4G Smartphone Powered by MIUI 10 based on Android 9.0 Pie with 12MP + 2MP dual rear camera with LED Flash. ( 48MP + 5MP dual Rear camera with LED flash model available in CHINA )",
  "specs": {
    "body": "158.7 x 75.6 x 8.5 mm (6.25 x 2.98 x 0.33 in)",
    "camera": {
      "main": "12MP + 2MP",
      "selfie": "13MP",
      "features": "LED flash, HDR, panorama"
    },
    "memory": "64 GB, 4 GB RAM or 32 GB, 3 GB RAM or 16 GB, 2 GB RAM",
    "chipset": "Qualcomm SDM632 Snapdragon 632 (14 nm)",
    "display": "6.26 inches, 97.8 cm2 (~81.5% screen-to-body ratio)",
    "platform": "Android 9.0 (Pie); MIUI 9"
  },
  "stock": 55
}, {
  "id": 19,
  "manufacturer": "Samsung",
  "model": "Samsung Galaxy S8",
  "image": "https://cdn.pocket-lint.com/r/s/1200x/assets/images/140644-phones-review-samsung-galaxy-s8-review-image1-wyesoelc2u.jpg",
  "price": 1286,
  "description": "Samsung Galaxy S8 is smartphone powered by Android 7.0 Nougat and Dual Pixel 12MP rear camera with F 1.7, Smart OIS",
  "specs": {
    "body": "148.9 x 68.1 x 8 mm (5.86 x 2.68 x 0.31 in)",
    "camera": {
      "main": "Dual Pixel 12MP",
      "selfie": "8MP",
      "features": "LED flash, auto-HDR, panorama"
    },
    "memory": "64 GB, 4 GB RAM",
    "chipset": "Exynos 8895 (10 nm) - EMEA Qualcomm MSM8998 Snapdragon 835 (10 nm) - USA & China",
    "display": "5.8 inches, 84.8 cm2 (~83.6% screen-to-body ratio)",
    "platform": "Android 7.0 (Nougat), upgradable to Android 9.0 (Pie); One UI"
  },
  "stock": 72
}, {
  "id": 20,
  "manufacturer": "Samsung",
  "model": "Samsung Galaxy A7 (2018)",
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxuLEfUjjddf-0qAhRGoJdpvetA_LCNQ8m6w&usqp=CAU",
  "price": 533,
  "description": "Samsung Galaxy A7 2018 is a Smartphone Powered by Android 8.0 Oreo and Triple rear cameras (24MP Primary + 8MP 120° Ultra Wide + 5MP depth), Side-mounted Fingerprint sensor.",
  "specs": {
    "body": "159.8 x 76.8 x 7.5 mm (6.29 x 3.02 x 0.30 in)",
    "camera": {
      "main": "24MP + 8MP + 5MP",
      "selfie": "24MP",
      "features": "LED flash, panorama, HDR"
    },
    "memory": "128 GB, 4/6 GB RAM or 64 GB, 4 GB RAM",
    "chipset": "Exynos 7885 (14 nm)",
    "display": "6.0 inches, 91.4 cm2 (~74.4% screen-to-body ratio)",
    "platform": "Android 8.0 (Oreo), upgradable to Android 9.0 (Pie)"
  },
  "stock": 27
}, {
  "id": 21,
  "manufacturer": "Oppo",
  "model": "Oppo F11 Pro",
  "image": "https://cdn.pocket-lint.com/r/s/1200x/assets/images/147346-phones-news-oppo-f11-pro-image1-nizto4j2us.jpg",
  "price": 555,
  "description": "OPPO F11 Pro is a Smartphone Powered by Color OS 6.0 Based on Android 9 Pie, 48MP rear camera with f/1.79 aperture, 0.8um pixel size, 6P lens, 5MP secondary camera with 1.12um pixel size with LED flash and 16MP front camera.",
  "specs": {
    "body": "161.3 x 76.1 x 8.8 mm (6.35 x 3.00 x 0.35 in)",
    "camera": {
      "main": "48MP + 5MP",
      "selfie": "16MP",
      "features": "LED flash, HDR, panorama"
    },
    "memory": "128 GB, 6 GB RAM or 64 GB, 4 GB RAM",
    "chipset": "Mediatek Helio P70 (12nm)",
    "display": "6.53 inches, 103.6 cm2 (~84.4% screen-to-body ratio)",
    "platform": "Android 9.0 (Pie); ColorOS 6"
  },
  "stock": 30
}, {
  "id": 22,
  "manufacturer": "Huawei",
  "model": "Huawei Y9 (2019)",
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQbPJIaIW0-ACk3N76EAoDys9NjK3sJIdSlw&usqp=CAU",
  "price": 355,
  "description": "The Huawei Y9 2019 is a Android Smartphone powered by EMUI 8.2 based on Android 8.1 Oreo and 16MP + 2MP dual rear Camera with LED flash.",
  "specs": {
    "body": "162.4 x 77.1 x 8.1 mm (6.39 x 3.04 x 0.32 in)",
    "camera": {
      "main": "16MP + 2MP",
      "selfie": "13MP + 2MP",
      "features": "LED flash, HDR, panorama"
    },
    "memory": "128 GB, 4/6 GB RAM (China only) or 64 GB, 4/3 GB RAM",
    "chipset": "Hisilicon Kirin 710 (12 nm)",
    "display": "6.5 inches, 103.7 cm2 (~82.8% screen-to-body ratio)",
    "platform": "Android 8.1 (Oreo); EMUI 8.2"
  },
  "stock": 68
}, {
  "id": 23,
  "manufacturer": "vivo",
  "model": "vivo V15 Pro",
  "image": "https://cdn57.androidauthority.net/wp-content/uploads/2019/02/Vivo-V15-Pro-2.jpg",
  "price": 644,
  "description": "vivo V15 Pro is a smartphone Powered by Funtouch OS 9 Based on Android 9.0 Pie, 48 million quad pixel 1/2.25″ sensor (12MP Effective Pixel) with f/1.8 aperture, 5MP depth sensor, 8MP AI 120-degree Super wide angle camera. In-display fingerprint sensor.",
  "specs": {
    "body": "157.3 x 74.7 x 8.2 mm (6.19 x 2.94 x 0.32 in)",
    "camera": {
      "main": "48MP + 5MP + 8MP",
      "selfie": "32MP",
      "features": "LED flash, HDR, panorama"
    },
    "memory": "128 GB, 6/8 GB RAM",
    "chipset": "Qualcomm SDM675 Snapdragon 675 (11 nm)",
    "display": "6.39 inches, 98.9 cm2 (~84.2% screen-to-body ratio)",
    "platform": "Android 9.0 (Pie); Funtouch 9"
  },
  "stock": 7
}, {
  "id": 24,
  "manufacturer": "Samsung",
  "model": "Samsung Galaxy S10e",
  "image": "https://root-nation.com/wp-content/uploads/2019/03/samsung-galaxy-s10e-2.jpg",
  "price": 1242,
  "description": "Samsung Galaxy S10e is a smartphone powered by Android 9.0 Pie, Stereo speakers and 12MP (Wide) + 16MP (Ultrawide) dual rear camera with LED flash. Stereo speakers and Side mounted fingerprint.",
  "specs": {
    "body": "142.2 x 69.9 x 7.9 mm (5.60 x 2.75 x 0.31 in)",
    "camera": {
      "main": "12MP + 16MP",
      "selfie": "10MP",
      "features": "LED flash, auto-HDR, panorama"
    },
    "memory": "256 GB, 8 GB RAM or 128 GB, 6 GB RAM",
    "chipset": "Exynos 9820 (8 nm) - EMEA Qualcomm SDM855 Snapdragon 855 (7 nm) - USA/LATAM, China",
    "display": "5.8 inches, 82.8 cm2 (~83.3% screen-to-body ratio)",
    "platform": "Android 9.0 (Pie); One UI"
  },
  "stock": 3
}, {
  "id": 25,
  "manufacturer": "Xiaomi",
  "model": "Xiaomi Redmi Note 6 Pro",
  "image": "https://s1.eestatic.com/2021/01/07/elandroidelibre/549457314_180260778_1100x619.jpg",
  "price": 311,
  "description": "Xiaomi Redmi Note 6 Pro is a mid-range smartphone in the Redmi Note series Powered by MIUI 10 based on Android 8.1 Oreo with 12MP + 5MP dual Rear camera with LED Flash.",
  "specs": {
    "body": "157.9 x 76.4 x 8.3 mm (6.22 x 3.01 x 0.33 in)",
    "camera": {
      "main": "12MP + 5MP",
      "selfie": "20MP + 2MP",
      "features": "Dual-LED flash, HDR, panorama"
    },
    "memory": "64 GB, 4/6 GB RAM or 32 GB, 3 GB RAM",
    "chipset": "Qualcomm SDM636 Snapdragon 636 (14 nm)",
    "display": "6.26 inches, 97.8 cm2 (~81.1% screen-to-body ratio)",
    "platform": "Android 8.1 (Oreo), planned upgrade to Android 9.0 (Pie); MIUI 9.0"
  },
  "stock": 44
}];

Phone.create(phone, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Created ${phone.length} phones`);
  mongoose.connection.close();
});
