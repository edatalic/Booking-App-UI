import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max300/144320723.webp?k=4a482a7447edda9694fee18ee290ef2d8652852a9fcc7d6e00e87544c0312d2c&o=" alt="" className="fpImg" />
            <span className="fpName">XVA Art Hotel</span>
            <span className="fpCity">Bur Dubai, Dubai</span>
            <span className="fpPrice">Starting from 150$</span>
            <div className="fpRating">
                <button>8.7</button>
                <span> Fabulous </span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max300/466604748.webp?k=b9073aef752bd64cd0359348cf7c8fd70210ac6a40736f9163cb856ba3589ddc&o=" alt="" className="fpImg" />
            <span className="fpName">Villa 360</span>
            <span className="fpCity">Amsterdam</span>
            <span className="fpPrice">Starting from 450$</span>
            <div className="fpRating">
                <button>9.8</button>
                <span> Exceptional </span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square200/424861223.webp?k=d9fd499a066fbeef0b905911ca56d0a44886446cda559289124b2febfd010e68&o=" alt="" className="fpImg" />
            <span className="fpName">Napoli Da Vivere Suites</span>
            <span className="fpCity">Naples</span>
            <span className="fpPrice">Starting from 100$</span>
            <div className="fpRating">
                <button>8.8</button>
                <span> Fabulous </span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square200/268657131.webp?k=8bac8773d263c5f73a0f89d1cc903709352ae5423ce4c10dd2fa2494bc02308f&o=" alt="" className="fpImg" />
            <span className="fpName">Top Floor Colosseo</span>
            <span className="fpCity">Rome</span>
            <span className="fpPrice">Starting from 120$</span>
            <div className="fpRating">
                <button>9.5</button>
                <span> Exceptional </span>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProperties