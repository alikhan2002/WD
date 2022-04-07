from curses.ascii import HT
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
# Create your views here.


categories = [
    {"id":1,
    "name":"Computers and Accessories",
    "imgURL":"https://gamingxperts.pk/454-large_default/acer-predator-helios-300-ph315-54-760s-gaming-laptop-intel-i7-11gen-16gb-ddr-karachi-pakistan.jpg"
    },
    {
        "id":2,
        "name":"Video Games",
        "imgURL":"https://media.direct.playstation.com/is/image/sierialto/PS5-digital-edition-front-with-dualsense"
    },
    {
        "id":3,
        "name":"Smartphones",
        "imgURL":"data:image/jpeg;base64,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"
    },
    {
        "id":4,
        "name":"Books",
        "imgURL":"https://cv6.litres.ru/pub/c/elektronnaya-kniga/cover_200/4368065-gabriel-garsia-markes-44998-sto-let-odinochestva.jpg"
    }
]
products = [
  {
    "id":1,
    "catID":1,
    "name":"Lenovo Flex 5 Laptop, 14.0\" FHD Touch Display, AMD Ryzen 5 5500U, 16GB RAM, 256GB Storage, AMD Radeon Graphics, Windows 11 Home",
    "price":719.99,
    "description":"Powered by an AMD Ryzen 5 5500U mobile processor with Radeon graphics, this portable notebook computer has 16GB DDR4 RAM and 256GB NVMe SSD Storage\n    Reduce the clutter - The Flex 5 14 touchscreen laptop has a narrow bezel on 4 sides for more viewing area and less clutter on the IPS FHD (1920 x 1080) display\n    Designed to keep your ideas flowing, anywhere, anytime with the ability to multi-mode, this Windows laptop has a 360⁰ hinge so you can use it in laptop mode for everyday computing, tent mode for sharing, stand mode for binge-watching your favorite streaming shows, or tablet mode for easy interaction\n    A physical shutter on the webcam improves your privacy, allowing you to keep out unwanted attention",
    },
   {
    "id":2,
    "catID":1,
    "name":"2022 Lenovo IdeaPad 3i 15 Touchscreen Laptop, Intel i3-1115G4 16GB RAM 512GB SSD, 15.6 FHD Display, Fingerprint Reader, Webcam for Remote School&Work, Premium Lightweight, Windows 11 S, LIONEYE Bundle",
    "price":639.99,
    "description":"【Powerful CPU&GPU】 Intel Core i3-1115G4 (up to 4.1 GHz with Intel Turbo Boost Technology, 6 MB L3 cache, 2 cores, 4 threads), Intel UHD Graphics provide everyday image quality for Internet use, basic photo editing and casual gaming.\n    【Memory&Hard Drive】Ram is expandable up to 36GB DDR4 Memory for fast processing and advanced multitasking , Hard Drive is expandable up to 2TB PCIe SSD. SSD(Solid State Drive) has faster data access speed, better performance and greater reliability, HDD provide larger storage so you could store more data and files on it. Please refer to item tile for your configuration",
    },
   {
    "id":3,
    "catID":1,
    "name":"Lenovo IdeaPad 5 Laptop, 14.0\" FHD IPS Screen, Intel Corei5-1135G7 (>i7-1065G7), Intel Iris Xe Graphics, 16GB RAM, 1TB PCIe SSD, Webcam, Backlit KB, Wi-Fi 6, HDMI, USB-C, Win 10 Home",
    "price":859.99,
    "description":"i5-1135G7 (4C / 8T, 2.4 / 4.2GHz, 8MB), Integrated Intel Iris Xe Graphics, Windows 10 Home 64 Operating System. Provide a smooth experience for your study and entertainment\n    16GB Soldered DDR4-3200 RAM, 1TB PCIe NVMe SSD,\n    14.0\" FHD (1920x1080) IPS 300nits Anti-glare Display, 56.5Wh Battery max to 14 hr, Only 0.67” thin and 3.04 lbs weight\n    720p Webcam, Backlit Keyboard, Fingerprint Reader, Wi-Fi 6, Bluetooth 5.1",
    },
   {
    "id":4,
       "catID":1,
       "name":"Lenovo IdeaPad 5 15.6\" FHD IPS Anti-Glare Laptop | AMD Ryzen 7 5700U | 16GB RAM | 512GB SSD | Backlit Keyboard | Fingerprint Reader | Windows 11 | TWE Cloth | Grey",
       "price":898.89,
       "description":"【Detailed Configuration】Substantial high-bandwidth 16GB RAM to smoothly run your games and photo- and video-editing applications, as well as multiple programs and browser tabs all at once. A flash-based 512GB SSD has no moving parts, resulting in faster start-up times and data access, no noise, and reduced heat production and power draw on the battery.\n    【AMD Ryzen 7 5700U】8 cores, 16threads, 1.8GHz. The perfect combination of performance, responsiveness, and battery life. Enjoy the boundary-breaking performance with AMD Ryzen 7 5700U processor. Stay productive with a fast-charging, long-lasting battery.\n    【15.6\" LED-Backlit IPS FHD (1920 x 1080) Non-touch Display】The 1920x1080 resolution boasts impressive color and clarity. Supports 1080p content.",
   },
   {
    "id":5,
    "catID":1,
    "name":"Lenovo IdeaPad 3i 15.6\" FHD Gaming Laptop 2022, 11th Gen Intel i5-11300H(up to 4.4GHz), 16GB RAM 1TB NVMe SSD, GeForce GTX 1650, USB-A&C RJ45, Windows 11",
    "price":921.99,
    "description":"【11th Gen Intel i5-11300H】Intel Core i5-11300H Processor, 4-core, 3.10 GHz based, up to 4.40, 8M Cache\n    【15.6” FHD IPS Display】15.6\" Full HD (1920x1080) IPS Anti-glare display. Nahimic Speaker System; 802.11ax Wifi, Bluetooth 5.0, Ethernet LAN (RJ-45),. 720p HD Webcam.\n    【NVIDIA GeForce GTX 1650】Hit the sweet spot of ultimate GeForce gaming and impossibly sleek design with NVIDIA GTX graphics, designed to deliver the gaming performance you need in a thin, light form factor.\n    【Windows 11 home】With a fresh new feel and tools that make it easier to be efficient, it has what you need for whatever’s next.",
    },
   {
    "id":6,
    "catID":2,
    "name":" Wall Mount for PS5 Playstation 5 Disc Edition and Digital Edition (Mounts The Console on Wall Near or Behind TV with Invisible Design), Including 2 Accessory Holders for Controller & Headset (Black)",
    "price":29.9,
    "description":"🎮DIFFERENT LOCATION🎮Locate PS5 near TV vertically (left side, right side) or behind TV and slide the console to wall mount with well fit\n    🎮MAXIMUM VENTILATION🎮Provide enough room for the best ventilation without any airflow blocking to keep PS5 from overheating",
    },
   {
    "id":7,
    "catID":2,
    "name":"Razer Kraken X Ultralight Gaming Headset: 7.1 Surround Sound - Lightweight Aluminum Frame - Bendable Cardioid Microphone - for PC, PS4, PS5, Switch, Xbox One, Xbox Series X|S, Mobile - Black/Blue",
    "price":29.99,
    "description":"Immersive, 7.1 Surround Sound for Positional Audio: Outfitted with custom-tuned 40 mm drivers, capable of software-enabled surround sound when used for PC gaming only (download code slip inside the box)\n    Designed for All-Day Comfort: The lightest Kraken headset ever at 250 grams, around 40% lighter than the competition\n    Bendable Noise Cancelling Microphone: A cardioid mic reduces background and ambient noises for crystal-clear communication ",
    },
   {
    "id":8,
    "catID":2,
    "name":"Assassin’s Creed Valhalla PlayStation 5 Standard Edition",
    "price":921.99,
    "description":"Lead epic Viking raids against Saxon troops and fortresses\n    Relive the visceral fighting style of the Vikings as you dual-wield powerful weapons\n    Challenge yourself with the most varied collection of enemies ever in Assassin's Creed\n    Shape the growth of your character and your clan's settlement with every choice you make\n    Explore a Dark Age open world, from the harsh shores of Norway to the beautiful kingdoms of England\n    ",
    },
   {
    "id":9,
    "catID":2,
    "name":"Lenovo IdeaPad 3i 15.6\" FHD Gaming Laptop 2022, 11th Gen Intel i5-11300H(up to 4.4GHz), 16GB RAM 1TB NVMe SSD, GeForce GTX 1650, USB-A&C RJ45, Windows 11",
    "price":921.99,
    "description":"A WORLD OF BASKETBALL: NBA 2K22 puts the entire basketball universe in your hands. PLAY NOW in real NBA and WNBA environments against authentic teams and players.\n    Build your own dream team in MyTEAM with today’s stars and yesterday’s legends.\n    Live out your own pro journey in MyCAREER and experience your personal rise to the NBA.\n    Flex your management skills as a powerful Executive in MyGM and MyLEAGUE.",
    },
   {"id":10,
    "catID":2,
    "name":"3 Pack Skin for PS5 DualSense Controller - AUSWAUR Controllers Skin Grip Compatible with Sony Playstation 5 - Anti-Slip Silicone Case Cover with 10pcs FPS Pro Thumb Grips-Camouflage Red &Blue&Olive",
    "price":921.99,
    "description":"Specially designed: Silicone Cover Case Perfect fits for 2020 New Playstation 5 DualSense Controller, Not for other models.\n    Antiskid designed: Specially designed studded and textured surface improves grip and control effort and prevent from sliding.\n    Perfect button design：Precise cut outs provide easy access to all buttons, controls, and ports so wont effect your video game playing experience",
    },
   {
    "id":11,
    "catID":3,
    "name":"Apple iPhone 12 Pro, 256GB, Pacific Blue - Unlocked (Renewed Premium)",
    "price":921.99,
    "description":"A like-new experience. Backed by a one-year satisfaction guarantee.\n    This Renewed Premium product is shipped and sold by Amazon and has been certified by Amazon to work and look like new. With at least 90% battery life, it comes in deluxe, Amazon-branded packaging and is backed by a one-year warranty and technical support",
     },
    {
    "id":12,
    "catID":3,
    "name":"Apple iPhone 12 Pro Max, 128GB, Pacific Blue - Unlocked (Renewed Premium)",
    "price":921.99,
    "description":"A like-new experience. Backed by a one-year satisfaction guarantee.\n    This Renewed Premium product is shipped and sold by Amazon and has been certified by Amazon to work and look like new. With at least 90% battery life, it comes in deluxe, Amazon-branded packaging and is backed by a one-year warranty and technical support",
     },
    {
    "id":13,
    "catID":3,
    "name":"Roll over image to zoom in Apple iPhone 11 Pro, 256GB, Midnight Green - Fully Unlocked (Renewed Premium)",
    "price":921.99,
    "description":"This phone is unlocked and compatible with any carrier of choice on GSM and CDMA networks (e.g. AT&T, T-Mobile, Sprint, Verizon, US Cellular, Cricket, Metro, Tracfone, Mint Mobile, etc.).\n    Tested for battery health and guaranteed to come with a battery that exceeds 90% of original capacity.\n    Backed by a one-year satisfaction guarantee, with free access to Amazon’s Technical Support team throughout the full year and ability to replace or return the product if it does not work as expected.\n    Includes a brand new, generic charging cable that is certified Mfi (Made for iPhone) and a brand new, generic wall plug that is UL certified for performance and safety. Also includes a SIM tray removal tool but does not come with headphones or a SIM card.\n    Inspected and guaranteed to have minimal cosmetic damage, which is not noticeable when the device is held at arm’s length. Successfully passed a full diagnostic test which ensures like-new functionality and removal of any prior-user personal information.",
    },
    {
    "id":14,
    "catID":3,
    "name":"Apple iPhone SE, 64GB, Black - Fully Unlocked (Renewed Premium)",
    "price":921.99,
    "description":"A like-new experience. Backed by a one-year satisfaction guarantee.\n    This Renewed Premium product is shipped and sold by Amazon and has been certified by Amazon to work and look like new. With at least 90% battery life, it comes in deluxe, Amazon-branded packaging and is backed by a one-year warranty and technical support.",
    }
    ,{
    "id":15,
    "catID":3,
    "name":"SAMSUNG Galaxy Z Flip 3 5G Factory Unlocked Android Cell Phone US Version Smartphone Flex Mode Intuitive Camera Compact 128GB Storage US Warranty, Phantom Black",
    "price":921.99,
    "description":"Flex Your Best Angle: With Flex Mode, just unfold your mobile phone’s screen to your best angle for hands-free pics and video calls; Choose what you want to capture, set it down, stand back and shoot your best shot\n    A Camera That Goes Steady: Thanks to Samsung Galaxy Z Flip3’s Super Steady feature, you can just set it down and strike a pose for picture perfect selfies\n    Ultra Compact, Ultra Cool: Show off your style game without the tradeoffs; With a compact design that unfolds, you don’t have to compromise screen size for your favorite outfit\n    Array of Colors: Whether you’re into sophisticated neutrals or vibrant tones, you’ll turn heads with every take; Complete your look with statement-making color choices of Phantom Black, Lavender, Green, or Cream\n    ",
    },
    {
    "id":16,
    "catID":4,
    "name":"Uncharted: The Official Movie Novelization Mass Market Paperback – February 22, 2022",
    "price":921.99,
    "description":"The official novelization of the hotly anticipated Uncharted, the new movie featuring Tom Holland and Mark Wahlberg adapting the bestselling video game series.\n\n    FORTUNE FAVORS THE BOLD\n     \n    Nathan Drake has always been obsessed with treasure, and with the places out there that you can’t find on any map. They aren’t gone, just lost.\n     \n    When Victor “Sully” Sullivan approaches Nate with a clue that could lead them to “the greatest treasure never found,” the two embark on an epic adventure that spans the globe. Together, they must track down the missing fortune…and possibly find Nate’s long-lost brother along the way.\n     \n    Uncharted: The Official Movie Novelization tells the origin story of Nathan Drake, inspired by the best-selling video game series UNCHARTED.",
    },
    {
    "id":17,
    "catID":4,
    "name":"Critical Role Vox Machina: Origins Volume I Paperback – Illustrated, October 15, 2019",
    "price":921.99,
    "description":"From the creators of the hit show \"Critical Role\" comes Vox Machina's origin story! Writers Matthew Mercer and Matthew Colville team with artist extraordinaire Olivia Samson and colorist Chris Northrop to bring you the story of where the heroes' journey began.",
    },
    {
    "id":18,
     "catID":4,
     "name":"Death in the Sunshine (The Retired Detectives Club Book 1) Kindle Edition",
    "price":921.99,
    "description":"Four ex-cops in a retirement paradise. Sure they’ll rest…when the killer is caught.",
    },
    {
    "id":19,
    "catID":4,
    "name":"Dune (Movie Tie-In) Paperback – September 21, 2021",
    "price":921.99,
    "description":"NOW A MAJOR MOTION PICTURE directed by Denis Villeneuve, starring Timothée Chalamet, Zendaya, Jason Momoa, Rebecca Ferguson, Oscar Isaac, Josh Brolin, Stellan Skarsgård, Dave Bautista, David Dastmalchian, Stephen McKinley Henderson, Chang Chen, Sharon Duncan-Brewster, Charlotte Rampling, and Javier Bardem.",
    },
    {
    "id":20,
    "catID":4,
    "name":"Lenovo IdeaPad 3i 15.6\" FHD Gaming Laptop 2022, 11th Gen Intel i5-11300H(up to 4.4GHz), 16GB RAM 1TB NVMe SSD, GeForce GTX 1650, USB-A&C RJ45, Windows 11",
    "price":921.99,
    "description":"The celebrated series Critical Role: Vox Machina Origins returns in this stunning hardcover edition! Fans of the series won't want to miss this beautiful collection.",
    }
]
def index(request):
    return HttpResponse("Привет, Мир!")

def product_list(request):
    return JsonResponse(products, safe = False)

def product_item(request, id):
    for product in products:
        if product['id'] == id:
            return JsonResponse(product)
    return JsonResponse({"message":"Such product not found"})

def categories_list(request):
    return JsonResponse(categories, safe=False)

def category_item(request, id):
    for category in categories:
        if category['id'] == id:
            return JsonResponse(category)
    return JsonResponse({"message":"such category not found"})
    


