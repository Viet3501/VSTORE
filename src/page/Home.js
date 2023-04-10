import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Slider from "../components/Slider/Slider";


function Home({data}) {
    return ( 
        <div>
            <Navbar/>
            <div>
                <Slider/>
                <Content data={data}/>
            </div>
            <Footer/>   
        </div>
     );
}

export default Home;