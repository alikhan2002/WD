export interface Product {
  id: number;
  catID: number;
  name: string;
  price: number;
  description: string;
  img1:string;
  img2:string;
  img3:string;
  rating:number;
  link:string;
}

export const products = [
  {
    id: 1,
    catID: 1,
    name: 'Lenovo Flex 5 Laptop, 14.0" FHD Touch Display, AMD Ryzen 5 5500U, 16GB RAM, 256GB Storage, AMD Radeon Graphics, Windows 11 Home',
    price: 719.99,
    description: `Powered by an AMD Ryzen 5 5500U mobile processor with Radeon graphics, this portable notebook computer has 16GB DDR4 RAM and 256GB NVMe SSD Storage
    Reduce the clutter - The Flex 5 14 touchscreen laptop has a narrow bezel on 4 sides for more viewing area and less clutter on the IPS FHD (1920 x 1080) display
    Designed to keep your ideas flowing, anywhere, anytime with the ability to multi-mode, this Windows laptop has a 360⁰ hinge so you can use it in laptop mode for everyday computing, tent mode for sharing, stand mode for binge-watching your favorite streaming shows, or tablet mode for easy interaction
    A physical shutter on the webcam improves your privacy, allowing you to keep out unwanted attention`,
    img1: 'https://m.media-amazon.com/images/I/71zZiQGzc5L._AC_SL1500_.jpg',
    img2: 'https://m.media-amazon.com/images/I/818B97p+vcL._AC_SL1500_.jpg',
    img3: 'https://m.media-amazon.com/images/I/71QjZ06DaFL._AC_SL1500_.jpg',
    rating:4.4,
    link:"https://www.amazon.com/Lenovo-Processor-Graphics-82HU00JWUS-Graphite/dp/B09BG96KFJ/ref=sr_1_1?qid=1647096079&refinements=p_89%3ALenovo%2Cp_n_feature_thirty-three_browse-bin%3A23720418011&rnid=23720416011&s=computers-intl-ship&sr=1-1",
  },
  {
    id: 2,
    catID: 1,
    name: `2022 Lenovo IdeaPad 3i 15 Touchscreen Laptop, Intel i3-1115G4 16GB RAM 512GB SSD, 15.6 FHD Display, Fingerprint Reader, Webcam for Remote School&Work, Premium Lightweight, Windows 11 S, LIONEYE Bundle`,
    price: 639.99,
    description: `【Powerful CPU&GPU】 Intel Core i3-1115G4 (up to 4.1 GHz with Intel Turbo Boost Technology, 6 MB L3 cache, 2 cores, 4 threads), Intel UHD Graphics provide everyday image quality for Internet use, basic photo editing and casual gaming.
    【Memory&Hard Drive】Ram is expandable up to 36GB DDR4 Memory for fast processing and advanced multitasking , Hard Drive is expandable up to 2TB PCIe SSD. SSD(Solid State Drive) has faster data access speed, better performance and greater reliability, HDD provide larger storage so you could store more data and files on it. Please refer to item tile for your configuration`,
    img1: 'https://m.media-amazon.com/images/I/61iYCuksroL._AC_SL1200_.jpg',
    img2: 'https://m.media-amazon.com/images/I/61WH-Cr1BUL._AC_SL1500_.jpg',
    img3: 'https://m.media-amazon.com/images/I/51cGl1o9v2L._AC_SL1500_.jpg',
    rating:4.5,
    link:"https://www.amazon.com/Lenovo-IdeaPad-Touchscreen-Fingerprint-Lightweight/dp/B09Q4PWRBC/ref=sr_1_2?qid=1647096079&refinements=p_89%3ALenovo%2Cp_n_feature_thirty-three_browse-bin%3A23720418011&rnid=23720416011&s=computers-intl-ship&sr=1-2",


  },
  {
    id: 3,
    catID: 1,
    name: 'Lenovo IdeaPad 5 Laptop, 14.0" FHD IPS Screen, Intel Corei5-1135G7 (>i7-1065G7), Intel Iris Xe Graphics, 16GB RAM, 1TB PCIe SSD, Webcam, Backlit KB, Wi-Fi 6, HDMI, USB-C, Win 10 Home',
    price: 859.99,
    description: `i5-1135G7 (4C / 8T, 2.4 / 4.2GHz, 8MB), Integrated Intel Iris Xe Graphics, Windows 10 Home 64 Operating System. Provide a smooth experience for your study and entertainment
    16GB Soldered DDR4-3200 RAM, 1TB PCIe NVMe SSD,
    14.0" FHD (1920x1080) IPS 300nits Anti-glare Display, 56.5Wh Battery max to 14 hr, Only 0.67” thin and 3.04 lbs weight
    720p Webcam, Backlit Keyboard, Fingerprint Reader, Wi-Fi 6, Bluetooth 5.1`,
    img1: 'https://m.media-amazon.com/images/I/611JIza1MNL._AC_SL1000_.jpg',
    img2: 'https://m.media-amazon.com/images/I/810XbxNsLyL._AC_SL1500_.jpg',
    img3: 'https://m.media-amazon.com/images/I/61YIzck7MCL._AC_SL1000_.jpg',
    rating:4.6,
    link:"https://www.amazon.com/Lenovo-IdeaPad-300nits-i7-10710U-Graphics/dp/B0952FBC2Z/ref=sr_1_8?qid=1647096079&refinements=p_89%3ALenovo%2Cp_n_feature_thirty-three_browse-bin%3A23720418011&rnid=23720416011&s=computers-intl-ship&sr=1-8",


  },
  {
    id: 4,
    catID: 1,
    name: 'Lenovo IdeaPad 5 15.6" FHD IPS Anti-Glare Laptop | AMD Ryzen 7 5700U | 16GB RAM | 512GB SSD | Backlit Keyboard | Fingerprint Reader | Windows 11 | TWE Cloth | Grey',
    price: 898.89,
    description: `【Detailed Configuration】Substantial high-bandwidth 16GB RAM to smoothly run your games and photo- and video-editing applications, as well as multiple programs and browser tabs all at once. A flash-based 512GB SSD has no moving parts, resulting in faster start-up times and data access, no noise, and reduced heat production and power draw on the battery.
    【AMD Ryzen 7 5700U】8 cores, 16threads, 1.8GHz. The perfect combination of performance, responsiveness, and battery life. Enjoy the boundary-breaking performance with AMD Ryzen 7 5700U processor. Stay productive with a fast-charging, long-lasting battery.
    【15.6" LED-Backlit IPS FHD (1920 x 1080) Non-touch Display】The 1920x1080 resolution boasts impressive color and clarity. Supports 1080p content.`,
    img1: 'https://m.media-amazon.com/images/I/71MEE44OVRL._AC_SL1500_.jpg',
    img2: 'https://m.media-amazon.com/images/I/71oFS-ZqmzL._AC_SL1500_.jpg',
    img3: 'https://m.media-amazon.com/images/I/61Sl4spcLJL._AC_SL1000_.jpg',
    rating:4.3,
    link:"https://www.amazon.com/Lenovo-IdeaPad-Anti-Glare-Keyboard-Fingerprint/dp/B09HWYY8BS/ref=sr_1_10?qid=1647096079&refinements=p_89%3ALenovo%2Cp_n_feature_thirty-three_browse-bin%3A23720418011&rnid=23720416011&s=computers-intl-ship&sr=1-10",


  },
  {
    id: 5,
    catID: 1,
    name: 'Lenovo IdeaPad 3i 15.6" FHD Gaming Laptop 2022, 11th Gen Intel i5-11300H(up to 4.4GHz), 16GB RAM 1TB NVMe SSD, GeForce GTX 1650, USB-A&C RJ45, Windows 11',
    price: 921.99,
    description: `【11th Gen Intel i5-11300H】Intel Core i5-11300H Processor, 4-core, 3.10 GHz based, up to 4.40, 8M Cache
    【15.6” FHD IPS Display】15.6" Full HD (1920x1080) IPS Anti-glare display. Nahimic Speaker System; 802.11ax Wifi, Bluetooth 5.0, Ethernet LAN (RJ-45),. 720p HD Webcam.
    【NVIDIA GeForce GTX 1650】Hit the sweet spot of ultimate GeForce gaming and impossibly sleek design with NVIDIA GTX graphics, designed to deliver the gaming performance you need in a thin, light form factor.
    【Windows 11 home】With a fresh new feel and tools that make it easier to be efficient, it has what you need for whatever’s next.`,
    img1: 'https://m.media-amazon.com/images/I/41K5Q7H9GrL._AC_.jpg',
    img2: 'https://m.media-amazon.com/images/I/51bMJEmV-LL._AC_SL1253_.jpg',
    img3: 'https://m.media-amazon.com/images/I/51KiyzuNgyL._AC_SL1253_.jpg',
    rating:5,
    link:"https://www.amazon.com/Lenovo-IdeaPad-Anti-Glare-Keyboard-Fingerprint/dp/B09HWYY8BS/ref=sr_1_10?qid=1647096079&refinements=p_89%3ALenovo%2Cp_n_feature_thirty-three_browse-bin%3A23720418011&rnid=23720416011&s=computers-intl-ship&sr=1-10",
  },
  {
    id: 6,
    catID: 2,
    name: ' Wall Mount for PS5 Playstation 5 Disc Edition and Digital Edition (Mounts The Console on Wall Near or Behind TV with Invisible Design), Including 2 Accessory Holders for Controller & Headset (Black)',
    price: 29.9,
    description: `🎮DIFFERENT LOCATION🎮Locate PS5 near TV vertically (left side, right side) or behind TV and slide the console to wall mount with well fit
    🎮MAXIMUM VENTILATION🎮Provide enough room for the best ventilation without any airflow blocking to keep PS5 from overheating`,
    img1: 'https://m.media-amazon.com/images/I/61aE9yFnAEL._AC_SL1500_.jpg',
    img2: 'https://m.media-amazon.com/images/I/61Q6cP2uOwL._AC_SL1500_.jpg',
    img3: 'https://m.media-amazon.com/images/I/71M3I+o7-nS._AC_SL1500_.jpg',
    rating:5,
    link:"https://www.amazon.com/OIVO-Controller-Compatible-Playstation-Indicators/dp/B08LZGPPBH/ref=sr_1_7?crid=1S1KG127SHCNZ&keywords=ps5&qid=1647176278&sprefix=ps%2Caps%2C316&sr=8-7",
  },
  {
    id: 7,
    catID: 2,
    name: 'Razer Kraken X Ultralight Gaming Headset: 7.1 Surround Sound - Lightweight Aluminum Frame - Bendable Cardioid Microphone - for PC, PS4, PS5, Switch, Xbox One, Xbox Series X|S, Mobile - Black/Blue',
    price: 29.99,
    description: `Immersive, 7.1 Surround Sound for Positional Audio: Outfitted with custom-tuned 40 mm drivers, capable of software-enabled surround sound when used for PC gaming only (download code slip inside the box)
    Designed for All-Day Comfort: The lightest Kraken headset ever at 250 grams, around 40% lighter than the competition
    Bendable Noise Cancelling Microphone: A cardioid mic reduces background and ambient noises for crystal-clear communication `,
    img1: 'https://m.media-amazon.com/images/I/61PC7TDjcjL._AC_SL1500_.jpg',
    img2: 'https://m.media-amazon.com/images/I/613FChD30rL._AC_SL1500_.jpg',
    img3: 'https://m.media-amazon.com/images/I/71X2slxtlaL._AC_SL1500_.jpg',
    rating:4.4,
    link:"https://www.amazon.com/Razer-Kraken-Ultralight-Gaming-Headset/dp/B07RMSM477/ref=sr_1_13?crid=1S1KG127SHCNZ&keywords=ps5&qid=1647176278&sprefix=ps%2Caps%2C316&sr=8-13&th=1",
  },
  {
    id: 8,
    catID: 2,
    name: 'Assassin’s Creed Valhalla PlayStation 5 Standard Edition',
    price: 921.99,
    description: `Lead epic Viking raids against Saxon troops and fortresses
    Relive the visceral fighting style of the Vikings as you dual-wield powerful weapons
    Challenge yourself with the most varied collection of enemies ever in Assassin's Creed
    Shape the growth of your character and your clan's settlement with every choice you make
    Explore a Dark Age open world, from the harsh shores of Norway to the beautiful kingdoms of England
    `,
    img1: 'https://m.media-amazon.com/images/I/817zvXdCgSL._SL1500_.jpg',
    img2: 'https://m.media-amazon.com/images/I/51lSuYWJLVL.jpg',
    img3: 'https://m.media-amazon.com/images/I/71kjNTuOldL._SL1000_.jpg',
    rating:4.6,
    link:"https://www.amazon.com/Assassins-Creed-Valhalla-PlayStation-5-Standard/dp/B08FS5HKTR/ref=sr_1_12?crid=1S1KG127SHCNZ&keywords=ps5&qid=1647176278&sprefix=ps%2Caps%2C316&sr=8-12",
  },
  {
    id: 9,
    catID: 2,
    name: 'Lenovo IdeaPad 3i 15.6" FHD Gaming Laptop 2022, 11th Gen Intel i5-11300H(up to 4.4GHz), 16GB RAM 1TB NVMe SSD, GeForce GTX 1650, USB-A&C RJ45, Windows 11',
    price: 921.99,
    description: `A WORLD OF BASKETBALL: NBA 2K22 puts the entire basketball universe in your hands. PLAY NOW in real NBA and WNBA environments against authentic teams and players.
    Build your own dream team in MyTEAM with today’s stars and yesterday’s legends.
    Live out your own pro journey in MyCAREER and experience your personal rise to the NBA.
    Flex your management skills as a powerful Executive in MyGM and MyLEAGUE.`,  
    img1: 'https://m.media-amazon.com/images/I/71pVkhf7GrL._SL1200_.jpg',
    img2: 'https://m.media-amazon.com/images/I/71pVkhf7GrL._SL1200_.jpg',
    img3: 'https://m.media-amazon.com/images/I/61Cwaz8H9mL._SL1200_.jpg',
    rating:4.7,
    link:"https://www.amazon.com/NBA-2K22-PlayStation-5/dp/B098Y8WC15/ref=sr_1_16?crid=1S1KG127SHCNZ&keywords=ps5&qid=1647176278&sprefix=ps%2Caps%2C316&sr=8-16",
  },
  {
    id: 10,
    catID: 2,
    name: '3 Pack Skin for PS5 DualSense Controller - AUSWAUR Controllers Skin Grip Compatible with Sony Playstation 5 - Anti-Slip Silicone Case Cover with 10pcs FPS Pro Thumb Grips-Camouflage Red &Blue&Olive',
    price: 921.99,
    description: `Specially designed: Silicone Cover Case Perfect fits for 2020 New Playstation 5 DualSense Controller, Not for other models.
    Antiskid designed: Specially designed studded and textured surface improves grip and control effort and prevent from sliding.
    Perfect button design：Precise cut outs provide easy access to all buttons, controls, and ports so wont effect your video game playing experience`,
    img1: 'https://m.media-amazon.com/images/I/81Dj-F4nHkL._AC_SL1500_.jpg',
    img2: 'https://m.media-amazon.com/images/I/715ImxKmkkL._AC_SL1500_.jpg',
    img3: 'https://m.media-amazon.com/images/I/715ImxKmkkL._AC_SL1500_.jpg',
    rating:5,
    link:"https://www.amazon.com/Pack-Skin-DualSense-Controller-Grips-Camouflage/dp/B08Z3HL94M/ref=sr_1_21_sspa?crid=1S1KG127SHCNZ&keywords=ps5&qid=1647176278&sprefix=ps%2Caps%2C316&sr=8-21-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyNERTWTlVUFNCT043JmVuY3J5cHRlZElkPUEwNDIwMzIxMVZRRDlWOVRRMVNUVSZlbmNyeXB0ZWRBZElkPUEwMDgxNDczMlBITDFSOEgyNzRHMyZ3aWRnZXROYW1lPXNwX2J0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU&th=1",
  },
  {
    id: 11,
    catID: 3,
    name: 'Apple iPhone 12 Pro, 256GB, Pacific Blue - Unlocked (Renewed Premium)',
    price: 921.99,
    description: `A like-new experience. Backed by a one-year satisfaction guarantee.
    This Renewed Premium product is shipped and sold by Amazon and has been certified by Amazon to work and look like new. With at least 90% battery life, it comes in deluxe, Amazon-branded packaging and is backed by a one-year warranty and technical support`,
    img1: 'https://m.media-amazon.com/images/I/712yl2wTDbL._AC_SL1500_.jpg',
    img2: 'https://m.media-amazon.com/images/I/712yl2wTDbL._AC_SL1500_.jpg',
    img3: 'https://m.media-amazon.com/images/I/712yl2wTDbL._AC_SL1500_.jpg',
    rating:5,
    link:"https://www.amazon.com/Apple-iPhone-12-Pro-Pacific/dp/B09JFN8K6T/ref=sr_1_1?keywords=iphone+13&qid=1647176874&s=wireless&sr=1-1",
  },
  {
    id: 12,
    catID: 3,
    name: 'Apple iPhone 12 Pro Max, 128GB, Pacific Blue - Unlocked (Renewed Premium)',
    price: 921.99,
    description: `A like-new experience. Backed by a one-year satisfaction guarantee.
    This Renewed Premium product is shipped and sold by Amazon and has been certified by Amazon to work and look like new. With at least 90% battery life, it comes in deluxe, Amazon-branded packaging and is backed by a one-year warranty and technical support`,
    img1: 'https://m.media-amazon.com/images/I/712yl2wTDbL._AC_SL1500_.jpg',
    img2: 'https://m.media-amazon.com/images/I/712yl2wTDbL._AC_SL1500_.jpg',
    img3: 'https://m.media-amazon.com/images/I/712yl2wTDbL._AC_SL1500_.jpg',
    rating:4.6,
    link:"https://www.amazon.com/Apple-iPhone-12-Pro-Max/dp/B09JF9WMR9/ref=sr_1_2?keywords=iphone+13&qid=1647176874&s=wireless&sr=1-2",
  },
  {
    id: 13,
    catID: 3,
    name: 'Roll over image to zoom in Apple iPhone 11 Pro, 256GB, Midnight Green - Fully Unlocked (Renewed Premium)',
    price: 921.99,
    description: `This phone is unlocked and compatible with any carrier of choice on GSM and CDMA networks (e.g. AT&T, T-Mobile, Sprint, Verizon, US Cellular, Cricket, Metro, Tracfone, Mint Mobile, etc.).
    Tested for battery health and guaranteed to come with a battery that exceeds 90% of original capacity.
    Backed by a one-year satisfaction guarantee, with free access to Amazon’s Technical Support team throughout the full year and ability to replace or return the product if it does not work as expected.
    Includes a brand new, generic charging cable that is certified Mfi (Made for iPhone) and a brand new, generic wall plug that is UL certified for performance and safety. Also includes a SIM tray removal tool but does not come with headphones or a SIM card.
    Inspected and guaranteed to have minimal cosmetic damage, which is not noticeable when the device is held at arm’s length. Successfully passed a full diagnostic test which ensures like-new functionality and removal of any prior-user personal information.`,
    img1: 'https://m.media-amazon.com/images/I/81AaNJqE+wS._AC_SL1500_.jpg',
    img2: 'https://m.media-amazon.com/images/I/81AaNJqE+wS._AC_SL1500_.jpg',
    img3: 'https://m.media-amazon.com/images/I/51+Uw6N7BnL._AC_SL1112_.jpg',
    rating:4.4,
    link:"https://www.amazon.com/Apple-iPhone-256GB-Midnight-Green/dp/B08BHXC5ZS/ref=sr_1_4?keywords=iphone%2B13&qid=1647176874&s=wireless&sr=1-4&th=1",
  },
  {
    id: 14,
    catID: 3,
    name: 'Apple iPhone SE, 64GB, Black - Fully Unlocked (Renewed Premium)',
    price: 921.99,
    description: `A like-new experience. Backed by a one-year satisfaction guarantee.
    This Renewed Premium product is shipped and sold by Amazon and has been certified by Amazon to work and look like new. With at least 90% battery life, it comes in deluxe, Amazon-branded packaging and is backed by a one-year warranty and technical support.`,
    img1: 'https://m.media-amazon.com/images/I/81K+adaNRiL._AC_SL1500_.jpg',
    img2: 'https://m.media-amazon.com/images/I/715KiK97X7L._AC_SL1500_.jpg',
    img3: 'https://m.media-amazon.com/images/I/81W-CgG2ORL._AC_SL1500_.jpg',
    rating:5,
    link:"https://www.amazon.com/Apple-iPhone-Generation-64GB-Black/dp/B08R98BFZS/ref=sr_1_11?keywords=iphone%2B13&qid=1647176874&s=wireless&sr=1-11&th=1",
  },
  {
    id: 15,
    catID: 3,
    name: 'SAMSUNG Galaxy Z Flip 3 5G Factory Unlocked Android Cell Phone US Version Smartphone Flex Mode Intuitive Camera Compact 128GB Storage US Warranty, Phantom Black',
    price: 921.99,
    description: `Flex Your Best Angle: With Flex Mode, just unfold your mobile phone’s screen to your best angle for hands-free pics and video calls; Choose what you want to capture, set it down, stand back and shoot your best shot
    A Camera That Goes Steady: Thanks to Samsung Galaxy Z Flip3’s Super Steady feature, you can just set it down and strike a pose for picture perfect selfies
    Ultra Compact, Ultra Cool: Show off your style game without the tradeoffs; With a compact design that unfolds, you don’t have to compromise screen size for your favorite outfit
    Array of Colors: Whether you’re into sophisticated neutrals or vibrant tones, you’ll turn heads with every take; Complete your look with statement-making color choices of Phantom Black, Lavender, Green, or Cream
    `,
    img1: 'https://m.media-amazon.com/images/I/6128lumaMlL._AC_SL1372_.jpg',
    img2: 'https://m.media-amazon.com/images/I/61O7m2QdN1L._AC_SL1500_.jpg',
    img3: 'https://m.media-amazon.com/images/I/71yp+wlcsuL._AC_SL1500_.jpg',
    rating:4.5,
    link:"https://www.amazon.com/SAMSUNG-Unlocked-Smartphone-Intuitive-Warranty/dp/B097CN57TH/ref=sr_1_12?keywords=iphone+13&qid=1647176874&s=wireless&sr=1-12",
  },
  {
    id: 16,
    catID: 4,
    name: 'Uncharted: The Official Movie Novelization Mass Market Paperback – February 22, 2022',
    price: 921.99,
    description: `The official novelization of the hotly anticipated Uncharted, the new movie featuring Tom Holland and Mark Wahlberg adapting the bestselling video game series.

    FORTUNE FAVORS THE BOLD
     
    Nathan Drake has always been obsessed with treasure, and with the places out there that you can’t find on any map. They aren’t gone, just lost.
     
    When Victor “Sully” Sullivan approaches Nate with a clue that could lead them to “the greatest treasure never found,” the two embark on an epic adventure that spans the globe. Together, they must track down the missing fortune…and possibly find Nate’s long-lost brother along the way.
     
    Uncharted: The Official Movie Novelization tells the origin story of Nathan Drake, inspired by the best-selling video game series UNCHARTED.`,
    img1: 'https://images-na.ssl-images-amazon.com/images/I/71CKT0eytHL.jpg',
    img2: 'https://images-na.ssl-images-amazon.com/images/I/71CKT0eytHL.jpg',
    img3: 'https://images-na.ssl-images-amazon.com/images/I/71CKT0eytHL.jpg',
    rating:5,
    link:"https://www.amazon.com/dp/1789097312/ref=s9_acsd_al_bw_c2_x_2_i?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-14&pf_rd_r=ZYEJ294QXBHNXGGXWGCD&pf_rd_t=101&pf_rd_p=219d6bf0-72fe-4d91-86b9-9d1607f9c1f5&pf_rd_i=283155",
  },
  {
    id: 17,
    catID: 4,
    name: 'Critical Role Vox Machina: Origins Volume I Paperback – Illustrated, October 15, 2019',
    price: 921.99,
    description: `From the creators of the hit show "Critical Role" comes Vox Machina's origin story! Writers Matthew Mercer and Matthew Colville team with artist extraordinaire Olivia Samson and colorist Chris Northrop to bring you the story of where the heroes' journey began.`,
    img1: 'https://images-na.ssl-images-amazon.com/images/I/91vi7RMjVpL.jpg',
    img2: 'https://images-na.ssl-images-amazon.com/images/I/41CH6mLFCIL.jpg',
    img3: 'https://images-na.ssl-images-amazon.com/images/I/81WC79vBpXL.jpg',
    rating:4.9,
    link:"https://www.amazon.com/dp/1506714811/ref=s9_acsd_al_bw_c2_x_1_i?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-14&pf_rd_r=ZYEJ294QXBHNXGGXWGCD&pf_rd_t=101&pf_rd_p=219d6bf0-72fe-4d91-86b9-9d1607f9c1f5&pf_rd_i=283155",
  },
  {
    id: 18,
    catID: 4,
    name: 'Death in the Sunshine (The Retired Detectives Club Book 1) Kindle Edition',
    price: 921.99,
    description: `Four ex-cops in a retirement paradise. Sure they’ll rest…when the killer is caught.`,
    img1: 'https://m.media-amazon.com/images/I/517JtEtHogL.jpg',
    img2: 'https://m.media-amazon.com/images/I/517JtEtHogL.jpg',
    img3: 'https://m.media-amazon.com/images/I/517JtEtHogL.jpg',
    rating:4.1,
    link:"https://www.amazon.com/Death-Sunshine-Retired-Detectives-Club-ebook/dp/B094JMFJNK/ref=zg_2/147-1422013-2872917?pd_rd_w=ING4m&pf_rd_p=9de7a1db-3336-42ef-b0d2-5a9bd339ae44&pf_rd_r=ZYEJ294QXBHNXGGXWGCD&pd_rd_r=c4bf5d4b-f5c2-41d5-97df-2bf4593fb883&pd_rd_wg=KIBBc&pd_rd_i=B094JMFJNK&psc=1",
  },
  {
    id: 19,
    catID: 4,
    name: 'Dune (Movie Tie-In) Paperback – September 21, 2021',
    price: 921.99,
    description: `NOW A MAJOR MOTION PICTURE directed by Denis Villeneuve, starring Timothée Chalamet, Zendaya, Jason Momoa, Rebecca Ferguson, Oscar Isaac, Josh Brolin, Stellan Skarsgård, Dave Bautista, David Dastmalchian, Stephen McKinley Henderson, Chang Chen, Sharon Duncan-Brewster, Charlotte Rampling, and Javier Bardem.`,
    img1: 'https://images-na.ssl-images-amazon.com/images/I/41zSCBO3FOL._SX331_BO1,204,203,200_.jpg',
    img2: 'https://images-na.ssl-images-amazon.com/images/I/41zSCBO3FOL._SX331_BO1,204,203,200_.jpg',
    img3: 'https://images-na.ssl-images-amazon.com/images/I/41zSCBO3FOL._SX331_BO1,204,203,200_.jpg',
    rating:4.7,
    link:"https://www.amazon.com/dp/059343837X/ref=s9_acsd_al_bw_c2_x_5_t?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-14&pf_rd_r=ZYEJ294QXBHNXGGXWGCD&pf_rd_t=101&pf_rd_p=219d6bf0-72fe-4d91-86b9-9d1607f9c1f5&pf_rd_i=283155 ",
  },
  {
    id: 20,
    catID: 4,
    name: 'Lenovo IdeaPad 3i 15.6" FHD Gaming Laptop 2022, 11th Gen Intel i5-11300H(up to 4.4GHz), 16GB RAM 1TB NVMe SSD, GeForce GTX 1650, USB-A&C RJ45, Windows 11',
    price: 921.99,
    description: `The celebrated series Critical Role: Vox Machina Origins returns in this stunning hardcover edition! Fans of the series won't want to miss this beautiful collection.`,
    img1: 'https://images-na.ssl-images-amazon.com/images/I/91UWP73FyIL.jpg',
    img2: 'https://images-na.ssl-images-amazon.com/images/I/41U1IR6li-L.jpg',
    img3: 'https://images-na.ssl-images-amazon.com/images/I/81AFSYB2+9L.jpg',
    rating:4.9,
    link:"https://www.amazon.com/dp/1506721737/ref=s9_acsd_al_bw_c2_x_3_i?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-14&pf_rd_r=ZYEJ294QXBHNXGGXWGCD&pf_rd_t=101&pf_rd_p=219d6bf0-72fe-4d91-86b9-9d1607f9c1f5&pf_rd_i=283155",
  },
];

