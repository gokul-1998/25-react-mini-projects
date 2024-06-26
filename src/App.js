import logo from "./logo.svg";
import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load more data";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QRCodeGenerator from "./components/qr-code-generator";
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";
import TabTest from "./components/custom-tabs/tab-test";
import ModalTest from "./components/custom-modal popup/modal-test";
import GithubProfileFinder from "./components/github-profile-finder";
import SearchAutocomplete from "./components/search-autocomplete-with-api";

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      {/* <Accordian/> */}

      {/* Random Color component */}
      {/* <RandomColor/> */}

      {/* Star Rating Component */}
      {/* <StarRating noOfStars={10}/> */}

      {/* Image Slider Component */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"}  limit={"10"} /> */}
   
      {/* Load more products component  */}
      {/* <LoadMoreData/> */}
   
      {/* Tree view component / menu UI / recursive navigation menu */}
      {/* <TreeView menus={menus}/> */}

      {/* QR code generator */}
      {/* <QRCodeGenerator/> */}


      {/* light  and  dark theme switch */}
      {/* <LightDarkMode />  */}

      {/* scroll indicator component */}
      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} /> */}
    
      {/* custom tabs component */}
      {/* <TabTest /> */}

        {/* Custom Modal Component  */}
        {/* <ModalTest/> */}

        {/* github profile finder */}
        {/* <GithubProfileFinder/> */}

        {/* search auto complete */}
        <SearchAutocomplete/>
    
    </div>
  );
}

export default App;
