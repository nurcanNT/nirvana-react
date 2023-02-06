import img1 from "../../img/12.png";
import img2 from "../../img/13.png";
import img3 from "../../img/14.png";
import img4 from "../../img/15.png";
function Category(){
    return(
        <section class="category" id="category">

        <h1 class="heading"> Shop By <span>Category</span></h1>
    
        <div class="box-container">
            <div class="box">
                <h3>Vegitables</h3>
                <p>Upto 50% off</p>
                <img src={img1} alt=""/>
                <a href="#" class="btn">Shop Now</a>
            </div>
            <div class="box">
                <h3>Juice</h3>
                <p>Upto 44% off</p>
                <img src={img2} alt=""/>
                <a href="#" class="btn">Shop Now</a>
            </div>
            <div class="box">
                <h3>Fruite</h3>
                <p>Upto 12% off</p>
                <img src={img4} alt=""/>
                <a href="#" class="btn">Shop Now</a>
            </div>
        </div>
    </section>
    );
}

export default Category;