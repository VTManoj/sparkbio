import Image from "next/image";
import  About  from "./AboutUs/aboutUs";
import HomePage from "./HomePage/homePage";
import Products from "./Products/products";

export default function Home() {
  return (
    <section className="w-full h-full">

      <HomePage />
      <Products />
      <About/>
    </section>
  );
}
