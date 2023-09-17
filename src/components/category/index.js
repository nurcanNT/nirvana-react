import img1 from "../../img/React (1).gif";
import img2 from "../../img/React (2).gif";
import img4 from "../../img/React (3).gif";
function Category(){
    return(
        <section class="category" id="category">

        <h1 class="heading"> Shop By <span>Category</span></h1>
    
        <div class="box-container">
            <div class="box">
                <h3>Organic Tea</h3>
                <p>Upto 50% off</p>
                <img src={img1} alt=""/>
                <a href="#" class="btn">Shop Now</a>
            </div>
            <div class="box">
                <h3>Organic Shampo</h3>
                <p>Upto 44% off</p>
                <img src={img2} alt=""/>
                <a href="#" class="btn">Shop Now</a>
            </div>
            <div class="box">
                <h3>Organic Skin Care</h3>
                <p>Upto 12% off</p>
                <img src={img4} alt=""/>
                <a href="#" class="btn">Shop Now</a>
            </div>
        </div>
    </section>
    );
}

export default Category;