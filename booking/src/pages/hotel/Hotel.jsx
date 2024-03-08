import "./hotel.css"
import Navbar from "../../components/navbar/Navbar.jsx";
import Header from "../../components/header/Header.jsx"
import MailList from "../../components/mailList/MailList.jsx"
import Footer from "../../components/footer/Footer.jsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/143563156.jpg?k=9ba490ab1c3b7938f951ce858e604f0e181a752678526a4f269f486b7b6e2e7d&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/143563220.jpg?k=2f87e181e20e7e8e9d7ca365c628851311f8170cacff08373cdfc6dcf328be9d&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/143563832.jpg?k=9acd07c1622fbd1bee6497cbec31d842b6b309197df3bf00d9a628c3c50dd890&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/143563187.jpg?k=2ad4fe8f8648a2ada548adce21cdf18299d887d4dc33f237dbdb305524fa9d71&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/143563121.jpg?k=5d154a267588647b7172328bb10154e20a9a6a2209f8f22847d66b250f8b5db4&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/143563891.jpg?k=83fc27e9ad110bf283e6438b44f93876f97fddd0a06ba4da830f58c2d1245425&o=&hp=1"
    }
  ]

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  }

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1
    }

    setSlideNumber(newSlideNumber);
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)} />
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("l")} />
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("r")} />
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Hostal La Bañezana</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Cruz, 26, 1 Izquierda, Centro, 28012 Madrid, Spain </span>
          </div>
          <span className="hotelDistance">
            Excellent Location - 200m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) =>(
              <div className="hotelImgWrapper">
                <img onClick={() => handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Madrid</h1>
              <p className="hotelDesc">
                Hostal La Bañezana is just 200 metres from Madrid’s famous Puerta del Sol Square. It offers a 24-hour reception and rooms with flat-screen satellite TV and free Wi-Fi. The rooms at the La Bañezana feature tiled floors, central heating and a fan. Each one has a private bathroom, and some have a private balcony and attractive murals. You can walk to the Reina Sofía Museum and Atocha Train Station in 10 minutes. Full of bars and restaurants, the charming districts of Chueca and La Latina are also both within a 10-minute walk.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 1-night stay!</h1>
              <span>
                Situated in the real heart of Madrid, this property has an excellent location score of 9.2
              </span>
              <h2> 
                <b>$110</b> (1 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel