import About from "./AboutUs/aboutUs";
import Contact from "./Contact/contact";
import EcoFriendly from "./EcoFriendly/ecofriendly";
import HomePage from "./HomePage/homePage";
import Navbar from "./Navbar/navbar";
import Offer from "./Offer/offer";
import Products from "./Products/products";

export default function Home() {
  return (
    <section className="w-full h-full">
      <Navbar />
      <div id="homePage"><HomePage /></div>
      <div id="about"><About /></div>
      <div id="product"><Products /></div>
      <div id="offer"><Offer /></div>
      <div id="ecofriendly"><EcoFriendly /></div>
      <div id="contact"><Contact /></div>
    </section>
  );
}
