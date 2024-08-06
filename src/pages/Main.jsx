import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import "../styles/Main.css";
import AOS from "aos";
AOS.init();
import "aos/dist/aos.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import veg_powder from "../assets/images/veg_powder.jpg";
import fruits1_powder from "../assets/images/fruits1_powder.jpg";
import leaf1_powder from "../assets/images/leaf1_powder.jpg";
import rose_powder from "../assets/images/rose_powder.jpg";
import fruits_poster from "../assets/images/fruits_poster.jpg";
import leaf_poster from "../assets/images/leaf_poster.jpg";
import veg_poster from "../assets/images/veg_poster.jpg";
import rose_poster from "../assets/images/rose_poster.jpg";
import beetroot_flakes from "../assets/images/beetroot_flakes.jpg";
import bitter_powder from "../assets/images/bitter_powder.jpg";
import ginger_nobg from "../assets/images/ginger_nobg.png";
import peas_powder from "../assets/images/peas_powder.jpg";
import mango_about from "../assets/images/mango_about.jpg";
import ginger from "../assets/images/ginger.jpg";
import carrot_flakes from "../assets/images/carrot_flakes.jpg";
import tomato_flakes from "../assets/images/tomato_flakes.jpg";
import lemon_powder from "../assets/images/lemon_powder.jpg";
import Company_logo from "../assets/images/Company_logo.png";
import apple_flakes from "../assets/images/apple_flakes.png";
import banana_flakes from "../assets/images/banana_flakes.jpg";
import pineapple_flakes from "../assets/images/pineapple_flakes.png";
import kiwi_powder from "../assets/images/kiwi_powder.png";
import mango_powder from "../assets/images/mango_powder.png";
import jack_flakes from "../assets/images/jack_flakes.png";
import orange_powder from "../assets/images/orange_powder.png";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import rose1 from "../assets/images/rose1.png";
import rose2 from "../assets/images/rose2.jpg";
import rose3 from "../assets/images/rose3.jpg";
import rose4 from "../assets/images/rose4.jpg";
import rose5 from "../assets/images/rose5.jpg";
import rose6 from "../assets/images/rose6.jpg";
import rose7 from "../assets/images/rose7.jpg";
import rose8 from "../assets/images/rose8.jpg";

import leaf1 from "../assets/images/leaf1.jpg";
import leaf2 from "../assets/images/leaf2.jpg";
import leaf3 from "../assets/images/leaf3.png";
import leaf4 from "../assets/images/leaf4.png";
import leaf5 from "../assets/images/leaf5.png";
import If_pow1 from "../assets/images/lf_pow1.jpg";
import If_pow2 from "../assets/images/lf_pow2.jpg";
import banner2 from "../assets/images/banner2.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import new_poster from "../assets/images/banner2.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
import back1 from "../assets/images/back1.jpg";
import back3 from "../assets/powders/back3.jpg";
import rose_back from "../assets/powders/rose_back.jpg";
import Frontlanding from "../component/Frontlanding";
import Products from "../component/Products";




const Main = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Change to 3000 for 3 seconds or 4000 for 4 seconds
    arrows: true,
  };

  useEffect(() => {
    const updateImageSource = () => {
      const smallScreenImages = document.querySelectorAll(
        ".small-screen-image"
      );
      smallScreenImages.forEach((image) => {
        if (window.innerWidth <= 700) {
          image.src = new_poster;
        } else {
          if (image.alt.includes("Vegetable Poster")) {
            image.src = veg_poster;
          } else if (image.alt.includes("Fruit Poster")) {
            image.src = fruits_poster;
          } else if (image.alt.includes("Leaf Poster")) {
            image.src = leaf_poster;
          } else if (image.alt.includes("Rose Poster")) {
            image.src = rose_poster;
          }
        }
      });
    };

    window.addEventListener("resize", updateImageSource);
    updateImageSource(); // Initial call

    return () => {
      window.removeEventListener("resize", updateImageSource);
    };
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server
    console.log("Form data submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };
  return (
    <>
      <Navbar />
      <Frontlanding />

      <section className="why_choose_us">
        <h1>Our Main Goal is to Ensure Our Customers are Happy</h1>
        <div className="why_container">
          <img
            src={mango_about}
            alt="Customer Satisfaction"
            data-aos="fade-right"
          />
          <div className="choose" data-aos="fade-left">
            <h2>Why Choose Us</h2>
            <div className="benefits">
              <ul>
                <li>
                  <span className="material-symbols-outlined">eco</span>
                  Premium Quality: Nutrient-rich dehydrated fruits and
                  vegetables, available in raw and powdered forms.
                </li>
                <li>
                  <span className="material-symbols-outlined">eco</span>
                  Versatile Applications: Ideal for food manufacturing, dietary
                  supplements, pet food, cosmetics, Ayurvedic medicine, and
                  instant foods.
                </li>
                <li>
                  <span className="material-symbols-outlined">eco</span>
                  Eco-Friendly: Advanced solar drying technology reduces
                  environmental impact and food waste.
                </li>
                <li>
                  <span className="material-symbols-outlined">eco</span>
                  Empowering Farmers: Supports sustainable agriculture and local
                  farming communities.
                </li>
                <li>
                  <span className="material-symbols-outlined">eco</span>
                  Global Reach: Robust export and import capabilities with ISO,
                  MSME, APEDA, FEDA, and FSSAI certification.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="variety_of_powders">
        <h1>Variety of Powders</h1>
        <div className="powders">
          <div className="powder_item">
            <img
              src={veg_powder}
              alt="Dehydrated Vegetable Powder"
              data-aos="flip-left"
              data-aos-delay="200"
            />
            <h3>Vegetable - flakes & powder</h3>
          </div>
          <div className="powder_item">
            <img
              src={fruits1_powder}
              alt="Dehydrated Fruit Powder"
              data-aos="flip-left"
              data-aos-delay="200"
            />
            <h3>Fruit - flakes & powder</h3>
          </div>
          <div className="powder_item">
            <img
              src={leaf1_powder}
              alt="Dehydrated Leaf Powder"
              data-aos="flip-left"
              data-aos-delay="200"
            />
            <h3>Leaf - flakes & powder</h3>
          </div>
          <div className="powder_item">
            <img
              src={rose_powder}
              alt="Dehydrated Rose Powder"
              data-aos="flip-left"
              data-aos-delay="200"
            />
            <h3>Rose - flakes & powder</h3>
          </div>
        </div>
      </section>

      <section style={{ marginTop: "100px" }}>
        <Slider {...settings}>
          <div>
            <div className="poster_sec">
              <img
                className="image1_veg small-screen-image"
                src={veg_poster}
                alt="Vegetable Poster"
              />
              <div className="row">
                <div className="column ">
                  <img src={tomato_flakes} alt="Tomato Flakes" />
                  <img src={beetroot_flakes} alt="Beetroot Flakes" />
                </div>
                <div className="column col1 ">
                  <img src={carrot_flakes} alt="Carrot Flakes" />
                  <img
                    src="https://i.pinimg.com/236x/40/40/4d/40404d7b8bd6aec520416b862f8926dd.jpg"
                    alt="Image 1"
                  />
                </div>
                <div className="column col1">
                  <img src={peas_powder} alt="Peas Powder" />
                  <img src={lemon_powder} alt="Lemon Powder" />
                  <img src={ginger} alt="ginger" />
                </div>
                <h3>
                  Dehydrated fruit powder is made by drying fresh fruits and
                  then grinding them into a fine powder.{" "}
                  <button>Know More</button>
                </h3>
              </div>
            </div>
          </div>

          <div>
            <div className="poster_sec">
              <img
                className="image1_veg small-screen-image"
                src={fruits_poster}
                alt="Fruit Poster"
              />
              <div className="row">
                <div className="column">
                  <img src={apple_flakes} alt="Apple Flakes" />
                  <img src={banana_flakes} alt="Banana Flakes" />
                </div>
                <div className="column col1">
                  <img src={jack_flakes} alt="Jackfruit Flakes" />
                  <img
                    src="https://i.pinimg.com/236x/40/40/4d/40404d7b8bd6aec520416b862f8926dd.jpg"
                    alt="Image 1"
                  />
                </div>
                <div className="column col1">
                  <img src={kiwi_powder} alt="Kiwi Powder" />
                  <img src={pineapple_flakes} alt="Pineapple Flakes" />
                  <img src={mango_powder} alt="Mango Powder" />
                </div>
                <h3>
                  Dehydrated fruit powder is made by drying fresh fruits and
                  then grinding them into a fine powder.{" "}
                  <button>Know More</button>
                </h3>
              </div>
            </div>
          </div>

          <div>
            <div className="poster_sec">
              <img
                className="image1_veg small-screen-image"
                src={leaf_poster}
                alt="Leaf Poster"
              />
              <div className="row">
                <div className="column">
                  <img src={leaf1} alt="Leaf 1" />
                  <img src={leaf2} alt="Leaf 2" />
                  <img src={leaf4} className="col1" alt="Leaf 4" />
                </div>
                <div className="column col1">
                  <img src={leaf4} alt="Leaf 4" />
                  <img src={leaf5} alt="Leaf 5" />
                  <img src={If_pow1} alt="Powder 1" />
                </div>
                <div className="column col1">
                  <img src={If_pow1} alt="Powder 1" />
                  <img src={If_pow2} alt="Powder" />
                  <img src={leaf1} alt="Leaf 1" />
                </div>
                <h3>
                  Dehydrated leaf powder is produced by drying and grinding
                  various types of edible leaves into a fine powder.
                  <button>Know More</button>
                </h3>
              </div>
            </div>
          </div>

          <div>
            <div className="poster_sec">
              <img
                className="image1_veg small-screen-image"
                src={rose_poster}
                alt="Rose Poster"
              />
              <div className="row">
                <div className="column">
                  <img src={rose1} alt="Rose 1" />
                  <img src={rose2} alt="Rose 2" />
                  <img src={rose3} className="col1" />
                </div>
                <div className="column col1">
                  <img src={rose4} alt="Rose 4" />
                  <img src={rose5} alt="Rose 5" />
                </div>
                <div className="column col1">
                  <img src={rose6} alt="Rose 6" />
                  <img src={rose7} alt="Rose 7" />
                  <img src={rose8} alt="Rose 8" />
                </div>
                <h3>
                  {" "}
                  Dehydrated rose powder is made by drying and grinding rose
                  petals into a fine powder.
                  <button>Know More</button>
                </h3>
              </div>
            </div>
          </div>
        </Slider>
      </section>

      {/* <section className="products-section">
        <h1>Health Benefits</h1>
        <Carousel
          responsive={responsive}
          showDots={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          containerClass="carousel-container"
          itemClass="carousel-item"
        >
          {pro.map((item, ind) => (
            <div className="quality" key={ind}>
              <img src={item.image} alt={`Product ${item.id}`} />
              <h3>{item.name}</h3>
              <p>{item.benefits}</p>
            </div>
          ))}
        </Carousel>
      </section> */}

      <Products />


<section className="enquiry-section">
  <div className="contact-info">
    <h1>Get a Call Back</h1>
    <p><strong>Address:</strong><br />Shree Hari Global Foods
GSTIN: 29AFIFS2138E1ZX
Plot No. 20/2, Chintamani Road, Mallimakanapura Village, Hoskote Taluk, Bengaluru 562122</p>
    <p><strong>Phone Number:</strong><br />+91 7338490894</p>
    <p><strong>Email Address:</strong><br />shreehariglobalfoods@gmail.com</p>
  </div>
  <div className="form-container">
    <h1>Enquiry Form</h1>
    <form className="enquiry-form" onSubmit={handleSubmit}>
      <div className="form-group">
       
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Company Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
      
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Business Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
       
        <textarea
          id="message"
          name="message"
          placeholder="Post your requirements"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</section>

<footer className="footer">
  <div className="footer-container">
    <div className="footer-logo">
      <img src={Company_logo} alt="Company Logo" />
      <h2>Shree Hari Global Foods</h2>
      <p>
        is one of the leading fresh fruit vegetables, spices and grains export
        Company from INDIA.
      </p>
      <div className="social-media1">
        <a href="https://www.instagram.com/shreehariglobalfoods/">
          <InstagramIcon />
        </a>
        <a href="https://twitter.com/shreehariglobalfoods">
          <TwitterIcon />
        </a>
        <a href="https://www.facebook.com/shreehariglobalfoods">
          <FacebookIcon />
        </a>
      </div>
    </div>
    <div className="footer-links">
      <h3>Quick Links</h3>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Our Company</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">Payment Policy</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Terms and Conditions</a>
        </li>
        <li>
          <a href="#">Cancellation and Refund</a>
        </li>
        <li>
          <a href="#">Shipping and Delivery Policy</a>
        </li>
      </ul>
    </div>
    <div className="footer-products">
      <h3>Products</h3>
      <ul>
        <li>
          <a href="#">Fruits Flakes & Powders</a>
        </li>
        <li>
          <a href="#">Vegetables Flakes & Powders</a>
        </li>
        <li>
          <a href="#">Leaf Flakes & Powders</a>
        </li>
        <li>
          <a href="#">Rose Flakes & Powders</a>
        </li>

      </ul>
    </div>
    <div className="footer-contact">
      <h3>Contact Us</h3>
      <p>
        16, Parmeshwar Park, Rail Nagar Main Road, Rajkot, Gujrat - 360001
      </p>
      <p>+91-8870292325</p>
      <p>
        <a href="mailto:shreehariglobalfoods@gmail.com">
          shreehariglobalfoods@gmail.com
        </a>
      </p>
    </div>
  </div>
  <div className="footer-bottom">
    <p>&copy; 2024 Shree Hari Global Foods. All rights reserved.</p>
  </div>
</footer>

    </>
  );
};

export default Main;
