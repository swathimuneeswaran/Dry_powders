import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../styles/Main.css';
import apple_flake from "../assets/powders/apple_flake.png";
import apple_pow from "../assets/powders/apple_pow.png";
import apri_flake from "../assets/powders/apri_flake.png";
import apri_pow from "../assets/powders/apri_pow.png";
import ban_pow from "../assets/powders/ban_pow.png";
import bitter_pow from "../assets/powders/bitter_pow.jpg";
import cab_pow from "../assets/powders/cab_pow.png";
import cap_flake from "../assets/powders/cap_flake.png";
import cap_pow from "../assets/powders/cap_pow.png";
import carrot_pow from "../assets/powders/carrot_pow.jpg";
import cory_flake from "../assets/powders/cory_flake.png";
import cory_pow from "../assets/powders/cory_pow.png";
import curry_flake from "../assets/powders/curry_flake.png";
import curry_pow from "../assets/powders/curry_pow.png";
import drum_flake from "../assets/powders/drum_flake.png";
import drum_pow from "../assets/powders/drum_pow.jpg";
import garlic_flake from "../assets/powders/garlic_flake.png";
import ginger_pow from "../assets/powders/ginger_pow.jpg";
import goa_flake from "../assets/powders/goa_flake.png";
import goose_flake from "../assets/powders/goose_flake.png";
import goose_pow from "../assets/powders/goose_pow.png";
import green_flake from "../assets/powders/green_flake.png";
import rose_flake from "../assets/powders/rose_flake.png";
import rose_pow from "../assets/powders/rose_pow.jpg";
import sap_flake from "../assets/powders/sap_flake.png";
import sap_pow from "../assets/powders/sap_pow.png";


const pro = [
    {
      id: 1,
      image: apple_flake,
      name: "Apple Flakes",
      benefits:"Apples are renowned for their nutritional value, and our dehydrated flakes retain these benefits. They are rich in dietary fibre, vitamins, and antioxidants, promoting overall health and well-being."
    },
    {
      id: 2,
      image: apple_pow,
      name: "Apple Powder",
      benefits:"Apples are renowned for their nutritional value, and our dehydrated powder retains essential vitamins, minerals, and dietary fibre. It provides a natural source of antioxidants, supporting overall health and well-being."
    },
    {
      id: 3,
      image: apri_flake,
      name: "Apricot Flakes",
      benefits:"Apricots are known for their nutritional richness, and our dehydrated flakes maintain these benefits. They are a good source of dietary fibre, vitamins A and C, potassium, and antioxidants, supporting overall health and well-being."
    },
    {
      id: 4,
      image: apri_pow,
      name: "Apricot Powder",
      benefits:"Apricots are renowned for their nutritional richness, and our dehydrated powder retains essential vitamins, minerals, and dietary fibre. It provides a natural source of vitamin A, vitamin C, antioxidants, and potassium, supporting eye health, immune function, and overall well-being."
    },
    {
      id: 5,
      image: ban_pow,
      name: "bannana Powder",
      benefits:"Bananas are renowned for their nutritional value, and our dehydrated powder retains essential vitamins, minerals, and dietary fibre. It provides a natural source of potassium, vitamins B6 and C, aiding in digestion and supporting overall health and well-being."
    },
    {
      id: 6,
      image: bitter_pow,
      name: "Bitter Gourd Powder",
      benefits:"Bitter gourd is rich in vitamins, minerals, and antioxidants, known for their health-promoting properties. Our dehydrated powder retains these beneficial elements, offering a convenient way to incorporate bitter gourd into your diet."
    },
    {
      id: 7,
      image: cab_pow,
      name: "Cabbage Powder",
      benefits:"Cabbage is low in calories and packed with vitamins, minerals, and antioxidants, contributing to overall health and well-being. Our dehydrated powder retains these beneficial properties, offering a convenient way to incorporate cabbage into your diet."
    },
    {
      id: 8,
      image: cap_flake,
      name: "Capsicum Flakes",
      benefits:"Capsicum is a nutritional powerhouse, and our Dehydrated Capsicum Flakes are no exception. They are rich in vitamins A and C, antioxidants, and dietary fibre, promoting overall health and wellness."
    },
    {
      id: 9,
      image: cap_pow,
      name: "Capsicum Powder",
      benefits:"Capsicums are rich in vitamins, minerals, and antioxidants, contributing to overall health and well-being. Our dehydrated powder retains these beneficial properties, offering a convenient way to incorporate capsicums into your diet."
    },
    {
      id: 10,
      image: carrot_pow,
      name: "Carrot Powder",
      benefits:"Carrots are packed with essential vitamins, minerals, and antioxidants, contributing to overall health and well-being. Our dehydrated powder retains these beneficial properties, offering a convenient way to incorporate carrots into your diet."
    },
    {
      id: 11,
      image: cory_flake,
      name: "Corainder Flakes",
      benefits:"Coriander leaves are rich in antioxidants, vitamins (such as vitamin A, C, and K), minerals (like iron and calcium), and dietary fibre, which support overall health and digestion. Our dehydrated flakes retain these nutritional benefits, offering a convenient way to incorporate coriander leaves into your diet."
    },
    {
      id: 12,
      image: cory_pow,
      name: "Coriander Powder",
      benefits:"Coriander leaves are rich in vitamins (such as vitamin A, C, and K), minerals (like calcium, iron, and potassium), antioxidants, and essential oils, which support digestion and promote overall health. Our dehydrated powder retains these beneficial properties, offering a convenient way to incorporate coriander leaves into your diet."
    },
    {
      id: 13,
      image: curry_flake,
      name: "Curryleaves Flakes",
      benefits:"Curry leaves are rich in antioxidants, vitamins (such as vitamin A, B, and C), minerals (like iron and calcium), and other beneficial compounds that support overall health and well-being. Our dehydrated flakes retain these nutritional benefits, offering a convenient way to incorporate curry leaves into your diet."
    },
    {
      id: 14,
      image: curry_pow,
      name: "Curryleaves Powder",
      benefits:"Curry leaves are rich in vitamins (such as vitamin A, B, C, and E), minerals (like iron, calcium, and phosphorus), antioxidants, and essential oils, which support digestion and promote hair and skin health. Our dehydrated powder retains these beneficial properties, offering a convenient way to incorporate curry leaves into your diet."
    },
    {
      id: 15,
      image: drum_flake,
      name: "Drumstick Flakes",
      benefits:"Drumstick leaves are renowned for their health benefits, including potential anti-inflammatory and cholesterol-lowering properties. Our dehydrated flakes retain these beneficial properties, offering a convenient way to incorporate drumstick leaves into your diet."
    },
    {
      id: 16,
      image: garlic_flake,
      name: "Garlic Flakes",
      benefits:": Garlic is renowned for its health benefits, including its anti-inflammatory and immune-boosting properties. Our dehydrated flakes retain these beneficial properties, offering a convenient way to incorporate garlic into your cooking."
    },
    {
      id: 17,
      image: ginger_pow,
      name: "Ginger Powder",
      benefits:"Ginger is known for its anti-inflammatory and digestive properties, as well as being rich in antioxidants. Our dehydrated powder retains these beneficial properties, offering a convenient way to incorporate ginger into your diet."
    },
    {
      id: 18,
      image: goa_flake,
      name: "Guava Flakes",
      benefits:"Guavas are known for their nutritional richness, and our dehydrated flakes maintain these benefits. They are a good source of dietary fibre, vitamins A and C, potassium, and antioxidants, promoting overall health and well-being."
    },
    {
      id: 19,
      image: goose_flake,
      name: "Goose Flakes",
      benefits:"Amla is renowned for its nutritional richness, and our dehydrated flakes retain these benefits. They are packed with vitamin C, antioxidants, and beneficial phytochemicals, promoting immune health and overall well-being."
    },
    {
      id: 20,
      image: green_flake,
      name: "Green Flakes",
      benefits:"Green chilies are rich in vitamins (such as vitamin C), antioxidants, and capsaicin, which may have metabolism-boosting and anti-inflammatory properties. Our dehydrated flakes retain these nutritional benefits, offering a convenient way to incorporate green chilies into your diet."
    },
    {
      id: 21,
      image: rose_flake,
      name: "Rose Flakes",
      benefits:"Roses are known for their aromatic and potential health benefits, and our dehydrated flakes retain essential nutrients and compounds. They provide a delicate floral essence, contributing to the sensory experience while offering potential antioxidant properties and promoting well-being."
    },
    {
      id: 22,
      image: rose_pow,
      name: "Rose Powder",
      benefits:"Roses are valued for their aromatic and potential health benefits, and our dehydrated powder retains essential nutrients and compounds. It provides a delicate floral essence, contributing to the sensory experience while offering potential antioxidant properties and promoting well-being."
    },
    {
      id: 23,
      image: sap_flake,
      name: "Sapota Flakes",
      benefits:"Sapotas are known for their nutritional richness, and our dehydrated flakes maintain these benefits. They are a good source of dietary fibre, vitamins A and C, potassium, and antioxidants, promoting overall health and well-being."
    },
    {
      id: 24,
      image: sap_pow,
      name: "Sapota Powder",
      benefits:"Sapotas are renowned for their nutritional value, and our dehydrated powder retains essential vitamins, minerals, and dietary fibre. It provides a natural source of antioxidants, aiding in digestion and supporting overall health and well-being."
    },
    {
      id: 25,
      image: drum_pow,
      name: "Drumstick Powder",
      benefits:"Drumstick leaves are renowned for their health benefits, including potential anti-inflammatory properties, promoting digestion, and supporting immune function. Our dehydrated powder retains these beneficial properties, offering a convenient way to incorporate drumstick leaves into your diet."
    },
  ];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tab: {
    breakpoint: { max: 1024, min: 780 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 780, min: 480 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 480, min: 0 },
    items: 1,
  },
};

const Products = () => {
    const [showArrows, setShowArrows] = useState(true);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setShowArrows(false);
        } else {
          setShowArrows(true);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <section className="products-section">
        <h1>Health Benefits</h1>
        <Carousel
          responsive={responsive}
          showDots={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          containerClass="carousel-container"
          itemClass="carousel-item"
          arrows={false}
          customButtonGroup={<CustomButtonGroup showArrows={showArrows} />}
        >
          {pro.map((item, ind) => (
            <div className="quality" key={ind}>
              <img src={item.image} alt={`Product ${item.id}`} />
              <h3>{item.name}</h3>
              <p>{item.benefits}</p>
            </div>
          ))}
        </Carousel>
      </section>
    );
  };
  
  const CustomButtonGroup = ({ next, previous, showArrows }) => {
    return (
      <div className={`custom-arrows2 ${showArrows ? '' : 'hidden'}`}>
        <button className="custom-arrow2 prev" onClick={previous} >
          ‹
        </button>
        <button className="custom-arrow2 next" onClick={next}>
          ›
        </button>
      </div>
    );
  };
  
  export default Products;
  