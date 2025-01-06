// populars
import Anchorage from "../../assets/images/popular/Anchorage To La Paz.jpg";
import Singapore from "../../assets/images/popular/Discover Singapore.png";
import Kiwiana from "../../assets/images/popular/Kiwiana Panorama.jpg";
import Quito from "../../assets/images/popular/Anchorage To Quito.jpg";
import Cuzco from "../../assets/images/popular/Cuzco To Anchorage.jpg";


// tour detail
import image1 from "../../assets/images/new/1.jpg";
import image2 from "../../assets/images/new/2.jpg";
import image3 from "../../assets/images/new/3.jpg";
import image4 from "../../assets/images/new/4.jpg";
import image5 from "../../assets/images/new/5.jpg";
import image6 from "../../assets/images/new/6.jpg";
import image7 from "../../assets/images/new/7.jpg";
import image8 from "../../assets/images/new/8.jpg";

export const popularsData = [
  {
    id: 0,
    title : "Job Title",
    image: Singapore,
    location: "Location name",
    category: ["Web Development", "MERN"],
    days: "1/2/3 months",
    price: 10000,
    afterDiscount: 92,
    rating: 3,
    reviews: 5,
  },
  {
    id: 1,
    title : "Job Title",
    image: Kiwiana,
    location: "Location name",
    category: ["UX", "UI"],
    days: "1/2/3 months",
    price: 8000,
    afterDiscount: 82,
    rating: 4,
    reviews: 9,
  },
  {
    id: 2,
    title : "Job Title",
    image: Quito,
    location: "Location name",
    category: ["ML"],
    days: "1/2/3 months",
    price: 8000,
    afterDiscount: 82,
    rating: 4,
    reviews: 9,
  },
  {
    id: 3,
    title : "Job Title",
    image: Anchorage,
    location: "Location name",
    category: ["Data Science"],
    days: "1/2/3 months",
    price: 4000,
    afterDiscount: 0,
    rating: 5,
    reviews: 20,
  },
  {
    id: 4,
    title : "Job Title",
    image: Cuzco,
    location: "Location name",
    category: ["Data entry"],
    days: "1/2/3 months",
    price: 9500,
    afterDiscount: 0,
    rating: 3,
    reviews: 12,
  },
  
];

export const tourDetails = {
  title : "Beautiful Bali with Malaysia",
  des: ` Bali, also known as the land of gods has plenty to offer to travelers from across the globe. As it so contrasted oh estimating instrument. Size like body some one had.  Are conduct viewing boy minutes warrant the expense?  Tolerably behavior may admit daughters offending her ask own. Praise effect wishes change way and any wanted.  Lively use looked latter regard had. Do he it part more  last in. We understand that theory is important to build a solid foundation, we understand that theory alone isn’t going to get the job done so that’s why this is packed with practical hands-on examples that you can  follow step by step.`,
  tourInfo: [
    '<strong className="font-bold"> Place Covered</strong>: Bali - Ubud',
    ' <strong className="font-bold">Duration:</strong>5 Days, 4 Nights',
    '<strong className="font-bold">Start Point:</strong> Ngurah International Airport',
    '<strong className="font-bold">End Point:</strong>  Ngurah International Airport',
  ],

  highlights: [
    " Experience a delightful tropical getaway with a luxurious stay and witness the picture-perfect beaches, charming waterfalls and so much more",
    " Dependent on so extremely delivered by. Yet no jokes  worse her why. Bed one supposing breakfast day fulfilled off depending questions.",
    " Whatever boy her exertion his extended. Ecstatic  followed handsome drawings entirely Mrs one yet  outweigh.",
    "Meant balls it if up doubt small purse. Required his  you put the outlived answered position. A pleasure exertion if believed provided to.",
  ],

  itinerary:[
    {
      title : `<span class="me-1 fw-bold">Day 1:</span>  Airport Pick Up `,
      des:` Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.`,
    },

    {
      title : `<span class="me-1 fw-bold">Day 2:</span>  Temples & River Cruise `,
      des:` Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in. `,
    },
    {
      title : `<span class="me-1 fw-bold">Day 3:</span>  Massage & Overnight Train`,
      des:` Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.`,
    },
    {
      title : `<span class="me-1 fw-bold">Day 4:</span>  Khao Sok National Park `,
      des:` Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.`,
    },
    {
      title : `<span class="me-1 fw-bold">Day 5:</span>  Travel to Koh Phangan `,
      des:` Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.
      `,
    },
    {
      title : `<span class="me-1 fw-bold">Day 6:</span> Morning Chill & Muay Thai Lesson `,
      des:`Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.
      `,
    },
    
  ],

  included:[
    'Comfortable stay for 4 nights in your preferred category Hotels',
    'Professional English speaking guide to help you explore the cities',
    'Breakfast is included as mentioned in Itinerary.',
    'Per Peron rate on twin sharing basis',
    'Entrance Tickets to Genting Indoor Theme Park    ',
    'All Tours & Transfers on Seat In Coach Basis ',
    'Visit Bali Safari & Marine Park with Jungle Hopper Pass    ',

  ],
  exclusion:[
    'Lunch and dinner are not included in CP plans',
    'Any other services not specifically mentioned in the inclusions',
    'Medical and Travel insurance',
    'Airfare is not included ',
    'Early Check-In & Late Check-Out ',
    'Anything which is not specified in Inclusions    ',

  ],

  images: [
    {
      original: image1,
      thumbnail: image1,
    },
    {
      original: image2,
      thumbnail: image2,
    },
    {
      original: image3,
      thumbnail: image3,
    },
    {
      original: image4,
      thumbnail: image4,
    },
    {
      original: image5,
      thumbnail: image5,
    },

    {
      original: image6,
      thumbnail: image6,
    },
    {
      original: image7,
      thumbnail: image7,
    },
    {
      original: image8,
      thumbnail: image8,
    },
  ],
};
