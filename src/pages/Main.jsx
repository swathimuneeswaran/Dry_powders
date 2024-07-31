import React from "react";
import Navbar from "../component/Navbar";
import "../styles/Main.css";
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
import peas_powder from "../assets/images/peas_powder.jpg";
import ginger from "../assets/images/ginger.jpg";
import carrot_flakes from "../assets/images/carrot_flakes.jpg";
import tomato_flakes from "../assets/images/tomato_flakes.jpg";
import lemon_powder from "../assets/images/lemon_powder.jpg";

import apple_flakes from "../assets/images/apple_flakes.png";
import banana_flakes from "../assets/images/banana_flakes.jpg";
import pineapple_flakes from "../assets/images/pineapple_flakes.png";
import kiwi_powder from "../assets/images/kiwi_powder.png";
import mango_powder from "../assets/images/mango_powder.png";
import jack_flakes from "../assets/images/jack_flakes.png";
import orange_powder from "../assets/images/orange_powder.png";

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



const Main = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,  // Change to 3000 for 3 seconds or 4000 for 4 seconds
    arrows: true,
  };
  return (
    <>
      <Navbar />
      <section className="main_section">
        <div className="main_back">
          <div className="content">
            <h1>
              Purely Natural,
              <br /> Perfectly Powdered
            </h1>
            <h3>
              Unlock the pure flavors and benefits of nature's best with our
              premium dry powders. From vibrant fruits to nutritious vegetables
              and fragrant flowers, we've got you covered.
            </h3>
            <button>Know More</button>
          </div>
          <img
            className="image_fruits"
            src="https://i.pinimg.com/564x/6b/47/71/6b4771ba8f59ad439c7344b8ba0ffcbe.jpg"
            alt="Fruits"
          />
          <img src="https://i.pinimg.com/474x/01/a0/50/01a050a72b0c67c410135e5a6b4afdf0.jpg" />
        </div>
      </section>

      <section className="why_choose_us">
        <h1>Our Main Goal is to Ensure Our Customers are Happy</h1>
        <div className="why_choose">
          <img
            src="https://dam.buhlergroup.com/rendition/e050e9611a094dfe8396852ab4c6961b/-FJPG-TwebHeader_1x1-S1024x1024"
            alt="Customer Satisfaction"
          />
          <div className="choose">
            <h2>Why Choose Us</h2>
            <div className="benefits">
              <div className="benefit">
                <span className="material-symbols-outlined">
                  local_shipping
                </span>
                <div className="box">
                  <h4>Fast Shipping</h4>
                  <p>
                    We ensure quick and safe delivery of your orders to your
                    doorstep.
                  </p>
                </div>
              </div>
              <div className="benefit">
                <span className="material-symbols-outlined">cardiology</span>
                <div className="box">
                  <h4>Heart-Healthy Products</h4>
                  <p>
                    Our products are designed to promote a healthy lifestyle and
                    well-being.
                  </p>
                </div>
              </div>
              <div className="benefit">
                <span className="material-symbols-outlined">high_quality</span>
                <div className="box">
                  <h4>High Quality</h4>
                  <p>
                    We offer premium quality products made from the finest
                    ingredients.
                  </p>
                </div>
              </div>
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
              height="300"
            />
            <h3>Dehydrated vegetable - flakes & powder</h3>
          </div>
          <div className="powder_item">
            <img
              src={fruits1_powder}
              alt="Dehydrated Fruit Powder"
              height="300"
            />
            <h3>Dehydrated fruit - flakes & powder</h3>
          </div>
          <div className="powder_item">
            <img src={leaf1_powder} alt="Dehydrated Leaf Powder" />
            <h3>Dehydrated leaf - flakes & powder</h3>
          </div>
          <div className="powder_item">
            <img src={rose_powder} alt="Dehydrated Rose Powder" />
            <h3>Dehydrated rose - flakes & powder</h3>
          </div>
        </div>
      </section>
       
       <section style={{marginTop:"100px"}}>
      <Slider {...settings} >
      <div >
        <div className="poster_sec">
          <img className="image1_veg" src={veg_poster} alt="Vegetable Poster" />
          <div className="row">
            <div className="column">
              <img src={tomato_flakes} alt="Tomato Flakes" />
              <img src={beetroot_flakes} alt="Beetroot Flakes" />
            </div>
            <div className="column">
              <img src={carrot_flakes} alt="Carrot Flakes" />
              <img
                src="https://i.pinimg.com/236x/40/40/4d/40404d7b8bd6aec520416b862f8926dd.jpg"
                alt="Image 1"
              />
            </div>
            <div className="column">
              <img src={peas_powder} alt="Peas Powder" />
              <img src={lemon_powder} alt="Lemon Powder" />
              <img src={ginger} alt="ginger" height="255" />
              
            </div>
            <h3>Dehydrated vegetable powder is made by removing the water content from fresh vegetables through various drying processes, resulting in a concentrated form of the vegetables in powder form. Here are some key points about dehydrated vegetable powder            <button>Know More</button></h3>
           
          </div>
        </div>
      </div>

      <div>
        <div className="poster_sec">
          <img className="image1_veg" src={fruits_poster} alt="Fruit Poster" height="700" />
          <div className="row">
            <div className="column">
              <img src={apple_flakes} alt="Apple Flakes" />
              <img src={banana_flakes} alt="Banana Flakes" height="300" />
              <img src={orange_powder} height="200" />
            </div>
            <div className="column">
              <img src={jack_flakes} alt="Jackfruit Flakes" />
              <img
                src="https://i.pinimg.com/236x/40/40/4d/40404d7b8bd6aec520416b862f8926dd.jpg"
                alt="Image 1"
                height="550"
              />
            </div>
            <div className="column">
              <img src={kiwi_powder} alt="Kiwi Powder" />
              <img src={pineapple_flakes} alt="Pineapple Flakes" height="255" />
              <img src={mango_powder} alt="Mango Powder" height="255" />
            </div>
            <h3>Dehydrated fruit powder is made by drying fresh fruits and then grinding them into a fine powder. This process preserves the flavor, color, and most of the nutrients of the fresh fruit while extending its shelf life. Here's a detailed overview of dehydrated fruit powder<button>Know More</button></h3>
          </div>
        </div>
      </div>

      <div>
        <div className="poster_sec">
          <img className="image1_veg" src={leaf_poster} alt="Leaf Poster" height="700" />
          <div className="row">
            <div className="column">
              <img src={leaf1} alt="Leaf 1" />
              <img src={leaf2} alt="Leaf 2" height="300" />
              <img src={leaf3} height="270" />
            </div>
            <div className="column">
              <img src={leaf4} alt="Leaf 4" />
              <img src={leaf5} alt="Leaf 5" height="550" />
            </div>
            <div className="column">
              <img src={If_pow1} alt="Powder 1" />
              <img src={If_pow2} alt="Powder 2" height="255" />
              <img src={leaf1} alt="Leaf 1" height="300" />
            </div>
            <h3>Dehydrated leaf powder is produced by drying and grinding various types of edible leaves into a fine powder. This process preserves the nutritional benefits and flavor of the fresh leaves while significantly extending their shelf life. Here’s an in-depth look at dehydrated leaf powder<button>Know More</button></h3>
          </div>
        </div>
      </div>

      <div>
        <div className="poster_sec">
          <img className="image1_veg" src={rose_poster} alt="Rose Poster" height="700" />
          <div className="row">
            <div className="column">
              <img src={rose1} alt="Rose 1" />
              <img src={rose2} alt="Rose 2" height="300" />
              <img src={rose3} height="190" />
            </div>
            <div className="column">
              <img src={rose4} alt="Rose 4" />
              <img src={rose5} alt="Rose 5" height="530" />
            </div>
            <div className="column">
              <img src={rose6} alt="Rose 6" />
              <img src={rose7} alt="Rose 7" height="255" />
              <img src={rose8} alt="Rose 8" height="220" />
            </div>
            <h3> Dehydrated rose powder is made by drying and grinding rose petals into a fine powder. This process preserves the aromatic, nutritional, and therapeutic properties of the roses. Here’s an in-depth look at dehydrated rose powder<button>Know More</button></h3>
          </div>
        </div>
      </div>
    </Slider>
    </section>

    <section >
      <h1 style={{textAlign:"center",fontSize:"39px",marginTop:"80px"}}>Health Benefits</h1>
      <div className="quality">
      <div>
        <h3>Health Benefits of Dehydrated Powder</h3>
        <p>Dehydrated fruit, vegetable, leaf, and rose powders are nutrient-dense, providing essential vitamins, minerals, and antioxidants that support immune health and overall wellness. They also offer anti-inflammatory and digestive benefits, promoting a healthy body and skin.</p>
      </div>
      <img src="https://img.ws.mms.shopee.ph/sg-11134201-7rblq-llujjlzattuie5" />
      <img src="https://arealcc.com/images/products/1707480342.webp" />
      <img src="https://www.osheaherbals.com/cdn/shop/articles/benefits-of-rose-powder-for-skin.jpg?v=1702476662" />
      </div>
    </section>


    <section className="newsletter-section">
  <div className="overlay">
    <h2>Unlock the Power of Nature with Our Dehydrated Powders. Join Now and Save!</h2>
    <input type="text" placeholder="Enter your email" />
    <button>Send Email</button>
  </div>
  <img src="https://i0.wp.com/choicetitle.com/wp-content/uploads/2023/09/AdobeStock_gold-pineapples-black-right-side-1.jpg?resize=1180%2C530&ssl=1" alt="Newsletter Banner" />
</section>


<footer className="footer">
  <div className="footer-container">
    <div className="footer-logo">
      <h2>Shree Hari Global Foods</h2>
      <p>is one of the leading fresh fruit vegetables, spices and grains export Company from INDIA.</p>
    </div>
    <div className="footer-links">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Our Company</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Payment Policy</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms and Conditions</a></li>
        <li><a href="#">Cancellation and Refund</a></li>
        <li><a href="#">Shipping and Delivery Policy</a></li>
      </ul>
    </div>
    <div className="footer-contact">
      <h3>Contact Us</h3>
      <p>16, Parmeshwar Park, Rail Nagar Main Road, Rajkot, Gujrat - 360001</p>
      <p>+91-8870292325</p>
      <p><a href="mailto:shreehariglobalfoods@gmail.com">shreehariglobalfoods@gmail.com</a></p>
    </div>
    <div className="footer-social">
      <h3>Follow Us</h3>
     
    </div>
  </div>
</footer>


    </>
  );
};

export default Main;
