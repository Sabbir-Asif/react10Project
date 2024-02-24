const HeroSection = () => {
    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                </p>
            </div>

            <div className="hero-button">
                <button>Shop Now</button>
                <button className="secondary-button">Category</button>
            </div>

            <div className="shopping">
                <p>Also Available On</p>
            </div>

            <div className="brand-icons">
                <img src="/images/flipkart.png" alt="amazon-logo" />
                <img src="/images/amazon.png" alt="flipkart-logo" />
            </div>
            <div className="hero-image">
                <img src="/images/shoe_image.png" alt="shoe-image" />
            </div>

        </main>
    );
};

export default HeroSection;