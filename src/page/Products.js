
import ListProducts from "../components/Content/ListProducts/ListProducts";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

function Products({data}) {
    return ( 
        <div>
            <Navbar/>
            <ListProducts data={data}/>
            <Footer/>
        </div>
     );
}

export default Products;