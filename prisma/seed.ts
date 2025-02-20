const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


const coffees = [
  // Mukilteo coffee Roasters
  {
    id: "0200234",
    created_at: new Date(),
    updated_at: new Date(),
    brand: "Mukilteo",
    name: "Happy Hippie",
    origin: "",
    description: "One of our most popular coffees. This complex blend combines three different varietals and two different roasts to achieve one of our most popular and enduring coffees. The cup is lively and rich, with nutty toffee notes, excellent balance, and vibrant flavor. Far out, man!",
    image: "https://www.mukilteocoffee.com/cdn/shop/files/HH_1024x1024@2x.png?v=1711128757",
    purchase_link: "https://www.mukilteocoffee.com/collections/coffees/products/happy-hippie-1?variant=11687075086378",
    price: "16.00",
    roast_level: "medium",
    decaf: false,
    decaf_process: "",
    bitterValue: 4,
    nuttyValue: 8,
    sweetValue: 5,
    fruityValue: 4,
    floralValue: 3,
  },
  {
    id: "0002315",
    created_at: new Date(),
    updated_at: new Date(),
    brand: "Mukilteo",
    name: "Chetzemoka",
    origin: "",
    description: "A Northwest favorite! Chetzemoka is a blend of Vienna and Italian-roasted coffees that brews up a flavorful and smoky cup with hints of molasses and roasted walnuts. It also makes award-winning espresso!",
    image: "https://www.mukilteocoffee.com/cdn/shop/files/CHETZ_720x.png?v=1711128243",
    purchase_link: "https://www.mukilteocoffee.com/collections/coffees/products/monorail-blend-1?variant=11687077478442",
    price: "16.00",
    roast_level: "medium",
    decaf: false,
    decaf_process: "",
    bitterValue: 5,
    nuttyValue: 8,
    sweetValue: 6,
    fruityValue: 3,
    floralValue: 1,
  },
  {
    id: "0002236",
    created_at: new Date(),
    updated_at: new Date(),
    brand: "Mukilteo",
    name: "Mukilteo",
    origin: "",
    description: "Considered our “Founder's” coffee, this popular blend is wonderful for both espresso and drip-brewed coffee. It is full-bodied and rich without bitterness. The flavor is broad and tangy, with great aromatic dimension. Dry, Well-rounded and not lingering. With hints of dark chocolate and plum.",
    image: "https://www.mukilteocoffee.com/cdn/shop/files/MUK_1024x1024@2x.png?v=1711129076",
    purchase_link: "https://www.mukilteocoffee.com/collections/signature-blends/products/mukilteo-blend-1",
    price: "16.00",
    roast_level: "medium",
    decaf: false,
    decaf_process: "",
    bitterValue: 3,
    nuttyValue: 5,
    sweetValue: 7,
    fruityValue: 7,
    floralValue: 2,
  },
  {
    id: "0009237",
    created_at: new Date(),
    updated_at: new Date(),
    brand: "Mukilteo",
    name: "Mukilteo decaf",
    origin: "",
    description: "Earthy tones, smooth and sweet, mild acidity, and creamy texture. This Swiss Water® Process decaf is carefully roasted to bring out rich flavors. You'll find it hard to believe that you're drinking a decaffeinated coffee. Weight: 12 oz.",
    image: "https://www.mukilteocoffee.com/cdn/shop/files/MukDW_1024x1024@2x.png?v=1711129111",
    purchase_link: "https://www.mukilteocoffee.com/collections/decaffeinated/products/swiss-water-decaffeinated-mukilteo-decaf-1?variant=11687080263722",
    price: "17.00",
    roast_level: "medium",
    decaf: true,
    decaf_process: "Swiss Water",
    bitterValue: 6,
    nuttyValue: 7,
    sweetValue: 7,
    fruityValue: 6,
    floralValue: 2,
  },
  {
    id: "0080238",
    created_at: new Date(),
    updated_at: new Date(),
    brand: "Mukilteo",
    name: "French Roast",
    origin: "Guatemala",
    description: "Very dark, with low-acid. The darkest of our roasts, French has a distinctive low acidity, bittersweet pungency, and assertive smoky aroma. Its character is smooth, dark, and tangy, like a fine single-malt Scotch. Delicious with dessert.",
    image: "https://www.mukilteocoffee.com/cdn/shop/files/FRENCH_1024x1024@2x.png?v=1711128383",
    purchase_link: "https://www.mukilteocoffee.com/collections/coffees/products/french-roast?variant=11687051165738",
    price: "18.00",
    roast_level: "dark",
    decaf: false,
    decaf_process: "",
    bitterValue: 7,
    nuttyValue: 5,
    sweetValue: 7,
    fruityValue: 1,
    floralValue: 1,
  },
  // Kicking Horse coffee
  {
    id: "0002733",
    created_at: new Date(),
    updated_at: new Date(),
    brand: "Kicking Horse",
    name: "Kick Ass",
    origin: "Indonesia, Central & South America",
    description: "If there’s something worth doing, we think it’s worth doing great. This remarkable blend of beans is the spirit of Kicking Horse® Coffee, and a bold invitation to wake up and kick ass with us. Smoky, sweet vanilla and dark chocolate. Chocolate malt, molasses, licorice and an earthy lingering finish.",
    image: "https://m.media-amazon.com/images/I/31oj637lsFL._SX300_SY300_QL70_FMwebp_.jpg",
    purchase_link: "https://kickinghorsecoffee.com/products/kick-ass-coffee?srsltid=AfmBOoq-iGuE1qyULfhlFOFYvHUB14dSFgzKUDgbbResTDoembJOJPiP",
    price: "13.99",
    roast_level: "dark",
    decaf: false,
    decaf_process: "",
    bitterValue: 7,
    nuttyValue: 5,
    sweetValue: 7,
    fruityValue: 3,
    floralValue: 4,
  },
  // Brooklyn Lab
  {
    id: "0002263333",
    created_at: new Date(),
    updated_at: new Date(),
    brand: "Brooklyn Lab",
    name: "Manhattan Blend Coffee",
    origin: "New York, USA",
    description: "Dark Chocolate. Cedar. Peach. Well-known for its smooth and full-bodied flavor, this roast is a bold character. Composing of earthy and complex flavors of bittersweet chocolate, peach-like dryness and acidity. The wet-hulling process also known as “Giling Basah” gives this coffee its distinctive earthy character.",
    image: "https://brooklynlabcoffee.com/cdn/shop/files/ManhattanWhole_medium.png?v=1715285143",
    purchase_link: "https://brooklynlabcoffee.com/products/manhattan-blend-coffee",
    price: "15.99",
    roast_level: "medium",
    decaf: false,
    decaf_process: "",
    bitterValue: 5,
    nuttyValue: 5,
    sweetValue: 4,
    fruityValue: 4,
    floralValue: 2,
  },
  {
    id: "00022533",
    created_at: new Date(),
    updated_at: new Date(),
    brand: "Colombia",
    name: "Whole Bean Coffee Medium Roast",
    origin: "Colombia",
    description: "Balanced, full-bodied medium roast with a smooth finish",
    image: "https://images-na.ssl-images-amazon.com/images/I/71eXshva6vL._AC_UL210_SR210,210_.jpg",
    purchase_link: "https://www.amazon.com/AmazonFresh-Colombia-Ground-Coffee-Medium/dp/B072MQ5BRX/ref=asc_df_B072MQ5BRX/?tag=hyprod-20&linkCode=df0&hvadid=730312820598&hvpos=&hvnetw=g&hvrand=3337709197537437067&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9033316&hvtargid=pla-2281435181698&hvocijid=3337709197537437067-B072MQ5BRX-&hvexpln=73&th=1",
    price: "11.51",
    roast_level: "medium",
    decaf: false,
    decaf_process: "",
    bitterValue: 3,
    nuttyValue: 3,
    sweetValue: 5,
    fruityValue: 5,
    floralValue: 3,
  },
  {
    id: "000235425",
    created_at: new Date(),
    updated_at: new Date(),
    brand: "Death Wish Coffee Co.",
    name: "Dark Roast",
    origin: "Colombia",
    description: "Immerse yourself in a smooth, subtle cherry and chocolate flavor profile that is never bitter. We've thoughtfully and carefully selected premium Arabica and Robusta whole coffee beans from around the world to deliver you a coffee beans dark roast beverage with a bold taste you’ll find irresistible and instantly fall in love with.",
    image: "https://m.media-amazon.com/images/I/61nsKameQEL._SX679_.jpg",
    purchase_link: "https://www.amazon.com/Death-Wish-Coffee-Strongest-Certified/dp/B006CQ1ZHI/ref=sr_1_4?crid=3VPBECGFWJZ3B&dib=eyJ2IjoiMSJ9.uhMCc2zQ9hrtTmVZlFb2xqo-5w1x-shOp7yT5_U_mIh5wy2tMqLOjdGEuJ77rRzU--mmGbLi9YaLhy3c5xW6ePm8v7Ofy8QwzHhWgXN0DE8dluOhvhPELbwuBP184ejKkQw-b2ZrcyedLgF0VImw0nq6ksE20wH6yFemfWq94SBC97gx2u-R3uEgmlOXc1Sz6Qi7zgSQYqmsi2HqyZks4ZNG2s92TLurCmvNF5dQhVMiKv4MBkqLESup0kYNtxmLKhfl01rZ2xWkB-K2EvY4TkhQU6QzZB7UuuX97zAlbiFyAQpSFXHzgJ5OWz3k_zACizf4bT_4gprHsLsAK7pwN416T8MT4OXQQUYvCeN1iU8.OxHb-1LJ12LgJnbXP9NgQzp3OASXzLU7nUEJwyGFpj0&dib_tag=se&keywords=death+wish+coffee+dark+roast&qid=1739063315&s=grocery&sprefix=death+wish+coffee+dark+roas%2Cgrocery%2C146&sr=1-4",
    price: "14.09",
    roast_level: "dark",
    decaf: false,
    decaf_process: null,
    bitterValue: 5,
    nuttyValue: 7,
    sweetValue: 2,
    fruityValue: 6,
    floralValue: 1,
  },
  // Blue Bottle
  {
    id: "000122232",
    created_at: new Date(),
    updated_at: new Date(),
    brand: "Blue Bottle",
    name: "Playlist",
    origin: "Colombia",
    description: "This blend is like the pair of adult siblings who, after years of talking over one another at the dinner table, finally get along. Two distinct washed coffees become mild and sweet, with flickers of brightness and whispers of fruit. How nice to know that this coffee blend, like family, finds balance when mixed in the right proportions.",
    image: "https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_2048,q_auto/2024/2024%20Updated%20Packaging/Playlist%20Blend/M1_Playlist_Hero.png",
    purchase_link: "https://bluebottlecoffee.com/us/eng/product/playlist?srsltid=AfmBOoreaMUMah7KD7rkutGVGQcv-8oxzeFmpLH9vuIlo9p5l0S60WUK",
    price: "13.00",
    roast_level: "light",
    decaf: false,
    decaf_process: null,
    bitterValue: 1,
    nuttyValue: 3,
    sweetValue: 6,
    fruityValue: 6,
    floralValue: 1,
  },
  {
    id: "00022353335",
    created_at: new Date(),
    updated_at: new Date(),
    brand: "Blue Bottle",
    name: "Hayes Valley Espresso",
    origin: "Colombia",
    description: "Hayes Valley is a consistent guest favorite: the foundation of our cafe espresso drinks and a best seller for whole bean coffee. It’s also our darkest espresso on the menu and completely organic — what’s not to love? Sip it straight to appreciate the voluptuous tawny crema and impressive viscosity. Or add milk to soften its brooding aspects for a sweeter yet assertive drink.",
    image: "https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_2048,q_auto/2024/2024%20Updated%20Packaging/Hayes%20Valley%20Espresso/M1_HayesValleyEspresso_Hero.png",
    purchase_link: "https://bluebottlecoffee.com/us/eng/product/hayes-valley-espresso?srsltid=AfmBOoogCQcwIaYxtsJowaVh16Plq1ttpnhv-X0TNwF5ZfwEZJi-wxhY",
    price: "13.00",
    roast_level: "dark",
    decaf: false,
    decaf_process: "",
    bitterValue: 6,
    nuttyValue: 7,
    sweetValue: 5,
    fruityValue: 5,
    floralValue: 1,
  },
  // Peets
  {
    id: "0002353315",
    created_at: new Date(),
    updated_at: new Date(),
    brand: "Pete's",
    name: "Sun Catcher",
    origin: "Brazil, Kenya",
    description: "Hayes Valley is a consistent guest favorite: the foundation of our cafe espresso drinks and a best seller for whole bean coffee. It’s also our darkest espresso on the menu and completely organic — what’s not to love? Sip it straight to appreciate the voluptuous tawny crema and impressive viscosity. Or add milk to soften its brooding aspects for a sweeter yet assertive drink.",
    image: "data:image/jpeg;base64,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",
    purchase_link: "https://www.peets.com/products/suncatcher",
    price: "18.95",
    roast_level: "light",
    decaf: false,
    decaf_process: "",
    bitterValue: 2,
    nuttyValue: 2,
    sweetValue: 7,
    fruityValue: 8,
    floralValue: 6,
  },
  {
    id: "033313",
    created_at: new Date(),
    updated_at: new Date(),
    brand: "Fidalgo",
    name: "Daybreak Blend",
    origin: "",
    description: "What sets Fidalgo Coffee's Daybreak Blend apart is its distinctive flavor profile. With bright notes of toasted hazelnut and cocoa, this coffee has a warm and inviting aroma that is sure to delight the senses. The medium-light roast level allows the unique flavors of the beans to shine through, resulting in a balanced and nuanced taste. In addition, Daybreak Blend is Kosher certified, ensuring that it meets the strict dietary standards of the Jewish community.",
    image: "https://fidalgocoffee.com/wp-content/uploads/2022/05/83623500213_DaybreakBlend_12oz_WB_1.jpg",
    purchase_link: "https://fidalgocoffee.com/product/daybreak-blend/",
    price: "14.69",
    roast_level: "medium-light",
    decaf: false,
    decaf_process: "",
    bitterValue: 2,
    nuttyValue: 3,
    sweetValue: 6,
    fruityValue: 7,
    floralValue: 4,
  }
];

async function main() {
  await prisma.coffee.deleteMany();
  await prisma.coffee.createMany({ data: coffees });
  console.log("Seeded coffees!");
}

main().catch(console.error).finally(() => prisma.$disconnect());
