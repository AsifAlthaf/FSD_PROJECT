import { BiCategory } from "react-icons/bi";

export const groceryData = [
  // Vegetables
  {
    id: 1,
    name: "Fresh Tomatoes",
    price: 40,
    category: "vegetables",
    image: "https://th.bing.com/th?id=OIP.691Hw6NXrfwl4cskWAja_QHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    discount: 10,
    type: "packaged"
  },
  {
    id: 2,
    name: "Organic Spinach",
    price: 30,
    category: "green-vegetables",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=200",
    discount: 5,
    type: "packaged"
  },
  {
    id: 3,
    name: "Broccoli",
    price: 60,
    category: "green-vegetables",
    image: "https://th.bing.com/th?id=OIP.2I8hMFUQ-gk3U1beXw7rqAHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    discount: 0,
    type: "packaged"
  },
  // Fruits
  {
    id: 4,
    name: "Fresh Bananas",
    price: 50,
    category: "fruits",
    image: "https://th.bing.com/th?id=OIP.9uL9bdYXO1RW8GErkX9wBwHaE9&w=305&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    discount: 15,
    type: "packaged"
  },
  {
    id: 5,
    name: "Organic Apples",
    price: 80,
    category: "fruits",
    image: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=200",
    discount: 0,
    type: "packaged"
  },
  // Dairy
  {
    id: 6,
    name: "Farm Fresh Milk",
    price: 65,
    category: "dairy",
    image: "https://th.bing.com/th/id/OIP.LkT9gCXsnDoF49EdevfodAHaHa?w=172&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    discount: 0,
    type: "natural"
  },
  {
    id: 7,
    name: "Farm Fresh Eggs",
    price: 45,
    category: "dairy",
    image: "https://th.bing.com/th/id/OIP.MHRs3RvmbX-g0nLzPK1_4AHaE7?rs=1&pid=ImgDetMain",
    discount: 20,
    type: "natural"
  },
  {
    id: 8,
    name: "Fresh Yogurt",
    price: 70,
    category: "dairy",
    image: "https://th.bing.com/th?id=OSK.HEROd429Y2Jamzz3w3sr2kgnIuKxlc2-HzqLmcHDUvXaDqo&w=312&h=200&c=15&rs=2&o=6&dpr=1.3&pid=SANGAM",
    discount: 0,
    type: "packaged"
  },
  // Meat & Seafood
  {
    id: 9,
    name: "Fresh Chicken",
    price: 220,
    category: "meat",
    image: "https://th.bing.com/th?id=OIP.1w_OCY4jwmuVZd_J_fBDDAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    discount: 0,
    type: "natural"
  },
  {
    id: 10,
    name: "Tuna Fish",
    price: 450,
    category: "seafood",
    image: "https://cdn.pixabay.com/photo/2022/06/26/16/15/tuna-7285848_1280.jpg",
    discount: 5,
    type: "natural"
  },
  {
    id: 11,
    name: "Fresh Prawns",
    price: 350,
    category: "seafood",
    image: "https://th.bing.com/th/id/OIP.xQsqj8cDe8PqzylMYPmonAHaFW?w=252&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    discount: 0,
    type: "natural"
  },
  {
    id: 12,
    name: "Goat Meat",
    price: 550,
    category: "meat",
    image: "https://th.bing.com/th?id=OSK.HEROKwi1ePa8UIFb_i0XhdvOj0x1PRQ5GNAuQM5Neesw968&w=312&h=200&c=15&rs=2&o=6&dpr=1.3&pid=SANGAM",
    discount: 0,
    type: "natural"
  },
  {
    id: 13,
    name: "Raw Honey",
    price: 180,
    category: "natural",
    image: "https://th.bing.com/th/id/OIP.Yco9ervCXjxN5UClAbjZcAHaEC?w=307&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    discount: 0,
    type: "natural"
  },
  {
    id: 14,
    name: "Beef",
    price: 179,
    category: "meat",
    image: "https://th.bing.com/th/id/OIP.TWANhiuTZQTAtlajCy5DcwHaFW?w=252&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    discount: 0,
    type: "natural"
  },
  {
    id: 15,
    name: "Carrots",
    price: 26.5,
    category: "vegetables",
    image: "https://th.bing.com/th?id=OIP.J9Ok0sx2PK5cFBtzJ_HaJgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    discount: 0,
    type: "packaged"
  },
  {
    id: 16,
    name: "Green Chilli",
    price: 32.88,
    category: "vegetables",
    image: "https://th.bing.com/th?id=OIP.4fTU2OCSXb06OGt0b2zbTwHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    discount: 0,
    type: "packaged"
  },
  {
    id: 17,
    name: "Green Apple",
    price: 90,
    category: "fruits",
    image: "https://www.bing.com/th?id=OIP.HvuIT7wvdmTm_nBq4WlN6AHaHT&w=177&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    discount: 0,
    type: "packaged"
  },
  {
    id: 18,
    name: "Cucumber",
    price: 34,
    category: "vegetables",
    image: "https://th.bing.com/th/id/OIP.qbRVMJDspnzsOYtIPMi-cwHaD4?w=339&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    discount: 0,
    type: "packaged"
  },
  {
    id: 19,
    name: "Duck Eggs",
    price: 129,
    category: "diary",
    image: "https://www.bigbasket.com/media/uploads/p/l/1205941_1-fresho-duck-eggs.jpg",
    discount: 0,
    type: "packaged"
  },
  {
    id: 20,
    name: "Fresh Oranges",
    price: 100,
    category: "fruits",
    image: "https://www.bing.com/th?id=OIP.MPxKfq5aKzICpVgJi5q5UQHaE8&w=199&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    discount: 0,
    type: "packaged"
  },
  {
    id: 21,
    name: "Kiwi Fruit",
    price: 120,
    category: "fruits",
    image: "https://www.bing.com/th?id=OIP.Sq672O7CrJr4mi4zNTYi0AHaFj&w=182&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    discount: 0,
    type: "packaged"
  },
  {
    id: 22,
    name: "Lemon",
    price: 46,
    category: "fruits",
    image: "https://th.bing.com/th?id=OIP.FxbMVKl6mWBFaPi2Q5UsRAHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    discount: 0,
    type: "packaged"
  },
  {
    id: 23,
    name: "Water Melon",
    price: 80,
    category: "fruits",
    image: "https://th.bing.com/th/id/OIP.IHV1PRn0ZqjQJvaoGcEm8gHaHa?w=160&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    discount: 0,
    type: "packaged"
  },
  {
    id: 24,
    name: "Curry Leaves",
    price: 10,
    category: "green-vegetables",
    image: "https://th.bing.com/th/id/OIP.nZLzfp01wUczEWUgJwgJLgHaFj?w=228&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    discount: 0,
    type: "packaged"
  },
  {
    id: 25,
    name: "Pudina",
    price: 15,
    category: "green-vegetables",
    image: "https://th.bing.com/th/id/OIP.N0c6q2YRX2VaHt_ekPXNWAHaEu?w=301&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    discount: 0,
    type: "packaged"
  },
  {
    id: 26,
    name: "Potato",
    price: 55,
    category: "vegetables",
    image: "https://th.bing.com/th?id=OSK.HEROe5bH4ogZ9NApClwimz8Y15XmqewavuKCHcNzlGI4mQs&w=312&h=200&c=15&rs=2&o=6&dpr=1.3&pid=SANGAM",
    discount: 0,
    type: "packaged"
  },
  {
    id: 27,
    name: "Onions",
    price: 38,
    category: "vegetables",
    image: "https://www.tasteofhome.com/wp-content/uploads/2020/05/shutterstock_28612930-e1515537001512.jpg",
    discount: 0,
    type: "packaged"
  },
  {
    id: 28,
    name: "Butter",
    price: 369,
    category: "dairy",
    image: "https://th.bing.com/th/id/OIP.BQ-Ogf8tT7Jt4DD6H59CqgHaE8?w=278&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    discount: 0,
    type: "packaged"
  },
  {
    id: 29,
    name: "Cheese",
    price: 110,
    category: "dairy",
    image: "https://th.bing.com/th/id/R.570ddc9bd2c513838f36baba3b560b3f?rik=Y08HpFJxA20GoA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-diDEssV-lFQ%2fUpMmIXp4ykI%2fAAAAAAAAAR0%2f37xifdicBCI%2fs1600%2fcheese.jpg&ehk=LeuMkkP3Yv0uGb7IA8%2fGzbOJUJ4ofLt%2fOjoMB%2b%2bkz9I%3d&risl=&pid=ImgRaw&r=0",
    discount: 0,
    type: "packaged"
  },
  {
    id: 30,
    name: "Fresh Curd",
    price: 60,
    category: "dairy",
    image: "https://th.bing.com/th?id=OIP.uGavw7xv56HKsaOTgNhdVgHaGA&w=277&h=225&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    discount: 0,
    type: "packaged"
  },
 
  {
    id: 31,
    name: "StrawBerry",
    price: 90,
    category: "fruits",
    image: "https://th.bing.com/th/id/OIP.ZuEFciDi8mE8QE8UcFOLfQHaFH?w=261&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    discount: 0,
    type: "packaged"
  }
];