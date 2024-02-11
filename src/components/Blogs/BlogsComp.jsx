import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/tajmahal.jpg";
import Img2 from "../../assets/places/water.jpg";
import Img3 from "../../assets/places/boat.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Top places to visit in India",
    description:
      "India, a land of diverse cultures and rich history, boasts a myriad of enchanting destinations. The iconic Taj Mahal in Agra stands as a testament to eternal love, its stunning architecture drawing visitors from across the globe. Jaipur, the Pink City, captivates with its regal palaces and vibrant markets, while Varanasi along the Ganges River exudes spiritual energy with ancient temples and mesmerizing Ganga Aarti. In the Himalayan foothills, Rishikesh and Haridwar offer tranquility and spiritual fervor. The backwaters of Kerala provide a peaceful retreat, and the rock-cut caves of Ajanta and Ellora in Maharashtra showcase ancient artistry. Goa's golden beaches, Mysore's cultural richness, and the intricate carvings of Khajuraho Temples beckon exploration. Hampi's ancient ruins, a UNESCO World Heritage site, transport visitors to a bygone era, completing the tapestry of India's top destinations.",
    author: "Richard",
    date: "April 22, 2022",
  },
  {
    id: 1,
    image: Img2,
    title: "Top places to visit in US",
    description:
      "The United States, a vast and diverse nation, unfolds a tapestry of captivating destinations for travelers. New York City, an iconic metropolis, pulsates with energy amidst its towering skyscrapers and cultural landmarks like Times Square and Central Park. The Grand Canyon in Arizona stands as a natural wonder, with its awe-inspiring, vast landscapes carved by the Colorado River. The vibrant city of New Orleans in Louisiana beckons with its rich music heritage, lively festivals, and distinctive Creole cuisine. San Francisco, California, charms with the iconic Golden Gate Bridge and its eclectic neighborhoods. The breathtaking Yellowstone National Park, spanning across Wyoming, Montana, and Idaho, offers geothermal wonders and diverse wildlife. The sunny beaches of Miami, Florida, are a haven for relaxation and vibrant nightlife. In Washington, D.C., the nation's capital, explore the historic landmarks, museums, and the iconic National Mall. The magical Disneyland in Anaheim, California, provides a whimsical escape for families. From the bustling streets of Chicago to the serene beauty of the Hawaiian Islands, the United States presents a mosaic of experiences, each destination weaving a unique story in the traveler's journey.",
    author: "Alicia",
    date: "April 22, 2022",
  },
  {
    id: 1,
    image: Img3,
    title: "Top places to visit in Japan",
    description:
      "Japan, a captivating blend of ancient traditions and cutting-edge modernity, unfolds a plethora of enchanting destinations for visitors. Tokyo, the bustling capital, showcases futuristic skyscrapers, historic temples, and vibrant street life in districts like Shibuya and Akihabara. Kyoto, steeped in cultural heritage, boasts centuries-old temples, traditional tea houses, and the iconic Fushimi Inari Shrine with its torii gate pathway. The historic city of Nara welcomes visitors with friendly deer roaming freely in its parks and ancient temples, such as Todai-ji. Hiroshima, marked by resilience and rebirth, invites reflection at the Peace Memorial Park and Museum. The scenic landscapes of Hakone, nestled near Mount Fuji, offer hot springs, stunning views, and the chance to experience traditional ryokan stays. Osaka, known for its culinary delights, serves up delicious street food and the iconic Osaka Castle. The historic town of Takayama, surrounded by the Japanese Alps, immerses visitors in well-preserved Edo-period architecture and local crafts. Miyajima Island, famed for its 'floating' torii gate and friendly deer, provides a serene escape. From the snow-capped peaks of Hokkaido to the tropical beauty of Okinawa, Japan unfolds a diverse and captivating tapestry of travel experiences.",
    author: "Adam",
    date: "April 22, 2022",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
