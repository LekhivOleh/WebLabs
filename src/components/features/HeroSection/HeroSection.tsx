import React from 'react';
import "./HeroSection.css";
import LampCoolPhoto from "./assets/images/lamp_store_cool_photo.svg";

const HeroSection = () => {
    return (
        <section className={"hero_section"}>
            <img className={"hero_lamp_photo"} src={LampCoolPhoto} alt={"cool_photo_of_lamp"} />
            <div className={"hero_text_box"}>
                <h1>We provide the best quality possible for dirt cheap!</h1>
                <p>Our company's lamps designs ensure its longevity, long-lasting service and nice warm light.
                    It's made buy our highly-skilled professionals that provide you with the best product on
                    the market, while still being affordable and stylish. On this website you can choose between
                    all of our models as long as they are available in stock. Our lamps are made with love to serve you for life.</p>
            </div>
        </section>
    );
};

export default HeroSection;