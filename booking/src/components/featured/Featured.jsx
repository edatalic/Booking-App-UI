import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/971374.jpg?k=95b428839d92c523c81fc50dd7158a9073bbdf92df2a5166748b2d396976ae32&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Atina</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/976539.jpg?k=0a7263960952588dc71a60f1f9c2e738b5c0af9b2d9d3c3df79677d630b8a665&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Amsterdam</h1>
                <h2>532 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
             <img src="https://cf.bstatic.com/xdata/images/city/600x600/977242.jpg?k=72bfe23a6d7a496e0305b94bbb28ce197f3df2d6dd28986c3760a5f1c931664c&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Paris</h1>
                <h2>533 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured