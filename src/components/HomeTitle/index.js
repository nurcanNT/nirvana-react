import img1 from "../../img/11.png";
function HomeTitle (){
    return(
        <section className="home" id="home">

    <div className="image">
        <img src={img1} alt=""/>
    </div>

    <div className="content">
        <span>Fresh And Organic</span>
        <h3>your daily need products, healthy and delicious</h3>
        <a href="#" className="btn">Get Started</a>
    </div>

</section>
    );
}
export default HomeTitle;