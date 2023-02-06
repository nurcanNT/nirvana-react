import {FaHeart, FaShare, FaEye, FaStar, FaStarHalfAlt} from "react-icons/fa"
import OrganicTea from "./OrganicTea";
import OrganicShampo from "./OrganicShampo";
import OrganicSkinCare from "./OrganicSkinCare";

function Product () {
    return(
        <section className="product" id="product">
    <h1 className="heading">Organic Tea <span>products</span></h1>
    <OrganicTea/>
    <br/>
    <br/>
    <h1 className="heading">Organic Shampo <span>products</span></h1>
    <OrganicShampo/>
    <br/>
    <br/>
    <h1 className="heading">Organic Skin Care <span>products</span></h1>
    <OrganicSkinCare/>
    <br/>

</section>
    );
}

export default Product;