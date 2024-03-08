import "./searchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square200/143563156.webp?k=4b78ef7cee8e2548c9e285a886b3ebd3343b9cc0301f3c386df0f21241fb2f7c&o=" alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Hostal La Bañezana</h1>
            <span className="siDistance">200 m from centre</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">
               Hostal with Air conditioning
            </span>
            <span className="siFeatures">
                Beds: 1 double or 2 singles
            </span>
            <span className="siCancelOp">Free cancellation</span>
            <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Good</span>
                <button>7.5</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">$2,370</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className="siCheckButton">See availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem
