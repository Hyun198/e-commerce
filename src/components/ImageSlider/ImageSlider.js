import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const ImageSlider = () => {

    const images = [
        require('../../assets/main2-1.avif'),
        require('../../assets/main2-2.avif'),
        require('../../assets/main2-3.avif'),
        require('../../assets/main2-4.avif'),
        require('../../assets/main2-5.avif'),
        require('../../assets/main2-6.avif'),
        require('../../assets/main2-7.avif'),
        require('../../assets/main2-8.avif'),
    ]



    return (
        <div>
            <Carousel
                className='carousel'
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={5000}
                infinite={true}
            >
                {images.map((image, index) => (
                    <div className="slider">
                        <img src={image} alt={index} />
                    </div>

                ))}

            </Carousel>;
        </div>
    )
}

export default ImageSlider