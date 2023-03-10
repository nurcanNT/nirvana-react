import img1 from "../../img/19.png";
import img2 from "../../img/111.png";
function Banner (){
    return(
        <section className="banner-container">

    <div className="banner">
        <img src={img1} alt="" />
        <div className="content">
            <h3>Special Offer</h3>
            <p>Upto 45% off</p>
            <a href="#" className="btn">Check Out</a>
        </div>
    </div>
    <div className="banner">
        <img src={img2} alt=""/>
        <div className="content">
            <h3>Limited Offer</h3>
            <p>Upto 50% off</p>
            <a href="#" className="btn">Check Out</a>
        </div>
    </div>
</section>
    );
}
export default Banner;