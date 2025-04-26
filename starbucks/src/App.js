import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Comp/Navbar.jsx";
import Navbar2 from "./Comp/Navbar2.jsx";
import Home from "./Comp/Home.jsx";
import Menu from "./Comp/Menu.jsx";
import Rewards from "./Comp/Rewards.jsx";
import Gift from "./Comp/Gift.jsx";
import SignIn from "./Comp/SignIn.jsx";
import Join from "./Comp/Join.jsx";
import Logo from "./Comp/Logo.jsx";
import Footer from "./Comp/Footer.jsx";
import OurCompany from "./Comp/OurCompany.jsx";
import ScrollToTop from "./Comp/ScrollToTop.jsx";
import OurCoffee from "./Comp/OurCoffee.jsx";
import Ethics from "./Comp/Ethics.jsx";
import Governance from "./Comp/Governance.jsx";
import ContactUs from "./Comp/ContactUs.jsx";
import Featured from "./Comp/Featured.jsx";
import Previous from "./Comp/Previous.jsx";
import Favorites from "./Comp/Favorites.jsx";
import HotCoffee from "./Comp/HotCoffee.jsx";
import HotTea from "./Comp/HotTea.jsx";
import Refreshers from "./Comp/Refreshers.jsx";
import IcedEnergy from "./Comp/IcedEnergy.jsx";
import Breakfast from "./Comp/Breakfast.jsx";
import ShoppingBag from "./Comp/ShoppingBag.jsx";
import CaffeMisto from "./Comp/CaffeMisto.jsx";
import FeaturedBlonde from "./Comp/FeaturedBlonde.jsx";
import MenuNav2 from "./Comp/MenuNav2.jsx";
import FindStore from "./Comp/FindStore.jsx";
import Delivery from "./Comp/Delivery.jsx";
import GiftCard from "./Comp/GiftCard.jsx";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/about-us/" element={<OurCompany />} />
        <Route path="/coffee/" element={<OurCoffee />} />
        <Route
          path="/about-us/business-ethics-and-compliance/"
          element={<Ethics />}
        />
        <Route
          path="/about-us/corporate-governance/"
          element={<Governance />}
        />
        <Route path="/contact/" element={<ContactUs />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/featured" element={<Featured />} />
        <Route path="/menu/previous" element={<Previous />} />
        <Route path="/menu/favorites" element={<Favorites />} />
        <Route path="menu/drinks/hot-coffee" element={<HotCoffee />} />
        <Route path="menu/drinks/hot-tea" element={<HotTea />} />
        <Route path="/menu/drinks/refreshers" element={<Refreshers />} />
        <Route path="/menu/drinks/iced-energy" element={<IcedEnergy />} />
        <Route path="menu/food/breakfast" element={<Breakfast />} />
        <Route
          path="menu/at-home-coffee/shopping-bag"
          element={<ShoppingBag />}
        />
        <Route path="menu/product/478/hot" element={<CaffeMisto />} />
        <Route path="menu/product/2124786/hot" element={<FeaturedBlonde />} />
        <Route path="account/signin" element={<SignIn />} />
        <Route path="/store-locator" element={<FindStore />} />
        <Route path="/store-locator/delivery" element={<Delivery />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/gift/00000571" element={<GiftCard />} />
        <Route path="/account/create" element={<Join />} />
      </Routes>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
