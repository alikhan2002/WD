export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  img:string;
  rating:number;
  catName:string;
}
export interface Category{
  id:number;
  name:string;
  icon:string;
}

export interface User{
  id: number;
  username: string;
  email:string;
  password:string;
}
export interface Shipping{
  id: number;
  fullname:string;
  address:string;
  shipping_type:string;
  user_id:string;
}


export interface AuthToken {
  token: string;
}
// export let products = [
//   {
//     id: 1,
//     name: 'Lenovo Flex 5 Laptop, 14.0" FHD Touch Display, AMD Ryzen 5 5500U, 16GB RAM, 256GB Storage, AMD Radeon Graphics, Windows 11 Home',
//     price: 719.99,
//     description: `Powered by an AMD Ryzen 5 5500U mobile processor with Radeon graphics, this portable notebook computer has 16GB DDR4 RAM and 256GB NVMe SSD Storage
//     Reduce the clutter - The Flex 5 14 touchscreen laptop has a narrow bezel on 4 sides for more viewing area and less clutter on the IPS FHD (1920 x 1080) display
//     Designed to keep your ideas flowing, anywhere, anytime with the ability to multi-mode, this Windows laptop has a 360⁰ hinge so you can use it in laptop mode for everyday computing, tent mode for sharing, stand mode for binge-watching your favorite streaming shows, or tablet mode for easy interaction
//     A physical shutter on the webcam improves your privacy, allowing you to keep out unwanted attention`,
//     img: 'https://m.media-amazon.com/images/I/71zZiQGzc5L._AC_SL1500_.jpg',
//     rating:4.4,
//     link:"https://www.amazon.com/Lenovo-Processor-Graphics-82HU00JWUS-Graphite/dp/B09BG96KFJ/ref=sr_1_1?qid=1647096079&refinements=p_89%3ALenovo%2Cp_n_feature_thirty-three_browse-bin%3A23720418011&rnid=23720416011&s=computers-intl-ship&sr=1-1",
//     catName:"pc"
//   }, {
//     id: 6,
//     name: ' Wall Mount for PS5 Playstation 5 Disc Edition and Digital Edition (Mounts The Console on Wall Near or Behind TV with Invisible Design), Including 2 Accessory Holders for Controller & Headset (Black)',
//     price: 29.9,
//     description: `🎮DIFFERENT LOCATION🎮Locate PS5 near TV vertically (left side, right side) or behind TV and slide the console to wall mount with well fit
//     🎮MAXIMUM VENTILATION🎮Provide enough room for the best ventilation without any airflow blocking to keep PS5 from overheating`,
//     img: 'https://m.media-amazon.com/images/I/61aE9yFnAEL._AC_SL1500_.jpg',
//     rating:5,
//     link:"https://www.amazon.com/OIVO-Controller-Compatible-Playstation-Indicators/dp/B08LZGPPBH/ref=sr_1_7?crid=1S1KG127SHCNZ&keywords=ps5&qid=1647176278&sprefix=ps%2Caps%2C316&sr=8-7",
//     catName: "books"
//   },
//   {
//     id: 11,
//     name: 'Apple iPhone 12 Pro, 256GB, Pacific Blue - Unlocked (Renewed Premium)',
//     price: 921.99,
//     description: `A like-new experience. Backed by a one-year satisfaction guarantee.
//     This Renewed Premium product is shipped and sold by Amazon and has been certified by Amazon to work and look like new. With at least 90% battery life, it comes in deluxe, Amazon-branded packaging and is backed by a one-year warranty and technical support`,
//     img: 'https://m.media-amazon.com/images/I/712yl2wTDbL._AC_SL1500_.jpg',
//     rating:5,
//     link:"https://www.amazon.com/Apple-iPhone-12-Pro-Pacific/dp/B09JFN8K6T/ref=sr_1_1?keywords=iphone+13&qid=1647176874&s=wireless&sr=1-1",
//     catName: "smartphones"
//   },
//   {
//     id: 2,
//     catName: "pc",
//     name: `2022 Lenovo IdeaPad 3i 15 Touchscreen Laptop, Intel i3-1115G4 16GB RAM 512GB SSD, 15.6 FHD Display, Fingerprint Reader, Webcam for Remote School&Work, Premium Lightweight, Windows 11 S, LIONEYE Bundle`,
//     price: 639.99,
//     description: `【Powerful CPU&GPU】 Intel Core i3-1115G4 (up to 4.1 GHz with Intel Turbo Boost Technology, 6 MB L3 cache, 2 cores, 4 threads), Intel UHD Graphics provide everyday image quality for Internet use, basic photo editing and casual gaming.
//     【Memory&Hard Drive】Ram is expandable up to 36GB DDR4 Memory for fast processing and advanced multitasking , Hard Drive is expandable up to 2TB PCIe SSD. SSD(Solid State Drive) has faster data access speed, better performance and greater reliability, HDD provide larger storage so you could store more data and files on it. Please refer to item tile for your configuration`,
//     img: 'https://m.media-amazon.com/images/I/61iYCuksroL._AC_SL1200_.jpg',
//     rating:4.5,
//     link:"https://www.amazon.com/Lenovo-IdeaPad-Touchscreen-Fingerprint-Lightweight/dp/B09Q4PWRBC/ref=sr_1_2?qid=1647096079&refinements=p_89%3ALenovo%2Cp_n_feature_thirty-three_browse-bin%3A23720418011&rnid=23720416011&s=computers-intl-ship&sr=1-2",
//
//   },
//   {
//     id: 3,
//     catName: "pc",
//     name: 'Lenovo IdeaPad 5 Laptop, 14.0" FHD IPS Screen, Intel Corei5-1135G7 (>i7-1065G7), Intel Iris Xe Graphics, 16GB RAM, 1TB PCIe SSD, Webcam, Backlit KB, Wi-Fi 6, HDMI, USB-C, Win 10 Home',
//     price: 859.99,
//     description: `i5-1135G7 (4C / 8T, 2.4 / 4.2GHz, 8MB), Integrated Intel Iris Xe Graphics, Windows 10 Home 64 Operating System. Provide a smooth experience for your study and entertainment
//     16GB Soldered DDR4-3200 RAM, 1TB PCIe NVMe SSD,
//     14.0" FHD (1920x1080) IPS 300nits Anti-glare Display, 56.5Wh Battery max to 14 hr, Only 0.67” thin and 3.04 lbs weight
//     720p Webcam, Backlit Keyboard, Fingerprint Reader, Wi-Fi 6, Bluetooth 5.1`,
//     img: 'https://m.media-amazon.com/images/I/611JIza1MNL._AC_SL1000_.jpg',
//     rating:4.6,
//     link:"https://www.amazon.com/Lenovo-IdeaPad-300nits-i7-10710U-Graphics/dp/B0952FBC2Z/ref=sr_1_8?qid=1647096079&refinements=p_89%3ALenovo%2Cp_n_feature_thirty-three_browse-bin%3A23720418011&rnid=23720416011&s=computers-intl-ship&sr=1-8",
//
//
//   },
//   {
//     id: 4,
//     catName: "pc",
//     name: 'Lenovo IdeaPad 5 15.6" FHD IPS Anti-Glare Laptop | AMD Ryzen 7 5700U | 16GB RAM | 512GB SSD | Backlit Keyboard | Fingerprint Reader | Windows 11 | TWE Cloth | Grey',
//     price: 898.89,
//     description: `【Detailed Configuration】Substantial high-bandwidth 16GB RAM to smoothly run your games and photo- and video-editing applications, as well as multiple programs and browser tabs all at once. A flash-based 512GB SSD has no moving parts, resulting in faster start-up times and data access, no noise, and reduced heat production and power draw on the battery.
//     【AMD Ryzen 7 5700U】8 cores, 16threads, 1.8GHz. The perfect combination of performance, responsiveness, and battery life. Enjoy the boundary-breaking performance with AMD Ryzen 7 5700U processor. Stay productive with a fast-charging, long-lasting battery.
//     【15.6" LED-Backlit IPS FHD (1920 x 1080) Non-touch Display】The 1920x1080 resolution boasts impressive color and clarity. Supports 1080p content.`,
//     img: 'https://m.media-amazon.com/images/I/71MEE44OVRL._AC_SL1500_.jpg',
//     rating:4.3,
//     link:"https://www.amazon.com/Lenovo-IdeaPad-Anti-Glare-Keyboard-Fingerprint/dp/B09HWYY8BS/ref=sr_1_10?qid=1647096079&refinements=p_89%3ALenovo%2Cp_n_feature_thirty-three_browse-bin%3A23720418011&rnid=23720416011&s=computers-intl-ship&sr=1-10",
//   },
//   {
//     id: 1,
//     name: 'Lenovo Flex 5 Laptop, 14.0" FHD Touch Display, AMD Ryzen 5 5500U, 16GB RAM, 256GB Storage, AMD Radeon Graphics, Windows 11 Home',
//     price: 719.99,
//     description: `Powered by an AMD Ryzen 5 5500U mobile processor with Radeon graphics, this portable notebook computer has 16GB DDR4 RAM and 256GB NVMe SSD Storage
//     Reduce the clutter - The Flex 5 14 touchscreen laptop has a narrow bezel on 4 sides for more viewing area and less clutter on the IPS FHD (1920 x 1080) display
//     Designed to keep your ideas flowing, anywhere, anytime with the ability to multi-mode, this Windows laptop has a 360⁰ hinge so you can use it in laptop mode for everyday computing, tent mode for sharing, stand mode for binge-watching your favorite streaming shows, or tablet mode for easy interaction
//     A physical shutter on the webcam improves your privacy, allowing you to keep out unwanted attention`,
//     img: 'https://m.media-amazon.com/images/I/71zZiQGzc5L._AC_SL1500_.jpg',
//     rating:4.4,
//     link:"https://www.amazon.com/Lenovo-Processor-Graphics-82HU00JWUS-Graphite/dp/B09BG96KFJ/ref=sr_1_1?qid=1647096079&refinements=p_89%3ALenovo%2Cp_n_feature_thirty-three_browse-bin%3A23720418011&rnid=23720416011&s=computers-intl-ship&sr=1-1",
//     catName:"pc"
//   }, {
//     id: 6,
//     name: ' Wall Mount for PS5 Playstation 5 Disc Edition and Digital Edition (Mounts The Console on Wall Near or Behind TV with Invisible Design), Including 2 Accessory Holders for Controller & Headset (Black)',
//     price: 29.9,
//     description: `🎮DIFFERENT LOCATION🎮Locate PS5 near TV vertically (left side, right side) or behind TV and slide the console to wall mount with well fit
//     🎮MAXIMUM VENTILATION🎮Provide enough room for the best ventilation without any airflow blocking to keep PS5 from overheating`,
//     img: 'https://m.media-amazon.com/images/I/61aE9yFnAEL._AC_SL1500_.jpg',
//     rating:5,
//     link:"https://www.amazon.com/OIVO-Controller-Compatible-Playstation-Indicators/dp/B08LZGPPBH/ref=sr_1_7?crid=1S1KG127SHCNZ&keywords=ps5&qid=1647176278&sprefix=ps%2Caps%2C316&sr=8-7",
//     catName: "books"
//   },
//   {
//     id: 11,
//     name: 'Apple iPhone 12 Pro, 256GB, Pacific Blue - Unlocked (Renewed Premium)',
//     price: 921.99,
//     description: `A like-new experience. Backed by a one-year satisfaction guarantee.
//     This Renewed Premium product is shipped and sold by Amazon and has been certified by Amazon to work and look like new. With at least 90% battery life, it comes in deluxe, Amazon-branded packaging and is backed by a one-year warranty and technical support`,
//     img: 'https://m.media-amazon.com/images/I/712yl2wTDbL._AC_SL1500_.jpg',
//     rating:5,
//     link:"https://www.amazon.com/Apple-iPhone-12-Pro-Pacific/dp/B09JFN8K6T/ref=sr_1_1?keywords=iphone+13&qid=1647176874&s=wireless&sr=1-1",
//     catName: "smartphones"
//   },
//   {
//     id: 2,
//     catName: "pc",
//     name: `2022 Lenovo IdeaPad 3i 15 Touchscreen Laptop, Intel i3-1115G4 16GB RAM 512GB SSD, 15.6 FHD Display, Fingerprint Reader, Webcam for Remote School&Work, Premium Lightweight, Windows 11 S, LIONEYE Bundle`,
//     price: 639.99,
//     description: `【Powerful CPU&GPU】 Intel Core i3-1115G4 (up to 4.1 GHz with Intel Turbo Boost Technology, 6 MB L3 cache, 2 cores, 4 threads), Intel UHD Graphics provide everyday image quality for Internet use, basic photo editing and casual gaming.
//     【Memory&Hard Drive】Ram is expandable up to 36GB DDR4 Memory for fast processing and advanced multitasking , Hard Drive is expandable up to 2TB PCIe SSD. SSD(Solid State Drive) has faster data access speed, better performance and greater reliability, HDD provide larger storage so you could store more data and files on it. Please refer to item tile for your configuration`,
//     img: 'https://m.media-amazon.com/images/I/61iYCuksroL._AC_SL1200_.jpg',
//     rating:4.5,
//     link:"https://www.amazon.com/Lenovo-IdeaPad-Touchscreen-Fingerprint-Lightweight/dp/B09Q4PWRBC/ref=sr_1_2?qid=1647096079&refinements=p_89%3ALenovo%2Cp_n_feature_thirty-three_browse-bin%3A23720418011&rnid=23720416011&s=computers-intl-ship&sr=1-2",
//
//   },
//   {
//     id: 3,
//     catName: "pc",
//     name: 'Lenovo IdeaPad 5 Laptop, 14.0" FHD IPS Screen, Intel Corei5-1135G7 (>i7-1065G7), Intel Iris Xe Graphics, 16GB RAM, 1TB PCIe SSD, Webcam, Backlit KB, Wi-Fi 6, HDMI, USB-C, Win 10 Home',
//     price: 859.99,
//     description: `i5-1135G7 (4C / 8T, 2.4 / 4.2GHz, 8MB), Integrated Intel Iris Xe Graphics, Windows 10 Home 64 Operating System. Provide a smooth experience for your study and entertainment
//     16GB Soldered DDR4-3200 RAM, 1TB PCIe NVMe SSD,
//     14.0" FHD (1920x1080) IPS 300nits Anti-glare Display, 56.5Wh Battery max to 14 hr, Only 0.67” thin and 3.04 lbs weight
//     720p Webcam, Backlit Keyboard, Fingerprint Reader, Wi-Fi 6, Bluetooth 5.1`,
//     img: 'https://m.media-amazon.com/images/I/611JIza1MNL._AC_SL1000_.jpg',
//     rating:4.6,
//     link:"https://www.amazon.com/Lenovo-IdeaPad-300nits-i7-10710U-Graphics/dp/B0952FBC2Z/ref=sr_1_8?qid=1647096079&refinements=p_89%3ALenovo%2Cp_n_feature_thirty-three_browse-bin%3A23720418011&rnid=23720416011&s=computers-intl-ship&sr=1-8",
//
//
//   },
//   {
//     id: 4,
//     catName: "pc",
//     name: 'Lenovo IdeaPad 5 15.6" FHD IPS Anti-Glare Laptop | AMD Ryzen 7 5700U | 16GB RAM | 512GB SSD | Backlit Keyboard | Fingerprint Reader | Windows 11 | TWE Cloth | Grey',
//     price: 898.89,
//     description: `【Detailed Configuration】Substantial high-bandwidth 16GB RAM to smoothly run your games and photo- and video-editing applications, as well as multiple programs and browser tabs all at once. A flash-based 512GB SSD has no moving parts, resulting in faster start-up times and data access, no noise, and reduced heat production and power draw on the battery.
//     【AMD Ryzen 7 5700U】8 cores, 16threads, 1.8GHz. The perfect combination of performance, responsiveness, and battery life. Enjoy the boundary-breaking performance with AMD Ryzen 7 5700U processor. Stay productive with a fast-charging, long-lasting battery.
//     【15.6" LED-Backlit IPS FHD (1920 x 1080) Non-touch Display】The 1920x1080 resolution boasts impressive color and clarity. Supports 1080p content.`,
//     img: 'https://m.media-amazon.com/images/I/71MEE44OVRL._AC_SL1500_.jpg',
//     rating:4.3,
//     link:"https://www.amazon.com/Lenovo-IdeaPad-Anti-Glare-Keyboard-Fingerprint/dp/B09HWYY8BS/ref=sr_1_10?qid=1647096079&refinements=p_89%3ALenovo%2Cp_n_feature_thirty-three_browse-bin%3A23720418011&rnid=23720416011&s=computers-intl-ship&sr=1-10",
//   },
//   {
//     id: 1,
//     name: 'Lenovo Flex 5 Laptop, 14.0" FHD Touch Display, AMD Ryzen 5 5500U, 16GB RAM, 256GB Storage, AMD Radeon Graphics, Windows 11 Home',
//     price: 719.99,
//     description: `Powered by an AMD Ryzen 5 5500U mobile processor with Radeon graphics, this portable notebook computer has 16GB DDR4 RAM and 256GB NVMe SSD Storage
//     Reduce the clutter - The Flex 5 14 touchscreen laptop has a narrow bezel on 4 sides for more viewing area and less clutter on the IPS FHD (1920 x 1080) display
//     Designed to keep your ideas flowing, anywhere, anytime with the ability to multi-mode, this Windows laptop has a 360⁰ hinge so you can use it in laptop mode for everyday computing, tent mode for sharing, stand mode for binge-watching your favorite streaming shows, or tablet mode for easy interaction
//     A physical shutter on the webcam improves your privacy, allowing you to keep out unwanted attention`,
//     img: 'https://m.media-amazon.com/images/I/71zZiQGzc5L._AC_SL1500_.jpg',
//     rating:4.4,
//     link:"https://www.amazon.com/Lenovo-Processor-Graphics-82HU00JWUS-Graphite/dp/B09BG96KFJ/ref=sr_1_1?qid=1647096079&refinements=p_89%3ALenovo%2Cp_n_feature_thirty-three_browse-bin%3A23720418011&rnid=23720416011&s=computers-intl-ship&sr=1-1",
//     catName:"pc"
//   }, {
//     id: 6,
//     name: ' Wall Mount for PS5 Playstation 5 Disc Edition and Digital Edition (Mounts The Console on Wall Near or Behind TV with Invisible Design), Including 2 Accessory Holders for Controller & Headset (Black)',
//     price: 29.9,
//     description: `🎮DIFFERENT LOCATION🎮Locate PS5 near TV vertically (left side, right side) or behind TV and slide the console to wall mount with well fit
//     🎮MAXIMUM VENTILATION🎮Provide enough room for the best ventilation without any airflow blocking to keep PS5 from overheating`,
//     img: 'https://m.media-amazon.com/images/I/61aE9yFnAEL._AC_SL1500_.jpg',
//     rating:5,
//     link:"https://www.amazon.com/OIVO-Controller-Compatible-Playstation-Indicators/dp/B08LZGPPBH/ref=sr_1_7?crid=1S1KG127SHCNZ&keywords=ps5&qid=1647176278&sprefix=ps%2Caps%2C316&sr=8-7",
//     catName: "books"
//   },
//   {
//     id: 11,
//     name: 'Apple iPhone 12 Pro, 256GB, Pacific Blue - Unlocked (Renewed Premium)',
//     price: 921.99,
//     description: `A like-new experience. Backed by a one-year satisfaction guarantee.
//     This Renewed Premium product is shipped and sold by Amazon and has been certified by Amazon to work and look like new. With at least 90% battery life, it comes in deluxe, Amazon-branded packaging and is backed by a one-year warranty and technical support`,
//     img: 'https://m.media-amazon.com/images/I/712yl2wTDbL._AC_SL1500_.jpg',
//     rating:5,
//     link:"https://www.amazon.com/Apple-iPhone-12-Pro-Pacific/dp/B09JFN8K6T/ref=sr_1_1?keywords=iphone+13&qid=1647176874&s=wireless&sr=1-1",
//     catName: "smartphones"
//   },
//   {
//     id: 2,
//     catName: "pc",
//     name: `2022 Lenovo IdeaPad 3i 15 Touchscreen Laptop, Intel i3-1115G4 16GB RAM 512GB SSD, 15.6 FHD Display, Fingerprint Reader, Webcam for Remote School&Work, Premium Lightweight, Windows 11 S, LIONEYE Bundle`,
//     price: 639.99,
//     description: `【Powerful CPU&GPU】 Intel Core i3-1115G4 (up to 4.1 GHz with Intel Turbo Boost Technology, 6 MB L3 cache, 2 cores, 4 threads), Intel UHD Graphics provide everyday image quality for Internet use, basic photo editing and casual gaming.
//     【Memory&Hard Drive】Ram is expandable up to 36GB DDR4 Memory for fast processing and advanced multitasking , Hard Drive is expandable up to 2TB PCIe SSD. SSD(Solid State Drive) has faster data access speed, better performance and greater reliability, HDD provide larger storage so you could store more data and files on it. Please refer to item tile for your configuration`,
//     img: 'https://m.media-amazon.com/images/I/61iYCuksroL._AC_SL1200_.jpg',
//     rating:4.5,
//     link:"https://www.amazon.com/Lenovo-IdeaPad-Touchscreen-Fingerprint-Lightweight/dp/B09Q4PWRBC/ref=sr_1_2?qid=1647096079&refinements=p_89%3ALenovo%2Cp_n_feature_thirty-three_browse-bin%3A23720418011&rnid=23720416011&s=computers-intl-ship&sr=1-2",
//
//   },
//   {
//     id: 3,
//     catName: "pc",
//     name: 'Lenovo IdeaPad 5 Laptop, 14.0" FHD IPS Screen, Intel Corei5-1135G7 (>i7-1065G7), Intel Iris Xe Graphics, 16GB RAM, 1TB PCIe SSD, Webcam, Backlit KB, Wi-Fi 6, HDMI, USB-C, Win 10 Home',
//     price: 859.99,
//     description: `i5-1135G7 (4C / 8T, 2.4 / 4.2GHz, 8MB), Integrated Intel Iris Xe Graphics, Windows 10 Home 64 Operating System. Provide a smooth experience for your study and entertainment
//     16GB Soldered DDR4-3200 RAM, 1TB PCIe NVMe SSD,
//     14.0" FHD (1920x1080) IPS 300nits Anti-glare Display, 56.5Wh Battery max to 14 hr, Only 0.67” thin and 3.04 lbs weight
//     720p Webcam, Backlit Keyboard, Fingerprint Reader, Wi-Fi 6, Bluetooth 5.1`,
//     img: 'https://m.media-amazon.com/images/I/611JIza1MNL._AC_SL1000_.jpg',
//     rating:4.6,
//     link:"https://www.amazon.com/Lenovo-IdeaPad-300nits-i7-10710U-Graphics/dp/B0952FBC2Z/ref=sr_1_8?qid=1647096079&refinements=p_89%3ALenovo%2Cp_n_feature_thirty-three_browse-bin%3A23720418011&rnid=23720416011&s=computers-intl-ship&sr=1-8",
//
//
//   },
//   {
//     id: 4,
//     catName: "pc",
//     name: 'Lenovo IdeaPad 5 15.6" FHD IPS Anti-Glare Laptop | AMD Ryzen 7 5700U | 16GB RAM | 512GB SSD | Backlit Keyboard | Fingerprint Reader | Windows 11 | TWE Cloth | Grey',
//     price: 898.89,
//     description: `【Detailed Configuration】Substantial high-bandwidth 16GB RAM to smoothly run your games and photo- and video-editing applications, as well as multiple programs and browser tabs all at once. A flash-based 512GB SSD has no moving parts, resulting in faster start-up times and data access, no noise, and reduced heat production and power draw on the battery.
//     【AMD Ryzen 7 5700U】8 cores, 16threads, 1.8GHz. The perfect combination of performance, responsiveness, and battery life. Enjoy the boundary-breaking performance with AMD Ryzen 7 5700U processor. Stay productive with a fast-charging, long-lasting battery.
//     【15.6" LED-Backlit IPS FHD (1920 x 1080) Non-touch Display】The 1920x1080 resolution boasts impressive color and clarity. Supports 1080p content.`,
//     img: 'https://m.media-amazon.com/images/I/71MEE44OVRL._AC_SL1500_.jpg',
//     rating:4.3,
//     link:"https://www.amazon.com/Lenovo-IdeaPad-Anti-Glare-Keyboard-Fingerprint/dp/B09HWYY8BS/ref=sr_1_10?qid=1647096079&refinements=p_89%3ALenovo%2Cp_n_feature_thirty-three_browse-bin%3A23720418011&rnid=23720416011&s=computers-intl-ship&sr=1-10",
//   },
//   {
//     id: 1,
//     name: 'Lenovo Flex 5 Laptop, 14.0" FHD Touch Display, AMD Ryzen 5 5500U, 16GB RAM, 256GB Storage, AMD Radeon Graphics, Windows 11 Home',
//     price: 719.99,
//     description: `Powered by an AMD Ryzen 5 5500U mobile processor with Radeon graphics, this portable notebook computer has 16GB DDR4 RAM and 256GB NVMe SSD Storage
//     Reduce the clutter - The Flex 5 14 touchscreen laptop has a narrow bezel on 4 sides for more viewing area and less clutter on the IPS FHD (1920 x 1080) display
//     Designed to keep your ideas flowing, anywhere, anytime with the ability to multi-mode, this Windows laptop has a 360⁰ hinge so you can use it in laptop mode for everyday computing, tent mode for sharing, stand mode for binge-watching your favorite streaming shows, or tablet mode for easy interaction
//     A physical shutter on the webcam improves your privacy, allowing you to keep out unwanted attention`,
//     img: 'https://m.media-amazon.com/images/I/71zZiQGzc5L._AC_SL1500_.jpg',
//     rating:4.4,
//     link:"https://www.amazon.com/Lenovo-Processor-Graphics-82HU00JWUS-Graphite/dp/B09BG96KFJ/ref=sr_1_1?qid=1647096079&refinements=p_89%3ALenovo%2Cp_n_feature_thirty-three_browse-bin%3A23720418011&rnid=23720416011&s=computers-intl-ship&sr=1-1",
//     catName:"pc"
//   }, {
//     id: 6,
//     name: ' Wall Mount for PS5 Playstation 5 Disc Edition and Digital Edition (Mounts The Console on Wall Near or Behind TV with Invisible Design), Including 2 Accessory Holders for Controller & Headset (Black)',
//     price: 29.9,
//     description: `🎮DIFFERENT LOCATION🎮Locate PS5 near TV vertically (left side, right side) or behind TV and slide the console to wall mount with well fit
//     🎮MAXIMUM VENTILATION🎮Provide enough room for the best ventilation without any airflow blocking to keep PS5 from overheating`,
//     img: 'https://m.media-amazon.com/images/I/61aE9yFnAEL._AC_SL1500_.jpg',
//     rating:5,
//     link:"https://www.amazon.com/OIVO-Controller-Compatible-Playstation-Indicators/dp/B08LZGPPBH/ref=sr_1_7?crid=1S1KG127SHCNZ&keywords=ps5&qid=1647176278&sprefix=ps%2Caps%2C316&sr=8-7",
//     catName: "books"
//   },
//   {
//     id: 11,
//     name: 'Apple iPhone 12 Pro, 256GB, Pacific Blue - Unlocked (Renewed Premium)',
//     price: 921.99,
//     description: `A like-new experience. Backed by a one-year satisfaction guarantee.
//     This Renewed Premium product is shipped and sold by Amazon and has been certified by Amazon to work and look like new. With at least 90% battery life, it comes in deluxe, Amazon-branded packaging and is backed by a one-year warranty and technical support`,
//     img: 'https://m.media-amazon.com/images/I/712yl2wTDbL._AC_SL1500_.jpg',
//     rating:5,
//     link:"https://www.amazon.com/Apple-iPhone-12-Pro-Pacific/dp/B09JFN8K6T/ref=sr_1_1?keywords=iphone+13&qid=1647176874&s=wireless&sr=1-1",
//     catName: "smartphones"
//   },
//   {
//     id: 2,
//     catName: "pc",
//     name: `2022 Lenovo IdeaPad 3i 15 Touchscreen Laptop, Intel i3-1115G4 16GB RAM 512GB SSD, 15.6 FHD Display, Fingerprint Reader, Webcam for Remote School&Work, Premium Lightweight, Windows 11 S, LIONEYE Bundle`,
//     price: 639.99,
//     description: `【Powerful CPU&GPU】 Intel Core i3-1115G4 (up to 4.1 GHz with Intel Turbo Boost Technology, 6 MB L3 cache, 2 cores, 4 threads), Intel UHD Graphics provide everyday image quality for Internet use, basic photo editing and casual gaming.
//     【Memory&Hard Drive】Ram is expandable up to 36GB DDR4 Memory for fast processing and advanced multitasking , Hard Drive is expandable up to 2TB PCIe SSD. SSD(Solid State Drive) has faster data access speed, better performance and greater reliability, HDD provide larger storage so you could store more data and files on it. Please refer to item tile for your configuration`,
//     img: 'https://m.media-amazon.com/images/I/61iYCuksroL._AC_SL1200_.jpg',
//     rating:4.5,
//     link:"https://www.amazon.com/Lenovo-IdeaPad-Touchscreen-Fingerprint-Lightweight/dp/B09Q4PWRBC/ref=sr_1_2?qid=1647096079&refinements=p_89%3ALenovo%2Cp_n_feature_thirty-three_browse-bin%3A23720418011&rnid=23720416011&s=computers-intl-ship&sr=1-2",
//
//   },
//   {
//     id: 3,
//     catName: "pc",
//     name: 'Lenovo IdeaPad 5 Laptop, 14.0" FHD IPS Screen, Intel Corei5-1135G7 (>i7-1065G7), Intel Iris Xe Graphics, 16GB RAM, 1TB PCIe SSD, Webcam, Backlit KB, Wi-Fi 6, HDMI, USB-C, Win 10 Home',
//     price: 859.99,
//     description: `i5-1135G7 (4C / 8T, 2.4 / 4.2GHz, 8MB), Integrated Intel Iris Xe Graphics, Windows 10 Home 64 Operating System. Provide a smooth experience for your study and entertainment
//     16GB Soldered DDR4-3200 RAM, 1TB PCIe NVMe SSD,
//     14.0" FHD (1920x1080) IPS 300nits Anti-glare Display, 56.5Wh Battery max to 14 hr, Only 0.67” thin and 3.04 lbs weight
//     720p Webcam, Backlit Keyboard, Fingerprint Reader, Wi-Fi 6, Bluetooth 5.1`,
//     img: 'https://m.media-amazon.com/images/I/611JIza1MNL._AC_SL1000_.jpg',
//     rating:4.6,
//     link:"https://www.amazon.com/Lenovo-IdeaPad-300nits-i7-10710U-Graphics/dp/B0952FBC2Z/ref=sr_1_8?qid=1647096079&refinements=p_89%3ALenovo%2Cp_n_feature_thirty-three_browse-bin%3A23720418011&rnid=23720416011&s=computers-intl-ship&sr=1-8",
//
//
//   },
//   {
//     id: 4,
//     catName: "pc",
//     name: 'Lenovo IdeaPad 5 15.6" FHD IPS Anti-Glare Laptop | AMD Ryzen 7 5700U | 16GB RAM | 512GB SSD | Backlit Keyboard | Fingerprint Reader | Windows 11 | TWE Cloth | Grey',
//     price: 898.89,
//     description: `【Detailed Configuration】Substantial high-bandwidth 16GB RAM to smoothly run your games and photo- and video-editing applications, as well as multiple programs and browser tabs all at once. A flash-based 512GB SSD has no moving parts, resulting in faster start-up times and data access, no noise, and reduced heat production and power draw on the battery.
//     【AMD Ryzen 7 5700U】8 cores, 16threads, 1.8GHz. The perfect combination of performance, responsiveness, and battery life. Enjoy the boundary-breaking performance with AMD Ryzen 7 5700U processor. Stay productive with a fast-charging, long-lasting battery.
//     【15.6" LED-Backlit IPS FHD (1920 x 1080) Non-touch Display】The 1920x1080 resolution boasts impressive color and clarity. Supports 1080p content.`,
//     img: 'https://m.media-amazon.com/images/I/71MEE44OVRL._AC_SL1500_.jpg',
//     rating:4.3,
//     link:"https://www.amazon.com/Lenovo-IdeaPad-Anti-Glare-Keyboard-Fingerprint/dp/B09HWYY8BS/ref=sr_1_10?qid=1647096079&refinements=p_89%3ALenovo%2Cp_n_feature_thirty-three_browse-bin%3A23720418011&rnid=23720416011&s=computers-intl-ship&sr=1-10",
//   },
// ];
//
// export let categories = [
//   {
//     id: 1,
//     name: 'Books',
//     icon:'fa fa-book'
//       },
//   {
//     id: 2,
//     name: 'Smartphones',
//     icon:'fa fa-book'
//   },
//   {
//     id: 3,
//     name: 'Personal Computers',
//     icon:'fa fa-book'
//   },
//   {
//     id: 4,
//     name: 'Toys',
//     icon:"material-icons"
//   },
//   {
//     id: 5,
//     name: 'Dishes',
//     icon:'/assets/img/dishes.png'
//   },
//   {
//     id: 6,
//     name: 'Stationery',
//     icon:'fa fa-book'
//   },
// ];
//
//
//
