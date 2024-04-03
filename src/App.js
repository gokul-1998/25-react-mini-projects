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
      <QRCodeGenerator/>

    </div>
  );
}

export default App;
