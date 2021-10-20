import React from 'react'
import "./Home.css"; 
import Product from './Product';
import {AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail} from "react-icons/ai"; 

function Home() {
    return (
        <div className = "home">
            <div className = "home__container">
                <div className = "home__top">
                    <div className = "home__top__intro">
                        <p>Get your favourite indoor plants delivered to you free of cost in less than 2 business days with flora premium.</p>
                        <button className = "home__top__intro__button">View Plans</button>
                    </div>
                    <img className = "home__top__image" src = "https://m.media-amazon.com/images/I/71gEN2gM4CL._AC_SL1498_.jpg" />
                </div>
                <div className = "home__bottom">
                    <div className = "home__row">
                        <Product 
                        id="12321341"
                        title="Money tree Pachira aquatica: Bright, indirect lights. Thrives in fluorescent lighting perfect for apartment living."
                        price={11.96}
                        rating={5}
                        image="https://atlas-content-cdn.pixelsquid.com/stock-images/house-plant-flower-pot-0M3OKRF-600.jpg" />
                        <Product
                        id = "4953904"
                        title = "Fiddle leaf fig Ficus lyrata: Great decor for a boring corner. With its glossy, dark leaves, it acts as an extra statement piece to any room."
                        price={15.32}
                        image="https://media.istockphoto.com/photos/decorative-banana-plant-in-stone-marble-vase-isolated-on-white-3d-picture-id1144381259?k=20&m=1144381259&s=612x612&w=0&h=2uFbUJ0GnnNcsShJVda7cHD_in7I84pt_3hOolHQz_k="
                        rating = {4}
                        />
                    </div>
                    <div className = "home__row">
                        <Product 
                        id = "32532545"
                        title = " Rubber plant Ficus elastica: The rubber plant is the less finicky sister of the fiddle leaf"
                        price={18.00}
                        image="https://hubpng.com/public/uploads/preview/plant-indoor-png-11576005856ktbnli1kly.png"
                        rating = {3}
                        />
                        <Product 
                        id="23445930"
                        title=" Dracaena corn plant Dracaena massangeana: Brighten up your living space"
                        price={10.23}
                        rating={5}
                        image="https://media.gq.com/photos/60f852ff8e27b012b1e1c12e/master/w_2000,h_1333,c_limit/Snake-floor-plant-with-sandstone-planter.jpg"
                        />
                        <Product 
                        id="3254354345"
                        title="Bamboo palm Chamaedorea seifrizii: We love some tropical vibes."
                        price={13.45}
                        rating={4}
                        image="data:image/jpeg;base64,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"        
                        />
                    </div>
                    <div className = "home__row">
                        <Product 
                        id="90829332"
                        title="Monstera Monstera deliciosa: Monstera is iconic from many 70’s photographs, album covers, or advertisements."
                        price={15.65}
                        rating={4}
                        image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-indoor-plants-dracaena-1603380735.png?resize=480:*"
                        />

                        <Product 
                        id="90829332"
                        title="Snake plant Dracaena trifasciata: Also known as Sansevieria, the snake plant can easily adapt to wherever you place it."
                        price={18.75}
                        rating={4}
                        image="https://cdn.shopify.com/s/files/1/0966/1072/products/root-bridges-foliage-plants-white-stem-aglaonema-indoor-plant-17861875666_600x600_crop_center.jpg?v=1606807544"
                        /> 
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Home

