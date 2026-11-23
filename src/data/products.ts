export type ProductVariant = {
  size: string;
  price: number;
  popular?: boolean;
};

export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  accent: string;
  accentDeep: string;
  chip: string;
  rating: number;
  image: string;
  imageAlt: string;
  gallery: string[];
  sku: string;
  shelfLife: string;
  origin: string;
  nutrition: {
    calories: string;
    fat: string;
    carbs: string;
    protein: string;
    sodium: string;
  };
  ingredients: string[];
  story: string;
  pairing: string;
  variants: ProductVariant[];
};

const sharedGallery = [
  "/images/hero-bag.jpg",
  "/images/lifestyle-crunch.jpg",
];

const bagImage = (slug: string) => `/images/bag-${slug}.jpg`;

export const products: Record<string, Product> = {
  classic: {
    id: "classic",
    name: "Classic Salted",
    tagline: "The everyday hero, done right.",
    description:
      "Clean salt, golden crunch, the everyday hero. A balanced bite that never tries too hard — and always delivers.",
    accent: "#FFD130",
    accentDeep: "#F0A800",
    chip: "#E8B84A",
    rating: 5,
    image: bagImage("classic"),
    imageAlt: "CRISPO Classic Salted chip bag",
    gallery: [bagImage("classic"), ...sharedGallery],
    sku: "CRS-CLS",
    shelfLife: "6 months",
    origin: "Made in India",
    nutrition: { calories: "150", fat: "9g", carbs: "15g", protein: "2g", sodium: "170mg" },
    ingredients: ["Potatoes", "Sunflower oil", "Sea salt"],
    story:
      "Where it all began. Our original recipe — thin-sliced potatoes, a kiss of sea salt, and that unmistakable CRISPO snap.",
    pairing: "Pairs perfectly with a cold soda or a turkey sandwich at lunch.",
    variants: [
      { size: "Single Bag (50 g)", price: 20 },
      { size: "Party Pack (150 g)", price: 50, popular: true },
      { size: "Share Box (300 g)", price: 99 },
    ],
  },
  chili: {
    id: "chili",
    name: "Spicy Chili",
    tagline: "Warm heat that builds with every bite.",
    description:
      "Warm heat that builds with every bite. For those who like their crunch with a slow, friendly fire.",
    accent: "#E24B3B",
    accentDeep: "#B5281C",
    chip: "#F07A4A",
    rating: 5,
    image: bagImage("chili"),
    imageAlt: "CRISPO Spicy Chili chip bag",
    gallery: [bagImage("chili"), ...sharedGallery],
    sku: "CRS-CHL",
    shelfLife: "6 months",
    origin: "Made in India",
    nutrition: { calories: "155", fat: "9g", carbs: "14g", protein: "2g", sodium: "200mg" },
    ingredients: ["Potatoes", "Sunflower oil", "Chili powder", "Paprika", "Garlic", "Salt"],
    story: "A gentle heat that sneaks up on you — flavor first, warmth second, and a finish that invites another bite.",
    pairing: "Great with a lime wedge and a cold lager on game night.",
    variants: [
      { size: "Single Bag (50 g)", price: 20 },
      { size: "Party Pack (150 g)", price: 50, popular: true },
      { size: "Share Box (300 g)", price: 99 },
    ],
  },
  cheese: {
    id: "cheese",
    name: "Cheese Blast",
    tagline: "Rich cheddar dust for maximum snacking.",
    description:
      "Rich cheddar dust for maximum snacking. Bold, savory, and unapologetically cheesy.",
    accent: "#F5B731",
    accentDeep: "#D48A12",
    chip: "#F0C76A",
    rating: 4,
    image: bagImage("cheese"),
    imageAlt: "CRISPO Cheese Blast chip bag",
    gallery: [bagImage("cheese"), ...sharedGallery],
    sku: "CRS-CHS",
    shelfLife: "6 months",
    origin: "Made in India",
    nutrition: { calories: "160", fat: "10g", carbs: "14g", protein: "3g", sodium: "210mg" },
    ingredients: ["Potatoes", "Sunflower oil", "Cheddar cheese powder", "Whey", "Salt"],
    story: "Real cheddar dust tossed by hand until every ridge is coated. Snacking, elevated.",
    pairing: "Try it with a crisp apple or an ice-cold root beer.",
    variants: [
      { size: "Single Bag (50 g)", price: 20 },
      { size: "Party Pack (150 g)", price: 50, popular: true },
      { size: "Share Box (300 g)", price: 99 },
    ],
  },
  truffle: {
    id: "truffle",
    name: "Truffle Parmesan",
    tagline: "Earthy truffle meets savory parm.",
    description:
      "Earthy truffle meets savory parm. Gourmet flavor in a bag you can share — or not.",
    accent: "#6B4F3A",
    accentDeep: "#3F2A1E",
    chip: "#C9A57A",
    rating: 5,
    image: bagImage("truffle"),
    imageAlt: "CRISPO Truffle Parmesan chip bag",
    gallery: [bagImage("truffle"), ...sharedGallery],
    sku: "CRS-TRF",
    shelfLife: "6 months",
    origin: "Made in India",
    nutrition: { calories: "158", fat: "10g", carbs: "14g", protein: "3g", sodium: "190mg" },
    ingredients: ["Potatoes", "Sunflower oil", "Truffle oil", "Parmesan cheese", "Salt"],
    story: "White truffle oil and aged parmesan, finished to taste like a night out in a single crisp.",
    pairing: "Beautiful with a glass of chilled sparkling water or white wine.",
    variants: [
      { size: "Single Bag (50 g)", price: 35 },
      { size: "Party Pack (150 g)", price: 75, popular: true },
      { size: "Share Box (300 g)", price: 129 },
    ],
  },
  onion: {
    id: "onion",
    name: "Sour Cream Onion",
    tagline: "Cool creaminess with a tangy kick.",
    description:
      "Cool creaminess with a tangy kick. A crowd favorite that refreshes the palate.",
    accent: "#7AC47A",
    accentDeep: "#3E8F4A",
    chip: "#B7E0A8",
    rating: 4,
    image: bagImage("onion"),
    imageAlt: "CRISPO Sour Cream Onion chip bag",
    gallery: [bagImage("onion"), ...sharedGallery],
    sku: "CRS-ONN",
    shelfLife: "6 months",
    origin: "Made in India",
    nutrition: { calories: "152", fat: "9g", carbs: "15g", protein: "2g", sodium: "180mg" },
    ingredients: ["Potatoes", "Sunflower oil", "Sour cream powder", "Onion powder", "Parsley", "Salt"],
    story: "Tangy onion balanced with cool cream — the flavor that keeps the bowl coming back for more.",
    pairing: "Ideal alongside a sandwich or by itself at 3 p.m.",
    variants: [
      { size: "Single Bag (50 g)", price: 20 },
      { size: "Party Pack (150 g)", price: 50, popular: true },
      { size: "Share Box (300 g)", price: 99 },
    ],
  },
  bbq: {
    id: "bbq",
    name: "BBQ Smoke",
    tagline: "Smoky-sweet finish made for sharing.",
    description:
      "Smoky-sweet finish made for sharing. The flavor of a backyard cookout, anytime.",
    accent: "#8C1C33",
    accentDeep: "#5A0F20",
    chip: "#D9784A",
    rating: 5,
    image: bagImage("bbq"),
    imageAlt: "CRISPO BBQ Smoke chip bag",
    gallery: [bagImage("bbq"), ...sharedGallery],
    sku: "CRS-BBQ",
    shelfLife: "6 months",
    origin: "Made in India",
    nutrition: { calories: "157", fat: "9g", carbs: "15g", protein: "2g", sodium: "220mg" },
    ingredients: ["Potatoes", "Sunflower oil", "Brown sugar", "Smoked paprika", "Garlic", "Onion", "Salt"],
    story: "Slow-smoked hickory notes with a touch of brown sugar — built for passing around the table.",
    pairing: "Unbeatable with a cold cola or a burger fresh off the grill.",
    variants: [
      { size: "Single Bag (50 g)", price: 20 },
      { size: "Party Pack (150 g)", price: 50, popular: true },
      { size: "Share Box (300 g)", price: 99 },
    ],
  },
};

export const productIds = Object.keys(products);

export const formatPrice = (value: number) => `Rs ${value.toLocaleString("en-IN")}`;
