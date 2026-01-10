// Food images imports
import burgerClassic from "@/assets/burger-classic.jpg";
import burgerChicken from "@/assets/burger-chicken.jpg";
import burgerPaneer from "@/assets/burger-paneer.jpg";
import pizzaPepperoni from "@/assets/pizza-pepperoni.jpg";
import pizzaMargherita from "@/assets/pizza-margherita.jpg";
import pizzaBbqChicken from "@/assets/pizza-bbq-chicken.jpg";
import pizzaVeggie from "@/assets/pizza-veggie.jpg";
import chickenBucketFried from "@/assets/chicken-bucket-fried.jpg";
import chickenGrilled from "@/assets/chicken-grilled.jpg";
import fries from "@/assets/fries.jpg";
import onionRings from "@/assets/onion-rings.jpg";
import nachos from "@/assets/nachos.jpg";
import riceBowlChicken from "@/assets/rice-bowl-chicken.jpg";
import riceBowlVeg from "@/assets/rice-bowl-veg.jpg";
import wrapChicken from "@/assets/wrap-chicken.jpg";
import wrapPaneer from "@/assets/wrap-paneer.jpg";
import momosChicken from "@/assets/momos-chicken.jpg";
import momosVeg from "@/assets/momos-veg.jpg";
import momosFried from "@/assets/momos-fried.jpg";
import pastaAlfredo from "@/assets/pasta-alfredo.jpg";
import pastaArrabbiata from "@/assets/pasta-arrabbiata.jpg";
import waffleChocolate from "@/assets/waffle-chocolate.jpg";
import brownie from "@/assets/brownie.jpg";

export interface FoodItem {
  name: string;
  description: string;
  price: number;
  image: string;
  isVeg: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface MenuSection {
  id: string;
  title: string;
  subtitle?: string;
  items: FoodItem[];
}

export const categories: Category[] = [
  { id: "burgers", name: "Burgers", icon: "🍔" },
  { id: "pizza", name: "Pizza", icon: "🍕" },
  { id: "chicken", name: "Chicken Bucket", icon: "🍗" },
  { id: "snacks", name: "Snacks", icon: "🍟" },
  { id: "rice", name: "Rice Bowls", icon: "🍚" },
  { id: "wraps", name: "Wraps", icon: "🌯" },
  { id: "momos", name: "Momos", icon: "🥟" },
  { id: "pasta", name: "Pasta", icon: "🍝" },
  { id: "desserts", name: "Desserts", icon: "🧇" },
];

export const menuSections: MenuSection[] = [
  {
    id: "burgers",
    title: "Burgers",
    subtitle: "Juicy patties, fresh buns, loaded with flavor",
    items: [
      {
        name: "Classic Cheese Burger",
        description: "Juicy beef patty with melted cheddar, lettuce & special sauce",
        price: 199,
        image: burgerClassic,
        isVeg: false,
      },
      {
        name: "Spicy Chicken Burger",
        description: "Crispy fried chicken with jalapeños, slaw & sriracha mayo",
        price: 229,
        image: burgerChicken,
        isVeg: false,
      },
      {
        name: "Paneer Tikka Burger",
        description: "Grilled tandoori paneer with mint chutney & fresh veggies",
        price: 179,
        image: burgerPaneer,
        isVeg: true,
      },
    ],
  },
  {
    id: "pizza",
    title: "Pizza",
    subtitle: "Hand-tossed, stone-baked perfection",
    items: [
      {
        name: "Pepperoni Feast",
        description: "Loaded with spicy pepperoni & extra mozzarella cheese",
        price: 399,
        image: pizzaPepperoni,
        isVeg: false,
      },
      {
        name: "Margherita Classic",
        description: "Fresh tomatoes, basil, mozzarella on tangy marinara",
        price: 299,
        image: pizzaMargherita,
        isVeg: true,
      },
      {
        name: "BBQ Chicken Supreme",
        description: "Smoky BBQ chicken with red onions & bell peppers",
        price: 449,
        image: pizzaBbqChicken,
        isVeg: false,
      },
      {
        name: "Veggie Supreme",
        description: "Loaded with mushrooms, olives, peppers & onions",
        price: 349,
        image: pizzaVeggie,
        isVeg: true,
      },
    ],
  },
  {
    id: "chicken",
    title: "Chicken Bucket",
    subtitle: "Crispy, juicy, finger-licking good",
    items: [
      {
        name: "Crispy Fried Bucket (6 pcs)",
        description: "Golden crispy fried chicken with secret spice blend",
        price: 499,
        image: chickenBucketFried,
        isVeg: false,
      },
      {
        name: "Herb Grilled Chicken",
        description: "Tender grilled chicken with lemon herb marinade",
        price: 449,
        image: chickenGrilled,
        isVeg: false,
      },
    ],
  },
  {
    id: "snacks",
    title: "Snacks & Sides",
    subtitle: "Perfect companions to your meal",
    items: [
      {
        name: "Classic French Fries",
        description: "Crispy golden fries with ketchup & mayo",
        price: 99,
        image: fries,
        isVeg: true,
      },
      {
        name: "Onion Rings",
        description: "Crispy battered onion rings with chipotle dip",
        price: 129,
        image: onionRings,
        isVeg: true,
      },
      {
        name: "Loaded Nachos",
        description: "Cheese nachos with jalapeños, sour cream & salsa",
        price: 179,
        image: nachos,
        isVeg: true,
      },
    ],
  },
  {
    id: "rice",
    title: "Rice Bowls",
    subtitle: "Hearty, flavorful, satisfying bowls",
    items: [
      {
        name: "Chicken Biryani Bowl",
        description: "Aromatic saffron rice with spiced chicken & raita",
        price: 279,
        image: riceBowlChicken,
        isVeg: false,
      },
      {
        name: "Vegetable Fried Rice",
        description: "Wok-tossed rice with seasonal veggies & fried egg",
        price: 199,
        image: riceBowlVeg,
        isVeg: true,
      },
    ],
  },
  {
    id: "wraps",
    title: "Wraps & Rolls",
    subtitle: "Flavor wrapped in perfection",
    items: [
      {
        name: "Chicken Tikka Wrap",
        description: "Grilled tikka chicken with onions & creamy sauce",
        price: 189,
        image: wrapChicken,
        isVeg: false,
      },
      {
        name: "Paneer Tikka Wrap",
        description: "Smoky paneer tikka with mint chutney & veggies",
        price: 169,
        image: wrapPaneer,
        isVeg: true,
      },
    ],
  },
  {
    id: "momos",
    title: "Momos",
    subtitle: "Steamed, fried, always delicious",
    items: [
      {
        name: "Steamed Chicken Momos",
        description: "Juicy chicken-filled dumplings with spicy chutney",
        price: 149,
        image: momosChicken,
        isVeg: false,
      },
      {
        name: "Steamed Veg Momos",
        description: "Fresh vegetable-filled dumplings with green chutney",
        price: 129,
        image: momosVeg,
        isVeg: true,
      },
      {
        name: "Crispy Fried Momos",
        description: "Golden fried chicken momos with spicy sauce",
        price: 169,
        image: momosFried,
        isVeg: false,
      },
    ],
  },
  {
    id: "pasta",
    title: "Pasta",
    subtitle: "Al dente, creamy, full of flavor",
    items: [
      {
        name: "Chicken Alfredo",
        description: "Creamy parmesan sauce with tender chicken strips",
        price: 279,
        image: pastaAlfredo,
        isVeg: false,
      },
      {
        name: "Penne Arrabbiata",
        description: "Spicy tomato sauce with garlic & fresh basil",
        price: 229,
        image: pastaArrabbiata,
        isVeg: true,
      },
    ],
  },
  {
    id: "desserts",
    title: "Waffles & Desserts",
    subtitle: "Sweet endings to perfect meals",
    items: [
      {
        name: "Belgian Chocolate Waffle",
        description: "Crispy waffle with chocolate sauce, cream & strawberries",
        price: 199,
        image: waffleChocolate,
        isVeg: true,
      },
      {
        name: "Brownie with Ice Cream",
        description: "Warm chocolate brownie with vanilla ice cream",
        price: 179,
        image: brownie,
        isVeg: true,
      },
    ],
  },
];
