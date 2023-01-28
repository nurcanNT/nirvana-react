import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
function Location (){
    return(
        <>
         <section className="footer">

<div className="box-container">

    <div className="box">
        <a href="#" className="logo"> <i className="fas fa-shopping-basket"></i>Nirvanna</a>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas doloribus vitae, id dolor exercitationem unde non, quae quidem facilis dolores mollitia accusantium aliquid voluptatibus magni ducimus qui.</p>
        <div className="share">
            <a href="#" className="btn fab fa-facebook-f"> <FaFacebook/></a>
            <a href="#" className="btn fab fa-twitter"> <FaTwitter/></a>
            <a href="#" className="btn fab fa-instagram"> <FaInstagram/></a>
            <a href="#" className="btn fab fa-linkedin"> <FaLinkedinIn/></a>
        </div>
    </div>
 
    <div className="box">
    <h3>Our Location</h3>
    <div className="links">
        <a href="#">Turkey</a>
        <a href="#">İndia</a>
        <a href="#">USA</a>
        <a href="#">France</a>
        <a href="#">Italy</a>
    </div>
</div>
<div className="box">
    <h3>Quick Links</h3>
    <div className="links">
        <a href="#">Home</a>
        <a href="#">Category</a>
        <a href="#">Product</a>
        <a href="#">Deal</a>
        <a href="#">Contact</a>
    </div>
</div>
<div className="box">
    <h3>Download App</h3>
    <div className="links">
        <a href="#">Google Play</a>
        <a href="#">Window XP</a>
        <a href="#">App Store</a>
    </div>
</div>
</div>

<h1 className="credit"> Created By <span> Mrs. Web Designer</span> | All Rights Reserved!</h1>

</section>
        </>
    );
}

export default Location;