
function Footer(){ 
  return (
  <>
    <section className="deal" id="deal">

        <div className="content">
            <h3 className="title">Deal of the day</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex soluta dolor error dignissimos maiores totam porro provident, ut perspiciatis officiis, eum delectus placeat quia, illo quidem nisi aut perferendis esse.
            Fuga est quaerat culpa provident libero ab, qui amet repellat animi quas magni et ipsa deleniti reprehenderit quasi dignissimos beatae earum inventore laborum? Repudiandae quibusdam totam laboriosam temporibus, inventore quo!</p>

            <div className="count-down">
                <div className="box">
                    <h3 id="day">00</h3>
                    <span>day</span>
                </div>
                <div className="box">
                    <h3 id="hour">00</h3>
                    <span>hour</span>
                </div>
                <div className="box">
                    <h3 id="minute">00</h3>
                    <span>minute</span>
                </div>
                <div className="box">
                    <h3 id="second">00</h3>
                    <span>second</span>
                </div>
            </div>

            <a href="#" className="btn">Check The Deal</a>
        </div>
    </section>
    </>
        
  );
}

export default Footer;