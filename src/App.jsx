import "./App.css";
import Footer from "./component/Footer/footer";
import HeroSection from "./component/body/heroSection";
import Header from "./component/header/header";
import Navbar from "./component/header/navbar";
import MainSlider from "./component/slider/mainSlider";

function App() {
  return (
    <>
      <div className="flex flex-col gap-4 bg-white">
        <Header />
        <MainSlider />
        <HeroSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
