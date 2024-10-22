import Header from "./components/Header";
import Hero from "./components/Hero";
import Sale from "./components/Sale";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Management from "./components/Management";
function Homepage(){
  return(
    <div>
     <Header/>
     <Hero/>
     <Sale/>
     <Products/>
     <Management />
     <Footer/>
    </div>
  )
}

export default Homepage;