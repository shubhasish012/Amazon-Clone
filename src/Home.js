import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/IStillBelieve/ISTIL_2021_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB659630236_.jpg"
                    alt="" />

                <div className="home__row">
                    <Product id="67754"
                     title="Ozeri ZK14-S Pronto Digital Multifunction Kitchen and Food" price={29.99}
                     image="https://m.media-amazon.com/images/I/51Eg5-MaOJL._AA210_.jpg"
                     rating={5}/>
                    <Product id="26832"
                     title="Ozeri ZK14-S Pronto Digital Multifunction Kitchen and Food" price={29.99}
                     image="https://m.media-amazon.com/images/I/51Eg5-MaOJL._AA210_.jpg"
                     rating={5}/>

                </div>
                <div className="home__row">
                    <Product id="42666"
                        title="Amazon Basics Silicone, Non-Stick, Food Safe Baking Mat - Pack of 2"
                        price={11.22} image="https://m.media-amazon.com/images/I/51imXcMRg0L._AA210_.jpg"
                        rating={3} />
                    <Product id="36534"
                        title="Amazon Basics Silicone, Non-Stick, Food Safe Baking Mat - Pack of 2"
                        price={11.22} image="https://m.media-amazon.com/images/I/51imXcMRg0L._AA210_.jpg"
                        rating={3} />
                    <Product id="48045"
                        title="Amazon Basics Silicone, Non-Stick, Food Safe Baking Mat - Pack of 2"
                        price={11.22} image="https://m.media-amazon.com/images/I/51imXcMRg0L._AA210_.jpg"
                        rating={3} />

                </div>
                <div className="home__row">
                    <Product id="30931"
                        title="Bigox Face Mask 50Pcs Masks" price={7.21}
                        image="https://images-na.ssl-images-amazon.com/images/I/41-PsU-tbfL._SCLZZZZZZZ___AA210_.jpg"
                        rating={4} />
                </div>
            </div>
        </div>
    )
}

export default Home
