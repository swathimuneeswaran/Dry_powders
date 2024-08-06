import React, { useEffect, useState } from 'react';
import back3 from "../assets/powders/back3.jpg";
import rose_back from "../assets/powders/rose_back.jpg";
import fruit_back from "../assets/powders/fruit_back.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../styles/Main.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const Frontlanding = () => {
    const [showArrows, setShowArrows] = useState(true);

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Animation duration in milliseconds

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
        <section style={{ marginTop: "100px" }} className="main_section">
            <Carousel
                responsive={responsive}
                showDots={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                arrows={false}
                customButtonGroup={<CustomButtonGroup showArrows={showArrows} />}
            >
                <div className="main_back" style={{ position: "relative", width: "100%", height: "670px", overflow: "hidden" }} data-aos="fade-up">
                    <img
                        src={back3}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        alt="Background"
                    />
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
                </div>

                <div className="main_back" style={{ position: "relative", width: "100%", height: "670px", overflow: "hidden" }} data-aos="fade-right">
                    <img
                        src={fruit_back}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        alt="Background"
                    />
                    <div className="content" style={{ backdropFilter: "blur(40px)" }}>
                        <h1 >
                        Dehydrated Fruits <br></br> Powder & Flakes
                        </h1>
                        <h3 style={{color:"white"}}>
                        Experience the natural taste and nutrition of our premium dehydrated fruit powders. Perfect for smoothies, baking, and cooking, our powders offer a convenient way to enjoy fruits year-round.
                        </h3>
                        <button>Know More</button>
                    </div>
                </div>

                <div className="main_back" style={{ position: "relative", width: "100%", height: "670px", overflow: "hidden" }} data-aos="fade-right">
                    <img
                        src="https://png.pngtree.com/thumb_back/fw800/background/20231105/pngtree-lush-green-texture-a-background-of-fresh-spinach-leaves-and-grass-image_13726415.png"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        alt="Background"
                    />
                    <div className="content" style={{ backdropFilter: "blur(10px)" }}>
                        <h1>
                        Dehydrated Leaves <br></br> Powder & Flakes
                        </h1>
                        <h3>
                        Discover the rich flavors and nutritional benefits of our premium leaf dehydrated powders and flakes. Perfect for enhancing your dishes, our products offer a convenient way to incorporate the goodness of leafy greens into your meals.
                        </h3>
                        <button>Know More</button>
                    </div>
                </div>

                <div className="main_back" style={{ position: "relative", width: "100%", height: "670px", overflow: "hidden" }} data-aos="fade-right">
                    <img
                        src={rose_back}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        alt="Background"
                    />
                    <div className="content" style={{ backdropFilter: "blur(40px)" }}>
                        <h1>
                        Dehydrated Rose <br></br> Powder & Flakes
                        </h1>
                        <h3 style={{color:"white"}}>
                        Experience the enchanting aroma and health benefits of our premium rose dehydrated powders and flakes. Ideal for culinary uses and natural remedies, our products add a touch of elegance and wellness to your dishes and beverages.
                        </h3>
                        <button>Know More</button>
                    </div>
                </div>
            </Carousel>
        </section>
    );
};

const CustomButtonGroup = ({ next, previous, showArrows }) => {
    return (
        <div className={`custom-arrows ${showArrows ? '' : 'hidden'}`}>
            <button className="custom-arrow prev" onClick={previous}>
                ‹
            </button>
            <button className="custom-arrow next" onClick={next}>
                ›
            </button>
        </div>
    );
};

export default Frontlanding;
